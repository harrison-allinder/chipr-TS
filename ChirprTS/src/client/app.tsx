import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { isSwitchStatement } from 'typescript';
import Home from './views/home';
import Details from './views/details';
import Admin from './views/admin';
import Compose from './views/compose';

const App: React.FC<AppProps> = () => {
    return (
        <BrowserRouter>
       <Switch>
           <Route exact path="/">
               <Home />
           </Route>
           <Route exact path="/details/:id">
               <Details />
           </Route>
           
           <Route exact path="/admin/:id">
               <Admin />
           </Route>

           <Route exact path="/compose">
               <Compose />
           </Route>
       </Switch>
        </BrowserRouter>
    );
}

interface AppProps {}

export default App;
