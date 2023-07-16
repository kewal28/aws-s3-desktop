const AWS = require("aws-sdk");

const accessKeyId = "";
const secretAccessKey = "";

const bucketName = "";

AWS.config.update({
  accessKeyId: accessKeyId,
  secretAccessKey: secretAccessKey,
  region: "ap-south-1", // Replace with your desired region
});

const s3Client = new AWS.S3();

s3Client.listObjectsV2({Bucket : bucketName}, (err, data) => {
  if (err) {
    console.error("Error:", err);
  } else {
    console.log("List of documents:");
    data.Contents.forEach((object) => {
      console.log(object);
    });
  }
});
