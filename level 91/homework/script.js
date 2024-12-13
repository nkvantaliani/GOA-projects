document.addEventListener('DOMContentLoaded', () => {
    let form = document.getElementById('registration');
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let confPass = document.getElementById('confirm');
    let age = document.getElementById('age');

    let passwordError = document.getElementById('paserror');
    let confpassError = document.getElementById('cpaserror');
    let ageError = document.getElementById('agerror');
    let nameError = document.getElementById('naerror');
    let emailError = document.getElementById('emerror');


    function rightName() {
        const allowedCharacterGroups = ['a-zA-Z', 'ა-ჰ', '\\s'];
    
        // Start the regex pattern
        let namePattern = '^[';
    
        // Loop through each group and add it to the pattern
        for (let i = 0; i < allowedCharacterGroups.length; i++) {
            namePattern += allowedCharacterGroups[i];
        }
    
        // Close the pattern and add the minimum length requirement
        namePattern += ']{3,}$';
    
        // Create the regex object
        const nameRegex = new RegExp(namePattern);
    
        // Validate the input
        if (!nameRegex.test(fullName.value)) {
            fullName.classList.add('invalid');
            nameError.textContent = 'სახელი უნდა შეიცავდეს მინიმუმ 3 ასოს.';
        } else {
            fullName.classList.remove('invalid');
            fullName.classList.add('valid');
            nameError.textContent = '';
        }
    }

    if (password !== confPass) {
        alert("შეიყვ");
        return false;
    }


    function validateEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            email.classList.add('invalid');
            emailError.textContent = 'მიუთითეთ სწორი ელ. ფოსტა.';
        } else {
            email.classList.remove('invalid');
            email.classList.add('valid');
            emailError.textContent = '';
        }
    }

    function validatePassword() {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(password.value)) {
            password.classList.add('invalid');
            passwordError.textContent = 'პაროლი უნდა იყოს მინიმუმ 8 სიმბოლო, შეიცავდეს დიდ ასოს, რიცხვს და სპეციალურ სიმბოლოს.';
        } else {
            password.classList.remove('invalid');
            password.classList.add('valid');
            passwordError.textContent = '';
        }
    }

    function ConfPass() {
        if (confirmPassword.value !== password.value) {
            confirmPassword.classList.add('invalid');
            confpassError.textContent = 'პაროლები არ ემთხვევა.';
        } else {
            confirmPassword.classList.remove('invalid');
            confirmPassword.classList.add('valid');
            confirmPasswordError.textContent = '';
        }
    }

    function validateAge() {
        if (age.value < 18) {
            age.classList.add('invalid');
            ageError.textContent = 'ასაკი უნდა იყოს მინიმუმ 18 წელი.';
        } else {
            age.classList.remove('invalid');
            age.classList.add('valid');
            ageError.textContent = '';
        }
    }

    fullName.addEventListener('keyup', validateName);
    email.addEventListener('keyup', validateEmail);
    password.addEventListener('keyup', validatePassword);
    confirmPassword.addEventListener('keyup', validateConfirmPassword);
    age.addEventListener('keyup', validateAge);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        validateName();
        validateEmail();
        validatePassword();
        validateConfirmPassword();
        validateAge();

        if (
            fullName.classList.contains('valid') &&
            email.classList.contains('valid') &&
            password.classList.contains('valid') &&
            confirmPassword.classList.contains('valid') &&
            age.classList.contains('valid')
        ) {
            alert('ფორმა წარმატებით გაიგზავნა!');
            form.reset();
        } else {
            alert('შეავსეთ ყველა ველი სწორად.');
        }
    });
});