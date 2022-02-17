function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const valueInText = inputField.value;
    const value = parseFloat(valueInText);
    inputField.value = "";
    return value
}

function updateBalace(amount, isAdding){
    const balaceTag = document.getElementById("balance-total");
    const balaceInText = balaceTag.innerText;
    const previousBalace = parseFloat(balaceInText);
    let newBalace;
    if(isAdding == true){
        newBalace = previousBalace + amount;
    }
   else {
        newBalace = previousBalace - amount;
    }
    balaceTag.innerText = newBalace;
}
function updateTotal(fieldId, amount){
    const totalTag = document.getElementById(fieldId)
    const previousTotalInText= totalTag.innerText;
    const previousTotal = parseFloat(previousTotalInText);
    const newTotal = previousTotal + amount;
    totalTag.innerText = newTotal
}
// handle diposit 
document.getElementById('deposit-button').addEventListener('click', function(){
   const amount = getInputValue("diposit-input");
   if(amount>0){
    updateTotal("deposit-total", amount)
    updateBalace(amount, true)
   }
   
});

// handle withdraw 

document.getElementById("withdraw-button").addEventListener('click', function(){
    const amount = getInputValue("withdraw-input");
    if(amount > 0){
    updateTotal("withdraw-total", amount);
    updateBalace(amount, false);
    }
})



