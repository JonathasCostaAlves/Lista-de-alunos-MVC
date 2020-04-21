class FormBuscaView extends View{
    constructor(seletor){

        super(seletor);

    }

    getTemplate(objAluno,model){
        let count = [].concat(objAluno);
        
        this.seletor.innerHTML = count.map(aluno => `
            <tr class="aluno" data-id ="${aluno._id}" >
                <td class="aluno-nome">${aluno.nome}</td>
                <td class="aluno-n1">${aluno._notas[0]}</td>
                <td class="aluno-n2">${aluno._notas[1]}</td>
                <td class="aluno-n3">${aluno._notas[2]}</td>
                <td class="aluno-n4">${aluno._notas[3]}</td>	
                <td class="aluno-m">${aluno.recuperarMedia()}</td>
            </tr>
        `
        ).join('');

    }

}