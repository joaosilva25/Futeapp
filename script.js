var listPlayers =[]
var listClasses =[]
var table = document.querySelector('table')
var example = document.querySelector('.example')
var td =document.querySelectorAll('td')
var tr=document.querySelectorAll('tr')
var teamsError =document.querySelector('.teams_error');

// Função criada para incluir jogadores na lista de players e adição de jogadores na table

function addPlayer() {
    let selectPlayers=document.querySelector(".nomes")
    let selectClass=document.querySelector(".classe")


    if(example) {
        example.remove()
    }

    if  (!listPlayers.includes(selectPlayers.value)) {
        listPlayers.push(selectPlayers.value)
        listClasses.push(selectClass.value)
    }

    console.log(listPlayers)
    console.log(listClasses)


    table.innerHTML = '';

    let topTr=document.createElement('tr')
    let idThr=document.createElement('th')
    let nomeTh=document.createElement('th')
    let classeTh=document.createElement('th')

    table.appendChild(topTr)
    topTr.appendChild(idThr)
    topTr.appendChild(nomeTh)
    topTr.appendChild(classeTh)




    nomeTh.innerText = 'Nome'
    classeTh.innerText='Classe'
    idThr.innerText = 'ID'

    //Itera sobre a lista de jogadores para criação da table
    for(let i=0;i<listPlayers.length;i++) {

        let newTr=document.createElement('tr')
        newTr.classList.add('trNew')
        let newTdId = document.createElement('td')
        let newTdName=document.createElement('td')
        newTdName.classList.add('tdLeft')
        let newTdClass=document.createElement('td')
        newTdClass.classList.add('tdRight')
        //Criando button de exclusão do dado colocado na lista
        let newTdButton=document.createElement('td')
        let deletebutton=document.createElement('button')
        deletebutton.classList.add('cleanItem')

        deletebutton.onclick = function(){
            // Obtém a referência à linha que contém o botão de exclusão
            var row = this.parentNode.parentNode;
       
            // Remove a linha da tabela
            row.remove();
            var rowIndex = row.rowIndex;

            // Remove o jogador correspondente da lista listPlayers com base no índice da linha
            listPlayers.splice(rowIndex - 1, 1);
            listClasses.splice(rowIndex - 1, 1);
        };


        //Esse bloco realiza o append dos elementos criados para criação da lista
        table.appendChild(newTr)
        newTr.appendChild(newTdId)
        newTr.appendChild(newTdName)
        newTr.appendChild(newTdClass)
        newTr.appendChild(newTdButton)
        newTdButton.appendChild(deletebutton)
       
        newTdId.innerText= `${i}`
        newTdClass.innerText = listPlayers[i]
        newTdName.innerText = listClasses[i]
        deletebutton.innerHTML = '<ion-icon name="trash-outline"></ion-icon>'
    }
}



function generateTeam() {
    let objectPlayers =[]


    for (let i=0; i<listPlayers.length; i++) {
        let newObject= {
            nome: `${listPlayers[i]}`,
            classe: `${listClasses[i]}`
        };
        objectPlayers.push(newObject)

  }

    listClassA=[]
    listClassB=[]
    listClassC=[]

    for(let r=0;r<objectPlayers.length;r++) {
        if(objectPlayers[r].classe.includes("A")) {
            listClassA.push(objectPlayers[r]);
        }
        else if(objectPlayers[r].classe.includes("B")) {
            listClassB.push(objectPlayers[r]);
        }
        else if(objectPlayers[r].classe.includes("C")) {
            listClassC.push(objectPlayers[r])
        }
    }

    console.log("list class abaixo:")
    console.log(listClassA)
    console.log(listClassB)
    console.log(listClassC)


    let redTeam=[]
    let greenTeam=[]
    let blackTeam=[]
    let whiteTeam=[]

    function getRandomIndex(max) {
       return Math.floor(Math.random()*max)
    }


    while(redTeam.length<4) {
        random1=getRandomIndex(listClassA.length)
        redTeam.push(listClassA.splice(random1, 1)[0]);
        random2=getRandomIndex(listClassB.length)
        redTeam.push(listClassB.splice(random2, 1)[0]);
        random3=getRandomIndex(listClassB.length)
        redTeam.push(listClassB.splice(random3, 1)[0]);
        random4=getRandomIndex(listClassC.length)
        redTeam.push(listClassC.splice(random4, 1)[0]);
    }

    while(greenTeam.length<4) {
        random2=getRandomIndex(listClassA.length)
        greenTeam.push(listClassA.splice(random2, 1)[0]);
        random3=getRandomIndex(listClassB.length)
        greenTeam.push(listClassB.splice(random3, 1)[0]);
        random4=getRandomIndex(listClassB.length)
        greenTeam.push(listClassB.splice(random4, 1)[0]);
        random5=getRandomIndex(listClassC.length)
        greenTeam.push(listClassC.splice(random5, 1)[0]);
    }

    if(listClassA.length > 0 || listClassB.length > 0 || listClassC.length > 0) {
        random6=getRandomIndex(listClassA.length)
        blackTeam.push(listClassA.splice(random6, 1)[0]);
        random7=getRandomIndex(listClassB.length)
        blackTeam.push(listClassB.splice(random7, 1)[0]);
        random8=getRandomIndex(listClassB.length)
        blackTeam.push(listClassB.splice(random8, 1)[0]);
        random9=getRandomIndex(listClassC.length)
        blackTeam.push(listClassC.splice(random9, 1)[0]);

        }

    if(listClassA.length > 0 || listClassB.length > 0 || listClassC.length > 0) {
        random10=getRandomIndex(listClassA.length)
        whiteTeam.push(listClassA.splice(random10, 1)[0]);
        random11=getRandomIndex(listClassB.length)
        whiteTeam.push(listClassB.splice(random11, 1)[0]);
        random12=getRandomIndex(listClassB.length)
        whiteTeam.push(listClassB.splice(random12, 1)[0]);
        random13=getRandomIndex(listClassC.length)
        whiteTeam.push(listClassC.splice(random13, 1)[0]);
        }


    console.log("list class abaixo2:")
    console.log(listClassA)
    console.log(listClassB)
    console.log(listClassC)
   
    console.log("Time Vermelho")
    console.log(redTeam)
    console.log("Time Verde")
    console.log(greenTeam)
    console.log("Time Preto")
    console.log(blackTeam)
    console.log("Time Branco")
    console.log(whiteTeam)

    if(redTeam.length == 4 && !redTeam.includes(undefined)) {
    localStorage.setItem('redTeam',JSON.stringify(redTeam))
    }
    else {
        timedText();
    }
    if(greenTeam.length == 4  && !greenTeam.includes(undefined)) {
        localStorage.setItem('greenTeam',JSON.stringify(greenTeam))
    }
    else {
        timedText();
    }

    localStorage.setItem('blackTeam',JSON.stringify(blackTeam))
    localStorage.setItem('whiteTeam',JSON.stringify(whiteTeam))

}


function eraser() {

    let trNew=document.querySelectorAll('.trNew')
    let tdLeft=document.querySelectorAll('.tdLeft')
    let tdRight=document.querySelectorAll('.tdRight')

    listPlayers.splice(0)
    listClasses.splice(0)

    trNew.forEach((tr)=> {
        tr.remove()
    })
    tdLeft.forEach((td)=> {
        td.remove()
    })
    tdRight.forEach((td)=> {
        td.remove()
    })

    table.appendChild(example)

    localStorage.clear()
 
}

function timedText() {
    console.log('A função timedText() está sendo chamada.');
    teamsError.innerText = 'Jogadores insuficientes'

    setTimeout(() => {
        teamsError.innerText = ""
    },1200)

}