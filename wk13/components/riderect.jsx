import React from 'react';

const Redirect = (props) => {
    const handleClick = () => {
        const { history } = props;
        if (history){
            history.push("/");
        }else{
            console.log("History not found");
        }
    }

    return (
      <div>
        <p>Redirect page here</p>
        <button onClick={handleClick}>Riderect</button>
      </div>
    );
};

export default Redirect;



