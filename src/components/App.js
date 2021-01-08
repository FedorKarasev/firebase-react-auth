import React from 'react'
import Signup from '../components/Signup'
import Dashboard from '../components/Dashboard'
import Login from '../components/Login'
import ForgotPassword from '../components/ForgotPassword'
import UpdateProfile from '../components/UpdateProfile'
import { Container } from 'react-bootstrap'
import { AuthProvider } from '../context/AuthContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <div className="w-100" style={{ maxWidth: '400px'}}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={ Dashboard } />
              <Route path="/signup" component={ Signup } />
              <Route path="/login" component={ Login } />
              <Route path="/forgot-password" component={ ForgotPassword } />
              <PrivateRoute path="/update-profile" component={ UpdateProfile } />
            </Switch>
          </AuthProvider>
        </Router>
        
      </div>
    </Container>
  );
}

export default App;
