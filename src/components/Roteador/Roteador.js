import React, { Component } from 'react';
import {BrowserRouter, Route,Switch} from "react-router-dom";
import ShowItens from '../itensComponents/ShowItens'
import RemoveItens from '../itensComponents/RemoveItens'
import CreateItens from '../itensComponents/CreateItens'
import UpdateItens from '../itensComponents/UpdateItens'
class Roteador extends Component {
  //Dica: Renderize aqui um uma NavBar e a Switch com as rotas
  render() {
    return (
    	<BrowserRouter>
    		<div>  
	    		<Switch>
	    			<Route path="/showitens" component={ShowItens}/>
            <Route path="/removeitem" component={RemoveItens}/>    			
            <Route path="/createitens" component={CreateItens}/>
            <Route path="/updateitens" component={UpdateItens}/>			
	    		</Switch>
    		</div>
    	</BrowserRouter>
    );
  }
}

export default Roteador;
