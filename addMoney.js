document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();

    // Get added amount
    const addedMoney = getInputValueById('input-add-money');
    console.log(addedMoney);
    console.log(typeof(addedMoney));

    // Check if the amount is a number
    if(isNaN(addedMoney)){
        // Using Toastify to show an error
        Toastify({
            text: "Please enter a valid number",
            duration: 3000, // 3 seconds
            close: true,
            gravity: "top", // top or bottom
            position: "center", // left, center, right
            backgroundColor: "#FF4F5A", // Red background for error
            stopOnFocus: true // Stops toast on hover
        }).showToast();
        return;
    }

    // Get input pin
    const inputPin = getInputValueById('input-pin');
    console.log(inputPin);

    // verify input pin
    if(inputPin === 1234)
    {
        // Get current balance
        const currentBalance = getTextFieldValueById('current-amount');
        console.log(currentBalance);

        // Add the balance
        const updatedBalance = currentBalance + addedMoney;
        
        // Update the current balance
        document.getElementById('current-amount').innerText = updatedBalance;

        // Add to transaction history
        const entryElement = document.createElement('p');
        entryElement.innerText = `Added: ${addedMoney} Tk. Balance: ${updatedBalance}`;
        console.log(entryElement);

        // Append entry to the transaction container
        document.getElementById('transaction-container').appendChild(entryElement);

        // Success toast message
        Toastify({
            text: `Successfully added ${addedMoney} Tk. New Balance: ${updatedBalance}`,
            duration: 3000,
            close: true,
            gravity: "top",
            position: "center",
            backgroundColor: "#28A745", // Green background for success
            stopOnFocus: true
        }).showToast();
    }
    else {
        // Incorrect pin error using Toastify
        Toastify({
            text: "Failed to add money.",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "center",
            backgroundColor: "#FF4F5A", // Red background for error
            stopOnFocus: true
        }).showToast();
    }
})

