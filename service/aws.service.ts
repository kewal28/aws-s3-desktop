const AWS = require("aws-sdk");

export class AwsService {
  protected aws;
  protected s3Client;

  constructor(accessKeyId, secretAccessKey) {
    this.aws = new AWS();
    this.aws.config.update({
      accessKeyId: accessKeyId,
      secretAccessKey: secretAccessKey,
      region: "ap-south-1", // Replace with your desired region
    });
    this.s3Client = new this.aws.S3();
  }

  async uploadToS3(bucketName, keyName, body) {
    await this.s3Client
      .upload({
        Bucket: bucketName,
        Key: keyName,
        Body: body,
        CacheControl: "no-cache",
      })
      .promise();
  }

  async get(bucketName) {
    this.s3Client.listObjectsV2({Bucket : bucketName}, (err, data) => {
      if (err) {
        console.error("Error:", err);
      } else {
        console.log("List of documents:");
        data.Contents.forEach((object) => {
          console.log(object);
        });
      }
    });
  }
}
