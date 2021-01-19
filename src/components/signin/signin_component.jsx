import React from 'react';

import '../signin/signin_style.scss';
import FormInput from '../form_input/form_input_component';
import CustomButton from '../custom-button/custom-button_component';

import {auth, SignInWithGoogle} from '../../firebase/firebase_utiles';

class SignIn extends React.Component {
    constructor () {
        super();

        this.state = {
            email:'',
            password:''
        }
    }

handleChange = (event) => {
    const {name, value} = event.target;

    this.setState({ [name]: value});
}

handleSubmit = async event=>{
    event.preventDefault();

    const {email,password} = this.state;

    try{
        await auth.signInWithEmailAndPassword(email,password);
        this.setState({email:'', password:''})
    }
    catch (error){
        console.log(error);
    }
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
                        handleChange={this.handleChange}
                        label="Email"
                        required 
                    />

                    <FormInput 
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label="Password"
                        required 
                    />

                    <div className='button'>
                        <CustomButton type='submit'> sign in </CustomButton>
                        <CustomButton 
                            onClick={SignInWithGoogle} 
                            isGoogleSignIn
                        > Sign in with google 
                        </CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn;