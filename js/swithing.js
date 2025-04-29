// Show Donation Section and Remove History Section
const btnDonation = document.getElementById('btn-donation');
const btnHistory = document.getElementById('btn-history')

document.getElementById('btn-donation')
    .addEventListener('click', function(){
        showSection('show-donation');
        btnDonation.classList.add('bg-[#B4F461]');
        btnDonation.classList.remove('border-2', 'border-[rgba(17,17,17,0.3)]', 'text-[rgba(17,17,17,0.6)]');

        btnHistory.classList.add('border-2', 'border-[rgba(17,17,17,0.3)]', 'text-[rgba(17,17,17,0.6)]');
        btnHistory.classList.remove('bg-[#B4F461]', 'text-black');
    })

// Show History Section and Remove Donation Section
document.getElementById('btn-history')
    .addEventListener('click', function(){
        showSection('show-history')
        btnHistory.classList.add('bg-[#B4F461]', 'text-black');
        btnHistory.classList.remove('border-2'); 

        btnDonation.classList.add('border-2', 'border-[rgba(17,17,17,0.3)]', 'text-[rgba(17,17,17,0.6)]')
        btnDonation.classList.remove('bg-[#B4F461]')
    })


    