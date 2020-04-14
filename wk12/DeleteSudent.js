import axios from "axios";
import React from "react";

class DeleteStudent extends React.Component {
    state = { 
        id: ""
     }

    handleChange = event => {
        this.setState({
            id: event.target.value
        });
    };
    handleSubmit = event => {
        event.preventDefault();

        axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
      .then(res => {
        console.log(res);   
      })

    };

    deleteAction = (prop) =>{
        axios.post(`https://jsonplaceholder.typicode.com/users/${prop}`)
        .then(res => {
          console.log(res);   
        })
    }

    render() { 
        return ( <div>
            <form on onSubmit={this.handleSubmit}>
                <label>
                    Person ID:
                    <input type="text" name="id" on onChange={this.handleChange} />
                </label>
                <button type="submit">Delete</button>
            </form>
        </div>  );
    }
}
 
export default DeleteStudent;