import React, {Component} from 'react';
import CarsList from "../containers/cars-list";
import DetailCar from "../containers/details-car";


export class WebPage extends Component {
    render() {
        return (
            <div>
                <h3>Cars:</h3>
                <CarsList />
                <hr />
                <h3>Details:</h3>
                <DetailCar/>
            </div>
        );
    }
}

