import  React, {Component} from 'react';
import api from './../../../services/api';
import './styles.css';
import {toast} from "react-toastify";
export default class AlterarCargo extends  Component{
    state = {
        cargo: {},
        nome: '',
        salario:0
    };

    async componentDidMount(){
        const { id } = this.props.match.params;

        const response = await api.get(`/cargos/${id}`);
        this.setState({cargo: response.data,nome:response.data.nome,salario:response.data.salario});
    }

    altera = async (id) => {
        const {nome,salario} = this.state;
        console.log(nome,salario);
        await api.put(`/cargos/${id}`, {
            nome: nome,
            salario:salario
        });
        toast.success("cargo Alterado com sucesso!");
        this.setState({nome:'',salario:0});
    }
    render(){
        const { nome,cargo,salario } = this.state;
        return(
            <div className="cargo-info">
                <h2>Alterar</h2>
                <label htmlFor="nome">Nome:</label>
                <input type="text" name="nome" value={nome}
                       onChange={e => this.setState({nome: e.target.value})}/>

                <label htmlFor="valor">Salário:</label>
                <input type="text" name="valor" value={salario}
                       onChange={e => this.setState({salario: e.target.value})}/>
                <button onClick={()=>{this.altera(cargo._id)}}>Alterar</button>
            </div>
        )
    }
}