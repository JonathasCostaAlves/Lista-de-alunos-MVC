// var alunos=['Daniel', 'Maria', 'Jose','Daniel'].map( aluno => new Aluno(aluno));

var alunos=[];
// console.log(alunos)
// alunos[0].adicionarNotas(5,7,8,9);
// alunos[1].adicionarNotas(5,5,5,5);
// alunos[2].adicionarNotas(5,2,8,8);
// alunos[3].adicionarNotas(10,10,10,10);

var listaAlunos = new ListaAlunos(alunos);

var listaAlunosView = new ListaAlunosView('#listaAlunos');

var listaAlunosControler = new ListaAlunosController(listaAlunos, listaAlunosView);

listaAlunosView.atualiza(listaAlunos);

var formAdicionarAlunoView = new FormAdicionarAlunoView('#form-adiciona')

var formAdicionarAlunoController = new FormAdicionarAlunoController(listaAlunos,formAdicionarAlunoView );

var formBuscaView = new FormBuscaView('#listaAlunos');
var formBuscaController = new FormBuscaController(listaAlunos,formBuscaView)



blg.$('#form-adiciona form').addEventListener('submit', function(e){
    e.preventDefault();
    let nome = blg.$('#nome').value;
    let notas= [];
    let i = 1;
   
    while(blg.$('#nota'+ i)){
        notas.push( parseFloat(blg.$('#nota'+i).value));
        i++;
    }
    
    listaAlunosControler.adicionarAluno(nome, notas);  
    formAdicionarAlunoController.limpar()   
});

blg.$('#form-busca form').addEventListener('submit', function(e){
    e.preventDefault();
    let $form =blg.$('#buscaNome').value;
    formBuscaController.pegaNome($form);
})

blg.$('#form-exibir button').addEventListener('click', function(){
    formBuscaController.limpaBusca(listaAlunos,listaAlunosView )
})

