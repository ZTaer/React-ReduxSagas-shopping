import React from 'react';
import { SignContentStyledContainer } from './signpage.styles';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignPage = () => {
    return (
        <SignContentStyledContainer>
            <SignIn className="signIn" />
            <SignUp className="signUp" />
        </SignContentStyledContainer>
    );
}

export default SignPage;