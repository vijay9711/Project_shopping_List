import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        //imageUrl: "https://picsum.photos/800",
        tags: ['tag1', 'tag2', 'tag3']
    };

    render() {

        return (
            <div>
                <ul>
                    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}

                </ul>
            </div>
        );
    }
}
export default Counter;