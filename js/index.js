// Card 01
document.getElementById('btn-donate-noakhali').addEventListener('click', function(){
    const donateForNoakhali = getInputValue('input-noakhali');
    const donetedNoakhali = getTextValue('doneted-noakhali');
    const bankMoney = getTextValue('bank-money');

    if(!isNaN(donateForNoakhali) && donateForNoakhali >=1 && donateForNoakhali < bankMoney){
        const totalDonation = donetedNoakhali + donateForNoakhali;
        const remainingMoney = bankMoney - donateForNoakhali;

        document.getElementById('doneted-noakhali').innerText = totalDonation;
        document.getElementById('bank-money').innerText = remainingMoney;
        document.getElementById('input-noakhali').value = '';
        showConfirmationModal();

        const div = document.createElement('div');
        const date = new Date().toString()
        div.classList.add('space-y-5', 'p-8', 'border', 'rounded-2xl');
        div.innerHTML = `
            <h2 class="text-2xl font-bold">${donateForNoakhali} Taka Donated for Flood Relief at Noakhali, Bangladesh</h2>
            <p class="text-lg text-gray-500 p-4 rounded-lg bg-slate-50">Date : ${date} </p>
        `
        document.getElementById('show-history').appendChild(div);
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

    if(!isNaN(donateForFeni) && donateForFeni >=1 && donateForFeni < bankMoney){
        const totalDonation = donetedFeni + donateForFeni;
        const remainingMoney = bankMoney - donateForFeni;

        document.getElementById('doneted-feni').innerText = totalDonation;
        document.getElementById('bank-money').innerText = remainingMoney;
        document.getElementById('input-feni').value = '';
        
        showConfirmationModal();

        const div = document.createElement('div');
        const date = new Date().toString()
        div.classList.add('space-y-5', 'p-8', 'border', 'rounded-2xl');
        div.innerHTML = `
            <h2 class="text-2xl font-bold">${donateForFeni} Taka is Donated for Flood Relief in Feni,Bangladesh</h2>
            <p class="text-lg text-gray-500 p-4 rounded-lg bg-slate-50">Date : ${date} </p>
        `
        document.getElementById('show-history').appendChild(div);
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

    if(!isNaN(donateForInjured) && donateForInjured >= 1 && donateForInjured < bankMoney){
        const totalDonation = donetedInjured + donateForInjured;
        const remainingMoney = bankMoney - donateForInjured;

        document.getElementById('doneted-injured').innerText = totalDonation;
        document.getElementById('bank-money').innerText = remainingMoney;
        document.getElementById('input-injured').value = '';

        showConfirmationModal();

        const div = document.createElement('div');
        const date = new Date().toString()
        div.classList.add('space-y-5', 'p-8', 'border', 'rounded-2xl');
        div.innerHTML = `
            <h2 class="text-2xl font-bold">${donateForInjured} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h2>
            <p class="text-lg text-gray-500 p-4 rounded-lg bg-slate-50">Date : ${date} </p>
        `
        document.getElementById('show-history').appendChild(div);
    }
    else{
        alert('Invalid Donation Amount')
        return
    }

})
