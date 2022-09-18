const fs = require("fs");
const S3 = require("aws-sdk/clients/s3");
const awsConfig = require("../config/aws.config");

const s3 = new S3({
  region: awsConfig.REGION,
  accessKeyId: awsConfig.ACCESS_KEY,
  secretAccessKey: awsConfig.SECRET_KEY,
  signatureVersion: "v4",
});

exports.uploadFile = (file) => {
  const fileStream = fs.createReadStream(file.path);

  const uploadParams = {
    Bucket: awsConfig.BUCKET,
    Body: fileStream,
    Key: file.filename,
    expires: 60,
  };

  return s3.upload(uploadParams).promise();
};

exports.getFileStream = (fileKey) => {
  const downloadParams = {
    Bucket: awsConfig.BUCKET,
    Key: fileKey,
    expires: 60,
  };

  return s3.getObject(downloadParams).createReadStream();
};

exports.deleteFile = (fileKey) => {
  const deleteParams = {
    Bucket: awsConfig.BUCKET,
    Key: fileKey,
  };

  return s3.deleteObject(deleteParams).promise();
};
