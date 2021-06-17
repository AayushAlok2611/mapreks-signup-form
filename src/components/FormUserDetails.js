import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import 'react-phone-number-input/style.css'
import {Axios} from './Axios';

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    Axios({
      method: 'POST',
      url: '/api/users/verify',
      data: { userId: this.props.values.userid, licenseCode: this.props.values.licensecode },
    }).then((resp) => {
      console.log(resp);
      this.props.nextStep();
    }).catch(err => {
      console.log(err);
      //Error  display (To be made later)
    })

  };
  render() {
    const { values, handleChange } = this.props;

    return (
      <div style={styling}>
      <MuiThemeProvider>
        <React.Fragment>
            <h2>USER REGISTRATION</h2><br />
            <h3>Step 1 of 5</h3>
            <TextField
              hintText="Enter Your User ID"
              floatingLabelText="User ID"
              onChange={handleChange('userid')}
              defaultValue={values.userid}
              
            />
            <br />
            <TextField
              hintText="Enter Your License Code"
              floatingLabelText="License Code"
              onChange={handleChange('licensecode')}
              defaultValue={values.licensecode}
              
            />
            
            <br />
            
          
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
export default FormUserDetails;
