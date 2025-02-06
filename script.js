const loginForm = document.getElementById('login-form');
const loginBtn = document.getElementById('login-btn');
const error_msg = document.getElementById('error-msg');

loginBtn.addEventListener('click', (e) => {
	e.preventDefault();
	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;

	if (username === '' || password === '') {
		error_msg.textContent = 'Please fill in both username and password.';
	} else {
		// Here you can add your authentication logic
		// For demonstration purposes, I'm just logging the credentials
		console.log(`Username: ${username}, Password: ${password}`);
	}
});

