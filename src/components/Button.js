import React from 'react'


const Button = (props) => {
    const {btnHandler="", btnColor="blue", btnText="Button"} = props;

    console.log("btn props ::",props)

    return (<button onClick={btnHandler} style={{backgroundColor: btnColor}}>{btnText}</button>)
}

export default Button;