// Add Money to the account

document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();
    // console.log('clicked');

    // ------------Get added balance----------
    const cashOutBalance = document.getElementById('input-cashout').value;
    // console.log(cashOutBalance);

    
    // ------------Get the in entered----------
    const cashOutInputPin = document.getElementById('cashout-input-pin').value;
    // console.log(cashOutInputPin);

    if(cashOutInputPin === '1234')
    {   
        // ------------Get current balance----------
        const currentMoney = document.getElementById('current-amount').innerText;
        console.log(currentMoney);

        // ------------Get update balance----------
        const updatedBalance = Number(currentMoney) - Number(cashOutBalance);
        console.log(updatedBalance);

        if(updatedBalance < 0)
            alert('You have not enough balance to cash out!');
        else
            // -----------Update the balance-------------
            document.getElementById('current-amount').innerText = updatedBalance;
    }
    else
    alert('failed to cash out');
})