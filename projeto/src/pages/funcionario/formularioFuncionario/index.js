import  React, {Component} from 'react';
import api from './../../../services/api';
import './styles.css';
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';
export default class FormularioFuncionario extends  Component{
    state = {
        funcionario: {},
        cidades:[],
        cargos:[],
        nome:'',
        cidade: '',
        cargo:''
    };

    componentDidMount() {
        this.loadCidades();
    }

    loadCidades = async (page = 1) => {
        const response = await api.get(`/cidades/all`);
        const oCargos  = await api.get(`/cargos/all`);


        this.setState({cidades: response.data,cargos:oCargos.data});
    }


    insere = async () => {
        const {nome,cidade,cargo} = this.state;
        await api.post(`/funcionarios`, {
            nome: nome,
            cidade:cidade,
            cargo: cargo
        });
        toast.success("Registro inserido com sucesso!");
        this.setState({nome:''});
    }
    render(){
        const {cidades,cargos} = this.state;
        return(
            <div className="funcionario-info">
                <h2>Cadastro</h2>

                <label for="nome">Funcionário:</label>
                <input type="text" name="nome" value={this.state.nome}  onChange={e => this.setState({nome: e.target.value}) }/>
                <label>Cidade:</label>
                <select onChange={e => this.setState({cidade: e.target.value}) }>
                    <option value=''>Selecione</option>
                    {cidades.map(cidade => (
                        <option key={cidade._id} value={cidade._id}>{cidade.nome}</option>
                    ))}
                </select>
                <label>Cargo:</label>
                <select onChange={e => this.setState({cargo: e.target.value})}>
                    <option value=''>Selecione</option>
                    {cargos.map(cargo => (
                        <option key={cargo._id} value={cargo._id}>{cargo.nome}</option>
                    ))}
                </select>
                <button onClick={this.insere}>Inserir</button>
                <Link to={`/funcionarios`}>Voltar</Link>
            </div>
        )
    }
}