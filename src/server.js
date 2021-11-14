// const mongo = require("mongodb");
// const MongoClient = mongo.MongoClient;
// const mongoURL = "mongodb://localhost:27017";
// const dbName = "ecommerce";
// const objectId = mongo.ObjectId;
// const express = require("express");
// const app = express();
// const PORT = 8080;
// const path = require("path");
// const publicPath = path.join(__dirname, "..", "public");

// app.use(express.static(publicPath));
// app.use(express.json());

// // MongoClient.connect(mongoURL, function (err, db) {
// //     if (err) throw err;
// //     var productsDataBase = db.db("ecommerce")
// //     const productsCollection =d "products"
// //     const cartsCollection = "carts"
// //     const contactsCollection = "contacts"

// //     db.dbName.productsCollection.showCollectin()
// // )}
// console.log("app is loading");
// // MongoClient.connect(mongoURL, function (err, db) {
// //   if (err) throw err;
// //   const ecommerce = db.db(dbName);
// //   // !collections were saved as a variable but it didnt work
// //   //   const productsDataBase = ecommerce.products;
// //   //   const cartsCollection = ecommerce.carts;
// //   //   const contactsCollection = ecommerce.contacts;

// //   // db.blog.find({})
// //   //   createCollection(myDB, "some collection");
// //   // insertObj(blog, "authors", newAuthor)
// //   showDocumets(ecommerce, "products");
// //   // addObjects(blog, "posts", newPosts)
// //   //   deleteDocument(blog, "posts", id);
// //   //   updatePost(blog, "authors", postId, authorId);
// // });
// // // !this function prints all the objects in a selected collection
// // function showDocumets(db, collection) {
// //   db.collection(collection)
// //     .find({})
// //     .toArray((err, documents) => {
// //       if (err) console.log(err);
// //       console.log(documents);
// //     });
// // }

// app.get("/", function (req, res) {
//   // res.sendFile("index.html");
//   console.log("im here")
//   res.send("hello")
// });

// app.get("/products", (req, res) => {
//   // MongoClient.connect(url, function (err, db) {
//   //   if (err) throw err;
//   //   const dbo = db.db(dbName);
//   //   dbo
//   //     .collection(collection)
//   //     .find({})
//   //     .toArray(function (err, products) {
//   //       if (err) throw err;
//   //       res.send(products)
//   //       console.log(products);
//   //       db.close();
//   //     });
//   // });
//   console.log("im here");
//   res.send("hello")
// });

// app.post("/products", (req, res) => {
//     // MongoClient.connect(url, function (err, db) {
//     //   const userId = req.body.userId;
//     //   const title = req.body.title;
//     //   const id = req.body.id;
//     //   const completed = req.body.completed;
//     //   if (err) throw err;
//     //   const dbo = db.db("ecommerce");
//     //   insertObj(dbo, "todos", {
//     //     userId: userId,
//     //     title: title,
//     //     completed: completed,
//     //     id: id
//     //   });
//     //   // db.close();
//     // });res.send(201)
//   });
//   function insertObj(db, collection, obj) {
//     db.collection(collection).insertOne(obj, (err, obj) => {
//       if (err) console.log(err);
//       console.log("document created");
//       console.log(obj);
//     });
//   }

// app.listen(PORT);
// console.log(`app is listening on port: ${PORT}`);


console.log("app is loading");
const express = require("express")
const mongo= require("mongodb")
const MongoClient = mongo.MongoClient;
const URL = "mongodb://localhost:27017"
const app =express()
const PORT = 8080
const axios = require("axios")
const path = require("path");
const publicPath = path.join(__dirname, "..", "public");
const dbName = "ecommerce"
const productsCollection = "products"
const contactsCollection = "contacts"
const cartsCollection = "carts"
const objectId = mongo.ObjectId;

app.use(express.json());

app.use(express.static(publicPath));

app.get("/products", (req, res) => {
  MongoClient.connect(URL, function (err, db) {
    if (err) throw err;
    const dbo = db.db(dbName);
    dbo
      .collection(productsCollection)
      .find({})
      .toArray(function (err, products) {
        if (err) throw err;
        res.send(products)
        console.log(products);
        db.close();
      });
  });
});

app.post("/products", (req, res) => {
  MongoClient.connect(URL, function (err, db) {
    const id = req.body.id;
    const category = req.body.category;
    const brand = req.body.brand;
    const price = req.body.price;
    const name = req.body.name;
    const description = req.body.description;
    if (err) throw err;
    const dbo = db.db(dbName);
    insertObj(dbo, "products", {
      id: id,
      category: category,
      price: price,
      brand: brand,
      name: name,
      description: description
    });
    // db.close();
  });res.send(201)
});



app.post("/contacts", (req, res) => {
  MongoClient.connect(URL, function (err, db) {
    if (err) throw err;
    const dbo = db.db(dbName);
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const phone = req.body.phone;
    const message = req.body.message;
  
    const msg = {
      firstName:firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      message: message,
    };
    dbo.collection("contacts").insertOne(msg,(err,result)=>{
      if (err) throw err;
      // res.send(result);
      console.log(result);
      // res.status(201).end()
      // console.log(result);
      res.send(201)
      db.close();
    })

  })
});




function insertObj(db, collection, obj) {
  db.collection(collection).insertOne(obj, (err, obj) => {
    if (err) console.log(err);
    console.log("document created");
    console.log(obj);
  });
}


app.get("/contacts", (req, res) => {
  MongoClient.connect(URL, function (err, db) {
    if (err) throw err;
    const dbo = db.db(dbName);
    dbo
      .collection(contactsCollection)
      .find({})
      .toArray(function (err, contacts) {
        if (err) throw err;
        res.send(contacts)
        console.log(contacts);
        db.close();
      });
  });
});

app.get("/carts", (req, res) => {
  MongoClient.connect(URL, function (err, db) {
    if (err) throw err;
    const dbo = db.db(dbName);
    dbo
      .collection(cartsCollection)
      .find({})
      .toArray(function (err, carts) {
        if (err) throw err;
        res.send(carts)
        console.log(carts);
        db.close();
      });
  });
});

app.post("/carts", (req, res) => {
  MongoClient.connect(URL, function (err, db) {
    const id = req.body.id;
    const products = req.body.products;
    if (err) throw err;
    const dbo = db.db(dbName);
    insertObj(dbo, "carts", {
      id: id,
      products: products,
    });
    // db.close();
  });res.send(201)
});

app.patch(`/products/:id`, (req, res) =>{
  MongoClient.connect(URL, function (err, db) {
    if (err) throw err;
    const dbo = db.db(dbName);
    const id = req.params.id;
    const data = req.body;

    updateObject(dbo, productsCollection ,id, data)
res.end()
  })
// console.log(req.body);

})

app.delete(`/products/:id`, (req, res) => {
  MongoClient.connect(URL, function (err, db) {
    if (err) throw err;
  const dbo = db.db(dbName);
  const id = req.params.id;
  console.log(id);
  deleteDocument(dbo, productsCollection, id)
  res.end()
  console.log(id);
});
})

app.post('/products', (req, res) => {
  MongoClient.connect(URL, function (err, db) {
    if (err) throw err;
    const dbo = db.db(dbName);
    // const id = req.params.id;
    const data = req.body;

    addObjects(dbo, productsCollection , data)

    console.log(id);
    res.end()
    console.log(`${id} was added to products collection`);
  })
}
)

app.delete(`/carts/:id`, (req, res) => {
  MongoClient.connect(URL, function (err, db) {
    if (err) throw err;
  const dbo = db.db(dbName);
  const id = req.params.id;
  console.log(id);
  deleteDocument(dbo, cartsCollection, id)
  res.end()
  console.log(cartsCollection);
  console.log(id);
});
})

app.post(`/carts`, (req, res) => {
  MongoClient.connect(URL, function (err, db) {
    if (err) throw err;
    const dbo = db.db(dbName);
      const newProducts = rew.params.newProducts
      addObjects(dbo, cartsCollection , data)
      res.send()
      console.log(newProducts);
  })
})


// !this function take an array of posts and adds it to a collection as requested
function addObjects(db, collection, objects){
    db.collection(collection).insertMany(objects, (err, objects) =>{
        if (err) console.log(err);
        console.log(objects);
    })
  }
    // !this function finds a document in a collection
    function findInCollection (db, collection) {
    db.collection(collection).find({}).toArray((err, collection) => {
        if (err) console.log(err);
        console.log(collection);
    })
}

// !this function deletes a document from a selected collection by #id
function deleteDocument(db, collection, id) {
console.log("test");
  db.collection(collection).deleteOne({_id:objectId(id)}, (err, id) => {
    if (err) console.log(err);
    console.log("test1");
    console.log(id);
  });
}

// !this function updates a selected object as required in the function
function updateObject(db, collection, id, newObj ){

  db.collection(collection).updateOne({_id:objectId(id)}, {$set:newObj} ,(err, res)=>{
        if (err) console.log(err);
        console.log(res);
    })
}

app.listen(PORT)
console.log(`listening on ${PORT}`)
