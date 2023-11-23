function validateForm() {
  const name = document.getElementById("name").Value;
  const email = document.getElementById("eamil").Value;
  const destiny = document.getElementById("destiny-option").Value;

  document.getElementById('nameErr').innerText = '';
    document.getElementById('emailErr').innerText = '';
    document.getElementById('optionErr').innerText = '';

    if (name === '') {
        document.getElementById('nameErr').innerText = 'Please enter your name.';
        return false;
    }

    if (email === '') {
        document.getElementById('emailErr').innerText = 'Please enter your email.';
        return false;
    } else {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.match(emailRegex)) {
            document.getElementById('emailErr').innerText = 'Please enter a valid email address.';
            return false;
        }
    }

    if (option === 'destiny-option') {
        document.getElementById('optionErr').innerText = 'Please select an option.';
        return false;
    }

    return true;
}

function submitForm() {
    if (validateForm()) {
        alert('Form submitted successfully!');
    }
}
}