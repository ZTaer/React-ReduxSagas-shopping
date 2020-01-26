import React from 'react';
import { HomePageDiv } from "./homepage.styles";

import DirectoryMenu from "../../components/directory-menu/directory-menu.component";

const HomePage = () => (
    <HomePageDiv>
        <DirectoryMenu></DirectoryMenu>
    </HomePageDiv>
);

export default HomePage;