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