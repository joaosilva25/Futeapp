let teamOneLoading =document.querySelector('.loading_one')
let teamTwoLoading =document.querySelector('.loading_two')
let teamOne=document.querySelector('.team_one');
let teamTwo=document.querySelector('.team_two');

  

function firstMatch() {


    teamOneLoading.remove();
    teamTwoLoading.remove();

    let list=["Vermelho","Preto","Branco","Verde"]

    let listLeftRandom = Math.floor(Math.random()*list.length)

    let randomLeft = list[listLeftRandom]

    console.log(randomLeft);

    list.splice(listLeftRandom,1)

    console.log(list)
    
    let listRightRandom = Math.floor(Math.random()*list.length)
    let randomRight = list[listRightRandom]

    console.log(randomRight);

    setTimeout(()=> {
    teamOne.innerHTML= `<h3>${randomLeft}</h3>`
    teamTwo.innerHTML = `<h3>${randomRight}</h3>`
    },1500)



}   

window.onload = function formatedTeams() {

    const redTeam=JSON.parse(localStorage.getItem('redTeam'))
    const greenTeam=JSON.parse(localStorage.getItem('greenTeam'))
    const blackTeam=JSON.parse(localStorage.getItem('blackTeam'))
    const whiteTeam=JSON.parse(localStorage.getItem('whiteTeam'))

    console.log(redTeam)
    console.log(greenTeam)
    console.log(blackTeam)
    console.log(whiteTeam)

    let redOne=document.querySelector('.red_one');
    let redTwo=document.querySelector('.red_two');
    let redThree=document.querySelector('.red_three');
    let redFour=document.querySelector('.red_four');

    let greenOne=document.querySelector('.green_one');
    let greenTwo=document.querySelector('.green_two');
    let greenThree=document.querySelector('.green_three');
    let greenFour=document.querySelector('.green_four');

    let blackOne=document.querySelector('.black_one');
    let blackTwo=document.querySelector('.black_two');
    let blackThree=document.querySelector('.black_three');
    let blackFour=document.querySelector('.black_four');

    let whiteOne=document.querySelector('.white_one');
    let whiteTwo=document.querySelector('.white_two');
    let whiteThree=document.querySelector('.white_three');
    let whiteFour=document.querySelector('.white_four');


    redOne.innerText=redTeam[0].nome
    redTwo.innerText=redTeam[1].nome
    redThree.innerText=redTeam[2].nome
    redFour.innerText=redTeam[3].nome


    greenOne.innerText=greenTeam[0].nome
    greenTwo.innerText=greenTeam[1].nome
    greenThree.innerText=greenTeam[2].nome
    greenFour.innerText=greenTeam[3].nome

    for (let i = 0; i < blackTeam.length; i++) {
        if (blackTeam[i] === null || blackTeam[i] === undefined) {
            blackTeam.splice(i, 1);
        }
    }

    
    blackOne.innerText=blackTeam[0].nome
    blackTwo.innerText=blackTeam[1].nome
    blackThree.innerText=blackTeam[2].nome
    blackFour.innerText=blackTeam[3].nome


    for(let r=0; r< whiteTeam.length; r++) {
        if(whiteTeam[r] === null || whiteTeam[r] === undefined) {
            whiteTeam.splice(r,1)
        }
    }


    whiteOne.innerText= whiteTeam[0].nome
    whiteTwo.innerText= whiteTeam[1].nome
    whiteThree.innerText= whiteTeam[2].nome
    whiteFour.innerText= whiteTeam[3].nome
}