/*

function getInputFieldValueById(){
    const addedMoney = document.getElementById('input-add-money').value;
    return addedMoney;
}

*/

/* As ei function ta mukltiple kajer jonno use korbo tai specific id diye na khuje onnovbe khujte hbe.

er jonno------------
    -> function e id ta parameter hisebe nite hobe
    -> 

*/
function getInputValueById(id){
    const value =parseFloat(document.getElementById(id).value);
    return value;
}


function getTextFieldValueById(id){
    const textValue = parseFloat(document.getElementById(id).innerText);
    return textValue;
}

function showSectionById(id){
    // At first hide all section . then remove hidden class from the selected class


    // Hide cash out form
    document.getElementById('cash-out-form').classList.add('hidden');

    // Hide add money form
    document.getElementById('add-money-form').classList.add('hidden');

    // Hide Transaction History
    document.getElementById('transaction-history').classList.add('hidden');

    // Show the selected section
    document.getElementById(id).classList.remove('hidden');
}