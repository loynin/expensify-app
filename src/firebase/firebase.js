import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAisgPiFQXNUua8yJEISb6FvAp1hucjU3Y",
    authDomain: "expensify-steven.firebaseapp.com",
    databaseURL: "https://expensify-steven.firebaseio.com",
    projectId: "expensify-steven",
    storageBucket: "expensify-steven.appspot.com",
    messagingSenderId: "952748797495"
  };

 firebase.initializeApp(config);

 const database = firebase.database();
 const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

 export { firebase, googleAuthProvider, database as default};

//   const expenses = [{
//     description: 'Rent',
//     note: 'Rent of the month',
//     amount: 1200,
//     createAt: 12345
//   },{
//     description: 'Coffee',
//     note: 'Starbuck Coffee',
//     amount: 3,
//     createAt: 12345
//   },{
//     description: 'Electricity',
//     note: 'Electricity',
//     amount: 10,
//     createAt: 12345
//   }];

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });

  //   expenses.forEach((expense) => {
//     database.ref('expenses').push(expense);

//   });
  


// database.ref('notes/-LSl2237W7dzNNH1MqWo').update({
//     body: 'Hello Update'
// })

//  database.ref('notes').push({
//      title: 'Course Topics',
//      body: 'go for a run'
//  });

// const notes = [{
//     id: '12',
//     title: 'First Note',
//     body: 'This is my note'
// },{
//     id: '13',
//     title: 'Second Note',
//     body: 'This is my note'
// },{
//     id: '14',
//     title: 'Third Notes',
//     body: 'This is my note'
// }];

// database.ref('notes').set(notes);

//Get data from firebase

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch (() => {
//         console.log('Fetch data error', e);
//     })

// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// })



// database.ref().set({
//       name: 'Steven Loy',
//       age: 40,
//       isSingle: false,
//       location: {
//           city: 'Long Beach',
//           State: 'CA'
//       }
//   }).then(() => {
//       console.log('Data is saved');
//   }).catch((e) => {
//     console.log('Saved failed', e);
//   });

//database.ref().remove();

// database.ref().update({
//     name: 'Johson',
//     age: 2,
//     job: 'Front End Developer'
// }).then(() => {
//     console.log('Update success');
// }).catch ((e) => {
//     console.log('Error happend', e)
// });
