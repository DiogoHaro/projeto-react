import React, {Component} from 'react';
import api from './../../../services/api';
import './styles.css';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";

export default  class ListagemCidade extends  Component{
    state = {
        cidade: [],
        cidadeInfo:{},
        page:1
    }

    componentDidMount() {
        this.loadCidade();
    }



    loadCidade = async (page = 1) => {
        const response = await api.get(`/cidades?page=${page}`);

        const { docs, ...cidadeInfo } = response.data;

        this.setState({cidade: docs, cidadeInfo, page});
    }

    prevPage = () => {
        const { page, cidadeInfo} = this.state;

        if(page === 1) return;

        const pageNumber = page-1;
        this.loadCidade(pageNumber);
    }

    nextPage = () => {
        const { page, cidadeInfo } = this.state;
        if(page === cidadeInfo.pages) return;

        const pageNumber = page + 1;

        this.loadCidade(pageNumber);
    }

    removecidade = (id) => {
        const { cidade } = this.state;
        const usersFilter = cidade.filter(value => {
            return value._id !== id;
        });
        this.setState({cidade: usersFilter});
    }

    deletacidade = (id) => {
        this.removecidade(id);
        toast.success("Registo excluído com sucesso!");
        api.delete(`/cidades/${id}`);
    }

    render(){
        const {cidade, page, cidadeInfo} = this.state;
        return (
            <div className="cidade-list">
                <nav>
                    <ul>
                        <li><Link to={`/funcionarios`}>Funcionários</Link></li>
                        <li><Link to={`/cargos`}>Cargos</Link></li>
                        <li><Link to={`/cidades`}>Cidades</Link></li>
                        <li><Link to={`/`}>Estados</Link></li>
                    </ul>
                </nav>
                <Link to={`/cidades/incluir`}>Incluir</Link>
                <h1>Cidades</h1>
                {cidade.map(cidade => (
                    <article key={cidade._id}>
                        <strong>{cidade.nome}</strong>
                        <Link to={`/cidades/${cidade._id}`}>Detalhes</Link>
                        <button  onClick={() => this.deletacidade(cidade._id)}>Deletar</button>
                        <Link to={`/cidades/alterar/${cidade._id}`}>Alterar</Link>
                    </article>
                ))}
                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === cidadeInfo.pages} onClick={this.nextPage}>Próximo</button>
                </div>
            </div>
        );
    }
}