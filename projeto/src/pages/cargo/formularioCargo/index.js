import  React, {Component} from 'react';
import api from './../../../services/api';
import './styles.css';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
export default class FormularioCargo extends  Component{
    state = {
        cargo: {},
        nome:'',
        salario: 0
    };


    insere = async () => {
        const {nome,salario} = this.state;
        await api.post(`/cargos`, {
            nome: nome,
            salario:salario
        });
        toast.success("cargo inserido com sucesso!");
        this.setState({nome:'',salario:0});
    }
    render(){

        return(
            <div className="cargo-info">
                <h2>Cadastro</h2>

                <label for="nome">Cargo:</label>
                <input type="text" name="nome" value={this.state.nome}  onChange={e => this.setState({nome: e.target.value}) }/>
                <label for="valor">Salário:</label>
                <input type="text" name="valor" value={this.state.salario}  onChange={e => this.setState({salario: e.target.value}) }/>
                <button onClick={this.insere}>Inserir</button>
                <Link to={`/cargos`}>Voltar</Link>
            </div>
        )
    }
}