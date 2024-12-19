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
    "samim6783": "9062886783",
    "ishak7667": "6289997667",
    "rohan9817": "9330269817",
    "raj8486": "8910798486",
    // Add more donators and their password
};

function requestPassword(donatorId) {
    var password = prompt("Enter password to view details:");
    if (password === donatorPasswords[donatorId]) {
        document.getElementById(donatorId).style.display = 'block';
        calculateTotal(donatorId);
    } else {
        alert("Incorrect password!");
    }
}

function closeModal(donatorId) {
    document.getElementById(donatorId).style.display = 'none';
}

function searchDonators() {
    var input, filter, table, tr, td, i, txtValue, pattern, regex;
    input = document.getElementById('searchBar');
    filter = input.value.toUpperCase();
    table = document.getElementById('donatorsTable');
    tr = table.getElementsByTagName('tr');
    pattern = new RegExp("(" + filter + ")", "gi"); // Create a regex pattern for matching text

    for (i = 1; i < tr.length; i++) {
        tdName = tr[i].getElementsByTagName('td')[0];
        tdNickname = tr[i].getElementsByTagName('td')[1];
        if (tdName || tdNickname) {
            txtValueName = tdName.textContent || tdName.innerText;
            txtValueNickname = tdNickname.textContent || tdNickname.innerText;
            if (txtValueName.toUpperCase().indexOf(filter) > -1 || txtValueNickname.toUpperCase().indexOf(filter) > -1 ) {
                tr[i].style.display = ""; // Show the row
                // Highlight matching text
                tdName.innerHTML = txtValueName.replace(pattern, "<span class='highlight'>$1</span>");
                tdNickname.innerHTML = txtValueNickname.replace(pattern, "<span class='highlight'>$1</span>");
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function calculateTotal(donatorId) {
    var modal = document.getElementById(donatorId);
    var amounts = modal.getElementsByClassName('amount');
    var total = 0;
    for (var i = 0; i < amounts.length; i++) {
        total += parseFloat(amounts[i].innerText.replace('$', ''));
    }
    document.getElementById('total-' + donatorId).innerText = 'Total: $' + total.toFixed(2);
}


// function highlightMatch(td, filter) {
//     var innerHTML = td.innerHTML;
//     var index = innerHTML.toUpperCase().indexOf(filter);
//     if (index >= 0) {
//         innerHTML = innerHTML.substring(0, index) + "<span class='highlight'>" + innerHTML.substring(index, index+filter.length) + "</span>" + innerHTML.substring(index + filter.length);
//         td.innerHTML = innerHTML;
//     }
// }

// Donators Information Styling End
