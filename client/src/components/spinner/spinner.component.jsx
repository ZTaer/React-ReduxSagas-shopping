import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './spinner.styles';

const Spinner = () => {
    return (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>       
    );
}

export default Spinner;