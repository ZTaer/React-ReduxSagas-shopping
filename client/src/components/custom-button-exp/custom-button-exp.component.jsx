import React from 'react';
import { CustomButtonExp } from './custom-button-exp.styles';

const CustomButton = ({ children, ...otherProps  })=>(
    <CustomButtonExp { ...otherProps } >
        {children}
    </CustomButtonExp>
);

export default CustomButton;