import React from "react";

import { Container, Wrapper } from "./styles";
import Main from "../main";
import MenuBar from "../menuBar";
import SideBar from "../sideBar";

const Layout: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <MenuBar />
                <Main />
                <SideBar />
            </Wrapper>
        </Container>
    );
};

export default Layout;
