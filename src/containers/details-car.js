import React, { Component } from 'react';
import {connect} from "react-redux";


export class DetailCar extends Component {

    render() {
        if(!this.props.car)
        {
            return (<p>...</p>);
        }
        return (
            <div>
                <h2>{this.props.car.name}</h2>
            </div>
        );


    }
}

function mapStateToProps(state) {
    return {
        car: state.activeCar
    };
}
export default connect(mapStateToProps)(DetailCar);