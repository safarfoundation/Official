document.getElementById('login-button').addEventListener('click', function() {
    const password = document.getElementById('password').value;
    if (password === '14111710') {
        displayDonationHistory();
    } else {
        alert('Invalid password!');
    }
});

function displayDonationHistory() {
    document.getElementById('donation-history').style.display = 'block';
    const historyTableBody = document.getElementById('history-table-body');
    let donationHistory = JSON.parse(localStorage.getItem('donationHistory')) || [];
    historyTableBody.innerHTML = ''; // Clear the table body before appending new rows
    donationHistory.forEach((donation, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${donation.donorName}</td>
            <td>${donation.phoneNumber}</td>
            <td>${donation.email}</td>
            <td>${donation.donationAmount}</td>
            <td>${donation.message}</td>
            <td>${donation.method}</td>
            <td>${donation.timestamp}</td>
            <td><button onclick="confirmDeleteDonation(${index})">Delete</button></td>
        `;
        historyTableBody.appendChild(row);
    });
}

function confirmDeleteDonation(index) {
    const password = prompt('Enter password to delete this entry:');
    if (password === '14111710') {
        deleteDonation(index);
    } else {
        alert('Invalid password!');
    }
}

function deleteDonation(index) {
    let donationHistory = JSON.parse(localStorage.getItem('donationHistory')) || [];
    donationHistory.splice(index, 1);
    localStorage.setItem('donationHistory', JSON.stringify(donationHistory));
    displayDonationHistory();
}
