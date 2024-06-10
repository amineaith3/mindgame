
const R1 = Math.floor(Math.random() * 6) + 1;
const R2 = Math.floor(Math.random() * 6) + 1;
const R3 = Math.floor(Math.random() * 6) + 1;
const R4 = Math.floor(Math.random() * 6) + 1;
var conteur = 0;

function indication() {
    alert('The reload button, generates a new set or colors. ' +
        ' The evaluate button, tells you somehow, how much close you are to win.');
    alert('You can start by some random numbers and press the -evaluate- button.' +
        ' It will tell you how many of your suggested colors are correct. ' +
        ' Using this info is what will guide you to win the game.');
    alert('The game ends when you know the exact position of the colors generated');
}

function enjoy() {
    alert('enjoy enjoy enjoy enjoy enjoy enjoy enjoy enjoy enjoy enjoy enjoy enjoy enjoy enjoy enjoy enjoy enjoy enjoy enjoy enjoy enjoy enjoy enjoy enjoy enjoy enjoy enjoy enjoy enjoy enjoy enjoy enjoy');
}
function check() {
    const a1 = R1, a2 = R2, a3 = R3, a4 = R4;
    const true_value = [a1, a2, a3, a4];
    const cell1 = Number(document.getElementById("clc1").value);
    const cell2 = Number(document.getElementById("clc2").value);
    const cell3 = Number(document.getElementById("clc3").value);
    const cell4 = Number(document.getElementById("clc4").value);
    const current_value = [cell1, cell2, cell3, cell4];
    var count_number_color = [0, 0, 0, 0];
    var somme_color = 0;
    var verify = 0;
    var p = [-1, -1, -1, -1];
    var colors = [document.getElementById("clc1").value, document.getElementById("clc2").value, document.getElementById("clc3").value, document.getElementById("clc4").value];
    switch (colors[0]) {
        case '1':
            document.getElementById("clc1").style.backgroundColor = "red";
            document.getElementById("clc1").style.color = "whitesmoke";
            break;
        case '2':
            document.getElementById("clc1").style.backgroundColor = "green";
            document.getElementById("clc1").style.color = "whitesmoke";
            break;
        case '3':
            document.getElementById("clc1").style.backgroundColor = "peachpuff";
            document.getElementById("clc1").style.color = "black";
            break;
        case '4':
            document.getElementById("clc1").style.backgroundColor = "rgba(255, 255, 0, 0.69)";
            document.getElementById("clc1").style.color = "black";
            break;
        case '5':
            document.getElementById("clc1").style.backgroundColor = "blue";
            document.getElementById("clc1").style.color = "whitesmoke";
            break;
        case '6':
            document.getElementById("clc1").style.backgroundColor = "purple";
            document.getElementById("clc1").style.color = "whitesmoke";
            break;
        default:
            document.getElementById("clc1").style.backgroundColor = "white";
            document.getElementById("clc1").style.color = "black";
            break
    }

    switch (colors[1]) {
        case '1':
            document.getElementById("clc2").style.backgroundColor = "red";
            document.getElementById("clc2").style.color = "whitesmoke";
            break;
        case '2':
            document.getElementById("clc2").style.backgroundColor = "green";
            document.getElementById("clc2").style.color = "whitesmoke";
            break;
        case '3':
            document.getElementById("clc2").style.backgroundColor = "peachpuff";
            document.getElementById("clc2").style.color = "black";
            break;
        case '4':
            document.getElementById("clc2").style.backgroundColor = "rgba(255, 255, 0, 0.69)";
            document.getElementById("clc2").style.color = "black";
            break;
        case '5':
            document.getElementById("clc2").style.backgroundColor = "blue";
            document.getElementById("clc2").style.color = "whitesmoke";
            break;
        case '6':
            document.getElementById("clc2").style.backgroundColor = "purple";
            document.getElementById("clc2").style.color = "whitesmoke";
            break;
        default:
            document.getElementById("clc2").style.backgroundColor = "white";
            document.getElementById("clc2").style.color = "black";
            break
    }

    switch (colors[2]) {
        case '1':
            document.getElementById("clc3").style.backgroundColor = "red";
            document.getElementById("clc3").style.color = "whitesmoke";
            break;
        case '2':
            document.getElementById("clc3").style.backgroundColor = "green";
            document.getElementById("clc3").style.color = "whitesmoke";
            break;
        case '3':
            document.getElementById("clc3").style.backgroundColor = "peachpuff";
            document.getElementById("clc3").style.color = "black";
            break;
        case '4':
            document.getElementById("clc3").style.backgroundColor = "rgba(255, 255, 0, 0.69)";
            document.getElementById("clc3").style.color = "black";
            break;
        case '5':
            document.getElementById("clc3").style.backgroundColor = "blue";
            document.getElementById("clc3").style.color = "whitesmoke";
            break;
        case '6':
            document.getElementById("clc3").style.backgroundColor = "purple";
            document.getElementById("clc3").style.color = "whitesmoke";
            break;
        default:
            document.getElementById("clc3").style.backgroundColor = "white";
            document.getElementById("clc3").style.color = "black";
            break
    }

    switch (colors[3]) {
        case '1':
            document.getElementById("clc4").style.backgroundColor = "red";
            document.getElementById("clc4").style.color = "whitesmoke";
            break;
        case '2':
            document.getElementById("clc4").style.backgroundColor = "green";
            document.getElementById("clc4").style.color = "whitesmoke";
            break;
        case '3':
            document.getElementById("clc4").style.backgroundColor = "peachpuff";
            document.getElementById("clc4").style.color = "black";
            break;
        case '4':
            document.getElementById("clc4").style.backgroundColor = "rgba(255, 255, 0, 0.69)";
            document.getElementById("clc4").style.color = "black";
            break;
        case '5':
            document.getElementById("clc4").style.backgroundColor = "blue";
            document.getElementById("clc4").style.color = "whitesmoke";
            break;
        case '6':
            document.getElementById("clc4").style.backgroundColor = "purple";
            document.getElementById("clc4").style.color = "whitesmoke";
            break;
        default:
            document.getElementById("clc4").style.backgroundColor = "white";
            document.getElementById("clc4").style.color = "black";
            break
    }


    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (j != p[j]) {
                if (true_value[i] == current_value[j]) {
                    count_number_color[i]++;
                    p[j] = j;
                    break;
                }
            }
        }
    }

    for (let i = 0; i < 4; i++) {
        if (current_value[i] == true_value[i]) {
            verify++;
        }
    }
    for (let i = 0; i < 4; i++) {
        somme_color = somme_color + count_number_color[i];
    }
    conteur++;
    alert("you got " + somme_color + " right colors");
    alert("you got " + verify + " colors in the right place");
    if (verify == 4) {
        alert("bingo, you got it right !! It took you " + conteur + " tries. " + ' You could have done it in less tries, try again.');
    }
}

function show() {
    alert('the numbers are ' + R1 + ' and ' + R2 + ' and ' + R3 + ' and ' + R4);
}
