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

    teamOne.innerHTML= `<h3>${randomLeft}</h3>`
    teamTwo.innerHTML = `<h3>${randomRight}</h3>`
}   