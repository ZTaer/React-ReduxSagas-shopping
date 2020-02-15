import React from 'react';
import "./custom-button.styles.scss";

const CustomButton = ({ children, selfCss, ...otherProps  })=>(
    <button { ...otherProps } className={`custom-button ${selfCss}`}>
        {children}
    </button>
);

export default CustomButton;