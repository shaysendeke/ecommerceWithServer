axios
  .get("/products")
  // handle success
  .then(function (response) {
    let result = response.data;
    let list = document.getElementById("futureProducts");
    for (let index = 0; index < result.length; index++) {
      list.innerHTML += `<p style="border: black solid 0.5px; text-align: center"> 
      Category: ${result[index].category},<br>
      Price: ${result[index].price},<br>
      Brand: ${result[index].brand}.<br>
      Description:<br> "${result[index].description}"<br>
      <img src="${result[index].Img1}" style= "width:200px; height:200px">
      <button style="margin-bottom: 2px">add to cart</button></p>`;
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
