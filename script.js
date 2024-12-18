function showDetails(position) {
    // Hide all member details
    var details = document.getElementsByClassName('member-details');
    for (var i = 0; i < details.length; i++) {
        details[i].style.display = 'none';
    }
    // Show the selected member's details
    document.getElementById(position).style.display = 'block';
}

function closeDetails() {
    // Hide all details
    var details = document.getElementsByClassName('member-details');
    for (var i = 0; i < details.length; i++) {
        details[i].style.display = 'none';
    }
}

// Donators Information Styling Start

// Replace this with a secure storage method in a real application
const donatorPasswords = {
    "donator1": "samim",
    "donator2": "ishak",
    // Add more donators and their password
};

function requestPassword(donatorID) {
    var password = prompt("Enter password to view details:");
    if (password === donatorPasswords[donatorID]) {
        document.getElementById(donatorID).style.display = 'block';
    } else {
        alert("Incorrect password!");
    }
}

function closeModal(donatorID) {
    document.getElementById(donatorID).style.display = 'none';
}

// Donators Information Styling End
