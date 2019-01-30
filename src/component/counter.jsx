import React, { Component } from 'react';
import '../App.css';

class CounterClass extends Component {
    /* state = {
        value: this.props.counter.value,
    };
    handleClick = () => {
        console.log("Increment clicked", this);
        this.setState({ value: this.state.value + 1 })
    }
    handleDecrement = () => {
        console.log("Decrement clicked");
        if (this.state.value > 0) {
            this.setState({ value: this.state.value - 1 });
        }
        else {
            console.log(null);
        }

    } */
    render() {
        let classes = this.getBadgeClasses();

        return (
            <div>
                {/*<img src={this.state.imageUrl} alt="" /> */}
                <span className="cl">{this.props.counter.Item}</span>
                <button type="button" onClick={() => this.props.onIncrement(this.props.counter)} className=" btn btn-secondary btn-sm">Increment</button>
                <button type="button" onClick={() => this.props.onDecrement(this.props.counter)} className="btn btn-secondary btn-sm m-3 btn-fixed">Decrement</button>
                <span style={{ fontSize: 20 }} className={classes}>{this.formatCount()}</span>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-s m-3 ">Delete List</button>

                {/*   <button onClick={() => this.props.onAdd(this.props.counter.id)} className="btn btn-primary btn-sm m-3 ">Add List</button> */}

            </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;

    }

}

export default CounterClass;