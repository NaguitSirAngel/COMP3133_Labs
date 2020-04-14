import axios from "axios";
import React from "react";

class DeleteAction extends React.Component {
    state = {  }

    handleSubmit = event => {
        event.preventDefault();

        axios.delete(`https://jsonplaceholder.typicode.com/users/${this.props.id}`)
      .then(res => {
        console.log(res);   
      })

    };

    render() { 
        return ( <button onClick={this.handleSubmit}>Delete</button>  );
    }
}
 
export default DeleteAction;