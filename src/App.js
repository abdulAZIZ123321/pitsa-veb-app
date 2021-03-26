import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './assests/styles/main.scss';

import Sidebar from './containers/Sidebar'; 

import Resto from './pages/Resto';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';



function App() {
  return (

    <Router>
        <div className="father">
     
     
        <Sidebar/>

        
      



        <div className="content">
          <Switch>
          <Route exact path="/" component={Resto}/>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/settings" component={Settings}/>
            
        </Switch>
        </div>
       
        </div>


        

    </Router>
  
  );
}

export default App;
