// import {x} from "../main" 
let cartTable = document.getElementById("cartTable")
let headLine = document.getElementById("yourCart")
let cartArray = [
   { id:2,
       category:"tv",
    brand: "sharp",
    price: 2700,
    name: "BMM",
    description: "lorem lorem ipsum bla bla bla",
    Img1: "https://www.alm.co.il/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/8/5/851_5__1.png",
},
{id: 15,
    category:"tv",
    brand: "Siemens",
    price: 1000,
    name: "DEP",
    description: "lorem lorem ipsum bla bla bla",
    Img1: "https://www.alm.co.il/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/8/5/851_5__1.png",
},
{
    id: 30,
    category:"washingMachings",
    brand: "Sharp",
    price: 2300,
    name: "LHT",
    description: "lorem lorem ipsum bla bla bla",
    Img1: "https://www.alm.co.il/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/4/9/4901.png",
},
{  id: 38,
    category:"refrigirators",
    brand: "Electra",
    price: 2900,
    name: "DEXL",
    description: "lorem lorem ipsum bla bla bla",
    Img1: "https://www.alm.co.il/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/5/0/5000001.png",
},
{id: 44,
    category:"refrigirators",
    brand: "LG",
    price: 3200,
    name: "DEXL",
    description: "lorem lorem ipsum bla bla bla",
    Img1: "https://www.alm.co.il/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/5/0/5000001.png",},
]

// headLine.innerText += "Your Cart"
for (let i=0; i<cartArray.length; i++)
{
    cartTable.innerHTML 
    += `
     <tr class = "purchasedItems" id="${cartArray[i].id}">
       <td>${cartArray[i].category}</td>
       <td>${cartArray[i].description}</td>
       <td> <img class = "productImg"  style = "width: 75px; height: 75px"src ="${cartArray[i].Img1}"><br>    
       </td>
       <td>${cartArray[i].price}</td>
       <td><button onclick="removeItem(${cartArray[i].id})" class = "removeFromList">Remove Item </button></td>
    </tr>

    `
let remove = document.getElementsByClassName("removeFromList")
let purchasedItems= document.getElementsByClassName("purchasedItems")

}
function removeItem(id) {
    const sumUpdate = document.getElementById("totalSum")
    for (let i=0; i<cartArray.length; i++) {
        if (cartArray[i].id === id) {
            cartArray.splice(i, 1)
            document.getElementById(id).innerHTML = "";
             const sum = toatalSum()
            console.log(cartArray)
            console.log (sum)
            sumUpdate.innerHTML = ` Total Sum: $${sum}`
            // cartTable.innerHTML += `<h3>Total Sum: ${sum}$</h3>`
        }
    }

}
// for( let i=0; i<cartTable.length; i++){
    // sum += cartTable[i].price
    // totalSum.innerHTML =<
    // }
    
 function toatalSum(){
    let sum = 0
    for (const product of cartArray){
        sum += product.price
        
    }
    return sum
    // sumUpdate.innerHTML += `<h3>Total Sum: ${sum}$</h3>`

}

// sumUpdate.innerHTML += `${sum}`