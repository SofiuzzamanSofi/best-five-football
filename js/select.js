

// // select player 0 er id dhorlam 
const playerTotsl = document.getElementById('player-select');
const tableBody = document.getElementById('table');

// nam bosanor jonno array declar korlam 
const playerArray = [];

function playerItems(playerA) {

    tableBody.innerHTML = "";

    for (let index = 0; index < playerA.length; index++) {
        const item = playerA[index];
        const playersNamess = item.playerNameH1
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th>${index + 1}</th>
        <td>${playersNamess}</td>
        `;
        tableBody.appendChild(tr)
    }
}


function selectP(element) {
    element.disabled = true;
    const playerNameH1 = element.parentNode.parentNode.children[0].innerText;

    // array er length 
    const playerLenthhh = playerArray.length;
    // create an objct 
    const playerObject = {
        no: playerLenthhh + 1,
        playerNameH1: playerNameH1
    }

    if (playerLenthhh <= 4) {
    }
    else {
        alert('you can not select more than 5 players')
        element.disabled = false;
        return;
    }

    // // object ke array te push korlam 
    playerArray.push(playerObject);

    // // array er length  er man select player e bosiye dilam
    playerTotsl.innerText = playerLenthhh + 1;

    playerItems(playerArray);
}