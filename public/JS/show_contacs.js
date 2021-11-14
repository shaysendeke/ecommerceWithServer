axios
  .get("/contacts")
  // handle success
  .then(function (response) {
    let result = response.data;
    let list = document.getElementById("msgList");
    for (let index = 0; index < result.length; index++) {
      list.innerHTML += `<p style="border: black solid 3 px"> Customer Name: ${result[index].firstName}
      ${result[index].lastName},<br>
      Customer email: ${result[index].email},<br>
      Customer Phone: ${result[index].phone}.<br>
      Message sent: "${result[index].message}"<br><hr></p>`;
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
