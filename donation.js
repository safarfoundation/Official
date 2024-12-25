document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    var formData = new FormData(this);
    fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            document.getElementById('formMessage').innerText = "";
            document.getElementById('messageForm').reset();
            showMessageSuccess();
        } else {
            return response.json().then(data => {
                if (data.errors) {
                    document.getElementById('formMessage').innerText = data.errors.map(error => error.message).join(", ");
                } else {
                    document.getElementById('formMessage').innerText = "Oops! There was a problem submitting your form.";
                }
            });
        }
    }).catch(error => {
        document.getElementById('formMessage').innerText = "Oops! There was a problem submitting your form.";
    });
});

function showMessageSuccess() {
    var modal = document.getElementById('MessageSuccess');
    modal.style.display = 'block';
}

function closeMessageSuccess() {
    var modal = document.getElementById('MessageSuccess');
    modal.style.display = 'none';
}
