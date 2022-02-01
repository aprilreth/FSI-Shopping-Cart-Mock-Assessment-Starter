let body = document.querySelector('body')
let totalQuantity = 1 
let totalCost = 16.00

var costTotal = document.createElement('span')
costTotal.setAttribute('id', 'total-cost')
costTotal.textContent = totalCost

//Update Quantity
function changeQuantity(displayQuantity) {
    let totalQuantity = document.querySelector('.total-quantity')
    totalQuantity.textContent = displayQuantity
}

//quantity up
addQuantity = document.getElementById('quantity-up')
addQuantity.addEventListener('click', function(){
    totalQuantity = totalQuantity + 1
    changeQuantity('Quantity: ${totalQuantity}')
    totalCost += 1
    costTotal.textContent = totalCost
})

//quality up
quantityDown = document.getElementById('quantity-down')
quantityDown.addEventListener('click', function(){
    if(totalCost > 1){
    totalQuantity = totalQuantity - 1
    totalCost -= 1
    costTotal.textContent = totalCost
    }
    changeQuantity('Quantity: ${totalQuantity}')
})

//remove button
let removeBtn = document.createElement('.remove')
removeBtn.addEventListener('click', function(){
    totalQuantity = 1
    changeQuantity('Quantity: ${totalQuantity}')
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
