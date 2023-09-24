const fs = require("fs");
const sharp = require("sharp");

// Path to the folder containing images
const imageFolder =
  "/Users/fayajhossain/Downloads/video editor/phi/Sp_phi2/Vimp_40"; // Change this to your image folder
const outputVideo = `${imageFolder.split("/").pop()}.mp4`; // Output video will have the same name as the folder

// Get the list of image files in the folder
const imageFiles = fs.readdirSync(imageFolder).filter((file) =>
  file.toLowerCase().endsWith(".png") ||
  file.toLowerCase().endsWith(".jpg") ||
  file.toLowerCase().endsWith(".jpeg") ||
  file.toLowerCase().endsWith(".gif")
);

if (imageFiles.length === 0) {
  console.log("No valid images found in the folder.");
} else {
  // Sort the image files based on their filenames
  imageFiles.sort((a, b) => {
    const aIndex = parseInt(a.split("_").pop().split(".")[0]);
    const bIndex = parseInt(b.split("_").pop().split(".")[0]);
    return aIndex - bIndex;
  });

  // Read the first image to get dimensions
  const firstImage = sharp(`${imageFolder}/${imageFiles[0]}`);
  firstImage.metadata()
    .then((metadata) => {
      const { width, height } = metadata;

      // Create a VideoWriter object
      const encoder = new require("node-av").Encoder("mp4", {
        width: width,
        height: height,
        fps: 30,
      });
      encoder.setConstantRateFactor(23);

      // Iterate through the images and add them to the video with the correct duration
      for (const imageFile of imageFiles) {
        const img = sharp(`${imageFolder}/${imageFile}`);
        for (let i = 0; i < 45; i++) { // 1.5 seconds at 30 frames per second
          encoder.writeFrame(img.toBuffer());
        }
      }

      // Finalize and save the video
      encoder.end();
      encoder.on("end", () => {
        console.log("Video creation completed.");
      });
      encoder.pipe(fs.createWriteStream(outputVideo));
    })
    .catch((error) => {
      console.error("Error reading the first image:", error);
    });
}
