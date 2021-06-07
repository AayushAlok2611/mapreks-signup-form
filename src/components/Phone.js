import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

export class Phone extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value:'',
        };
      }
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };


 
  render() {
    const { values, handleChange } = this.props;

    return ( 
      <div style={styling}>
 
      <MuiThemeProvider>
        <React.Fragment>
         
            <h2>USER REGISTRATION</h2><br />
            <h3>Step 4 of 4</h3>
            <TextField
              hintText="Enter Your Username"
              floatingLabelText="Create Username"
              onChange={handleChange('username')}
              defaultValue={values.username}
              
              
            />
            <br />
            <PhoneInput
            placeholder="Enter phone number"
            value={this.state.value}
            onChange={this.handleChange}
            
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

export default Phone;
