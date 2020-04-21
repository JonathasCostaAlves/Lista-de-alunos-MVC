class FormAdicionarAlunoView extends View{
    constructor(seletor){      
        super(seletor);
        this.seletor.innerHTML = this.getTemplate();
    }
    getTemplate(){
        return `
        <form action="#" class="form-inline" >
					<div class="form-group">		   
						<input type="text" id="nome" required placeholder="Nome do aluno" class="form-control" >
					</div>		
					<div class="form-group"> 
						<input type="number" id="nota1" required min="0" max="10" placeholder="Nota 1" class="form-control" >	
					</div>
					<div class="form-group"> 	  
						<input type="number" id="nota2" required min="0" max="10" placeholder="Nota 2" class="form-control" >	
					</div>  
					<div class="form-group">
						<input type="number" id="nota3" required min="0" max="10" placeholder="Nota 3" class="form-control" >	
					</div>  
					<div class="form-group">
						<input  type="number" id="nota4" required min="0" max="10" placeholder="Nota 4" class="form-control" >	
						</div>
					
					<button type="submit" class="btn btn-primary">Adicionar</button>	
		</form>
        `
    }
}