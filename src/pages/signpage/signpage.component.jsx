import React from 'react';
import "./signpage.styles.scss";

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignPage = () => {
    return (
        <div className="sign-content">
            <SignIn className="signIn" />
            <SignUp className="signUp" />
        </div>
    );
}

export default SignPage;