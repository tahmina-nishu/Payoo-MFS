document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();

    console.log('cashout clicked');

    const cashOut = getInputValueById('input-cashout');
    const cashOutPin = getInputValueById('cashout-input-pin');

    console.log(cashOut, cashOutPin);

    // Check if the amount is a number
    if(isNaN(cashOut)){
        // Show error toast
        Toastify({
            text: "Please enter a valid number for cash out.",
            duration: 3000, // 3 seconds
            close: true,
            gravity: "top", // top or bottom
            position: "center", // left, center, right
            backgroundColor: "#FF4F5A", // Red background for error
            stopOnFocus: true // Stops toast on hover
        }).showToast();
        return;
    }

    // Check the validity of the pin
    if(cashOutPin === 1234)
    {   
        // Get current balance
        const currentBalance = getTextFieldValueById('current-amount');
        console.log(currentBalance);

        // Subtract the cash-out amount from the balance
        const updatedBalance = currentBalance - cashOut;

        // Check if there is enough balance
        if(updatedBalance < 0) {
            // Show error toast for insufficient balance
            Toastify({
                text: "You do not have enough balance to cash out!",
                duration: 3000,
                close: true,
                gravity: "top",
                position: "center",
                backgroundColor: "#FF4F5A", // Red background for error
                stopOnFocus: true
            }).showToast();
        } else {
            // Update the balance
            document.getElementById('current-amount').innerText = updatedBalance;

            // Add to transaction history
            const div = document.createElement('div');
            div.classList.add('border-2', 'shadow-lg', 'bg-white', 'px-4', 'py-2', 'rounded-lg');
            div.innerHTML = `
                <h4 class="font-bold">Cash Out</h4>
                <p>Withdrawn: ${cashOut} . New Balance: ${updatedBalance}</p>
            `;

            // Append the transaction entry
            document.getElementById('transaction-container').appendChild(div);

            // Show success toast
            Toastify({
                text: `Successfully withdrawn ${cashOut} Tk. New Balance: ${updatedBalance}`,
                duration: 3000,
                close: true,
                gravity: "top",
                position: "center",
                backgroundColor: "#28A745", // Green background for success
                stopOnFocus: true
            }).showToast();
        }
    } else {
        // Show error toast for incorrect PIN
        Toastify({
            text: "Failed to cash out.",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "center",
            backgroundColor: "#FF4F5A", // Red background for error
            stopOnFocus: true
        }).showToast();
    }
});

