// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');
  
//   db.collection('Todos').findOneAndUpdate({
//       _id: new ObjectID('5b368f6f2ba91e3e604ed609')}
//       , {
//           $set: {
//               completed: true
//           }
//   }, {returnOriginal: false
//   }).then((result) => {
//     console.log(result);  
// });

db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b3a703e6bb3ce34e85ba6be')}
    , {
        $set: {
            name: 'Rohith'
        },
        $inc: {
            age: 1
        }
}, {returnOriginal: false
}).then((result) => {
  console.log(result);  
});
  
  // client.close();
});