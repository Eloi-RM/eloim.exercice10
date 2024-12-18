const base = "mime"

function tryWord(word, base) {
    // TODO: fix jeu sensible à la casse.
    if (checkWin(word, base)) {
        return true
    } else {
        let arrayBase = base.split('');
        let arrayWord = word.split('');
        
        let wellPlaced = isWellPlaced(arrayWord, arrayBase)
        let notInWord = isNotInWord(arrayWord, arrayBase)
        let missPlaced = isMissPlaced(arrayWord, arrayBase)

        return { wellPlaced : wellPlaced, missPlaced : missPlaced, notInWord : notInWord }
    }
}

function isWellPlaced(arrayWord, arrayBase) {
    const myArray = []
    for (let i = 0; i < arrayBase.length; i++) {
        if (arrayBase[i] === arrayWord[i]) {
            myArray.push(arrayWord[i]);
        }
    }
    return myArray
}

function isNotInWord(arrayWord, arrayBase) {
    const myArray = []
    for (const char of arrayWord) {
        if (arrayBase.includes(char) == false) {
            myArray.push(char)
        }
    }
    return myArray
}

function isMissPlaced(arrayWord, arrayBase) {
    const myArray = []
    for (let i = 0; i < arrayBase.length; i++) {
        if (arrayBase.includes(arrayWord[i]) && arrayBase[i] != arrayWord[i]) {
            myArray.push(arrayWord[i])
        }
    }
    return myArray
}

function checkWin(word, base) {
    if (word === base) {
        return true
    }
}

function playMotus() {
    displayOrNot(true)
    let word = document.getElementById("word").value
    let result = tryWord(word, base)
    if (result == true) {
        document.getElementById("win").innerText = 'Vous avez gagné'
    } else {
        display(word, result)
    }
}

function setUpGame() {
    myArray = base.split("")
    document.querySelector(".hint-numbers").innerText = `Number of letters : ${myArray.length}`
    document.querySelector(".hint-first-letter").innerText = "First letter : " + myArray[0]
}

function display(word, result) {
    displayOrNot(false)
    document.getElementById("word").value = ''
    document.getElementById("try").innerText = word
    document.getElementById("well").innerText = 'Bien placé: ' + result.wellPlaced.join(', ')
    document.getElementById("miss").innerText = 'Mal placé: ' + result.missPlaced.join(', ')
    document.getElementById("not").innerText = 'Pas dans le mot: ' + result.notInWord.join(', ')
}

function displayOrNot(hide) {
    if (hide == true) {
        document.querySelector(".myDiv").style.display = "none"
    } else {
        document.querySelector(".myDiv").style.display = "block"
    }
}

setUpGame()