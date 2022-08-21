document.addEventListener('DOMContentLoaded', function() {
	startApp();
});

function startApp() {
    rate();
}

function rate() {
    const rateInput = document.querySelectorAll('.ratingButtons input')
    console.log(rateInput);
    const submit = document.querySelector('.ratingSubmit');
    let rateValue = '';

    rateInput.forEach(value => {
        value.addEventListener('click', function() {
            rateValue = value.value;
            console.log(rateValue);

            return rateValue;
        });
    })

    submit.addEventListener('click', function(e) {
        e.preventDefault();
        const mainSection = document.querySelector('.rating');
        const submitSection = document.querySelector('.submited');
        const rating = document.querySelector('#rate');

        if(rateValue === '') {
            Swal.fire({
                title: 'Wait!',
                text: "Please select a rating before submitting!",
                icon: 'warning',
                confirmButtonColor: '#fb7413',
                confirmButtonText: 'OK!'
              })
            return;
        }

        rating.innerHTML = `${rateValue}`;
        mainSection.classList.add('hidden');
        submitSection.classList.remove('hidden');
        submitSection.classList.add('show');
    });
}