import axios from 'axios';
import React, { Component, useState } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import 'react-phone-number-input/style.css'


function OtpVerify(props) {
	axios.defaults.withCredentials = true;

	const [ error, setError ] = useState({
		error: '',
		success: ''
	});
	const { values, handleChange } = props;
	const back = (e) => {
		e.preventDefault();
		props.prevStep();
	};


	const confirmOtp = (e) => {
		axios
			.post('http://localhost:8888/verifyOTP', {
				phone: `${values.phone}`,
				hash: `${values.hash}`,
				otp: `${values.otp}`,
				withCredentials: true
			})
			.then(function(res) {
				console.log(res.data);
				window.location.reload();
			})
			.catch(function(error) {
				console.log(error.response.data);
				setError({ ...error, error: error.response.data.msg });
			});
            e.preventDefault();
		    props.nextStep();
	};
	return (
		<div >
			<div >
				<div style={styling}>
				<MuiThemeProvider>
                <React.Fragment>
					<h2>MOBILE VERIFICATION</h2><br />
                	<h3>Step 5 of 5</h3>
					<div>{error.error}</div>
					<div>{error.success}</div>
					<div>Enter One Time Password:</div>
					<div >
						<input
							type="tel"
							values={values.otp}
							onChange={handleChange('otp')}
							placeholder="Enter the 6 digits OTP"
						/>
					</div>
					
					<RaisedButton
                    label="Back"
                    primary={true}
                    style={styles.button}
                    onClick={back}
                    />
					<RaisedButton
                    label="Confirm OTP"
                    primary={true}
                    style={styles.button}
                    onClick={confirmOtp}
                    />
					</React.Fragment>

					</MuiThemeProvider>
				</div>
			</div>
		</div>
	);
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


export default OtpVerify;