import React from 'react';

import {
    GroupContainer,
    FormInputContainer,
    FormInputLabel,
    Warning,
} from './form-input.styles';

const FormInput = ({ handleChange, label, error, ...props }) => (
    <GroupContainer>
        <FormInputContainer onChange={handleChange} {...props} />
        {label ? (
            <div>
                <FormInputLabel className={props.value.length ? 'shrink' : ''}>
                    {label}
                </FormInputLabel>
                <Warning>{error}</Warning>
            </div>
        ) : null}
    </GroupContainer>
);

export default FormInput;
