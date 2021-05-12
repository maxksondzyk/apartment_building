import React, { Component } from 'react';
import "../styles/units-list.styles.css"
import axios from "axios";
import {Link} from "react-router-dom";
export default class UnitsList extends Component {
    componentDidMount() {
        axios.get('http://localhost:5000/units/')
            .then(response => {
                this.setState({ units: response.data, min:10000,max:70000,rooms:['0','1','2'],floors:['0','1','2','3','4','5','6','7','8','9','10'], living:['apt','storage'] });
            })
            .catch((error) => {
                console.log(error);
            })
    }
    setMin(min){
        this.setState({min:min});
    }
    setMax(max){
        this.setState({max:max});
    }
    setRooms(val){
        const checked = val.checked;
        const num = val.value;
        let rooms = this.state.rooms;
        if(checked) {
            rooms.push(num)
            this.setState({rooms: rooms})
        }
        else {
            const index = rooms.indexOf(num);
            rooms.splice(index,1)
            this.setState({rooms: rooms})
        }
    }
    setFloors(val){
        const checked = val.checked;
        const num = val.value;
        let floors = this.state.floors;
        if(checked) {
            floors.push(num)
            this.setState({floors: floors})
        }
        else {
            const index = floors.indexOf(num);
            floors.splice(index,1)
            this.setState({floors: floors})
        }
    }
    setLiving(val){
        const checked = val.checked;
        const type = val.value;
        let living = this.state.living;
        if(checked) {
            living.push(type)
            this.setState({living: living})
        }
        else {
            const index = living.indexOf(type);
            living.splice(index,1)
            this.setState({living: living})
        }
    }

    getUnits(){
        let cards = [];
        if(this.state) {
            this.state.units.forEach(unit => {
                unit.availability === true &&
                unit.price >= this.state.min &&
                unit.price <= this.state.max &&
                this.state.rooms.includes(unit.rooms.toString()) &&
                this.state.floors.includes(unit.floor.toString()) &&
                this.state.living.includes(unit.planning.toString().includes('apt')? unit.planning.slice(0,3) : unit.planning.toString()) &&
                cards.push(
                    <Link to={
                        {
                            pathname: '/unit',
                            state: unit,
                        }
                    } style={{textDecoration: 'none'}}>
                        <div className={"unit-info unit-card"}>
                            <div className={"container unit-info-container"}>
                                {unit.planning === "storage" ?
                                    <h1 className={"h1-num"}>Storage unit {unit._id}</h1>
                                    : <h1 className={"h1-num"}>Apartment {unit._id}</h1>
                                }
                            </div>
                            <h4>{unit.floor} floor</h4>
                            {
                                unit.rooms === 1 ? <h4>1 room</h4> :  unit.rooms === 0 ? <h4>studio</h4> : <h4>{unit.rooms} rooms</h4>
                            }
                            <h4>{unit.total_area} sqft</h4>
                            <h4>{unit.price}$</h4>
                        </div>
                    </Link>
                );
            });
            return cards
        }
    }

    render() {
        let cards = [];
        if(this.state)
            cards = this.getUnits()

        return (
            <div className="row units-list-container">
                <div className={"units-filters col-md-4 rounded container-fluid"}>
                    <section>

                        <section>

                            <h5>Filters</h5>
                            <section className="mb-4">

                                <h6 className="font-weight-bold mb-3">Price</h6>
                                <form>
                                    <div className="d-flex align-items-center mt-4 pb-1">
                                        <div className="md-form md-outline my-0">
                                            {this.state && <input onChange={event => this.setMin(event.target.value)} type="number" min="10000" max={this.state.max} step="5000" placeholder={10000} className="form-control mb-0"/>}
                                            <label>Min</label>
                                        </div>
                                        <p className="px-2 mb-0 text-muted"> - </p>
                                        <div className="md-form md-outline my-0">
                                            {this.state && <input onChange={event => this.setMax(event.target.value)} type="number" min={this.state.min} max="70000" step="5000" placeholder={70000} className="form-control mb-0"/>}
                                            <label>Max</label>
                                        </div>
                                    </div>
                                </form>

                            </section>

                            <section className="mb-4">

                                <h6 className="font-weight-bold mb-3">Rooms</h6>

                                <div className="form-check">
                                    {this.state && <input onChange={event => this.setRooms(event.target)} value={'0'} checked={this.state.rooms.includes('0')} type="checkbox" className="form-check-input filled-in"/>}
                                    <label className="form-check-label small text-uppercase card-link-secondary">Studio</label>
                                </div>
                                <div className="form-check">
                                    {this.state && <input onChange={event => this.setRooms(event.target)} type="checkbox" value={'1'} checked={this.state.rooms.includes('1')} className="form-check-input filled-in" />}
                                    <label className="form-check-label small text-uppercase card-link-secondary">1</label>
                                </div>
                                <div className="form-check">
                                    {this.state && <input onChange={event => this.setRooms(event.target)} type="checkbox" value={'2'} checked={this.state.rooms.includes('2')} className="form-check-input filled-in" />}
                                    <label className="form-check-label small text-uppercase card-link-secondary">2</label>
                                </div>
                            </section>

                            <section className="mb-4">

                                <h6 className="font-weight-bold mb-3">Floors</h6>

                                <div className="form-check">
                                    {this.state && <input onChange={event => this.setFloors(event.target)} value={'1'} checked={this.state.floors.includes('1')} type="checkbox" className="form-check-input filled-in"/>}
                                    <label className="form-check-label small text-uppercase card-link-secondary">1</label>
                                </div>
                                <div className="form-check">
                                    {this.state && <input onChange={event => this.setFloors(event.target)} type="checkbox" value={'2'} checked={this.state.floors.includes('2')} className="form-check-input filled-in" />}
                                    <label className="form-check-label small text-uppercase card-link-secondary">2</label>
                                </div>
                                <div className="form-check">
                                    {this.state && <input onChange={event => this.setFloors(event.target)} type="checkbox" value={'3'} checked={this.state.floors.includes('3')} className="form-check-input filled-in" />}
                                    <label className="form-check-label small text-uppercase card-link-secondary">3</label>
                                </div>

                                <div className="form-check">
                                    {this.state && <input onChange={event => this.setFloors(event.target)} value={'4'} checked={this.state.floors.includes('4')} type="checkbox" className="form-check-input filled-in"/>}
                                    <label className="form-check-label small text-uppercase card-link-secondary">4</label>
                                </div>
                                <div className="form-check">
                                    {this.state && <input onChange={event => this.setFloors(event.target)} type="checkbox" value={'5'} checked={this.state.floors.includes('5')} className="form-check-input filled-in" />}
                                    <label className="form-check-label small text-uppercase card-link-secondary">5</label>
                                </div>
                                <div className="form-check">
                                    {this.state && <input onChange={event => this.setFloors(event.target)} type="checkbox" value={'6'} checked={this.state.floors.includes('6')} className="form-check-input filled-in" />}
                                    <label className="form-check-label small text-uppercase card-link-secondary">6</label>
                                </div>

                                <div className="form-check">
                                    {this.state && <input onChange={event => this.setFloors(event.target)} value={'7'} checked={this.state.floors.includes('7')} type="checkbox" className="form-check-input filled-in"/>}
                                    <label className="form-check-label small text-uppercase card-link-secondary">7</label>
                                </div>
                                <div className="form-check">
                                    {this.state && <input onChange={event => this.setFloors(event.target)} type="checkbox" value={'8'} checked={this.state.floors.includes('8')} className="form-check-input filled-in" />}
                                    <label className="form-check-label small text-uppercase card-link-secondary">8</label>
                                </div>
                                <div className="form-check">
                                    {this.state && <input onChange={event => this.setFloors(event.target)} type="checkbox" value={'9'} checked={this.state.floors.includes('9')} className="form-check-input filled-in" />}
                                    <label className="form-check-label small text-uppercase card-link-secondary">9</label>
                                </div>
                                <div className="form-check">
                                    {this.state && <input onChange={event => this.setFloors(event.target)} type="checkbox" value={'10'} checked={this.state.floors.includes('10')} className="form-check-input filled-in" />}
                                    <label className="form-check-label small text-uppercase card-link-secondary">10</label>
                                </div>
                            </section>
                            <section className="mb-4">

                                <h6 className="font-weight-bold mb-3">Living</h6>

                                <div className="form-check">
                                    {this.state && <input onChange={event => this.setLiving(event.target)} value={'apt'} checked={this.state.living.includes('apt')} type="checkbox" className="form-check-input filled-in"/>}
                                    <label className="form-check-label small text-uppercase card-link-secondary">Apartment</label>
                                </div>
                                <div className="form-check">
                                    {this.state && <input onChange={event => this.setLiving(event.target)} type="checkbox" value={'storage'} checked={this.state.living.includes('storage')} className="form-check-input filled-in" />}
                                    <label className="form-check-label small text-uppercase card-link-secondary">Storage</label>
                                </div>
                            </section>
                            {/*<button className={"btn-dark rounded"}>Apply</button>*/}

                        </section>

                    </section>
                </div>
                <div className={"row col-md-8"}>
                    {cards}
                </div>
            </div>
        );
    }
}
