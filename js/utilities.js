function getInputValue(id){
    const inputDonation = document.getElementById(id).value;
    const numberOfDonationAmount = parseFloat(inputDonation)
    return numberOfDonationAmount;
}

function getTextValue(id){
    const doneteAmount = document.getElementById(id).innerText;
    const numberOfAmount = parseFloat(doneteAmount);
    return numberOfAmount
}

function showSection(id){
    document.getElementById('show-history').classList.add('hidden');
    document.getElementById('show-donation').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');

    const footer = document.querySelector('footer')
    // Check which section is being shown
    if(id=== 'show-history'){
        footer.classList.add('fixed', 'bottom-0');
    }
    else{
        footer.classList.remove('fixed', 'bottom-0');
    }
}