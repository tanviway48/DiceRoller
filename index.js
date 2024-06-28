function rollDice(){
    const numOfdice=document.getElementById("numOfdice").value;
    const diceResult=document.getElementById("diceResult");
    const diceImgs=document.getElementById("diceImgs");
    const values=[];
    const imgs=[];

    for(let i=0;i<numOfdice;i++){
        const value=Math.floor(Math.random()*6)+1;
        values.push(value);
        imgs.push(`<img src="imgs/${value}.png" alt="Dice${value}">`);
    }
    diceResult.textContent=`dice:${values.join(', ')}`
    diceImgs.innerHTML=imgs.join('');
    

}