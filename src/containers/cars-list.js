import React, { Component } from 'react';
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
import {selectCar} from "../actions/index";


export class CarsList extends Component {

    showList() {
        return this.props.cars.map((car) => {
            return (
                <li onClick={() => this.props.selectCar(car)} key={car.id}>{car.name}</li>
            );
        });

    }

    render() {
        return (
            <ol>
                {this.showList()}
            </ol>
        );
    }


}

function mapStateToProps(state) {
    return {
        cars: state.cars
    };
}
function mathDispathToProps(dispatch) {
    return bindActionCreators({selectCar:selectCar} , dispatch);
}


export default connect(mapStateToProps, mathDispathToProps)(CarsList);