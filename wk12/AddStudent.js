import axios from "axios";
import React from "react";

class AddStudent extends React.Component {
    state = {
        name: ""
    }

    handleChange = event => {
        this.setState({
            name: event.target.value
        });
    };
    handleSubmit = event => {

        event.preventDefault();
        
        // the package to post
        const user = {
            name: this.state.name
        };

        this.props.add(user);

        axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
        console.log(res.data);
      })


    };

    render() { 
        return ( 
            <div>
                <form on onSubmit={this.handleSubmit}  name={this.state.name} >
                    <label>
                        Person Name:
                        <input type="text" name="name" on onChange={this.handleChange} />
                    </label>
                    <button type="submit">Add</button>
                </form>
            </div>
         );
    }
}
 
export default AddStudent;