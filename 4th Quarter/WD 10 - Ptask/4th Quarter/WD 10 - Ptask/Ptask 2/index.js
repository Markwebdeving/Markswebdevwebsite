const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("counterLabel"); // Corrected the ID here
let count = 0;

increaseBtn.onclick = function () {
    count++;
    countLabel.textContent = count;
};

decreaseBtn.onclick = function () {
    count--;
    countLabel.textContent = count;
};

resetBtn.onclick = function () { // Corrected the syntax here
    count = 0;
    countLabel.textContent = count;
};
