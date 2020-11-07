import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import { SignUpContainer, SignUpTitle } from './sign-up.styles';

const SignUp = () => {
    const [error, setError] = useState({});
    const [userCredentials, setCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const { displayName, email, password, confirmPassword } = userCredentials;

    const validate = () => {
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

        setError(errors);

        console.log(error);

        return isValid;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (validate()) {
            try {
                const { user } = await auth.createUserWithEmailAndPassword(
                    email,
                    password
                );

                await createUserProfileDocument(user, { displayName });
                setCredentials({
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

    const handleChange = (event) => {
        const { name, value } = event.target;

        setCredentials({ ...userCredentials, [name]: value });
    };

    return (
        <SignUpContainer>
            <SignUpTitle>I do not have a account</SignUpTitle>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='Display Name'
                    error={error.displayName}
                />
                <FormInput
                    type='text'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='Email'
                    error={error.email}
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='Password'
                    error={error.password}
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                    error={error.confirmPassword}
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </SignUpContainer>
    );
};

export default SignUp;
