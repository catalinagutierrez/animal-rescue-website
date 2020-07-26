import React from 'react';

// import './with-spinner.styles.scss';

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

const WithSpinner = (WrappedComponent) => {
    const Spinner = ({ isLoading, ...otherProps }) => {
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        ) : (
            <WrappedComponent {...otherProps} />
        );
    };
    return Spinner;
};

// const WithSpinner = (WrappedComponent) => {
//     const Spinner = ({ isLoading, ...otherProps }) => {
//         return isLoading ? (
//             <div className='spinner-overlay'>
//                 <div className='spinner-container' />
//             </div>
//         ) : (
//             <WrappedComponent {...otherProps} />
//         );
//     };
//     return Spinner;
// };

export default WithSpinner;
