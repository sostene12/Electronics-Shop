import multer, { diskStorage } from "multer";
import path from "path";

 const upload = multer({
    storage:diskStorage({}),
    filename:(req,file,cb) =>{
        cb(null,new Date().toISOString()+'-'+file.originalname)
    },
    fileFilter:(req,file,cb) =>{
        let extention = path.extname(file.originalname);
        if(extention =='.png' || extention =='.jpg' || extention =='.jpeg'|| extention == '.svg'){
            cb(null,true);
        }else{
            cb(new Error("unsupported extension"),false);
            return;
        }
    }
})

export default upload;
