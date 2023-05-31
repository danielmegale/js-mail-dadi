console.log('dice ok')

//Prendo gli elementi dal DOM
const diceButton=document.getElementById('dice-button')
const totalResult=document.getElementById('dice-result')
const userResult=document.getElementById('user-dice')
const pcResult=document.getElementById('pc-dice')
diceButton.addEventListener('click', function(){
    let userDice = Math.floor(Math.random() * 6)+1;
    console.log(userDice)
    userResult.innerText='Il tuo tiro: '+ userDice;
    let pcDice =Math.floor(Math.random()* 6)+1
    console.log(pcDice)
    pcResult.innerText='Il tiro del pc: '+ pcDice
    totalResult.innerText='You Lose'
    if(userDice> pcDice){
        totalResult.innerText='You Win'
    }
})