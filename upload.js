const admin = require('firebase-admin');

let serviceAccount = require('C:/Users/HP/Downloads/secondproject-7c41c-7d8b6ab9aeac.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();
let docRef = db.collection('users').doc('saif');

// Imports the Google Cloud client library
/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */
// const bucketName = 'Name of a bucket, e.g. my-bucket';
// const filename = 'Local file to upload, e.g. ./local/path/to/file.txt';

// Uploads a local file to the bucket
var bucketName="gs://secondproject-7c41c.appspot.com/";
var filename="C:/Users/HP/Downloads/firebase.png";
    // [START storage_upload_file]
    // Imports the Google Cloud client library
    // const {Storage} = require('@google-cloud/storage');
  
    // Creates a client
    
  
    /**
     * TODO(developer): Uncomment the following lines before running the sample.
     */
    // const bucketName = 'Name of a bucket, e.g. my-bucket';
    // const filename = 'Local file to upload, e.g. ./local/path/to/file.txt';
  
    // Uploads a local file to the bucket
    const storage = admin.storage();
     storage.bucket(bucketName).upload(filename, {
        public:true,
      metadata: {
        
        cacheControl: 'public, max-age=31536000',
      },
    }).then(file =>{
        console.log(`file --> ${JSON.stringify(file, null, 2)}`);
        let url = file["0"].metadata.mediaLink;
        console.log(url)})
    console.log(`${filename} uploaded to ${bucketName}.`);
    // [END storage_upload_file]

    storage.bucket(bucketName).get
// let setAda = docRef.set({
//   first: 'saif',
//   last: 'uddin',
//   born: 1815
// });

// db.collection('users').get()
//   .then((snapshot) => {
//     snapshot.forEach((doc) => {
//         if(doc.id=='saif')
//         console.log(doc.id, '=>', doc.data());
//     });
//   })
//   .catch((err) => {
//     console.log('Error getting documents', err);
//   });

// [ File {
//     _events: [Object: null prototype] {},
//     _eventsCount: 0,
//     _maxListeners: undefined,
//     metadata:
//      { kind: 'storage#object',
//        id:
//         'secondproject-7c41c.appspot.com/firebase.png/1562712550998241',
//        selfLink:
//         'https://www.googleapis.com/storage/v1/b/secondproject-7c41c.appspot.com/o/firebase.png',
//        name: 'firebase.png',
//        bucket: 'secondproject-7c41c.appspot.com',
//        generation: '1562712550998241',
//        metageneration: '1',
//        contentType: 'image/png',
//        timeCreated: '2019-07-09T22:49:10.997Z',
//        updated: '2019-07-09T22:49:10.997Z',
//        storageClass: 'STANDARD',
//        timeStorageClassUpdated: '2019-07-09T22:49:10.997Z',
//        size: '2708',
//        md5Hash: 'rdsA/v2icxIKACnK+dJgUw==',
//        mediaLink:
//         'https://www.googleapis.com/download/storage/v1/b/secondproject-7c41c.appspot.com/o/firebase.png?generation=1562712550998241&alt=media',
//        cacheControl: 'public, max-age=31536000',
//        crc32c: '/NdZXw==',
//        etag: 'COGB9PP1qOMCEAE=' },
//     baseUrl: '/o',
//     parent:
//      Bucket {
//        _events: [Object: null prototype] {},
//        _eventsCount: 0,
//        _maxListeners: undefined,
//        metadata: {},
//        baseUrl: '/b',
//        parent: [Storage],
//        id: 'secondproject-7c41c.appspot.com',
//        createMethod: [Function: bound wrapper],
//        methods: [Object],
//        interceptors: [],
//        Promise: [Function: Promise],
//        name: 'secondproject-7c41c.appspot.com',
//        storage: [Storage],
//        userProject: undefined,
//        acl: [Acl],
//        iam: [Iam],
//        getFilesStream: [Function] },
//     id: 'firebase.png',
//     createMethod: undefined,
//     methods:
//      { delete: [Object],
//        exists: [Object],
//        get: [Object],
//        getMetadata: [Object],
//        setMetadata: [Object] },
//     interceptors: [],
//     Promise: [Function: Promise],
//     create: undefined,
//     bucket:
//      Bucket {
//        _events: [Object: null prototype] {},
//        _eventsCount: 0,
//        _maxListeners: undefined,
//        metadata: {},
//        baseUrl: '/b',
//        parent: [Storage],
//        id: 'secondproject-7c41c.appspot.com',
//        createMethod: [Function: bound wrapper],
//        methods: [Object],
//        interceptors: [],
//        Promise: [Function: Promise],
//        name: 'secondproject-7c41c.appspot.com',
//        storage: [Storage],
//        userProject: undefined,
//        acl: [Acl],
//        iam: [Iam],
//        getFilesStream: [Function] },
//     storage:
//      Storage {
//        baseUrl: 'https://www.googleapis.com/storage/v1',
//        globalInterceptors: [],
//        interceptors: [],
//        packageJson: [Object],
//        projectId: 'secondproject-7c41c',
//        projectIdRequired: false,
//        Promise: [Function: Promise],
//        makeAuthenticatedRequest: [Function],
//        authClient: [GoogleAuth],
//        getCredentials: [Function: bound getCredentials],
//        acl: [Object],
//        getBucketsStream: [Function] },
//     kmsKeyName: undefined,
//     userProject: undefined,
//     name: 'firebase.png',
//     acl:
//      Acl {
//        owners: [Object],
//        readers: [Object],
//        writers: [Object],
//        pathPrefix: '/acl',
//        request_: [Function: bound request] } },
//   { kind: 'storage#object',
//     id:
//      'secondproject-7c41c.appspot.com/firebase.png/1562712550998241',
//     selfLink:
//      'https://www.googleapis.com/storage/v1/b/secondproject-7c41c.appspot.com/o/firebase.png',
//     name: 'firebase.png',
//     bucket: 'secondproject-7c41c.appspot.com',
//     generation: '1562712550998241',
//     metageneration: '1',
//     contentType: 'image/png',
//     timeCreated: '2019-07-09T22:49:10.997Z',
//     updated: '2019-07-09T22:49:10.997Z',
//     storageClass: 'STANDARD',
//     timeStorageClassUpdated: '2019-07-09T22:49:10.997Z',
//     size: '2708',
//     md5Hash: 'rdsA/v2icxIKACnK+dJgUw==',
//     mediaLink:
//      'https://www.googleapis.com/download/storage/v1/b/secondproject-7c41c.appspot.com/o/firebase.png?generation=1562712550998241&alt=media',
//     cacheControl: 'public, max-age=31536000',
//     crc32c: '/NdZXw==',
//     etag: 'COGB9PP1qOMCEAE=' } ]