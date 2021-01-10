import React from 'react';

import '../signin/signin_style.scss';
import FormInput from '../form_input/form_input_component';
import CustomButton from '../custom-button/custom-button_component';

class SignIn extends React.Component {
    constructor () {
        super();

        this.state = {
            email:'',
            password:''
        }
    }

handleChnage = (event) => {
    const {name, value} = event.target;

    this.setState({ [name]: value});
}

handleSubmit = (event)=>{
    event.preventDefault();

    this.setState({email:'', password:''})
}

    render () {
        return (
            <div className='sign-in'>
                <h2 className='title'>I Already Have An Account</h2>
                <span className='subtitle'>Sign In Using Email And Password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={this.state.email} 
                        handleChange={this.handleChnage}
                        label="Email"
                        required 
                    />

                    <FormInput 
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        handleChange={this.handleChnage}
                        label="Password"
                        required 
                    />

                    <CustomButton type='submit'> sign in </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;