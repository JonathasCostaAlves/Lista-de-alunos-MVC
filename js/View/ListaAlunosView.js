class ListaAlunosView extends View{
    constructor(seletor){
        super(seletor);
    }
    getTemplate(model){
        
        return  `
        ${model.lista.map(alunos =>`
            <tr class="aluno" data-id ="${alunos._id}">
                <td class="aluno-nome" >${alunos.nome}</td>
                ${alunos._notas.map((nota, i) =>`
                <td class="aluno-n${(i+1)}">${nota}</td>`).join('')}

                <td class="aluno-m">${alunos.recuperarMedia()}</td>

            </tr>
        
        `            
            ).join('')}        
   ` // Final segunda crase
    }
     
    atualiza(model){
        this.seletor.innerHTML = this.getTemplate(model);
        
    }
}