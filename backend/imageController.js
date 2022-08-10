const {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
    list,
  } = require("firebase/storage");
  const  { storage } = require( "./firebase");

// Add Image to Storage and return the file path
const addImage = async (req, res, next) => {
    try {
        // Grab the file
        const file = req.file;
        // Format the filename
        const timestamp = Date.now();
        const name = file.originalname.split(".")[0];
        const type = file.originalname.split(".")[1];
        const fileName = `${name}_${timestamp}.${type}`;
        const imageRef = ref(storage, fileName);
        // Upload the file
        await uploadBytes(imageRef, file.buffer);
        // Get the download URL
        const downloadURL = await getDownloadURL(imageRef);
        // Return the download URL
        req.file.downloadURL = downloadURL;

        next();
        
     }  catch (error) {
        console.log (error)
        res.status(400).send(error.message);
    }
}
module.exports = {
    addImage
}