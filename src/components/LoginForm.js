import React from 'react';
import Navbar from './Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// Form component based on React Bootstrap documentation on GitHub - https://react-bootstrap.github.io/forms/input-group/
// h3, body, container, and card styled in default generated CSS file - App.css
export default class LoginForm extends React.Component {

  render(){
  return (
    <div className='container'>
     <br></br>
     <br></br> 
    <Navbar />
     <br></br>
     <br></br> 
     <div className='card w-75'>
     <h3 className='container-fluid'>Log In</h3>
     <br></br>
     <br></br>
      <div className='form-control'>
    <Form>
      <Form.Group className="mb-3" controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="username" placeholder="Enter Username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form> 
    </div> 
    </div>
    <br></br>
    <br></br>
    </div>//end container
  );//end return
}//end render
}//end export
