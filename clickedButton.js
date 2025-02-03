

// -----------active button behaviour-----------

// document.getElementById('add-money').addEventListener('click', function(){
//     console.log('add money button clicked')
//     document.getElementById('add-money').classList.add('bg-[#0874F20D]', 'border-2', 'border-[#0874F2]');
//     document.getElementById('add-money-text').classList.add('text-[#0874F2]', 'font-bold');
// })



/*
------------------- Handle 'Add Money' button ----------------

document.getElementById('add-money').addEventListener('click', function(){
    // Hide cash out form
    document.getElementById('cash-out-form').classList.add('hidden');
    
    // show add money form
    document.getElementById('add-money-form').classList.remove('hidden');
})

*/



/*
 ----------------Handle 'Cash Out' button--------------------

document.getElementById('cash-out').addEventListener('click', function(){
    // Hide add money form
    document.getElementById('add-money-form').classList.add('hidden');
    
    // show cash out form
    document.getElementById('cash-out-form').classList.remove('hidden');
})

*/



//jei button e click korbe seta active hobe. baki sob hidden thakbe.

// ------------------- Handle 'Add Money' button ----------------
document.getElementById('add-money').addEventListener('click', function(){
    // show add money form
    showSectionById('add-money-form');   
})

// ------------------- Handle 'Cashout' button ----------------
document.getElementById('cash-out').addEventListener('click', function(){
    // show cash out form
    showSectionById('cash-out-form');   
})

// ------------------- Handle 'Transaction' button ----------------
document.getElementById('transaction').addEventListener('click', function(){
    console.log('transaction button clicked');
    // show transaction history
    showSectionById('transaction-history');   
})