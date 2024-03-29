import React from 'react'
import './register.styles.css'

export default ({onUserNameChange, onEmailChange, onPasswordChange, onRegister, userErr, emailErr, passwordErr}) => {

    return (
        <div className= "Signin center form-block">
           
            <h1 className="title lobster-font">Register</ h1>

            <input id="username" className="input textinput" onChange={onUserNameChange} placeholder="username" type="text"></input> 
            <br />
            <label id="username-validator" className="validator">{userErr}</label>

            <br />

            <input id="email" className="input textinput" onChange={onEmailChange} placeholder="email" type="email"></input> 
            <br />
            <label id="email-validator" className="validator">{emailErr}</label>

            <br />

            <input id="password" className="input textinput" onChange={onPasswordChange} placeholder="password" type="password"></input> 
            <br />
            <label id="password-validator" className="validator">{passwordErr}</label>

            <br />
            <br />
            <button id="register" className="buton registerButon sil-font" onClick={onRegister} type="submit">Register</button>
        </div>
    )
}