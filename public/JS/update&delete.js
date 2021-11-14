
const update = document.getElementById("update");
const deleteProduct = document.getElementById("delete");
const updateForm = document.getElementById("updateForm");
const deleteForm = document.getElementById("deleteForm");
const addForm = document.getElementById("addForm")

updateForm.addEventListener("submit", updateObject);
deleteForm.addEventListener("submit", deleteDocument1);
addForm.addEventListener("submit", addObjects);

// !!! this function updates an exisiting product by selected fields by ID.
function updateObject(event) {
  event.preventDefault();
  const id = document.getElementById("updateId").value;
  const price = document.getElementById("updatePrice").value;
  const category = document.getElementById("updateCategory").value;
  const name = document.getElementById("updateName").value;
  const brand = document.getElementById("updateBrand").value;
  const description = document.getElementById("updateDescription").value;
  const img = document.getElementById("updateImg").value
  axios
  .patch(`/products/id`, {
    id: id,
    price: price,
    category: category,
    name: name,
    brand: brand,
    description: description,
    img: img,
  })
  .then(function(response) {
      console.log(response)
  })
  .catch(function(error) {
      console.log(error);
      console.log("you had a mistake in update product function")
  })
}

// !!! this function delets an exisiting product  by ID.
function deleteDocument1(event) {
  event.preventDefault();
  console.log("hello2");
  let id = document.getElementById("deleteId").value;
  axios
  .delete(`/products/${id}`)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(`${id} product was deleted`);
  });

  console.log(id);
  }
  // axios
  //   .delete(`/products/${id}`)
  //   .then(function (response) {
  //     console.log(response.data);
  //   })
  //   .catch(function (error) {
  //     console.log(id);
  //   });


// !!! this function adds a new product to the database.
function addObjects(event) {
    event.preventDefault();
    // const id = document.getElementById("addId").value;
    const price = document.getElementById("addPrice").value;
    const category = document.getElementById("addCategory").value;
    const name = document.getElementById("addName").value;
    const brand = document.getElementById("addBrand").value;
    const description = document.getElementById("addDescription").value;
    const Img1 = document.getElementById("addImg").value
    // const obj = {
    //   price,
    //   category,
    //   name,
    //   brand,
    //   description,
    //   Img1
    // }
    // console.log(obj);
    axios
    .post(`/products`, 
    {
      // id: id,
      price: price,
      category: category,
      name: name,
      brand: brand,
      description: description,
      Img1: Img1,
    }
    )
    .then(function(response) {
        console.log(response)
    })
    .catch(function(error) {
        console.log(error);
        console.log("you had a mistake in add product function")
    })
  }
  


// // !this function take an array of posts and adds it to a collection as requested
// function addObjects(db, collection, objects){
//     db.collection(collection).insertMany(objects, (err, objects) =>{
//         if (err) console.log(err);
//         console.log(objects);
//     })
//     db.collection(collection).find({}).toArray((err, collection) => {
//         if (err) console.log(err);
//         console.log(collection);
//     })
// }

// !this function delets a document from a selected collection by #id
function deleteDocument(db, collection, objectid) {
  db.collection(collection).deleteOne(objectid, (err, id) => {
    if (err) console.log(err);
    console.log(id);
  });
}
// !this function take an array of posts and adds it to a collection as requested
// function addObjects(db, collection, objects){
//     db.collection(collection).insertMany(objects, (err, objects) =>{
//         if (err) console.log(err);
//         console.log(objects);
//     })
// }


// function addObjects(event) {
//     event.preventDefault();
//     // const id = document.getElementById("addId").value;
//     const newProducts = document.getElementById("newCartProducts").value;
//     axios
//     .post(`/carts`, {
//     //   id: id,
//       newProducts: newProducts,
//     })
//     .then(function(response) {
//         console.log(response)
//     })
//     .catch(function(error) {
//         console.log(error);
//         console.log("you had a mistake in add cart function")
//     })
//   }
