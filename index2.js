// Event Listener for Noakhali
document.getElementById('btn-donate-noakhali')
    .addEventListener('click', function(){
        handleDonation('input-noakhali', 'doneted-noakhali');
    })
 
// Event Listener for Feni
document.getElementById('btn-donate-feni')
    .addEventListener('click', function(){
        handleDonation('input-feni', 'doneted-feni');
    })

// Event Listener for Qouta Movement Injured
document.getElementById('btn-donate-injured')
    .addEventListener('click', function(){
        handleDonation('input-injured', 'doneted-injured')
    })

    
// Common Function 
function handleDonation(inputId, currentAmountId){
    const donationAmount = getInputValue(inputId);
    const currentAmount = getTextValue(currentAmountId);
    const bankOfMoney = getTextValue('bank-money')

    if(!isNaN(donationAmount) && donationAmount > 0 && donationAmount < bankOfMoney){
        const totalDonation = currentAmount + donationAmount;
        const remainingMoney = bankOfMoney - donationAmount;

        document.getElementById(currentAmountId).innerText = totalDonation;
        document.getElementById('bank-money').innerText = remainingMoney;
        document.getElementById(inputId).value = '';
    }
}