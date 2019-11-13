import  React, {Component} from 'react';
import api from '../../../services/api';
import './styles.css';
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';
export default class Formulario extends  Component{
    state = {
        estado: {},
        nome:''
    };


    insere = async () => {
       const {nome} = this.state;
        await api.post(`/estados`, {
            nome: nome
        });
        toast.success("Estado inserido com sucesso!");
        this.setState({nome:''});
    }
    render(){

        return(
            <div className="estado-info">
                <h2>Cadastro</h2>

                    <label for="nome">Nome:</label>
                    <input type="text" name="nome" value={this.state.nome}  onChange={e => this.setState({nome: e.target.value}) }/>
                    <button onClick={this.insere}>Inserir</button>
                     <Link to={`/`}>Voltar</Link>
            </div>
        )
    }
}