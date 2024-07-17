import React from 'react';

class Hello extends React.Component {
    render() {
        return React.createElement('div', null, `Hello~ ${this.props.who}`);  // type, props, children
    }
}

const element = React.createElement('h1', {className: 'greet'}, "Hi~");

const Ex03Hello = (props) => {
    return React.createElement(
        React.Fragment,
        null,
        React.createElement(Hello, {who: props.who}, null),
        element
    );
}

export default Ex03Hello;