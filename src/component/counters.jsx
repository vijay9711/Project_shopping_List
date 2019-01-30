import React, { Component } from 'react';
import Counter from './counter';
import '../App.css';

class Counters extends Component {
    state = {
        counters: [],
        Item: '',

    }
    changeItem = (event) => {

        const It = event.target.value;
        this.setState({ Item: It })
        console.log('Item is', It);
    }
    /*  add = () => {
         this.setState({ counter: id + 1, value })
     } */
    onIncrement = (counter) => {
        const counters = [...this.state.counters];
        const i = counters.indexOf(counter);
        counter[i] = { ...counter };
        counters[i].value++;
        this.setState({ counters });
        console.log("Increment val", counter);


    };
    onDecrement = (counter) => {
        const counters = [...this.state.counters];
        const i = counters.indexOf(counter);
        counter[i] = { ...counter };
        counters[i].value--;

        if (counters[i].value < 0) {
            counters[i].value = 0;
        }
        this.setState({ counters });
        console.log("value", counters[i].value)


    };
    reset = () => {
        const counter = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({ counter });

    };
    handleDelete = (counterId) => {

        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters: counters });
        console.log("Delete clicked ", counterId)
    };

    add = (event) => {
        event.preventDefault();
        if (event.target.value === '') {
            window.alert("Enter the name of Item");
        }
        else {
            const counterLen = this.state.counters.length - 1;
            const counters = this.state.counters.slice();
            counters.push({ id: counterLen + 2, value: 0, Item: event.target.value });
            this.setState({ counters: counters });
            this.setState({ Item: '' });
            console.log("Add num", counters);
        }




    };
    clearList = () => {
        this.setState({ counters: [] });
    }
    Note = () => {
        const LenofList = this.state.counters.length;
        console.log("Length", LenofList)
        if (LenofList === 0) {
            return (
                <p>Add List</p>
            );
        }
        else {
            return (
                <p>Your List</p>
            );
        }
    }
    render() {
        return (
            <div className="form">
                <form >
                    {<button onClick={this.add} value={this.state.Item} className="btn btn-primary btn-sm">Add List</button>}
                    <input type="text" className="in" value={this.state.Item} onChange={this.changeItem} required></input>
                    <button type="button" onClick={this.reset} className="btn btn-secondary btn-sm m-3">Reset</button>
                    <button type="button" onClick={this.clearList} className="btn btn-secondary btn-sm m3">Clear List</button>
                    <p>{this.Note()}</p>
                    {this.state.counters.map(counter => <Counter
                        key={counter.id}
                        counter={counter}
                        onDelete={this.handleDelete}
                        onAdd={this.add}
                        onIncrement={this.onIncrement}
                        onDecrement={this.onDecrement}
                    />)}

                </form>
            </div >
        );
    }
}

export default Counters;