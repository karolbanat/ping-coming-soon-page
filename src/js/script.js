const form = document.querySelector('.form');
const emailInput = document.querySelector('.email-input');
const submitBtn = document.querySelector('.submit-btn');
const errorMsg = document.querySelector('.error-msg');

const emailRegex =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const handleSubmitButton = (e) => {
	e.preventDefault();

	if (!emailInput.value) {
		form.classList.add('error');
		errorMsg.innerText = 'Please enter an email address.';
	} else if (!emailInput.value.match(emailRegex)) {
		form.classList.add('error');
		errorMsg.innerText = 'Please provide a valid email address.';
	} else {
		form.classList.remove('error');
		errorMsg.innerText = '';
	}
};

submitBtn.addEventListener('click', handleSubmitButton);
