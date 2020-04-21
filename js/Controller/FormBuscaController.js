class FormBuscaController{
    constructor(model, view){
        this.model =  model;
        this.view = view;
    }
    pegaNome(nome){
        if(nome ==='' || nome === typeof String )return alert('Digite um nome valido!');
        
        let objAluno =  this.model.obterPorNome(nome);
        if(objAluno === [] ) return alert('Nenhum aluno encontrado, tente novamente.');
        if(objAluno.length === 0 ) return alert('Aluno não encontrado.');
         
        this.view.getTemplate(objAluno);
    }
    limpaBusca(model, view){
      
        view.atualiza(model)
        
    }
}