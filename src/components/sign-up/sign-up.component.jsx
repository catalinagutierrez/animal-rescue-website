import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import { SignUpContainer, SignUpTitle } from './sign-up.styles';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
            errors: {},
        };
    }

    validate() {
        const { displayName, email, password, confirmPassword } = this.state;
        let errors = {};
        let isValid = true;

        if (!displayName) {
            isValid = false;
            errors['displayName'] = 'Please enter your name.';
        }

        if (typeof displayName !== 'undefined') {
            if (displayName.length > 20) {
                isValid = false;
                errors['displayName'] = 'Name cannot exceed 20 characters.';
            }
        }

        if (!email) {
            isValid = false;
            errors['email'] = 'Please enter your email Address.';
        }

        if (typeof email !== 'undefined') {
            var pattern = new RegExp(
                /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
            );
            if (!pattern.test(email)) {
                isValid = false;
                errors['email'] = 'Please enter valid email address.';
            }
        }

        if (!password) {
            isValid = false;
            errors['password'] = 'Please enter a password.';
        }

        if (typeof password !== 'undefined') {
            if (password.length < 6) {
                isValid = false;
                errors['password'] = 'Password must have at least 6 characters';
            }
        }

        if (!confirmPassword) {
            isValid = false;
            errors['confirmPassword'] = 'Please confirm your password.';
        }

        if (password !== confirmPassword) {
            errors['confirmPassword'] = "Passwords don't match.";
            errors['password'] = "Passwords don't match.";
        }

        this.setState({
            errors: errors,
        });

        return isValid;
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        if (this.validate()) {
            const { displayName, email, password } = this.state;

            try {
                const { user } = await auth.createUserWithEmailAndPassword(
                    email,
                    password
                );

                await createUserProfileDocument(user, { displayName });
                this.setState({
                    displayName: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                });
            } catch (error) {
                console.log(error);
                alert(error.message);
            }
        }
    };

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        const { displayName, email, password, confirmPassword } = this.state;

        return (
            <SignUpContainer>
                <SignUpTitle>I do not have a account</SignUpTitle>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        error={this.state.errors.displayName}
                    />
                    <FormInput
                        type='text'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        error={this.state.errors.email}
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        error={this.state.errors.password}
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        error={this.state.errors.confirmPassword}
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </SignUpContainer>
        );
    }
}

export default SignUp;
