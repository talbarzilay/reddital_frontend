import actions from './actionEnum';

/** The inital state of the reducer, will return by callig reducer with no arguments */
const initialState = {username:"",email:"",password:"" , userErr:" ",emailErr:" ",passwordErr:" "};

// ------------------------------------------- validators -------------------------------------------

  /**
   * @returns an error mesage for a the username, empty string if valid
   */
   const validateUsername = username => {
    if (username === "") {
      return "* please provide a username";
    }

    return "";
  };

   /**
   * @returns an error mesage for a the email, empty string if valid
   */
  const validateEmail = email => {
    if (email=== "") {
      return "* please provide an email"
    }

    return "";
  };

   /**
   * @returns an error mesage for a the password, empty string if valid
   */
  const validatePassword = password => {
    if (password=== "") {
      return "* please provide a password"
    }
    
    if (password.length < 6) {
      return "* please provide a password of length 6 atleast"
    }

    return "";
  };




// ------------------------------------------- reducer methods -------------------------------------------


/**
 * @returns the payload to send for the reducer function, depending on the type of action
 */
const getPayload = () => ({
    USERNAME_CHANGE   : newVal  =>  ({type: actions.USERNAME_CHANGE , payload: {newVal}}),
    EMAIL_CHANGE      : newVal  =>  ({type: actions.EMAIL_CHANGE , payload: {newVal}}),
    PASSWORD_CHANGE   : newVal  =>  ({type: actions.PASSWORD_CHANGE , payload: {newVal}}),
  });


/**
 * the register reducer
 * @param {*} state the current state
 * @param {*} param1 the action to perform, that was recived from getPayload.
 * @returns 
 */
const reducer = ( state=initialState, {type, payload} = {}) => {

    switch (type) {

      case actions.USERNAME_CHANGE: // username has changed
        return {...state, username: payload.newVal, userErr: validateUsername(payload.newVal)};

      case actions.EMAIL_CHANGE:  // email has changed
        return {...state, email: payload.newVal, emailErr:validateEmail(payload.newVal)};

      case actions.PASSWORD_CHANGE:  // password has changed
        return {...state, password: payload.newVal, passwordErr:validatePassword(payload.newVal)};

      default: 
        return state;
    }
  };
  


export { reducer, getPayload };