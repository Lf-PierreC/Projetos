// nivel estrelas
/*
function nivelEstrela() {
    const estrela = document.querySelectorAll('.estrela')
    let nivel = 0

    for (let contEstrela = 0.2; contEstrela < estrela; contEstrela++){
        if (nivel >= 0.5 && nivel < 1){
            document.getElementById('vazia-01').style.display='none'
            document.getElementById('meia-01').style.display='inline'
        }
    }
}*/

const skills = document.querySelectorAll('.skill');

for (let contSkill = 0; contSkill < skills.length; contSkill++){
    const allskills = skills[contSkill];

    allskills.onload = function(){
        const estrela = document.querySelectorAll('.estrela')
    let nivel = 0

    for (let contEstrela = 0.2; contEstrela < estrela; contEstrela++){
        if (nivel >= 0.5 && nivel < 1){
            document.getElementById('vazia-01').style.display='none'
            document.getElementById('meia-01').style.display='inline'
        }
    }
        //nivelEstrela();
    }

}