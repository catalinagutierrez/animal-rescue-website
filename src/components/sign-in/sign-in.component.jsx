import React from 'react';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {
    SignInContainer,
    SignInTitle,
    ButtonsBarContainer,
    Warning,
} from './sign-in.styles';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            error: '',
        };
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            this.setState({
                error: 'Wrong username or password. Please try again.',
            });
            console.log(error);
        }
    };

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        return (
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label='email'
                        //required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='password'
                        //required
                    />
                    <Warning>{this.state.error}</Warning>
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
    }
}

export default SignIn;
