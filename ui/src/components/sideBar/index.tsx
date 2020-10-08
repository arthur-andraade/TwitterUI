import React from "react";
import StickyBox from "react-sticky-box";

import List from "../list";
import FollowSuggestion from "../followSuggestion";
import News from "../news";

import {
    Container,
    SearchWrapper,
    SearchInput,
    SearchIcon,
    Body,
} from "./styles";

const SideBar: React.FC = function () {
    return (
        <Container>
            <SearchWrapper>
                <SearchInput placeholder="Buscar no Twitter" />
                <SearchIcon />
            </SearchWrapper>
            <StickyBox>
                <Body>
                    <List
                        title="Talvez você curta"
                        elements={[
                            <FollowSuggestion
                                name="Elon Musk"
                                nickname="@elonmusk"
                            />,
                            <FollowSuggestion
                                name="Bill Gates"
                                nickname="@billgates"
                            />,
                            <FollowSuggestion
                                name="Freddy Mercury"
                                nickname="@freddymercury"
                            />,
                        ]}
                    />
                    <List
                        title="Talvez você curta"
                        elements={[<News />, <News />, <News />]}
                    />
                </Body>
            </StickyBox>
        </Container>
    );
};

export default SideBar;
