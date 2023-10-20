const productForm = document.getElementById('container')

const itemInput = document.getElementById('item')
const quantityInput = document.getElementById('quantiy')


let numberOfProduct = parseInt(localStorage.getItem('SNO'))

localStorage.setItem('SNO',numberOfProduct)

let productDetails = {
    item : 'null' , quantiy : 'null'
}

function productUpload(){
   let x = itemInput.value
    let y = quantityInput.value

    productDetails.item = x
    productDetails.quantiy = y
    console.log(productDetails);

    numberOfProduct++   
    let newNumber = numberOfProduct +"-product"

    localStorage.setItem('SNO' , numberOfProduct)
    numberOfProduct = parseInt(localStorage.getItem('SNO'))
    
    localStorage.setItem(newNumber , JSON.stringify(productDetails))


}



//for stock.html

const stContainer = document.getElementById('stock-container')
let checker = localStorage.getItem('SNO')
    console.log(checker);
    for(let dx = 1; dx <= checker; dx++){
    let prepro = dx+'-product'
    let data = JSON.parse(localStorage.getItem(prepro))
    const dummy = document.createElement('div')

    dummy.innerHTML = `<h4>${data.item}</h4> <span>${data.quantiy}</span>`

    dummy.classList.add('pro-preview')
    stContainer.appendChild(dummy)
    }

function stockUploading(){
    let checker = localStorage.getItem('SNO')
    console.log(checker);
    for(let dx = 1; dx < checker; dx++){
    let prepro = dx+'-product'
    let data = JSON.parse(localStorage.getItem(prepro))
    const dummy = document.createElement('div')

    dummy.innerHTML = `<h4>${data.item}</h4> <span>${data.quantiy}</span>`

    dummy.classList.add('pro-preview')
    stContainer.appendChild(dummy)

    }
}

//sale mine2e08y02r
function stockAnalyser(){
    let a1 = document.getElementById('product').value
    let a2 = parseInt(document.getElementById('quanty').value)
    let a3 = document.getElementById('amount').value

    console.log(a1,typeof(a2),a3);
    let sam2 = localStorage.getItem('1-product')
    console.log(sam2);

}