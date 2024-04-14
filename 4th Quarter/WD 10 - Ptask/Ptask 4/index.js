
const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
let attempts = 0;
let guess;
let running = true;

while (running) {
    guess = window.prompt(`Hulaan mo between ${minNum} and ${maxNum}`);
    guess = Number(guess);

    if (isNaN(guess)) {
        window.alert("Paki lagay ang valid na numero di nakikinig eh");
    } else if (guess < minNum || guess > maxNum) {
        window.alert("Paki lagay ang valid na numero di nakikinig eh");
    } else {
        attempts++;
        if (guess < answer) {
            window.alert("Masyadong Mababa! ULITIN MO!");
        } else if (guess > answer) {
            window.alert("Masyadong Mataas! ULITIN MO!");
        } else {
            window.alert(`TAMA! Ang tamang sagot ay ${answer}. It took you ${attempts} attempts!`);
            running = false;
        }
    }
 }