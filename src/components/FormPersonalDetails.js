import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Axios} from './Axios';

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    Axios({
      method: 'PUT',
      url: '/api/users/create',
      data: { 
        _id:this.props.values._id,
        name: this.props.values.username, 
        password: this.props.values.password,
        idProof:this.props.values.acard,
        contactNumber:this.props.values.number,
        email:this.props.values.email }
    }).then((resp) => {
      console.log(resp);
      this.props.nextStep();
    }).catch(err => {
      console.log(err.response.data);
      //Error  display (To be made later)
    })

  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  //Add validation of email and password
  render() {
    const { values, handleChange } = this.props;
    return (
      <div style={styling}>

      <MuiThemeProvider>
        <React.Fragment>
         
            <h2>USER REGISTRATION</h2><br />
            <h3>Step 2 of 5</h3>
            <TextField
              hintText="Enter Your Username"
              floatingLabelText="Create Username"
              onChange={handleChange('username')}
              defaultValue={values.username}
              
              
            />
            
            <br />
            <TextField
              hintText="Enter Your Password"
              floatingLabelText="Create Password"
              onChange={handleChange('password')}
              defaultValue={values.password}
            />
            <br />
            <TextField
              hintText="Confirm Password"
              floatingLabelText="Confirm Password"
              onChange={handleChange('password')}
              defaultValue={values.password}
            />
            <br />
            <TextField
              hintText="Enter Your Email"
              floatingLabelText="Email"
              onChange={handleChange('email')}
              defaultValue={values.email}
            />
            <br />
            <TextField
              hintText="Enter Your Phone Number"
              floatingLabelText="Phone Number"
              onChange={handleChange('number')}
              defaultValue={values.number}
            />
            <br />
            <TextField
              hintText="Enter Your Aadhar Number"
              floatingLabelText="Aadhar Number"
              onChange={handleChange('acard')}
              defaultValue={values.acard}
            />
            <br />

          <RaisedButton
            
            label="Back"
            primary={true}
            style={styles.button}
            onClick={this.back}
          />
            <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
      </div>
    );
  }
}
const styles = {
  button: {
    margin:15
  }
}
const styling ={
  paddingLeft:500,
  paddingTop:70  
}

export default FormPersonalDetails;
