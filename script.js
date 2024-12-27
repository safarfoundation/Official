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
    "samim6783": "9062886783", //01
    "rohan9817": "9330269817", //02
    "raj8486": "8910798486", //03
    "robiul1538": "6289141538", //04
    "abbas2542": "9143162542", //05
    "blank8670": "7003928670", //06
    "samiul7033": "8013327033", //07
    "rabiya6783": "9062886783", //08
    "ramjan4618": "9330134618", //09
    "mamun9323": "6289789323", //10
    "rakibul9486": "7980679486", //11
    "abdul0455": "6290530455", //12
    "rakibul5405": "6289545405", //13
    "esraful2740": "7439432740", //14
    "aftabul4604": "8017904604", //15
    "faijuddin4166": "8240344166", //16
    "babay3669": "6293303669", //17
    "riyaj0172": "6290950172", //18
    "sarafat0058": "9330650058", //19
    "Sabirul7019": "9836933506", //20
    "Bapi3506": "9836933506", //21
    "Tuhina2542": "9836933506", //22
    "Mosaref1215": "9836933506", //23
    "Ajijul7913": "9836933506", //24
    "Arif4528": "9836933506", //25
    "Saidur0778": "9836933506", //26
    "Samiuddin9100": "9836933506", //27
    "Ariful3312": "9836933506", //28
    "Abdus7529": "9836933506", //29
    "Halima1206": "9836933506", //30
    "Kajol4179": "7449914179", //31
    "Bittu6038": "7439906038", //32
    "Sahil8947": "6291648947", //33
    "Mokarim7856": "6291997856", //34
    "Washim8513": "8910718513", //35
    "Jamaluddin3091": "9874323091", //36
    "Sakir2571": "6289172571", //37
    "Imran2673": "6291422673", //38
    "Omor5806": "6290375806", //39
    "Saddam4009": "6391484009", //40
    "Sahanur2023": "7003162023", //41
    "Ariful5504": "7439985504", //42
    "Sahanur2516": "9123882516", //43
    "Fajlul6597": "6290466597", //44
    "Nurislam9413": "9330409413", //45
    "Akbar2289": "9123362289", //46
    "Samim3789": "7980033789", //47
    "Jangir4434": "9051704434", //48
    "Injamul9134": "6289319134", //49
    "Arif1397": "6289081397", //50
    "Nasir511": "9735730511", //51
    "Raja264": "6289676264", //52
    "Washim6177": "9330406177", //53
    "Abul3416": "9330563416", //54
    "AbuSahid9174": "7439219174", //55
    "AbdurRahaman6820": "7439876820", //56
    "Maksud2529": "9123362529", //57
    "Sufiyan9425": "6290109425", //58
    "Sahin7215": "9330067215", //59
    "Sarafat4577": "9123684577", //60
    "Suja3149": "6291463149", //61
    "Nijam9709": "9062519709", //62
    "Aftab6274": "7439366274", //63
    "Sohel6679": "7890186679", //64
    "Enamul3217": "9330553217", //65
    "Rakib": "Rakib", //66
    "Sajan9512": "6289229512", //67
    "Suraj4247": "7003204247", //68
    "Sahan9192": "9088479192", //69
    "Shofiudin6970": "9330306970", //70
    "Anishur4826": "8481048826", //71
    "Ashanur2035": "9330092035", //72
    "Tajaffar2094": "9330392094", //73
    "Nijam4423": "6289774423", //74
    "Ajiz0089": "7439810089", //75
    "Tajmel2327": "9051022327", //76
    "Siraj3299": "9875413299", //77
    "Nashibul2998": "9832322998", //78
    "Arafat8934": "7980908934", //79
    "Jishan8496": "8240298496", //80
    "Raja": "Raja", //81
    "Mijanur2278": "7890482278", //82
    "Irfan2474": "7439892474", //83
    "Mukul8356": "6290588356", //84
    "Asif8621": "6291848621", //85
    "Samiul4131": "6296524131", //86
    "Sohan8594": "6295858594", //87
    "Sahid4562": "9064624562", //88
    "Suraf4343": "7908544343", //89
    "Suraj9361": "7719259361", //90
    "Hasanur434": "8001434094", //91
    "Aziz574": "6289616574", //92
    "Sahir4291": "8328734291", //93
    "Rasel7804": "6290647804", //94
    "Soriful1029": "7439071029", //95
    "Siddik2905": "8273222905", //96
    "Sajid7496": "9330097496", //97
    "Sabnam2893": "6290142893", //98
    "Samim8794": "9088038794", //99
    "Bappaa6722": "7432906722", //100


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
        total += parseFloat(amounts[i].innerText.replace('₹', ''));
    }
    document.getElementById('total-' + donatorId).innerText = 'Total: ₹' + total.toFixed(2);
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
