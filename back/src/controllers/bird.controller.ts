import express from 'express'
import BirdModel from '../models/bird'
import { imageUpload } from '../fileUpload'
import BirdImageModel from '../models/birdImages'

const uploader = new imageUpload();

const fs = require('fs');
const path = require('path');



export class BirdController{

    getAllBirds = (req: express.Request, res: express.Response) => {
      
      console.log("u bird controlleru");

        BirdModel.find({}, (err, birds)=>{
          if(err) console.log(err)
          else {
            res.json(birds)
          }
      })
  
    }

    deleteImage=(req: express.Request, res: express.Response) =>{ 

      console.log("Pozvana");
      const image = req.body.image;
      const absolutePath = path.join(__dirname, '../../src/uploads', image);
      
  
      
      fs.unlink(absolutePath, (error) => {
        if (error) {
          console.error('Error deleting image:', error);
         // res.status(500).json({ message: 'Failed to delete image' });
        } else {
          console.log('Image deleted successfully.');
         // res.status(200).json({ message: 'Image deleted successfully' });
        }
      });
    }

    uploadImages = (req: express.Request, res: express.Response) => {    

      uploader.uploadImage.array('images', 5)(req, res, (err) => {
        if (err) {
          console.log("Error uploading images");
          console.log(err);
          return res.status(500).json({ error: "Error uploading images" });
        }
        // Images were uploaded successfully and before i return status do something here
        return res.status(200).json({ message: "Images uploaded successfully" });
      });
    };
    
    updateBirdImages = (req: express.Request, res: express.Response) => {
      
      const birdName = req.body.birdName;
      const images = req.body.images;

      

      BirdImageModel.findOne({ naziv: birdName }, (err, bird) => {
        if (err) {
          console.log(err);
          return res.status(500).json({ error: "Error finding bird" });
        }
    
        if (!bird) {
          // Bird doesn't exist, create a new one
          bird = new BirdImageModel({
            naziv: birdName,
            slike: images // Initialize with provided images
          });
        } else {
          // Bird exists, append the provided images to its 'slike' field
          bird.slike = bird.slike.concat(images);
        }
    
        // Save the bird document (either a new one or an updated one)
        bird.save((err) => {
          if (err) {
            console.error('Error updating/inserting bird:', err);
            return res.status(500).json({ error: "Error updating/inserting bird" });
          }
    
          // Return the updated or newly created bird document
          return res.status(200).json({ message: "Bird images updated/inserted successfully", bird });
        });
      });
    }

    

    getBirdImageObject = (req: express.Request, res: express.Response) =>{

      BirdImageModel.findOne({naziv: req.query.birdName}, (err, bird)=>{
        if(err) console.log(err)
        else res.json(bird)
      })
  
    }
  

    loginAdmin = (req: express.Request, res: express.Response) =>{
      const { username, password } = req.body;
      if (!username || !password && username != 'admin') {
        return res.status(400).json({ message: 'Username and password are required' });
      }
      BirdImageModel.findOne({'username' : username, 'password' : password}, (err, news)=>{
        if(err) console.log(err)
        else res.json(news)
      })
  
    }

    getAllBirdImageObjects = (req: express.Request, res: express.Response) =>{
  
      BirdImageModel.find({}, (err, birds)=>{
        if(err) console.log(err)
        else res.json(birds)
      })
  
    }
  
    updateBirdImageFromAdmin = (req: express.Request, res: express.Response) => {
   
      console.log("admn")
      const updatedBirdImage = req.body.updatedBirdImage;
    
      BirdImageModel.updateOne({ _id: updatedBirdImage._id }, updatedBirdImage, (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).json({ message: 'Error updating object' });
        } else {
          res.json({ message: 'Object updated successfully' });
        }
      });
    };
    

}

