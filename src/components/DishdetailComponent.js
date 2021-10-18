import React, { Component } from 'react';
// import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetails extends Component {
    // constructor(props) {
    //     super(props);

    // }

    renderDish(dish) {
        if (dish != null)
            return (
                <></>
            );
        else
            return (
                <div></div>
            );
    }
    renderComments(array) {
        if (array.length !== 0) {
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {array.map(comment => (
                        <ul className="list-unstyled">
                            <li>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author} , {comment.date}</p>
                            </li>
                        </ul>
                    )
                    )}
                </div>
            );
        }
        else {
            return (
                <div></div>
            );

        }
    }
    render() {
        let dish;
        if (this.props.selectedDish) {
            dish = (
                <div className="row">
                    {/* {this.renderDish(this.props.selectedDish)} */}
                    {this.renderComments(this.props.selectedDish.comments)}
                </div>
            )
        } else {
            dish = <div></div>
        }
        return (
            <div className="container">
                {dish}
            </div>
        );
    }



}

export default DishDetails;