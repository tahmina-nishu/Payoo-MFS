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
    const addedMoney = getInputFieldValueById();
    console.log(addedMoney);
})