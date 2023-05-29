const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log("HI")
    cb(null);
  },
  filename: function (req, file, cb) {
    const currentDate = new Date(Date.now());
    const delimiter ="-"
    const uniqueSuffix=currentDate.getDate()+delimiter+(currentDate.getMonth()+1)+delimiter+currentDate.getFullYear();
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

// Specify file format that can be saved
function fileFilter(req, file, cb) {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/png"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
}

const upload = multer({ storage,fileFilter });

module.exports = { upload };