const elements = [
    {id: 0, name: 'Tomatos', price: 2, quantity: 0},
    {id: 1, name: 'Lettuce', price: 1.5, quantity: 0},
    {id: 2, name: 'Onion', price: 1, quantity: 0},
    {id: 3, name: 'Beef', price: 1, quantity: 0},
    {id: 4, name: 'Cheese', price: 1, quantity: 0},
    {id: 5, name: 'French fries', price: 1, quantity: 0},
    {id: 6, name: 'Water', price: 1, quantity: 0},
    {id: 7, name: 'Iced tea', price: 1, quantity: 0},
    {id: 8, name: 'Soda', price: 1, quantity: 0},
    {id: 9, name: 'Milkshake', price: 1, quantity: 0},
    {id: 10, name: 'Juice', price: 1, quantity: 0}
]; 


const elementContainer = document.getElementById('added-elements');
let total = 0;

// TOMATOS BILL _______________________________________________________________________________________________

const addTomatosBtn = document.querySelector('.moreTomatos');
addTomatosBtn.addEventListener("click",AddElementToBill);
let tomatosPrice = elements[0].price;

function AddElementToBill() {
    if (elements[0].quantity==0) {
        const newElement = document.createElement("p");
        newElement.classList.add('elementAddedToBill');
        elements[0].quantity += 1;
        let myObjectElement = JSON.stringify(elements[0]);
        newElement.textContent = `${elements[0].quantity} ${elements[0].name} : $${elements[0].price.toFixed(2)}`;
        elementContainer.appendChild(newElement);

        total += elements[0].price;
        document.querySelector('.total').innerHTML = `$${total.toFixed(2)}`;
    }
    else {
        elements[0].quantity += 1;
        tomatosPrice = elements[0].price * elements[0].quantity;
        document.querySelector('.elementAddedToBill').innerHTML = `${elements[0].quantity} ${elements[0].name} : $${tomatosPrice.toFixed(2)}`;
        total += elements[0].price;
        document.querySelector('.total').innerHTML = `$${total.toFixed(2)}`;
    }
}

const lessTomatosBtn = document.querySelector('.lessTomatos');
lessTomatosBtn.addEventListener("click",reduceTomatoBill);

function reduceTomatoBill() {
    if (elements[0].quantity>0) {
        elements[0].quantity -= 1;
        tomatosPrice -= elements[0].price;
        document.querySelector('.elementAddedToBill').innerHTML = `${elements[0].quantity} ${elements[0].name} : $${tomatosPrice.toFixed(2)}`;
        total -= elements[0].price;
        document.querySelector('.total').innerHTML = `$${total.toFixed(2)}`;
    }
    if (elements[0].quantity==0) {
        var TomatosToRemove = document.querySelector('.elementAddedToBill');
        TomatosToRemove.parentNode.removeChild(TomatosToRemove);
    }
}

// LETTUCE BILL _______________________________________________________________________________________________________________________________________________

const addLettuceBtn = document.querySelector('.moreLettuce');
addLettuceBtn.addEventListener("click",AddLettuceToBill);
let lettucePrice = elements[1].price;

function AddLettuceToBill() {
    if (elements[1].quantity==0) {
        const newElement = document.createElement("p");
        newElement.classList.add('lettuceAddedToBill');
        elements[1].quantity += 1;
        let myObjectElement = JSON.stringify(elements[1]);
        newElement.textContent = `${elements[1].quantity} ${elements[1].name} : $${elements[1].price.toFixed(2)}`;
        elementContainer.appendChild(newElement);

        total += elements[1].price;
        document.querySelector('.total').innerHTML = `$${total.toFixed(2)}`;
    }
    else {
        elements[1].quantity += 1;
        lettucePrice = elements[1].price * elements[1].quantity;
        document.querySelector('.lettuceAddedToBill').innerHTML = `${elements[1].quantity} ${elements[1].name} : $${lettucePrice.toFixed(2)}`;
        total += elements[1].price;
        document.querySelector('.total').innerHTML = `$${total.toFixed(2)}`;
    }
}

const lessLettuceBtn = document.querySelector('.lessLettuce');
lessLettuceBtn.addEventListener("click",reduceLettuceBill);

function reduceLettuceBill() {
    if (elements[1].quantity>0) {
        elements[1].quantity -= 1;
        lettucePrice -= elements[1].price;
        document.querySelector('.lettuceAddedToBill').innerHTML = `${elements[1].quantity} ${elements[1].name} : $${lettucePrice.toFixed(2)}`;
        total -= elements[1].price;
        document.querySelector('.total').innerHTML = `$${total.toFixed(2)}`;
    }
    if (elements[1].quantity==0) {
        var lettuceToRemove = document.querySelector('.lettuceAddedToBill');
        lettuceToRemove.parentNode.removeChild(lettuceToRemove);
    }
}


//  ONION BILL _____________________________________________________________________________________________________________________________________

const addOnionBtn = document.querySelector('.moreOnion');
addOnionBtn.addEventListener("click",AddOnionToBill);
let onionPrice = elements[2].price;

function AddOnionToBill() {
    if (elements[2].quantity==0) {
        const newElement = document.createElement("p");
        newElement.classList.add('onionAddedToBill');
        elements[2].quantity += 1;
        let myObjectElement = JSON.stringify(elements[2]);
        newElement.textContent = `${elements[2].quantity} ${elements[2].name} : $${elements[2].price.toFixed(2)}`;
        elementContainer.appendChild(newElement);

        total += elements[2].price;
        document.querySelector('.total').innerHTML = `$${total.toFixed(2)}`;
    }
    else {
        elements[2].quantity += 1;
        onionPrice = elements[2].price * elements[2].quantity;
        document.querySelector('.onionAddedToBill').innerHTML = `${elements[2].quantity} ${elements[2].name} : $${onionPrice.toFixed(2)}`;
        total += elements[2].price;
        document.querySelector('.total').innerHTML = `$${total.toFixed(2)}`;
    }
}

const lessOnionBtn = document.querySelector('.lessOnion');
lessOnionBtn.addEventListener("click",reduceOnionBill);

function reduceOnionBill() {
    if (elements[2].quantity>0) {
        elements[2].quantity -= 1;
        onionPrice -= elements[2].price;
        document.querySelector('.onionAddedToBill').innerHTML = `${elements[2].quantity} ${elements[2].name} : $${onionPrice.toFixed(2)}`;
        total -= elements[2].price;
        document.querySelector('.total').innerHTML = `$${total.toFixed(2)}`;
    }
    if (elements[2].quantity==0) {
        var onionToRemove = document.querySelector('.onionAddedToBill');
        onionToRemove.parentNode.removeChild(onionToRemove);
    }
}

// BEEF BILL _______________________________________________________________________________________________________________________________________

const addBeefBtn = document.querySelector('.moreBeef');
addBeefBtn.addEventListener("click",AddBeefToBill);
let beefPrice = elements[3].price;

function AddBeefToBill() {
    if (elements[3].quantity==0) {
        const newElement = document.createElement("p");
        newElement.classList.add('beefAddedToBill');
        elements[3].quantity += 1;
        let myObjectElement = JSON.stringify(elements[3]);
        newElement.textContent = `${elements[3].quantity} ${elements[3].name} : $${elements[3].price.toFixed(2)}`;
        elementContainer.appendChild(newElement);

        total += elements[3].price;
        document.querySelector('.total').innerHTML = `$${total.toFixed(2)}`;
    }
    else {
        elements[3].quantity += 1;
        beefPrice = elements[3].price * elements[3].quantity;
        document.querySelector('.beefAddedToBill').innerHTML = `${elements[3].quantity} ${elements[3].name} : $${beefPrice.toFixed(2)}`;
        total += elements[3].price;
        document.querySelector('.total').innerHTML = `$${total.toFixed(2)}`;
    }
}

const lessBeefBtn = document.querySelector('.lessBeef');
lessBeefBtn.addEventListener("click",reduceBeefBill);

function reduceBeefBill() {
    if (elements[3].quantity>0) {
        elements[3].quantity -= 1;
        beefPrice -= elements[3].price;
        document.querySelector('.beefAddedToBill').innerHTML = `${elements[3].quantity} ${elements[3].name} : $${beefPrice.toFixed(2)}`;
        total -= elements[3].price;
        document.querySelector('.total').innerHTML = `$${total.toFixed(2)}`;
    }
    if (elements[3].quantity==0) {
        var beefToRemove = document.querySelector('.beefAddedToBill');
        beefToRemove.parentNode.removeChild(beefToRemove);
    }
}


// CHEESE BILL _______________________________________________________________________________________________________________________________________

const addCheeseBtn = document.querySelector('.moreCheese');
addCheeseBtn.addEventListener("click",addCheeseToBill);
let cheesePrice = elements[4].price;

function addCheeseToBill() {
    if (elements[4].quantity==0) {
        const newElement = document.createElement("p");
        newElement.classList.add('cheeseAddedToBill');
        elements[4].quantity += 1;
        let myObjectElement = JSON.stringify(elements[4]);
        newElement.textContent = `${elements[4].quantity} ${elements[4].name} : $${elements[4].price.toFixed(2)}`;
        elementContainer.appendChild(newElement);

        total += elements[4].price;
        document.querySelector('.total').innerHTML = `$${total.toFixed(2)}`;
    }
    else {
        elements[4].quantity += 1;
        cheesePrice = elements[4].price * elements[4].quantity;
        document.querySelector('.cheeseAddedToBill').innerHTML = `${elements[4].quantity} ${elements[4].name} : $${cheesePrice.toFixed(2)}`;
        total += elements[4].price;
        document.querySelector('.total').innerHTML = `$${total.toFixed(2)}`;
    }
}

const lessCheeseBtn = document.querySelector('.lessCheese');
lessCheeseBtn.addEventListener("click",reduceCheeseBill);

function reduceCheeseBill() {
    if (elements[4].quantity>0) {
        elements[4].quantity -= 1;
        cheesePrice -= elements[4].price;
        document.querySelector('.cheeseAddedToBill').innerHTML = `${elements[4].quantity} ${elements[4].name} : $${cheesePrice.toFixed(2)}`;
        total -= elements[4].price;
        document.querySelector('.total').innerHTML = `$${total.toFixed(2)}`;
    }
    if (elements[4].quantity==0) {
        var cheeseToRemove = document.querySelector('.cheeseAddedToBill');
        cheeseToRemove.parentNode.removeChild(cheeseToRemove);
    }
}