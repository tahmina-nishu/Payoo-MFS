
// Step - 1 :  Set event handler
document.getElementById('login-btn').addEventListener('click', function(event){
    // Step - 2 :  Prevent default behaviour (reloading browser)
    event.preventDefault(); // eta dile page ta reload hobe na .

    
        //console.log('login button clicked')

    // Step - 3 :  Get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber);

    // Step - 4 :  Get the pin number
    const pinNumber = document.getElementById('pin-number').value;
    console.log(pinNumber);

        // erpor normally phone & pin server e pathale seta check kore dey. kintu apatoto ekta phone & ekta pin set kore kaj korbo

    // Step - 5 :  validate phone and pin
    if(phoneNumber === '01846152387' && pinNumber === '1234')
    {
        alert("You are logged in.");
    }
    else
        alert("Wrong phone number or pin.");
})