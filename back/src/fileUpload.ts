import multer from 'multer';

export class imageUpload {
    

    uploadImage = multer({
      storage: multer.diskStorage({
        destination: (req, file, cb) => {
          let destinationPath = './src/uploads';
          cb(null, destinationPath);
        },
        filename: (req, file, cb) => {
          cb(null, file.originalname);
        },
      }),
    }) 
}  
