let body = document.querySelector('body')
let totalQuantity = 0 
let totalCost = 0

var costTotal = document.createElement('span')
costTotal.setAttribute('id', 'total-cost')
costTotal.textContent = totalCost

var itemCost = 16.00

//Update Quantity
function changeQuantity(displayQuantity) {
    let totalQuantity = document.querySelector('.total-quantity')
    totalQuantity.textContent = displayQuantity
}

//quantity up
addQuantity = document.getElementById('quantity-up')
addQuantity.addEventListener('click', function(){
    totalQuantity = totalQuantity + 1
    changeQuantity('Quantity: ' + totalQuantity)
    totalCost = itemCost*totalQuantity
    costTotal.textContent = totalCost
})

//quantity down
quantityDown = document.getElementById('quantity-down')
quantityDown.addEventListener('click', function(){
    if(totalCost > 1){
        totalQuantity = totalQuantity - 1
        totalCost = itemCost*totalQuantity
        costTotal.textContent = totalCost
    } 
    changeQuantity('Quantity: ' + totalQuantity)
})

//remove button
let removeBtn = document.getElementById('.remove')
removeBtn.addEventListener('click', function(){
    totalQuantity = 0
    changeQuantity('Quantity: ' + totalQuantity)
})

//checkout Hide Button
checkOut = document.querySelector('.btn-checkout')
checkOut = document.addEventListener('click', function(){
    total = document.querySelector('#cost');
    let btnText = checkOut.textContent
    if(btnText === 'Checkout'){
        total.style.display = 'block';
        checkOut.innerHtml = 'Back'
    }
    else {total.style.display = 'none';
    checkOut.innerHtml = 'Checkout'}
})

let cost = document.createElement('div')
cost.setAttribute('id', 'cost')
cost.setAttribute('style', 'display: none')

body.append(cost)
cost.append(costTotal)
