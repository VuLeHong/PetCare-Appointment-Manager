import multer from "multer";
import multerS3 from "multer-s3";
import s3 from "../config/s3.js";
import { v4 as uuidv4 } from "uuid";

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "petcare-images-2026",
    contentType: multerS3.AUTO_CONTENT_TYPE,

    key: function (req, file, cb) {
      const fileName = `images/${uuidv4()}-${file.originalname}`;
      cb(null, fileName);
    },
  }),

  limits: {
    fileSize: 5 * 1024 * 1024,
  },

  fileFilter: (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "image/webp"];

    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed"));
    }
  },
});

export default upload;
