// Card 01
document.getElementById('btn-donate-noakhali').addEventListener('click', function(){
    const donateForNoakhali = getInputValue('input-noakhali');
    const donetedNoakhali = getTextValue('doneted-noakhali')
    const bankMoney = getTextValue('bank-money')

    if(!isNaN(donateForNoakhali) && donateForNoakhali > 0 && donateForNoakhali < bankMoney){
        const totalDonation = donetedNoakhali + donateForNoakhali;
        const remainingMoney = bankMoney - donateForNoakhali;
        document.getElementById('doneted-noakhali').innerText = totalDonation;
        document.getElementById('bank-money').innerText = remainingMoney;
        document.getElementById('input-noakhali').value = '';
    }
    else{
        alert('Invalid Donation Amount')
        return
    }

})

// Card 02
document.getElementById('btn-donate-feni').addEventListener('click', function(){
    const donateForFeni = getInputValue('input-feni');
    const donetedFeni = getTextValue('doneted-feni')
    const bankMoney = getTextValue('bank-money')

    if(!isNaN(donateForFeni) && donateForFeni > 0 && donateForFeni < bankMoney){
        const totalDonation = donetedFeni + donateForFeni;
        const remainingMoney = bankMoney - donateForFeni;
        document.getElementById('doneted-feni').innerText = totalDonation;
        document.getElementById('bank-money').innerText = remainingMoney;
        document.getElementById('input-feni').value = '';
    }
    else{
        alert('Invalid Donation Amount')
        return
    }

})

// Card 03
document.getElementById('btn-donate-injured').addEventListener('click', function(){
    const donateForInjured = getInputValue('input-injured');
    const donetedInjured = getTextValue('doneted-injured')
    const bankMoney = getTextValue('bank-money')

    if(!isNaN(donateForInjured) && donateForInjured > 0 && donateForInjured < bankMoney){
        const totalDonation = donetedInjured + donateForInjured;
        const remainingMoney = bankMoney - donateForInjured;
        document.getElementById('doneted-injured').innerText = totalDonation;
        document.getElementById('bank-money').innerText = remainingMoney;
        document.getElementById('input-injured').value = '';
    }
    else{
        alert('Invalid Donation Amount')
        return
    }

})
