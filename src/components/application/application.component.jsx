import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {
    ApplicationContainer,
    ApplicationTitle,
    RadioButtonInput,
} from './application.styles';

class Application extends React.Component {
    constructor() {
        super();

        this.state = {
            fullName: '',
            address: '',
            zipCode: '',
            email: '',
            currentPets: 'none',
            previousPets: 'none',
            hasChildren: 'no',
        };
    }

    handleSubmit = async () => {
        alert(
            'We have receieved your application and will get back to you soon. Thank you!'
        );
    };

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        const { fullName, address, zipCode, email } = this.state;

        return (
            <ApplicationContainer>
                <ApplicationTitle>Application details</ApplicationTitle>
                <span>
                    You will receive a decision and next steps to your account
                    email within the next business day.
                </span>
                <form className='application-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='fullName'
                        value={fullName}
                        onChange={this.handleChange}
                        label='Full Name'
                        required
                    />
                    <FormInput
                        type='text'
                        name='address'
                        value={address}
                        onChange={this.handleChange}
                        label='Address'
                        required
                    />
                    <FormInput
                        type='text'
                        name='zipCode'
                        value={zipCode}
                        onChange={this.handleChange}
                        label='Zip Code'
                        required
                    />
                    {/* <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    /> */}
                    <RadioButtonInput>
                        <label>
                            Do you currently have other pets in your household?{' '}
                            <br />
                        </label>
                        <div>
                            <input
                                type='radio'
                                name='currentPets'
                                value='none'
                                onChange={this.handleChange}
                                checked={this.state.currentPets === 'none'}
                            />
                            <label>Not yet...</label>
                        </div>
                        <div>
                            <input
                                type='radio'
                                name='currentPets'
                                value='dogs'
                                onChange={this.handleChange}
                                checked={this.state.currentPets === 'dogs'}
                            />
                            <label>I have one or more dogs</label>
                        </div>
                        <div>
                            <input
                                type='radio'
                                name='currentPets'
                                value='cats'
                                onChange={this.handleChange}
                                checked={this.state.currentPets === 'cats'}
                            />
                            <label>I have one or more cats</label>
                        </div>
                        <div>
                            <input
                                type='radio'
                                name='currentPets'
                                value='both'
                                onChange={this.handleChange}
                                checked={this.state.currentPets === 'both'}
                            />
                            <label>Both!</label>
                        </div>
                    </RadioButtonInput>
                    <RadioButtonInput>
                        <label>
                            Have you had pets in your household before? <br />
                        </label>
                        <div>
                            <input
                                type='radio'
                                name='previousPets'
                                value='none'
                                onChange={this.handleChange}
                                checked={this.state.previousPets === 'none'}
                            />
                            <label>Nope</label>
                        </div>
                        <div>
                            <input
                                type='radio'
                                name='previousPets'
                                value='dogs'
                                onChange={this.handleChange}
                                checked={this.state.previousPets === 'dogs'}
                            />
                            <label>I've had dogs</label>
                        </div>
                        <div>
                            <input
                                type='radio'
                                name='previousPets'
                                value='cats'
                                onChange={this.handleChange}
                                checked={this.state.previousPets === 'cats'}
                            />
                            <label>I've had cats</label>
                        </div>
                        <div>
                            <input
                                type='radio'
                                name='previousPets'
                                value='both'
                                onChange={this.handleChange}
                                checked={this.state.previousPets === 'both'}
                            />
                            <label>I've had both!</label>
                        </div>
                    </RadioButtonInput>
                    <RadioButtonInput>
                        <label>
                            Does your family have any children under 5? <br />
                        </label>
                        <div>
                            <input
                                type='radio'
                                name='hasChildren'
                                value='yes'
                                onChange={this.handleChange}
                                checked={this.state.hasChildren === 'yes'}
                            />
                            <label>Yes</label>
                        </div>
                        <div>
                            <input
                                type='radio'
                                name='hasChildren'
                                value='no'
                                onChange={this.handleChange}
                                checked={this.state.hasChildren === 'no'}
                            />
                            <label>No</label>
                        </div>
                    </RadioButtonInput>
                    <CustomButton type='submit'>
                        SUBMIT APPLICATION
                    </CustomButton>
                </form>
            </ApplicationContainer>
        );
    }
}

export default Application;
