// Add Money to the account


/*

document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    // console.log('clicked');

    // ------------Get added balance----------
    const addedMoney = document.getElementById('input-add-money').value;
    // console.log(addedMoney);

    
    // ------------Get the in entered----------
    const inputPin = document.getElementById('input-pin').value;
    // console.log(inputPin);

    if(inputPin === '1234')
    {      
        // ------------Get current balance----------
        const currentMoney = document.getElementById('current-amount').innerText;
        console.log(currentMoney);

        // ------------Get update balance----------
        const updatedBalance = Number(currentMoney) + Number(addedMoney);
        console.log(updatedBalance);

        // -----------Update the balance-------------
        document.getElementById('current-amount').innerText = updatedBalance;
    }
    else
    alert('failed to add money');
})

*/

// uporer kaj ta i utilities e ekta function create kore sei function k call kore kora jabe 


document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();

    // Get input value
    // const addedMoney = getInputFieldValueById();

    // Get added amount
    const addedMoney = getInputValueById('input-add-money');
    console.log(addedMoney);
    console.log(typeof(addedMoney));

    // Get input pin
    const inputPin = getInputValueById('input-pin');
    console.log(inputPin);

    // verify input pin
    if(inputPin === 1234)
    {
        // Get current balance
        const currentBalance = getTextFieldValueById('current-amount');
        console.log(currentBalance);

        // add the balance
        const updatedBalance = currentBalance + addedMoney;
        // Update the current balance
        document.getElementById('current-amount').innerText = updatedBalance;

        // Add to transaction history
        const entryElement = document.createElement('p');
        entryElement.innerText = `Added: ${addedMoney} Tk. Balance: ${updatedBalance}`;
        console.log(entryElement);

        /*
         ekta common function banay seta diye added history or cashout history duitai add kore dibo history te append child kore-----------

         er jonno : 
            1. kothay add korbo seta khujbo
            2. tarpor oikhane appendchild kore dibo
        */

        document.getElementById('transaction-container').appendChild(entryElement);
    }
    else
        alert('failed to add money');
})