import  React, {Component} from 'react';
import api from './../../../services/api';
import './styles.css';
import { Link } from 'react-router-dom';
export default class DetalhesFuncionario extends  Component{
    state = {
        funcionario: {},
        cidade:'',
        cargo:''
    };

    async componentDidMount(){
        const { id } = this.props.match.params;

        const response = await api.get(`/funcionarios/${id}`);
        const cidades = await api.get(`/cidades/${response.data.cidade}`);
        console.log(cidades);
        const cargos = await api.get(`/cargos/${response.data.cargo}`);
        console.log(cargos)
        this.setState({funcionario: response.data,cidade:cidades.data,cargo:cargos.data});
    }
    render(){
        const { funcionario,cidade,cargo } = this.state;

        return(
            <div className="funcionario-info">
                <h1>Funcionário:{funcionario.nome}</h1>
                <h1>Cidade:{cidade.nome}</h1>
                <h1>Cargo:{cargo.nome}</h1>
                <Link to={`/funcionarios`}>Voltar</Link>
            </div>
        )
    }
}