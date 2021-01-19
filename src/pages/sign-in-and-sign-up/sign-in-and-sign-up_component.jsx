import React from 'react';

import '../sign-in-and-sign-up/sign-in-and-sign-up_style.scss';

import SignIn from '../../components/signin/signin_component';
import SignUp from '../../components/sign-up/sign-up_component';

const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
);

export default SignInAndSignUpPage;