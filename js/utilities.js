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
