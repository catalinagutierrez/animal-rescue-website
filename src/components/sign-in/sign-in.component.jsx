import React, { useState } from 'react';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {
    SignInContainer,
    SignInTitle,
    ButtonsBarContainer,
    Warning,
} from './sign-in.styles';

const SignIn = () => {
    const [error, setError] = useState('');
    const [userCredentials, setCredentials] = useState({
        email: '',
        password: '',
    });

    const { email, password } = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email, password);
            setCredentials({ email: '', password: '' });
        } catch (error) {
            setError('Wrong username or password. Please try again.');
            console.log(error);
        }
    };

    const handleChange = (event) => {
        const { value, name } = event.target;

        setCredentials({ ...userCredentials, [name]: value });
    };

    return (
        <SignInContainer>
            <SignInTitle>I already have an account</SignInTitle>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    value={email}
                    handleChange={handleChange}
                    label='email'
                    //required
                />
                <FormInput
                    name='password'
                    type='password'
                    value={password}
                    handleChange={handleChange}
                    label='password'
                    //required
                />
                <Warning>{error}</Warning>
                <ButtonsBarContainer>
                    <CustomButton type='submit' value='Submit Form'>
                        {' '}
                        Sign in{' '}
                    </CustomButton>
                    <CustomButton
                        type='button'
                        onClick={signInWithGoogle}
                        isGoogleSignIn
                    >
                        {' '}
                        Sign in with Google{' '}
                    </CustomButton>
                </ButtonsBarContainer>
            </form>
        </SignInContainer>
    );
};

export default SignIn;
