let listPlayers =[]
let listClasses =[]

let button=document.querySelector(".add_player")



function addPlayer() {
    let selectPlayers=document.querySelector(".nomes")
    let selectClass=document.querySelector(".classe")

    listPlayers.push(selectPlayers.value)
    listClasses.push(selectClass.value)


    console.log(listPlayers)
    console.log(listClasses)


}
