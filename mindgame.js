// Random colors
const R = [
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1
];

let attempts = 0;

// Color mapping (for input backgrounds)
const colorMap = {
    1: { bg: "red", text: "whitesmoke" },
    2: { bg: "green", text: "whitesmoke" },
    3: { bg: "peachpuff", text: "black" },
    4: { bg: "rgba(255, 255, 0, 0.69)", text: "black" },
    5: { bg: "blue", text: "whitesmoke" },
    6: { bg: "purple", text: "whitesmoke" }
};

// Reusable message function
function showText(text, duration) {
    const container = document.getElementById('message-container');
    const msg = document.createElement('div');
    msg.textContent = text;
    msg.className = "bg-black/80 text-white px-4 py-2 rounded mt-2";
    container.appendChild(msg);

    setTimeout(() => msg.remove(), duration);
}

function indication() {
    showText(
        'The reload button generates new colors. ' +
        'The evaluate button tells you how close you are. ' +
        'Start with any numbers and press evaluate. ' +
        'It tells how many colors are correct and how many are in the right place. ' +
        'Game ends when all positions are correct.',
        20000
    );
}

function applyColorStyles(id, value) {
    const el = document.getElementById(id);

    if (colorMap[value]) {
        el.style.backgroundColor = colorMap[value].bg;
        el.style.color = colorMap[value].text;
    } else {
        el.style.backgroundColor = "white";
        el.style.color = "black";
    }
}

function check() {
    const inp = [
        Number(document.getElementById("clc1").value),
        Number(document.getElementById("clc2").value),
        Number(document.getElementById("clc3").value),
        Number(document.getElementById("clc4").value)
    ];

    // Apply colors to inputs
    applyColorStyles("clc1", inp[0]);
    applyColorStyles("clc2", inp[1]);
    applyColorStyles("clc3", inp[2]);
    applyColorStyles("clc4", inp[3]);

    // Count how many correct colors (ignoring position)
    let used = [false, false, false, false];
    let correctColors = 0;

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (!used[j] && R[i] === inp[j]) {
                used[j] = true;
                correctColors++;
                break;
            }
        }
    }

    // Count correct positions
    let correctPositions = 0;
    for (let i = 0; i < 4; i++) {
        if (inp[i] === R[i]) correctPositions++;
    }

    attempts++;

    showText(
        `You got ${correctColors} correct colors and ${correctPositions} in the right position.`,
        5000
    );

    if (correctPositions === 4) {
        showText(
            `Bingo! You solved it in ${attempts} tries. Try again to beat your score!`,
            5000
        );
    }
}

function show() {
    alert(`The numbers are ${R.join(" , ")}`);
}
