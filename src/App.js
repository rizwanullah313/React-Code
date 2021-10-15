// import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
function App() {
  return (
    <div>
      <Navbar dark color="black">

        <div className="primary">
          <div className="container">

            <NavbarBrand href="/">Karachi Resturant</NavbarBrand>
          </div>
        </div>

      </Navbar>
      <Menu />
    </div>

  );
}

export default App;
