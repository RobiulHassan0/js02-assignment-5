// Show Donation Section and Remove History Section
document.getElementById('btn-donation')
    .addEventListener('click', function(){
        showSection('show-donation')
    })

// Show History Section and Remove Donation Section
document.getElementById('btn-history')
    .addEventListener('click', function(){
        showSection('show-history')
    })