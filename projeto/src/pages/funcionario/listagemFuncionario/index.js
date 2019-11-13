import React, {Component} from 'react';
import api from './../../../services/api';
import './styles.css';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";

export default  class ListagemFuncionario extends  Component{
    state = {
        funcionario: [],
        funcionarioInfo:{},
        page:1
    }

    componentDidMount() {
        this.loadFuncionario();
    }



    loadFuncionario = async (page = 1) => {
        const response = await api.get(`/funcionarios?page=${page}`);

        const { docs, ...funcionarioInfo } = response.data;

        this.setState({funcionario: docs, funcionarioInfo, page});
    }

    prevPage = () => {
        const { page, funcionarioInfo} = this.state;

        if(page === 1) return;

        const pageNumber = page-1;
        this.loadFuncionario(pageNumber);
    }

    nextPage = () => {
        const { page, funcionarioInfo } = this.state;
        if(page === funcionarioInfo.pages) return;

        const pageNumber = page + 1;

        this.loadFuncionario(pageNumber);
    }

    removefuncionario = (id) => {
        const { funcionario } = this.state;
        const usersFilter = funcionario.filter(value => {
            return value._id !== id;
        });
        this.setState({funcionario: usersFilter});
    }

    deletafuncionario = (id) => {
        this.removefuncionario(id);
        toast.success("Registo excluído com sucesso!");
        api.delete(`/funcionarios/${id}`);
    }

    render(){
        const {funcionario, page, funcionarioInfo} = this.state;
        return (
            <div className="funcionario-list">
                <nav>
                    <ul>
                        <li><Link to={`/funcionarios`}>Funcionários</Link></li>
                        <li><Link to={`/cargos`}>Cargos</Link></li>
                        <li><Link to={`/cidades`}>Cidades</Link></li>
                        <li><Link to={`/`}>Estados</Link></li>
                    </ul>
                </nav>
                <Link to={`/funcionarios/incluir`}>Incluir</Link>
                <h1>Funcionários</h1>
                {funcionario.map(funcionario => (
                    <article key={funcionario._id}>
                        <strong>{funcionario.nome}</strong>
                        <Link to={`/funcionarios/${funcionario._id}`}>Detalhes</Link>
                        <button  onClick={() => this.deletafuncionario(funcionario._id)}>Deletar</button>
                        <Link to={`/funcionarios/alterar/${funcionario._id}`}>Alterar</Link>
                    </article>
                ))}
                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === funcionarioInfo.pages} onClick={this.nextPage}>Próximo</button>
                </div>
            </div>
        );
    }
}