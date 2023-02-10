const bill = document.getElementById('bill');
const nop = document.getElementById('nop');
const errors = document.querySelectorAll('.error');
const tipAmount = document.getElementById('tip-amount');
const total = document.getElementById('total');
const reset = document.getElementById('reset');
let tipValue = document.querySelector('.clicked');
const tips = document.querySelectorAll('.tip-section button')
const custom = document.querySelector('#custom');

//tip
tips.forEach(tip =>{
    if(!tip.classList.contains('clicked')){
        tipValue = 0;
    }
    tip.addEventListener('click',()=>{
        tips.forEach(tip1 =>{
            tip1.classList.remove('clicked');
        })
        tip.classList.add('clicked');
        tipValue = parseInt(tip.innerHTML);
        if(bill.value!=0 && nop.value !=0){
        tipAmount.innerHTML = '$' + (bill.value * (tipValue / 100)).toFixed(2);  
        total.innerHTML = '$'+ ((bill.value *(1 + tipValue / 100 ))/ nop.value).toFixed(2);
        }else{
            total.innerHTML = '$0.00'
        }
    })
})
//custom tip
custom.addEventListener('input',()=>{
    if(custom.value!==0){
        tipValue = parseInt(custom.value);
        tips.forEach(tip=>{
            tip.classList.remove('clicked')
        })
    }else if(!custom.value){
        total.innerHTML = '$0.00'
    }
    if(bill.value!=0 && nop.value !=0){ 
        tipAmount.innerHTML = '$' + (bill.value * (tipValue / 100)).toFixed(2);  
  
        total.innerHTML = '$'+ ((bill.value *(1 + tipValue / 100 ))/ nop.value).toFixed(2);
    }else{
        total.innerHTML = '$0.00'
    }
})

//bill filled as last
bill.addEventListener('input',()=>{
    //error if bill == 0
    if(bill.value == 0){
        errors[0].classList.remove('hidden');
    }else{
        errors[0].classList.add('hidden');
    }
    //if bill and number of people are valid show price else 0.00 
    if(bill.value!=0 && nop.value!=0){
    //if tipValue is not declared show only bill / number of people
        if(!tipValue){
        total.innerHTML = '$'+ (bill.value/ nop.value).toFixed(2);
        }
        tipAmount.innerHTML = '$' + (bill.value * (tipValue / 100)).toFixed(2);  
   total.innerHTML = '$'+ ((bill.value *(1 + tipValue / 100 ))/ nop.value).toFixed(2);
    }else{
        total.innerHTML = '$0.00'
    }
})
//number of people filled as last
nop.addEventListener('input',()=>{
    //error if nop == 0
    if(nop.value == 0){
        errors[1].classList.remove('hidden');
    }else{
        errors[1].classList.add('hidden');
    }
    //if bill and number of people are valid show price else 0.00
    if(bill.value!=0 && nop.value !=0){ 
        tipAmount.innerHTML = '$' + (bill.value * (tipValue / 100)).toFixed(2);  
        total.innerHTML = '$'+ ((bill.value *(1 + tipValue / 100 ))/ nop.value).toFixed(2);
    }else{
        total.innerHTML = '$0.00'
    }
})

reset.addEventListener('click', ()=>{
    tips.forEach(tip=>{
        tip.classList.remove('clicked')
    })
    bill.value = '';
    custom.value = '';
    nop.value = '';
    tipAmount.innerHTML = '$0.00';
    total.innerHTML = '$0.00';
})

