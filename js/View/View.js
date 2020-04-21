class View{
    constructor(seletor){
        this.seletor = blg.$(seletor);
    }
    getTemplate(){
        throw new Error('Cada classe que extende da view deve implementar o metodo getTemplate()')
    }
}