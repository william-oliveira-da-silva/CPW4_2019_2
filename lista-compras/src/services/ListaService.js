import axios from 'axios';
import itens from './itens';

const LIMITE_DE_ITENS_RETORNADOS = 5;

export default class ListaService {

    constructor() {
        this.listas = [];
        this.api = axios.create({
            baseURL: 'https://secret-plateau-95576.herokuapp.com/listas'
        });

    }

    async recuperarListas() {
        let resposta = await this.api.get('/');
        this.listas = resposta.data;
        return this.listas;
    }

    async salvar(lista) {
        await this.api.post('/', lista);
    }

    recuperarItens (termo){
        /**
         * Se não tem nenhum termo
         * ou seja nenhum filtro de consuta,
         * então retorna uma lista vazia
         */
        if (!termo){
            return [];
        }


        termo = termo.toLowerCase();
        let itensFiltrados = itens.filter(item => {
            let descricao = item.descricao.toLowerCase();
            return descricao.includes(termo);
        });
        if(itensFiltrados.length > LIMITE_DE_ITENS_RETORNADOS){
            return itensFiltrados.slice(0, LIMITE_DE_ITENS_RETORNADOS)
        }

        return itensFiltrados;
    }

}


