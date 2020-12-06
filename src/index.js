import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';


function LightDark(){
    const [Light, Dark] = React.useState(true);
    const color = Light ? 'bgLight' : 'bgDark';
    const textColor = Light ? 'Light' : 'Dark';
    const buttonColor = Light ? 'lightBtn' : 'darkBtn';
    return (
        <div className={`main_container ${color}`}>
            <h1 className={textColor}>Room is {Light ? 'Light' : 'Dark'}</h1>
            <br/>
            <div className={buttonColor} onClick={() => Dark(!Light)}>
                <div className="switch"></div>
            </div>
        </div>
    )
}

ReactDOM.render(<LightDark/>, document.querySelector('#root'));