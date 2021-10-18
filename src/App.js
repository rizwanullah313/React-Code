// import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import {DISHES} from './shared/MenuDishesh';
//import { render } from '@testing-library/react';
import { Component } from 'react';
// import DishDetails from './components/DishdetailComponent';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      dishes:DISHES
    };
  }

    render(){
      return (
        <div>
          <Navbar dark color="black">
    
            <div className="primary">
              <div className="container">
    
                <NavbarBrand href="/">Karachi Resturant</NavbarBrand>
              </div>
            </div>
    
          </Navbar>
          <Menu dishes={this.state.dishes} />
          {/* <DishDetails dishes={this.state.dishes} /> */}
        </div>
    
      );
    }
}

export default App;
