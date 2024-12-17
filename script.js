function tryWord(word, base) {
    // TODO: fix jeu sensible à la casse.
    if (checkWin(word, base)) {
        return true
    } else {
        let wellPlaced = [];
        let notInWord = [];
        let missplaced = [];

        let arrayBase = base.split('');
        let arrayWord = word.split('');

        for (const char of arrayWord) {
            if (arrayBase.includes(char) == false) {
                notInWord.push(char)
            }
        }

        for (let i = 0; i < arrayBase.length; i++) {
            if (arrayBase[i] === arrayWord[i]) {
                wellPlaced.push(arrayWord[i]);
            } else if (arrayBase.includes(arrayWord[i])) {
                missplaced.push(arrayWord[i])
            }
        }

        return { wellPlaced: wellPlaced, missplaced: missplaced, notInWord: notInWord }
    }
}

function checkWin(word, base) {
    if (word === base) {
        return true
    }
}

function guess() {
    displayOrNot(true)
    let base = 'dictionnaire    '
    let word = document.getElementById("word").value
    let result = tryWord(word, base)
    if (result == true) {
        document.getElementById("win").innerText = 'Vous avez gagné'
    } else {
        display(word, result)
    }
}

function display(word, result) {
    displayOrNot(false)
    document.getElementById("word").value = ''
    document.getElementById("try").innerText = word
    document.getElementById("well").innerText = 'Bien placé: ' + result.wellPlaced.join(', ')
    document.getElementById("miss").innerText = 'Mal placé: ' + result.missplaced.join(', ')
    document.getElementById("not").innerText = 'Pas dans le mot: ' + result.notInWord.join(', ')
}

function displayOrNot(hide) {
    if (hide == true) {
        document.querySelector(".myDiv").style.display = "none"
    } else {
        document.querySelector(".myDiv").style.display = "block"
    }
}