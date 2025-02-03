// Add Money to the account
/*

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

*/

// uporer kaj ta i utilities e ekta function create kore sei function k call kore kora jabe 

document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();

    console.log('cashout clicked');

    const cashOut = getInputValueById('input-cashout');
    const cashOutPin = getInputValueById('cashout-input-pin');

    console.log(cashOut, cashOutPin);

    if(cashOutPin === 1234)
        {   
            // Get current balance
            const currentBalance = getTextFieldValueById('current-amount');
            console.log(currentBalance);

            // cut the balance
            const updatedBalance = currentBalance - cashOut;
        
    
            if(updatedBalance < 0)
                alert('You have not enough balance to cash out!');
            else
            {
                // Update the current balance
                 document.getElementById('current-amount').innerText = updatedBalance;

                // Add to transaction history
                const div = document.createElement('div');
                div.classList.add('border-2', 'shadow-lg', 'bg-white', 'px-4', 'py-2', 'rounded-lg');
                div.innerHTML = `
                    <h4 class="font-bold">Cash Out</h4>
                    <p>withdraw : ${cashOut} . New Balance : ${updatedBalance}</p>
                `

                document.getElementById('transaction-container').appendChild(div);
            }
        }
    else
        alert('failed to cash out');
})