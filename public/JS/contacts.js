
const form = document.getElementById("form")
const btn = document.getElementById("contactBtn")


form.addEventListener("submit", insertObj)
    
//     function insertObj(event){
//         event.preventDefault()
//     app.post("/contacts", (req, res) => {
//         MongoClient.connect(URL, function (err, db) {
//             const firstName = document.getElementById("firstName");
// const lastName = document.getElementById("lastName");
// const email = document.getElementById("email");
// const phone = document.getElementById("phoneNumber");
// const message =  document.getElementById("subject");

//           const firstName = firstName.value;
//           const lastName = lastName.value;
//           const email = email.value;
//           const phone = phone.value;
//           const message = message.value;
//           if (err) throw err;
//           const dbo = db.db(dbName);
//           insertObj(dbo, "contacts", {
//             firstName = firstName,
//             lastName = lastName,
//             email = email,
//             phone = phone,
//             message = message,
//           });
//           // db.close();
//         });res.send(201)
//       });
//       function insertObj(db, collection, obj) {
//         db.collection(collection).insertOne(obj, (err, obj) => {
//           if (err) console.log(err);
//           console.log("message added");
//           console.log(obj);
//         });
//       }
// })






function insertObj(event){
    event.preventDefault()
    const firstName = document.getElementById("firstName").value;
const lastName = document.getElementById("lastName").value;
const email = document.getElementById("email").value;
const phone = document.getElementById("phoneNumber").value;
const message =  document.getElementById("subject").value;
axios
.post("/contacts", {

       firstName: firstName,
       lastName: lastName,
       email: email,
       phone: phone,
       message: message,
})
.then((response)=>{
  console.log(response);
})
.catch((error)=>{
  console.log(error);
})
}











axios.get("/contacts", (req, res) => {
    MongoClient.connect(URL, function (err, db) {
      if (err) throw err;
      const dbo = db.db(dbName);
      dbo
        .collection(collection)
        .find({})
        .toArray(function (err, products) {
          if (err) throw err;
          res.send(products)
          console.log(products);
          db.close();
        });
    });
  });
  

