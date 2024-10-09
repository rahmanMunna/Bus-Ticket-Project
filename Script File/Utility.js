var seatSelectedCount = 0
var pricePerTicket = 550
var totalPrice = 0
const coupon1 = "NEW15";
const coupon2 = "Couple20";
var tryFor = 0;

function changeSeatColor(element) {
    element.classList.remove('bg-[#F7F8F8]')
    element.classList.remove('text-[#03071280]')
    element.classList.add('bg-[#1DD100]')
    element.classList.add('text-white')
}

function isValid(count) {

    if (count > 4) {
        return false;
        console.log(false);
    }
    return true;
}

function increaseNumberOfSeat(elementId) {
    const element = document.getElementById(elementId);
    element.innerText = parseInt(element.innerText) + 1;
}
function appendSeatNumber(value, elementId) {
    const element = document.getElementById(elementId);
    const li = document.createElement('li');
    li.innerText = value;
    element.appendChild(li);

}

function appendSeatClass(elementId, value) {
    const element = document.getElementById(elementId);
    const h1 = document.createElement('h1');
    h1.innerText = value;
    h1.classList.add('text-xl');
    h1.classList.add('font-semibold');
    h1.classList.add('text-[#03071299]');
    element.appendChild(h1);
}
function updatePrice(elementId, value) {
    const element = document.getElementById(elementId);
    const h1 = document.createElement('h1');
    h1.innerText = value;
    h1.classList.add('text-xl');
    h1.classList.add('font-semibold');
    h1.classList.add('text-[#03071299]');
    element.appendChild(h1);

    totalPrice += parseInt(value)
}
function updateTotalPrice(elementId) {
    const element = document.getElementById(elementId)
    element.innerText = totalPrice;
}
function updateGrandTotal(elementId) {
    const element = document.getElementById(elementId)
    element.innerText = totalPrice;

    if (isCouponAvailable(seatSelectedCount)) {
        enableComponent('coupon-btn')
        enableComponent('input-coupon')
    }
}
function enableComponent(elementId) {
    const element = document.getElementById(elementId);
    element.removeAttribute('disabled');
}
function setAttribute(elementId, attribute, value) {
    const element = document.getElementById(elementId, value);
    element.setAttribute(attribute, value);
}
function isCouponValid(value) {

    if (value === coupon1) {
        return true;
    }
    else if (value === coupon2) {
        return true;
    }
    return false;
}
function calculateDiscount(value) {
    var discountAmount;

    if (value === coupon1) {
        discountAmount = .15;
        totalPrice = totalPrice - totalPrice * discountAmount;


    }
    else if (value === coupon2) {
        discountAmount = 0.20;
        totalPrice = totalPrice - totalPrice * discountAmount;
    }

    const element = document.getElementById("grand-price");
    element.innerText = totalPrice;
    setAttribute('coupon-btn', 'disabled', 'You have tried for 3 times already');
    setAttribute('input-coupon', 'disabled', 'You have tried for 3 times already');


}
function checkForValidation(elementId) {
    const element = document.getElementById(elementId);

    if (element.value.length > 0) {
        if (isCouponValid(element.value)) {
            calculateDiscount(element.value);
        }
        else {
            tryFor += 1;
            if (tryFor >= 2) {
                element.value = "Blocked"
                setAttribute('coupon-btn', 'disabled', 'You have tried for 3 times already');
                setAttribute('input-coupon', 'disabled', 'You have tried for 3 times already');

            }
            else {
                element.value = "Invalid Coupon code";
            }
        }
    }
    else {
        tryFor += 1;
        element.value = "Enter coupon code first!";
    }
}

function isCouponAvailable(count) {
    if (count == 4) {
        return true
    }
    return false
}

function checkIsAllFieldFilledUp()
{
    const name = document.getElementById('name');
    const number = document.getElementById('number');
    const email = document.getElementById('email');

    if((name.value.length > 0 && number.value.length > 11 && email.value.length > 0) && seatSelectedCount > 0)
    {
        enableComponent('next-btn')
        console.log("Kam hyse")
    }
    console.log("Kam hoi na")
}

function selectedSeat(event) {
    seatSelectedCount += 1

    if (isValid(seatSelectedCount)) {
        changeSeatColor(event.target)
        const element = document.getElementById('seat-left')
        element.innerText = parseInt(element.innerText) - 1;
        increaseNumberOfSeat('selected-number-of-seat');

        appendSeatNumber(event.target.innerText, 'seat')
        appendSeatClass('class', 'Economy')
        updatePrice('price', 550)
        updateTotalPrice('total-price')
        updateGrandTotal('grand-price')

        checkIsAllFieldFilledUp()


    }



}