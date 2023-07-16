const {contextBridge} = require('electron');

const os = require('os');
// const AwsService = require('service/aws-service');

// const accessKeyId = "";
// const secretAccessKey = "";
// const aws = new AwsService(accessKeyId, secretAccessKey);

contextBridge.exposeInMainWorld('electron', {
    homeDir: () => os.homedir(),
    // getBaseFiles: () => aws.get(),
})