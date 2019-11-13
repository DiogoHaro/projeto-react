import  React, {Component} from 'react';
import api from './../../../services/api';
import './styles.css';
import {toast} from "react-toastify";
import { Link } from 'react-router-dom';
export default class AlterarCidade extends  Component{
    state = {
        cidade: {},
        estados:[],
        nome:'',
        estado: ''
    };

    async componentDidMount(){
        const { id } = this.props.match.params;

        const response = await api.get(`/cidades/${id}`);
        const sEstado = await api.get(`/estados/${response.data.estado}`);
        const oEstados = await api.get(`/estados`);

        this.setState({cidade: response.data,nome:response.data.nome,estados:oEstados.data.docs,estado:sEstado.data});
    }

    altera = async (id) => {
        const {nome,estado} = this.state;
        console.log(nome,estado);
        await api.put(`/cidades/${id}`, {
            nome: nome,
            estado:estado
        });
        toast.success("Registro Alterado com sucesso!");
        this.setState({nome:''});
    }
    render(){
        const { nome,cidade,estados } = this.state;
        return(
            <div className="cargo-info">
                <h2>Alterar</h2>
                <label htmlFor="nome">Nome:</label>
                <input type="text" name="nome" value={nome}
                       onChange={e => this.setState({nome: e.target.value})}/>

                <label htmlFor="valor">Estado:</label>
                <select onChange={e => this.setState({estado: e.target.value})}>
                    <option value=''>Selecione</option>
                    {estados.map(estado =>(
                        <option key={estado._id} selected={estado._id == cidade.estado} value={estado._id}>{estado.nome}</option>
                    ))}
                </select>
                <button onClick={()=>{this.altera(cidade._id)}}>Alterar</button>
                <Link to={`/cidades`}>Voltar</Link>
            </div>
        )
    }
}