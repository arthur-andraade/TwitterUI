import React from "react";

import List from "../list";
import {
    Container,
    SearchWrapper,
    SearchInput,
    SearchIcon,
    Body
} from "./styles";


const SideBar: React.FC = function () {
    return (
        <Container>
            <SearchWrapper>
                <SearchInput placeholder="Buscar no Twitter" />
                <SearchIcon />
            </SearchWrapper>
            <Body>
                <List
                    title="Talvez você curta"
                    elements={
                        [
                            <h1>Test</h1>,
                            <h1>Test</h1>,
                            <h1>Test</h1>
                        ]
                    }
                />
            </Body>
        </Container>
    );

}

export default SideBar;