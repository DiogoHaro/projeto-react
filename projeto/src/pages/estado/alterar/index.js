import  React, {Component} from 'react';
import api from '../../../services/api.js';
import './styles.css';
import {toast} from "react-toastify";
import { Link } from 'react-router-dom';
export default class Alterar extends  Component{
    state = {
        estado: {},
        nome: ''
    };

    async componentDidMount(){
        const { id } = this.props.match.params;

        const response = await api.get(`/estados/${id}`);
        this.setState({estado: response.data,nome:response.data.nome});
    }

    altera = async (id) => {
        const {nome} = this.state;
        console.log(nome);
        await api.put(`/estados/${id}`, {
            nome: nome
        });
        toast.success("Estado Alterado com sucesso!");
        this.setState({nome:''});
    }
    render(){
        const { nome,estado } = this.state;
        return(
            <div className="estado-info">
                <h2>Alterar</h2>
                <label htmlFor="nome">Nome:</label>
                <input type="text" name="nome" value={this.state.nome}
                       onChange={e => this.setState({nome: e.target.value})}/>
                <button onClick={()=>{this.altera(estado._id)}}>Alterar</button>
                <Link to={`/`}>Voltar</Link>
            </div>
        )
    }
}