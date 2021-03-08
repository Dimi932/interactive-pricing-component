// DOM SELECTORS //
const range = document.querySelector('#myinput');
const pageviews = document.querySelector('.k-number');
const priceHead = document.querySelector('strong');
const monthly = document.querySelector('.monthly');
const checkbox = document.querySelector('.form-check-input');

let discount = false;
let monthlyVal = '<span>/ month</span>'; //Correct that !!!!


checkbox.addEventListener('click', function(){
    discount = checkbox.checked;
    if (discount) {
        monthly.innerHTML = '/ year'; //correct that!!!
        monthlyVal = '<span>/ year</span>';
    }
    else if (!discount) {
        monthly.textContent = '/ month';
        monthlyVal = '<span>/ month</span>';
    }
    progBarColour(range, discount);

    return monthlyVal;
});

range.addEventListener('input', function(){
    progBarColour(range, discount);
});

let curRange = range.value;

function progBarColour (range, discount) {
    let perc;
    let views;
    let price;

    if (range.value == 1){
        perc = '0%';
        views = '1k pageviews';
        if(discount){
            price = '$72.00'
        } else {
            price = '$8.00'
        }
    }
    else if (range.value == 2){
        perc = '25%';
        views = '10k pageviews';
        if(discount){
            price = '$108.00'
        } else {
            price = '$12.00'
        }
    }
    else if (range.value == 3){
        perc = '50%';
        views = '100k pageviews';
        if(discount){
            price = '$144.00'
        } else {
            price = '$16.00'
        }
    }
    else if (range.value == 4){
        perc = '75%';
        views = '500k pageviews';
        if(discount){
            price = '$180.00'
        } else {
            price = '$20.00'
        }
    }
    else if (range.value == 5){
        perc = '100%';
        views = '1m pageviews';
        if(discount){
            price = '$216.00'
        } else {
            price = '$24.00'
        }
    }
    range.style.background = `linear-gradient(to right, rgb(165, 243, 235) 0%, rgb(165, 243, 235) ${perc}, rgb(234, 238, 251) 0%, rgb(234, 238, 251) 100%)`;
    pageviews.textContent = views;
    priceHead.innerHTML = `${price}`;
}






// document.getElementById("myinput").oninput = function() {
//   var value = (this.value - this.min) / (this.max - this.min) * 100
//   this.style.background = 'linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ' + value + '%, hsl(224, 65%, 95%) ' + value + '%, hsl(224, 65%, 95%) 100%)'
// };
