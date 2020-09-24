import React from "react";

import { Container, Header, BackIcon, ProfileInfo, BottomMenu, HomeIcon, SearchIcon, BellIcon, EmailIcon } from "./styles";

const Main: React.FC = () => {
    return (
        <Container>
            <Header>
                <button>
                    <BackIcon />
                </button>
                <ProfileInfo>
                    <strong>Arthur Andrade</strong>
                    <span>899 Tweets</span>
                </ProfileInfo>
            </Header>

            {/* <ProfilePage/> */}

            <BottomMenu>
                <HomeIcon />
                <SearchIcon />
                <BellIcon />
                <EmailIcon />
            </BottomMenu>
        </Container>
    );
};

export default Main;
