document.getElementById('registrationForm').addEventListener('submit', function (event) { 

    event.preventDefault();     // يمنع إعادة تحميل الصفحة عند الضغط على زر Submit
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    var users = JSON.parse(localStorage.getItem('users')) || [];

    var newUser = {
        username: username,
        email: email,
        password: password
    };


    users.push(newUser);


    localStorage.setItem('users', JSON.stringify(users));

    alert('Registration successful! Now you can log in.');


    window.location.href = "login.html";
});
