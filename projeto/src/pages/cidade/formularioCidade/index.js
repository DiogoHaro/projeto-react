import  React, {Component} from 'react';
import api from './../../../services/api';
import './styles.css';
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';
export default class FormularioCidade extends  Component{
    state = {
        cidade: {},
        estados:[],
        nome:'',
        estado: ''
    };

    componentDidMount() {
        this.loadEstados();
    }

    loadEstados = async (page = 1) => {
        const response = await api.get(`/estados/all`);

        this.setState({estados: response.data});
    }


    insere = async () => {
        const {nome,estado} = this.state;
        await api.post(`/cidades`, {
            nome: nome,
            estado:estado
        });
        toast.success("Registro inserido com sucesso!");
        this.setState({nome:''});
    }
    render(){
        const {estados} = this.state;
        return(
            <div className="cidade-info">
                <h2>Cadastro</h2>

                <label for="nome">Cidade:</label>
                <input type="text" name="nome" value={this.state.nome}  onChange={e => this.setState({nome: e.target.value}) }/>
                <label for="valor">Estado:</label>
                <select onChange={e => this.setState({estado: e.target.value}) }>
                    <option value=''>Selecione</option>
                {estados.map(estado => (
                    <option key={estado._id} value={estado._id}>{estado.nome}</option>
                ))}
                </select>
                <button onClick={this.insere}>Inserir</button>
                <Link to={`/cidades`}>Voltar</Link>
            </div>
        )
    }
}