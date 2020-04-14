import React from 'react';

class College extends React.Component {
    render() { 
    return ( <p>College name <b>{this.props.name}</b> with address <b>{this.props.number}</b></p>  );
    }
}
 
export default College;