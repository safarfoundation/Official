const donors = [
  { name: "SALAM KAKU", phone: "XXXXXXXXXX", amount: 1500 },
  { name: "TAHIR BHAI", phone: "XXXXXXXXXX", amount:1100 },
  { name: "ABUL HASAN", phone: "XXXXXXXXXX", amount: 5000 },
  { name: "RUPAN", phone: "XXXXXXXXXX", amount: 1000 },
  { name: "KHUSHID", phone: "XXXXXXXXXX", amount: 1000 },
  { name: "KHUSHID", phone: "XXXXXXXXXX", amount: 1000 },
  
];

let index = 0;
const batchSize = 3;
const popupContainer = document.getElementById("popupContainer");
const totalBalance = document.getElementById("totalBalance");

function calculateBalance() {
  const sum = donors.reduce((acc, donor) => acc + donor.amount, 0);
  totalBalance.textContent = sum;
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
