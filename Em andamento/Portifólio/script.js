// nivel estrelas

function nivelEstrela() {
    const estrelas = document.querySelectorAll('.estrela')
    let nivel = 2.5

    for (let contEstrela = 0; contEstrela < estrelas.length; contEstrela++){
        const estrela = estrelas[contEstrela];
        if (nivel >= 0.5 && nivel < 1){
            document.getElementById('vazia-01').style.display='none'
            document.getElementById('meia-01').style.display='inline'
        } else if(nivel >= 1 && nivel < 1.5){
            document.getElementById('vazia-01').style.display='none'
            document.getElementById('cheia-01').style.display='inline'
        }else if(nivel >= 1.5 && nivel < 2){
            document.getElementById('vazia-01').style.display='none'
            document.getElementById('vazia-02').style.display='none'
            document.getElementById('cheia-01').style.display='inline'
            document.getElementById('meia-02').style.display='inline'
        }else if(nivel >= 2 && nivel < 2.5){
            document.getElementById('vazia-01').style.display='none'
            document.getElementById('vazia-02').style.display='none'
            document.getElementById('cheia-01').style.display='inline'
            document.getElementById('cheia-02').style.display='inline'
        }else if(nivel >= 2.5 && nivel < 3){
            document.getElementById('vazia-01').style.display='none'
            document.getElementById('vazia-02').style.display='none'
            document.getElementById('vazia-03').style.display='none'
            document.getElementById('cheia-01').style.display='inline'
            document.getElementById('cheia-02').style.display='inline'
            document.getElementById('meia-03').style.display='inline'
        }else if(nivel >= 3 && nivel < 3.5){
            document.getElementById('vazia-01').style.display='none'
            document.getElementById('vazia-02').style.display='none'
            document.getElementById('vazia-03').style.display='none'
            document.getElementById('cheia-01').style.display='inline'
            document.getElementById('cheia-02').style.display='inline'
            document.getElementById('cheia-03').style.display='inline'
        }else if(nivel >= 3.5 && nivel < 4){
            document.getElementById('vazia-01').style.display='none'
            document.getElementById('vazia-02').style.display='none'
            document.getElementById('vazia-03').style.display='none'
            document.getElementById('vazia-04').style.display='none'
            document.getElementById('cheia-01').style.display='inline'
            document.getElementById('cheia-02').style.display='inline'
            document.getElementById('cheia-03').style.display='inline'
            document.getElementById('meia-04').style.display='inline'
        }else if(nivel >= 4 && nivel < 4.5){
            document.getElementById('vazia-01').style.display='none'
            document.getElementById('vazia-02').style.display='none'
            document.getElementById('vazia-03').style.display='none'
            document.getElementById('vazia-04').style.display='none'
            document.getElementById('cheia-01').style.display='inline'
            document.getElementById('cheia-02').style.display='inline'
            document.getElementById('cheia-03').style.display='inline'
            document.getElementById('cheia-04').style.display='inline'
        }else if(nivel >= 4.5 && nivel < 5){
            document.getElementById('vazia-01').style.display='none'
            document.getElementById('vazia-02').style.display='none'
            document.getElementById('vazia-03').style.display='none'
            document.getElementById('vazia-04').style.display='none'
            document.getElementById('vazia-05').style.display='none'
            document.getElementById('cheia-01').style.display='inline'
            document.getElementById('cheia-02').style.display='inline'
            document.getElementById('cheia-03').style.display='inline'
            document.getElementById('cheia-04').style.display='inline'
            document.getElementById('meia-04').style.display='inline'
        } else {
            document.getElementById('vazia-01').style.display='none'
            document.getElementById('vazia-02').style.display='none'
            document.getElementById('vazia-03').style.display='none'
            document.getElementById('vazia-04').style.display='none' 
            document.getElementById('vazia-05').style.display='none'
            document.getElementById('cheia-01').style.display='inline'
            document.getElementById('cheia-02').style.display='inline'
            document.getElementById('cheia-03').style.display='inline'
            document.getElementById('cheia-04').style.display='inline'
            document.getElementById('cheia-05').style.display='inline'
        }
        
    }
}

const skills = document.querySelectorAll('.skill');

for (let contSkill = 0; contSkill < skills.length; contSkill++){
    const allskills = skills[contSkill];
    
    nivelEstrela();

}

document.createElement('div.estrela')
document.appendChild