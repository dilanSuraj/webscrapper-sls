import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';
import ProtectedRoute from './components/auth/ProtectedRoute';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
         <Navbar></Navbar>
         <Switch>
           <ProtectedRoute exact path="/" component={Dashboard}/>
           <ProtectedRoute path="/project/:id" component={ProjectDetails}/>
           <Route path="/signin" component={SignIn}/>
           <Route path="/signup" component={SignUp}/>
           <ProtectedRoute path="/createproject" component={CreateProject}/>
         </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
