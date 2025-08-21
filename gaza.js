//Masjid Gallery
function openMasjidGallery(id) {
    document.getElementById(id).style.display = 'block';
}
function closeMasjidGallery(id) {
    document.getElementById(id).style.display = 'none';
}


//All Gold Memebers Down Below
const donors = [
  { name: "DR. ANOWER", phone: "XXXXXXXXXX", amount: 14000 },
  { name: "NOTON DA", phone: "XXXXXXXXXX", amount: 5000 },
  { name: "ABUL HASAN", phone: "XXXXXXXXXX", amount: 5000 },
  { name: "MUZAMMIL HAIDER", phone: "XXXXXXXXXX", amount: 2000 },
  { name: "FARUK HASAN", phone: "XXXXXXXXXX", amount: 2000 },
  { name: "MOHAMMAD FAIZUL", phone: "XXXXXXXXXX", amount: 2000 },
  { name: "SABNAM PARVIN", phone: "XXXXXXXXXX", amount: 2000 },
  { name: "MUE MANISHA SAPUI", phone: "XXXXXXXXXX", amount: 2000 },
  { name: "MD MOKBUL AHMED", phone: "XXXXXXXXXX", amount: 1500 },
  { name: "SALAM KAKU", phone: "XXXXXXXXXX", amount: 1500 }, 
  
  
];

let index = 0;
const batchSize = 3;
const popupContainer = document.getElementById("popupContainer");

function calculateBalance() {
  const amountElements = document.querySelectorAll(".amount");
  let sum = 0;
  amountElements.forEach(el => {
    const text = el.textContent.replace(/[^\d]/g, "");
    sum += parseInt(text) || 0;
  });

  const totalBalance = document.getElementById("totalBalance");
  if (totalBalance) {
    totalBalance.textContent = sum;
  }
}

function showBalance() {
  const balanceBox = document.getElementById("balanceBox");
  
  if (balanceBox.style.display === "none") {
    calculateBalance();
    balanceBox.style.display = "block";
  } else {
    balanceBox.style.display = "none";
  }
}

function showBatch() {
  popupContainer.innerHTML = "";
  const batch = donors.slice(index, index + batchSize);

  batch.forEach(d => {
    const card = document.createElement("div");
    card.className = "popupCard";
    card.innerHTML = `<strong>${d.name}</strong><br>📞 ${d.phone}<br>💸 ₹${d.amount}`;
    popupContainer.appendChild(card);
  });

  index += batchSize;
  if (index >= donors.length) index = 0;
}

// Start showing donors
setInterval(showBatch, 2000);

// Masjid collection toggle
function toggleDetails(id) {
  const detail = document.getElementById(id);
  const parentLi = detail.closest('li');

  const isVisible = detail.style.display === 'block';
  detail.style.display = isVisible ? 'none' : 'block';

  if (isVisible) {
    parentLi.classList.remove('active');
  } else {
    parentLi.classList.add('active');
  }
}

function calculateMasjidCollection() {
  const masjidAmounts = document.querySelectorAll('.masjid-amount');
  let total = 0;

  masjidAmounts.forEach(span => {
    const value = parseInt(span.textContent.replace(/[^\d]/g, '')) || 0;
    total += value;
  });

  const totalDisplay = document.querySelector('.total-amount');
  if (totalDisplay) {
    totalDisplay.textContent = `Total Collection: ₹${total}`;
  }
}

// Run this after page loads
window.addEventListener('DOMContentLoaded', calculateMasjidCollection);
