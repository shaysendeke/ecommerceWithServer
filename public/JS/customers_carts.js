axios
  .get("/carts")
  // handle success
  .then(function (response) {
    let result = response.data;
    let carts = document.getElementById("carts");
    for (let index = 0; index < result.length; index++) {
      carts.innerHTML += `<p class ="displayElement" style="border: black solid 3 px"> 
      Customer ID: ${result[index]._id},<br>
      Purchased items: ${result[index].products}.<br><br>
      <button onclick="deleteCart('${index}')" class ="deleteItem">Click here to delete cart</button><br>
      <input class="deleteCart" placeholder="insert cart id to delete"><hr>      </p>`;
    }
    console.log(result);

    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

// const axios = require('axios');

// axios.get('http://webcode.me').then(resp => {
//     let result = resp.data
//     console.log(result);
//     let section = document.getElementById("showContacts")
//     section.innerHTML += result
// });

console.log("hello");

const deleteCartButton = document.getElementById("deleteCart")


function deleteCart(index) {
    // event.preventDefault();
    console.log("hello2");
    const cartElement = document.getElementsByClassName("displayElement")
    cartElement[index].style.display="none";
    let id = document.getElementsByClassName("deleteCart");
    console.log(id);
    axios
      .delete(`/carts/${id[index].value}`)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(id);
      });
  }
  