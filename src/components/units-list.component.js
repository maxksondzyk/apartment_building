import React, {Component} from 'react';
import "../styles/units-list.styles.css"
import axios from "axios";
import {Link} from "react-router-dom";

export default class UnitsList extends Component {
    componentDidMount() {
        axios.get('http://localhost:5000/units/')
            .then(response => {
                this.setState({
                    units: response.data,
                    min: 10000,
                    max: 70000,
                    rooms: ['0', '1', '2'],
                    floors: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                    living: ['apt', 'storage']
                });
                if (this.state) {
                    let state = this.state
                    if (localStorage.getItem('min'))
                        state.min = localStorage.getItem('min')
                    if (localStorage.getItem('max'))
                        state.max = localStorage.getItem('max')
                    if (localStorage.getItem('rooms'))
                        state.rooms = JSON.parse(localStorage.getItem('rooms'))
                    if (localStorage.getItem('floors'))
                        state.floors = JSON.parse(localStorage.getItem('floors'))
                    if (localStorage.getItem('living'))
                        state.living = JSON.parse(localStorage.getItem('living'))
                    this.setState(state)
                }
            })
            .catch((error) => {
                console.log(error);
            })
        window.scrollTo(0, 0);

    }

    setMin(min) {
        this.setState({min: min});
        localStorage.setItem('min', min);
    }

    setMax(max) {
        this.setState({max: max});
        localStorage.setItem('max', max);
    }

    setRooms(val) {
        const checked = val.checked;
        const num = val.value;
        let rooms = this.state.rooms;
        if (checked) {
            rooms.push(num)
            this.setState({rooms: rooms})
            localStorage.setItem('rooms', JSON.stringify(rooms));
        } else {
            const index = rooms.indexOf(num);
            rooms.splice(index, 1)
            this.setState({rooms: rooms})
            localStorage.setItem('rooms', JSON.stringify(rooms));
        }

    }

    setFloors(val) {
        const checked = val.checked;
        const num = val.value;
        let floors = this.state.floors;
        if (checked) {
            floors.push(num)
            this.setState({floors: floors})
            localStorage.setItem('floors', JSON.stringify(floors));
        } else {
            const index = floors.indexOf(num);
            floors.splice(index, 1)
            this.setState({floors: floors})
            localStorage.setItem('floors', JSON.stringify(floors));
        }
    }

    setLiving(val) {
        const checked = val.checked;
        const type = val.value;
        let living = this.state.living;
        if (checked) {
            living.push(type)
            this.setState({living: living})
            localStorage.setItem('living', JSON.stringify(living));
        } else {
            const index = living.indexOf(type);
            living.splice(index, 1)
            this.setState({living: living})
            localStorage.setItem('living', JSON.stringify(living));
        }
    }

    getUnits() {
        let cards = [];
        let image;
        if (this.state) {
            this.state.units.forEach(unit => {
                if (this.state) {
                    switch (unit.planning) {
                        case "apt21":
                            image = "https://i.ibb.co/ZxP9DcS/apt21.png";
                            break;
                        case "apt22":
                            image = "https://i.ibb.co/n60rPFs/apt22.png";
                            break;
                        case "apt23":
                            image = "https://i.ibb.co/xzLzCqK/apt23.png";
                            break;
                        case "apt24":
                            image = "https://i.ibb.co/9nQ7080/apt24.png";
                            break;
                        case "apt25":
                            image = "https://i.ibb.co/bXWrByx/apt25.png";
                            break;
                        case "apt26":
                            image = "https://i.ibb.co/XbNXjsg/apt26.png";
                            break;
                        default:
                            image = "https://i.ibb.co/qJCnsNP/storage-unit.png";
                    }
                }
                unit.availability === true &&
                unit.price >= this.state.min &&
                unit.price <= this.state.max &&
                this.state.rooms.includes(unit.rooms.toString()) &&
                this.state.floors.includes(unit.floor.toString()) &&
                this.state.living.includes(unit.planning.toString().includes('apt') ? unit.planning.slice(0, 3) : unit.planning.toString()) &&
                cards.push(
                    <Link to={
                        {
                            pathname: '/unit',
                            state: unit,
                        }
                    } className={"unit-link"}>
                        <div className={"unit-list-info unit-card"}>
                            <div className={"unit-list-info-container"}>
                                {/*{unit.planning === "storage" ?*/}
                                {/*    <h1 className={"h1-num"}>Кладівна {unit._id}</h1>*/}
                                {/*    : <h1 className={"h1-num"}>Квартира {unit._id}</h1>*/}
                                {/*}*/}
                                <img className="unit-info-plan" src={image} alt={"Floor plan"}/>
                            </div>
                            <h5>{unit.floor} поверх</h5>
                            {
                                unit.rooms === 1 ? <h5>1-кімнатна</h5> : unit.rooms === 0 ? <h5>Студія</h5> :
                                    <h5>{unit.rooms} кімнати</h5>
                            }
                            <h5>{unit.total_area} кв.м.</h5>
                            <h5>{unit.price}$</h5>
                        </div>
                    </Link>
                );
            });
            return cards
        }
    }

    render() {
        let cards = [];
        if (this.state)
            cards = this.getUnits()

        return (
            <div className="row units-list-container">
                <div className={"units-filters col-md-3 container-fluid"}>
                    <section>

                        <section>
                            <section className="mb-4">

                                <h5 className="font-weight-bold mb-3">Ціна</h5>
                                <form>
                                    <div className="d-flex align-items-center mt-4 pb-1">
                                        <div className="md-form md-outline my-0">
                                            {this.state &&
                                            <input onChange={event => this.setMin(event.target.value)} type="number"
                                                   min="10000" max={this.state.max} step="5000" value={this.state.min}
                                                   className="form-control mb-0"/>}
                                            <label>Від</label>
                                        </div>
                                        <p className="px-2 mb-0 text-muted"> - </p>
                                        <div className="md-form md-outline my-0">
                                            {this.state &&
                                            <input onChange={event => this.setMax(event.target.value)} type="number"
                                                   min={this.state.min} max="70000" step="5000" value={this.state.max}
                                                   className="form-control mb-0"/>}
                                            <label>До</label>
                                        </div>
                                    </div>
                                </form>

                            </section>

                            <section className="mb-4">

                                <h5 className="font-weight-bold">Кімнати</h5>

                                <div className="form-check">
                                    {this.state && <input onChange={event => this.setRooms(event.target)} value={'0'}
                                                          checked={this.state.rooms.includes('0')} type="checkbox"
                                                          className="form-check-input filled-in"/>}
                                    <label className="form-check-label card-link-secondary">Студія</label>
                                </div>
                                <div className="form-check">
                                    {this.state &&
                                    <input onChange={event => this.setRooms(event.target)} type="checkbox" value={'1'}
                                           checked={this.state.rooms.includes('1')}
                                           className="form-check-input filled-in"/>}
                                    <label className="form-check-label card-link-secondary">1</label>
                                </div>
                                <div className="form-check">
                                    {this.state &&
                                    <input onChange={event => this.setRooms(event.target)} type="checkbox" value={'2'}
                                           checked={this.state.rooms.includes('2')}
                                           className="form-check-input filled-in"/>}
                                    <label className="form-check-label card-link-secondary">2</label>
                                </div>
                            </section>

                            <section className="mb-4">

                                <h5 className="font-weight-bold mb-3">Поверхи</h5>

                                <div className="form-check">
                                    {this.state && <input onChange={event => this.setFloors(event.target)} value={'1'}
                                                          checked={this.state.floors.includes('1')} type="checkbox"
                                                          className="form-check-input filled-in"/>}
                                    <label className="form-check-label card-link-secondary">1</label>
                                </div>
                                <div className="form-check">
                                    {this.state &&
                                    <input onChange={event => this.setFloors(event.target)} type="checkbox" value={'2'}
                                           checked={this.state.floors.includes('2')}
                                           className="form-check-input filled-in"/>}
                                    <label className="form-check-label card-link-secondary">2</label>
                                </div>
                                <div className="form-check">
                                    {this.state &&
                                    <input onChange={event => this.setFloors(event.target)} type="checkbox" value={'3'}
                                           checked={this.state.floors.includes('3')}
                                           className="form-check-input filled-in"/>}
                                    <label className="form-check-label card-link-secondary">3</label>
                                </div>

                                <div className="form-check">
                                    {this.state && <input onChange={event => this.setFloors(event.target)} value={'4'}
                                                          checked={this.state.floors.includes('4')} type="checkbox"
                                                          className="form-check-input filled-in"/>}
                                    <label className="form-check-label card-link-secondary">4</label>
                                </div>
                                <div className="form-check">
                                    {this.state &&
                                    <input onChange={event => this.setFloors(event.target)} type="checkbox" value={'5'}
                                           checked={this.state.floors.includes('5')}
                                           className="form-check-input filled-in"/>}
                                    <label className="form-check-label card-link-secondary">5</label>
                                </div>
                                <div className="form-check">
                                    {this.state &&
                                    <input onChange={event => this.setFloors(event.target)} type="checkbox" value={'6'}
                                           checked={this.state.floors.includes('6')}
                                           className="form-check-input filled-in"/>}
                                    <label className="form-check-label card-link-secondary">6</label>
                                </div>

                                <div className="form-check">
                                    {this.state && <input onChange={event => this.setFloors(event.target)} value={'7'}
                                                          checked={this.state.floors.includes('7')} type="checkbox"
                                                          className="form-check-input filled-in"/>}
                                    <label className="form-check-label card-link-secondary">7</label>
                                </div>
                                <div className="form-check">
                                    {this.state &&
                                    <input onChange={event => this.setFloors(event.target)} type="checkbox" value={'8'}
                                           checked={this.state.floors.includes('8')}
                                           className="form-check-input filled-in"/>}
                                    <label className="form-check-label card-link-secondary">8</label>
                                </div>
                                <div className="form-check">
                                    {this.state &&
                                    <input onChange={event => this.setFloors(event.target)} type="checkbox" value={'9'}
                                           checked={this.state.floors.includes('9')}
                                           className="form-check-input filled-in"/>}
                                    <label className="form-check-label card-link-secondary">9</label>
                                </div>
                                <div className="form-check">
                                    {this.state &&
                                    <input onChange={event => this.setFloors(event.target)} type="checkbox" value={'10'}
                                           checked={this.state.floors.includes('10')}
                                           className="form-check-input filled-in"/>}
                                    <label className="form-check-label card-link-secondary">10</label>
                                </div>
                            </section>
                            <section className="mb-4">

                                <h5 className="font-weight-bold mb-3">Тип</h5>

                                <div className="form-check">
                                    {this.state && <input onChange={event => this.setLiving(event.target)} value={'apt'}
                                                          checked={this.state.living.includes('apt')} type="checkbox"
                                                          className="form-check-input filled-in"/>}
                                    <label className="form-check-label card-link-secondary">Квартира</label>
                                </div>
                                <div className="form-check">
                                    {this.state &&
                                    <input onChange={event => this.setLiving(event.target)} type="checkbox"
                                           value={'storage'} checked={this.state.living.includes('storage')}
                                           className="form-check-input filled-in"/>}
                                    <label className="form-check-label card-link-secondary">Комора</label>
                                </div>
                            </section>

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
