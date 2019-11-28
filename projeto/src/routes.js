import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Detalhes from "./pages/estado/detalhes";
import Formulario from "./pages/estado/formulario"
import Alterar from "./pages/estado/alterar";

import FormularioEstado from './components/FormularioEstado';

import CargoList from "./pages/cargo/listagem";
import DetalhesCargo from "./pages/cargo/detalhesCargo";
import FormularioCargo from "./pages/cargo/formularioCargo";
import AlterarCargo from "./pages/cargo/alterarCargo";

import CidadeList from "./pages/cidade/listagemCidade"
import FormularioCidade from "./pages/cidade/formularioCidade";
import DetalhesCidade from "./pages/cidade/detalhesCidade";
import AlterarCidade from "./pages/cidade/alterarCidade";

import FuncionarioList from "./pages/funcionario/listagemFuncionario"
import FormularioFuncionario from "./pages/funcionario/formularioFuncionario";
import DetalhesFuncionario from "./pages/funcionario/detalhesFuncionario";
import AlterarFuncionario from "./pages/funcionario/alterarFuncionario";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/estados/:id" component={Detalhes} />
            <Route exact path="/incluir" component={FormularioEstado} />
            <Route exact path="/alterar/:id" component={Alterar} />

            <Route exact path="/cargos" component={CargoList} />
            <Route exact path="/cargos/incluir" component={FormularioCargo} />
            <Route exact path="/cargos/:id" component={DetalhesCargo} />
            <Route exact path="/cargos/alterar/:id" component={AlterarCargo} />

            <Route exact path="/cidades" component={CidadeList} />
            <Route exact path="/cidades/incluir" component={FormularioCidade} />
            <Route exact path="/cidades/:id" component={DetalhesCidade} />
            <Route exact path="/cidades/alterar/:id" component={AlterarCidade} />

            <Route exact path="/funcionarios" component={FuncionarioList} />
            <Route exact path="/funcionarios/incluir" component={FormularioFuncionario} />
            <Route exact path="/funcionarios/:id" component={DetalhesFuncionario} />
            <Route exact path="/funcionarios/alterar/:id" component={AlterarFuncionario} />
        </Switch>
    </BrowserRouter>
)

export default Routes;