import  React, {Component} from 'react';
import api from '../../../services/api';
import './styles.css';
export default class Detalhes extends  Component{
    state = {
        estado: {},
    };

    async componentDidMount(){
        const { id } = this.props.match.params;

        const response = await api.get(`/estados/${id}`);

        this.setState({estado: response.data});
    }
    render(){
        const { estado } = this.state;

        return(
            <div className="estado-info">
                <h1>{estado.nome}</h1>
            </div>
        )
    }
}