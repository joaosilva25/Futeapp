
function add() {
    let scrolling =document.querySelector('.scrolling')

    let newMatches = document.createElement('div')
    newMatches.innerHTML =`<div class="box_matches d-flex justify-content-center">
                        <select class="left_team">
                            <option>Verde</option>
                            <option>Vermelho</option>
                            <option>Preto</option>
                            <option>Branco</option>
                        </select>
                        <input class="placar_left" value="0" type="number">
                        <h2>:</h2>
                        <input  class="placar_right" value="0" type="number">
                        <select  class="right_team">
                            <option>Verde</option>
                            <option>Vermelho</option>
                            <option>Preto</option>
                            <option>Branco</option>
                        </select>
                    </div>`
    scrolling.appendChild(newMatches)
}



function table() {
    let placar_left = document.querySelectorAll('.placar_left')
    let placar_right = document.querySelectorAll('.placar_right')
    let team_left = document.querySelectorAll('.left_team')
    let team_right = document.querySelectorAll('.right_team')

    listPlacarLeft=[]
    listPlacarRight=[]
    listTeamLeft=[]
    listTeamRight=[]

    placar_left.forEach((e)=> {
        listPlacarLeft.push(e.value)
    })

    placar_right.forEach((e)=> {
        listPlacarRight.push(e.value)
    })

   team_left.forEach((e)=> { 
        listTeamLeft.push(e.value)
   })
   
   team_right.forEach((e)=> {
        listTeamRight.push(e.value)
   })


    console.log(listPlacarLeft)
    console.log(listPlacarRight)
    console.log(listTeamRight)
    console.log(listTeamLeft)

   /*resultado da pártida*/
   for (let i=0;i<listPlacarLeft.length;i++) {
        if (listPlacarLeft[i]>listPlacarRight[i]) {
            console.log("esquerda ganhou da direita")
        }
        else if(listPlacarRight[i]>listPlacarLeft[i]) {
            console.log("direita ganhou da esquerda")
        }
        else {
            console.log("Empate");
        }
   }


   
   

}