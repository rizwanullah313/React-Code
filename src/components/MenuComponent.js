import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { Media } from 'reactstrap'
import './Menu.css';
class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };

    }
    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 mt-5">
                   <Media tag="li" className="lsi">
                       <Media left middle>
                           <Media object src={dish.image} alt={dish.name}/>
                           </Media>
                           <Media body className="ml-5">
                               <Media heading>{dish.name}</Media>
                               <p>{dish.description}</p>
                       </Media>
                   </Media>
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                    <Media list>
                        {menu}
                    </Media>
                </div>
            </div>
        );
    }
}

// componentName.propTypes = {

// }

export default Menu