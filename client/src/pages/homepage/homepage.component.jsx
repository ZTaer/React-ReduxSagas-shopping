import React from 'react';
import { HomePageStyledContainer } from "./homepage.styles";

import DirectoryMenu from "../../components/directory-menu/directory-menu.component";
const HomePage = () => {
    return (
        <HomePageStyledContainer>
            <DirectoryMenu></DirectoryMenu>
        </HomePageStyledContainer>
    );
}

export default HomePage;