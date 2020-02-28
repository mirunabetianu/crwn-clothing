import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignOutPage from './pages/sign-in-and-up/sign-in-and-up.component'
import {auth} from './firebase/firebase.utils';

class App extends React.Component {
    constructor()
    {
      super();

      this.state = {
        currentUser: null
      }
    }

    unsubscribeFromAuth = null;

    componentDidMount(){
      this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
        this.setState({currentUser: user});
        console.log(user);
      });
    }

    componentWillUnmount()
    {
      this.unsubscribeFromAuth();
    }

    render()
    {
      return (
        <div>
            <Header></Header>
            <Switch>
              <Route exact path='/' component={HomePage}></Route>
              <Route exact path='/shop' component={ShopPage}></Route>
              <Route path='/signin' component={SignInAndSignOutPage}></Route>
            </Switch>
    
        </div>
      );
    }
}

export default App;
