import  React, {Component} from 'react';
import api from './../../../services/api';
import './styles.css';
import { Link } from 'react-router-dom';
export default class DetalhesCargo extends  Component{
    state = {
        cargo: {},
    };

    async componentDidMount(){
        const { id } = this.props.match.params;

        const response = await api.get(`/cargos/${id}`);

        this.setState({cargo: response.data});
    }
    render(){
        const { cargo } = this.state;

        return(
            <div className="cargo-info">
                <h1>Cargo:{cargo.nome}</h1>
                <h1>Salário: R$ {cargo.salario}</h1>
                <Link to={`/cargos`}>Voltar</Link>
            </div>

        )
    }
}