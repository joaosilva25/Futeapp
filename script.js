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

    let ObjectPlayers={}

    if (listPlayers.length == listClasses.length) {

        for (let i=0; i<listPlayers.length;) {
            ObjectPlayers[listPlayers[i]]=listClasses[i]
        }

        console.log(objetoVinculado);
    }

}
