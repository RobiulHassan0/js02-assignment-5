document.getElementById('btn-donate-noakhali')
    .addEventListener('click', function(){
        console.log('nokhali btn clicked')

        const donateNoakhali = document.getElementById('noakhali-input').value;
        const donateNumberNoakhali = parseFloat(donateNoakhali);


        const donetedForNoakhali = document.getElementById('btn-done-noakhali').innerText
        const numberTotalDonationNkhl = parseFloat(donetedForNoakhali)

        const bankMoney = document.getElementById('bank-money').innerText
        const numberOfBankMoney = parseFloat(bankMoney)

        if(isNaN(donateNumberNoakhali)){
            alert('Please Type A Number!')
            return;
        }
        
        if(donateNumberNoakhali > numberOfBankMoney){
            alert('Insufficient Balance');
            return
        }
        if(donateNumberNoakhali <= 0){
            alert('Please type a postive Number')
            return
        }
        if(donateNumberNoakhali <= numberOfBankMoney){
            const remainingMoney = numberOfBankMoney - donateNumberNoakhali;
            const newTotalDonation = numberTotalDonationNkhl + donateNumberNoakhali;
            
            document.getElementById('bank-money').innerText = remainingMoney;
            document.getElementById('btn-done-noakhali').innerText = newTotalDonation;

            document.getElementById('noakhali-input').value = '';
        }

    })