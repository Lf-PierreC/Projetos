class skill {
    constructor(nome,nivel,icone) {
        this.nome = nome;
        this.nivel = nivel;
        this.icone = icone;
    }

    criarElemento() {
        const skillContainer = document.createElement('div');
        skillContainer.className = 'skill';

        const iconSkill = document.createElement('div');
        iconSkill.className = 'icon-skill';

        const imgSkill = document.createElement('img');
        imgSkill.src = this.icone;
        imgSkill.alt = `${this.nome} Icon`;
        imgSkill.className = 'icon';
        iconSkill.appendChild(imgSkill);

        const nomeSkill = document.createElement('p');
        nomeSkill.className = 'nome-skill';
        iconSkill.textContent = this.nome;

        

    }
}