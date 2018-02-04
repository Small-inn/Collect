import React, { Component } from 'react';

class HellowWorld extends Component {
    render(){
        return (
            <div>
                Hello {this.props.name}
            </div>
        )
    }
}

export default HellowWorld;
