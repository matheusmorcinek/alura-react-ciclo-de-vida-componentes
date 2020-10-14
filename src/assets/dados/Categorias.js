export default class Categorias {

    constructor() {

        this.categorias = [];
        this._inscritos = [];
    }

    inscrever(func) {
        this._inscrever.push(func);
    }

    notificar(){

        this._inscritos.forEach(func => func(this.categorias));
    }

    adicionarCategoria(novaCategoria) {

        this.categorias.push(novaCategoria);
    }


}