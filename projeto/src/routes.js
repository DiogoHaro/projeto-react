import React from 'react';

import  { BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/main';
import Detalhes from "./pages/estado/detalhes";
import Formulario from "./pages/estado/formulario"
import Alterar from "./pages/estado/alterar";
import CargoList from "./pages/cargo/listagem";
import DetalhesCargo from "./pages/cargo/detalhesCargo";
import FormularioCargo from "./pages/cargo/formularioCargo";
import AlterarCargo from "./pages/cargo/alterarCargo";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/estados/:id" component={Detalhes}/>
            <Route exact path="/incluir" component={Formulario}/>
            <Route exact path="/alterar/:id" component={Alterar}/>

            <Route exact path="/cargos" component={CargoList}/>
            <Route exact path="/cargos/incluir" component={FormularioCargo}/>
            <Route exact path="/cargos/:id" component={DetalhesCargo}/>
            <Route exact path="/cargos/alterar/:id" component={AlterarCargo}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;