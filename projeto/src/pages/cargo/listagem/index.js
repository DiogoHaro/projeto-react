import React, {Component} from 'react';
import api from './../../../services/api';
import './styles.css';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";

export default  class Listagem extends  Component{
    state = {
        cargo: [],
        cargoInfo:{},
        page:1,
    }

    componentDidMount() {
        this.loadcargo();
    }

    loadcargo = async (page = 1) => {
        const response = await api.get(`/cargos?page=${page}`);

        const { docs, ...cargoInfo } = response.data;


        this.setState({cargo: docs, cargoInfo, page});
    }

    prevPage = () => {
        const { page, cargoInfo} = this.state;

        if(page === 1) return;

        const pageNumber = page-1;
        this.loadcargo(pageNumber);
    }

    nextPage = () => {
        const { page, cargoInfo } = this.state;
        if(page === cargoInfo.pages) return;

        const pageNumber = page + 1;

        this.loadcargo(pageNumber);
    }

    removecargo = (id) => {
        const { cargo } = this.state;
        const usersFilter = cargo.filter(value => {
            return value._id !== id;
        });
        this.setState({cargo: usersFilter});
    }

    deletacargo = (id) => {
        this.removecargo(id);
        toast.success("cargo excluído com sucesso!");
        api.delete(`/cargos/${id}`);
    }

    render(){
        const {cargo, page, cargoInfo} = this.state;
        return (
            <div className="cargo-list">
                <nav>
                    <ul>
                        <li><Link to={`/funcionarios`}>Funcionários</Link></li>
                        <li><Link to={`/cargos`}>Cargos</Link></li>
                        <li><Link to={`/cidades`}>Cidades</Link></li>
                        <li><Link to={`/`}>Estados</Link></li>
                    </ul>
                </nav>
                <Link to={`/cargos/incluir`}>Incluir</Link>
                {cargo.map(cargo => (
                    <article key={cargo._id}>
                        <strong>Cargo:{cargo.nome}</strong>
                        <p><strong>Salário:{cargo.salario}</strong></p>
                        <Link to={`/cargos/${cargo._id}`}>Acessar</Link>
                        <button  onClick={() => this.deletacargo(cargo._id)}>Deletar</button>
                        <Link to={`/cargos/alterar/${cargo._id}`}>Alterar</Link>
                    </article>
                ))}
                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === cargoInfo.pages} onClick={this.nextPage}>Próximo</button>
                </div>
            </div>
        );
    }
}