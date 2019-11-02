import React, {Component} from 'react';
import api from './../../services/api';
import './styles.css';

export default  class Main extends  Component{
    state = {
        estados: []
    }
    componentDidMount() {
        this.loadEstados();
    }

    loadEstados = async () => {
        const response = await api.get('/estados');

        this.setState({estados: response.data.docs});
    }

    render(){
        const {estados} = this.state;
        return (
            <div className="estado-list">
                {estados.map(estado => (
                    <article key={estado._id}>
                        <strong>{estado.nome}</strong>
                    </article>
                ))}
            </div>
        );
    }
}