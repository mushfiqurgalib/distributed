var Minio = require('minio')

// Instantiate the minio client with the endpoint
// and access keys as shown below.
var minioClient = new Minio.Client({
    endPoint: 'http://192.168.1.105',
      port: 12840,
    useSSL: true,
    accessKey: 'minioadmin',
    secretKey: 'minioadmin'
});

// File that needs to be uploaded.
var file = '../assets/Capture1.PNG'

//Make a bucket called europetrip.
minioClient.makeBucket('galib1', function(err){
    if (err) return console.log(err)

    console.log('Bucket created successfully in "us-east-1".')

    var metaData = {
        'Content-Type': 'application/octet-stream',
        'X-Amz-Meta-Testing': 1234,
        'example': 5678
    }
    // Using fPutObject API upload your file to the bucket europetrip.
    minioClient.fPutObject('galib1', 'capture1.png', file, metaData, function(err, etag) {
      if (err) return console.log(err)
      console.log('File uploaded successfully.')
    });})
;