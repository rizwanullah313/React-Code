// import logo from './logo.svg';
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
function App() {
  return (
    <div className="App">
     <Navbar dark color="primary">
       <div className="primary">
         <div className="container">
           <NavbarBrand href="/">RizwanUllah</NavbarBrand>
           </div>
       </div>
     </Navbar>
    </div>
  );
}

export default App;
