import  React, {Component} from 'react';
import api from './../../../services/api';
import './styles.css';
import { Link } from 'react-router-dom';
export default class DetalhesCidade extends  Component{
    state = {
        cidade: {},
        estado:''
    };

    async componentDidMount(){
        const { id } = this.props.match.params;

        const response = await api.get(`/cidades/${id}`);
        const estados = await api.get(`/estados/${response.data.estado}`);
        this.setState({cidade: response.data,estado:estados.data});
    }
    render(){
        const { cidade,estado } = this.state;

        return(
            <div className="cidade-info">
                <h1>Cidade:{cidade.nome}</h1>
                <h1>Estado:{estado.nome}</h1>
                <Link to={`/cidades`}>Voltar</Link>
            </div>
        )
    }
}