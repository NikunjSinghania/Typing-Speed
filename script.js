let wordsCount = document.querySelector('#below').value.split(' ').length
document.querySelector('#words').innerHTML = wordsCount

let words = document.querySelector('#below').value.split(' ')
document.querySelector('#above').addEventListener('input', (e) => {
    let typeWords = document.querySelector('#above').value.split(' ')
    let correctWords = 0
    for(let i=0;i<typeWords.length;i++) {
        if(typeWords[i] === words[i]) {
            correctWords++
            console.log(correctWords);
        }
    }
    document.querySelector('#correctwords').innerHTML = correctWords
})