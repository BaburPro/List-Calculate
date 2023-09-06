let input = document.querySelector('.int0');
let result = document.querySelector('.result');
let result1 = document.querySelector('.result1');
let form1 = document.querySelector('.form1');
let form2 = document.querySelector('.form2');
let input1 = document.querySelector('.int1');
let input2 = document.querySelector('.int2');

form1.addEventListener('submit', function(evt){
    evt.preventDefault();
    
    let inpvalue = input.value;
    input.value = "";

    let list = document.createElement("li");
    list.classList.add("list");
    list.textContent = inpvalue;

    result.appendChild(list);
});

form2.addEventListener('submit', function(evt){
    evt.preventDefault();
    
    let digit = Number(input1.value);
    input1.value = "";

    let power = Number(input2.value);
    input2.value = "";

    let results = 1;
    for(let i = 1; i <= power; i++){
        results *= digit;
    }

    result1.innerHTML = digit + "<small><sup>" + power + "</small></sup> = " + results;
});