import axios from "axios";
import React from "react";
import DeleteAction from './DeleteAction';
import AddStudent from './AddStudent';

class UserList  extends React.Component {
    state = { 
        users: []
     };
     componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
            this.setState({
                users: res.data
            });
        });
     };

     update = user => {
        this.setState({
            users: this.state.users.concat(user)
        })
     }

    render() { 
        return (
            <>
             <AddStudent add={this.update}/>
                <ul>
                    {this.state.users.map((user,i) => <li key={i}>{user.name}<br/><DeleteAction id={user.id}/></li>)}
                </ul>
            </>
            );
    }
}
 

export default UserList ;