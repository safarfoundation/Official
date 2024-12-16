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