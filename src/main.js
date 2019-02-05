const submit = document.getElementById('form');
const curlyRange = document.getElementById('curliness');
const averageCurl = document.getElementById('averageCurl');

curlyRange.addEventListener('change', function(){
    averageCurl.textContent = curlyRange.value;
    console.log(curlyRange);
});

submit.addEventListener('submit', function(){
    event.preventDefault();

    const name = submit.elements.name.value;
    const street = submit.elements.street.value;
    const city = submit.elements.city.value;
    const state = submit.elements.state.value;
    const key = submit.elements.key.value;

    const pizza = submit.elements.toppings;
    const pizzaPreference = [];

    for(let i = 0; i < pizza.length; i++){
        const toppingChoices = pizza[i];
        if(toppingChoices.checked) {
            pizzaPreference.push(toppingChoices.value);  
        }
    }

    const appSubmission = {
        name: name,
        street: street,
        city: city,
        state: state,
        key: key,
        pizza: pizzaPreference,
        curl: curlyRange.value
    };

    const serialize = JSON.stringify(appSubmission);
    window.localStorage.setItem('appSubmission', serialize);
    
    window.location = './thanks.html';
});