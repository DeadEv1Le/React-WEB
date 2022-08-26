import { render } from "@testing-library/react";
import {useState, useEffect} from 'react';

import React from 'react';
import ReactTypingEffect from "react-typing-effect";
const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

export default class esim extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      fullName: null,
      email: null,
      password: null,
      errors: {
        fullName: '',
        email: '',
        password: '',
      }
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'fullName': 
        errors.fullName = 
          value.length < 5
            ? 'Full Name must be at least 5 characters long!'
            : '';
        break;
      case 'email': 
        errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'password': 
        errors.password = 
          value.length < 8
            ? 'Password must be at least 8 characters long!'
            : '';
        break;
      default:
        break;
    }

    this.setState({errors, [name]: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm(this.state.errors)) {
      console.info('Valid Form')
    }else{
      console.error('Invalid Form')
    }
  }

  render() {
    const [toggleMask, setToggleMask] = useState("") //For Mask Access
    const [toggleQr, setToggleQr] = useState("") // For Qr Access
    const [saveMask, setSaveMask] = useState("")

    useEffect(() => {
      axios.get("http://localhost:4000/home").then(function(response){
          setHome(response.data)
      }) 
  })
  
  
  
  
  async function postName(e) {
    e.preventDefault()
    try {
        await axios.post("http://localhost:4000/post_name",{
            toggleMask, toggleQr, saveMask
        })
  
        
    }catch (error) {
        console.log(error)
  }
  }
    const {errors} = this.state;
    return (
        <>
        <div className="headerBlock1">
                <p className="title">
                   My Skills
                </p>
                <div className="ba"></div>
                <p className="subtitle"><ReactTypingEffect text = {["WEB Developer", "UX & UI Designer", "Freelancer"]} speed = {100}  typingDelay={10} eraseDelay = {1100} eraseSpeed = {80} /></p>
        </div>
      <div className='wrapper'>
        <div className='form-wrapper'>
          <h2>Send Me A Message</h2>
          <form onSubmit={postName}  noValidate>
            <div className='fullName'>
              <label htmlFor="fullName">Full Name</label>
              <input type='text' name='fullName' onChange={this.handleChange} noValidate />
              {errors.fullName.length > 0 && 
                <span className='error'>{errors.fullName}</span>}
            </div>
            <div className='email'>
              <label htmlFor="email">Email</label>
              <input type='email' name='email' onChange={this.handleChange} noValidate />
              {errors.email.length > 0 && 
                <span className='error'>{errors.email}</span>}
            </div>
            <div className='password'>
              <label htmlFor="password">Password</label>
              <input type='password' name='password' onChange={this.handleChange} noValidate />
              {errors.password.length > 0 && 
                <span className='error'>{errors.password}</span>}
            </div>
            <div className='submit'>
              <button>Create</button>
            </div>
          </form>
        </div>
      </div>
      </>
    );
  }
}
