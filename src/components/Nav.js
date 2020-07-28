import React from 'react';
import{BrowserRouter as Router, 
    Switch,
    Route,
    Link} from 'react-router-dom';
import Accueil from './Accueil';
import Admin from './Admin';
import Page404 from './Page404';

const Nav = () => {
    return ( 
        <Router>
            <nav className="navbar navbar-expand navbar-light bg-danger">
                <a className="navbar-brand" to="/">Cinémois</a>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/Accueil">Séances</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/Admin307317">Admin</Link>
                    </li>
                </ul>
            </div>
            </nav>
            <Switch>
                <Route exact path="/">
                    <Accueil />
                </Route>
                <Route path="/Accueil">
                    <Accueil />
                </Route>
                <Route path="/Admin307317">
                    <Admin />
                </Route>
                <Route path="*">
                    <Page404 />
                </Route>
            </Switch>
        </Router>
     );
}
export default Nav;