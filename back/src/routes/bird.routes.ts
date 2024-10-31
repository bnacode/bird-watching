import express from 'express'
import { BirdController } from '../controllers/bird.controller';


const birdRouter = express.Router();


birdRouter.route('/getAllBirds').get(
    (req, res)=>new BirdController().getAllBirds(req, res)
)


birdRouter.route('/upload').post(

    (req, res) => new BirdController().uploadImages(req, res)
);

birdRouter.route('/updateBirdImages').post(

  (req, res) => new BirdController().updateBirdImages(req, res)
);

birdRouter.route('/getBirdImageObject').get(

  (req, res) => new BirdController().getBirdImageObject(req, res)
);

birdRouter.route('/loginAdmin').post(
  (req, res)=>new BirdController().loginAdmin(req, res)
)

birdRouter.route('/getAllBirdImages').get(
  (req, res)=>new BirdController().getAllBirdImageObjects(req, res)
)

birdRouter.route('/updateBirdImageFromAdmin').post(
  (req, res)=>new BirdController().updateBirdImageFromAdmin(req, res)
)



export default birdRouter;