import React, {Component} from 'react';
import api from './../../services/api';
import './styles.css';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";

export default  class Main extends  Component{
    state = {
        estados: [],
        estadoInfo:{},
        page:1,
    }

    componentDidMount() {
        this.loadEstados();
    }

    loadEstados = async (page = 1) => {
        const response = await api.get(`/estados?page=${page}`);

        const { docs, ...estadoInfo } = response.data;


        this.setState({estados: docs, estadoInfo, page});
    }

    prevPage = () => {
        const { page, estadoInfo} = this.state;

        if(page === 1) return;

        const pageNumber = page-1;
        this.loadEstados(pageNumber);
    }

    nextPage = () => {
        const { page, estadoInfo } = this.state;
        if(page === estadoInfo.pages) return;

        const pageNumber = page + 1;

        this.loadEstados(pageNumber);
    }

     removeEstado = (id) => {
        const { estados } = this.state;
        const usersFilter = estados.filter(value => {
            return value._id !== id;
        });
         this.setState({estados: usersFilter});
    }

    deletaEstado = (id) => {
        this.removeEstado(id);
        toast.success("Estado excluído com sucesso!");
        api.delete(`/estados/${id}`);
    }

    render(){
        const {estados, page, estadoInfo} = this.state;
        return (
            <div className="estado-list">
                <nav>
                    <ul>
                        <li><Link to={`/funcionarios`}>Funcionários</Link></li>
                        <li><Link to={`/cargos`}>Cargos</Link></li>
                        <li><Link to={`/cidades`}>Cidades</Link></li>
                        <li><Link to={`/`}>Estados</Link></li>
                    </ul>
                </nav>
                <Link to={`/incluir`}>Incluir</Link>
                {estados.map(estado => (
                    <article key={estado._id}>
                        <strong>{estado.nome}</strong>
                        <Link to={`/estados/${estado._id}`}>Acessar</Link>
                        <button  onClick={() => this.deletaEstado(estado._id)}>Deletar</button>
                        <Link to={`/alterar/${estado._id}`}>Alterar</Link>
                    </article>
                ))}
                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === estadoInfo.pages} onClick={this.nextPage}>Próximo</button>
                </div>
            </div>
        );
    }
}