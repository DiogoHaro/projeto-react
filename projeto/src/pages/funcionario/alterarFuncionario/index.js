import  React, {Component} from 'react';
import api from './../../../services/api';
import './styles.css';
import {toast} from "react-toastify";
import { Link } from 'react-router-dom';
export default class AlterarFuncionario extends  Component{
    state = {
        funcionario: {},
        cidades:[],
        cargos:[],
        nome:'',
        cidade: '',
        cargo:''
    };

    async componentDidMount(){
        const { id } = this.props.match.params;

        const response = await api.get(`/funcionarios/${id}`);
        const sCidade = await api.get(`/cidades/${response.data.cidade}`);
        const sCargo = await api.get(`/cargos/${response.data.cargo}`);
        const oCidades = await api.get(`/cidades`);
        const oCargos = await api.get(`/cargos`);

        this.setState({
            funcionario: response.data,
            nome:response.data.nome,
            cidades:oCidades.data.docs,
            cargos:oCargos.data.docs,
            cidade:sCidade.data,
            cargo:sCargo.data
        });
    }

    altera = async (id) => {
        const {nome,cidade,cargo} = this.state;
        await api.put(`/funcionarios/${id}`, {
            nome: nome,
            cidade:cidade,
            cargo:cargo
        });
        toast.success("Registro Alterado com sucesso!");
        this.setState({nome:''});
    }
    render(){
        const { nome,cidades,cargos,funcionario } = this.state;
        return(
            <div className="cargo-info">
                <h2>Alterar</h2>
                <label htmlFor="nome">Nome:</label>
                <input type="text" name="nome" value={nome}
                       onChange={e => this.setState({nome: e.target.value})}/>

                <label >Cidade:</label>
                <select onChange={e => this.setState({cidade: e.target.value})}>
                    <option value=''>Selecione</option>
                    {cidades.map(cidade =>(
                        <option key={cidade._id} selected={cidade._id == funcionario.cidade} value={cidade._id}>{cidade.nome}</option>
                    ))}
                </select>
                <label >Cidade:</label>
                <select onChange={e => this.setState({cargo: e.target.value})}>
                    <option value=''>Selecione</option>
                    {cargos.map(cargo =>(
                        <option key={cargo._id} selected={cargo._id == funcionario.cargo} value={cargo._id}>{cargo.nome}</option>
                    ))}
                </select>
                <button onClick={()=>{this.altera(funcionario._id)}}>Alterar</button>
                <Link to={`/funcionarios`}>Voltar</Link>
            </div>
        )
    }
}