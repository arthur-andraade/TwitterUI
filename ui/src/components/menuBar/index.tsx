import React from "react";

import {
    Container,
    Topside,
    Logo,
    MenuButton,
    HomeIcon,
    BellIcon,
    EmailIcon,
    FavoriteIcon,
    ProfileIcon,
    Avatar,
    Botside,
    ExitIcon,
    ProfileData,
} from "./styles";

import Button from "../button";

const MenuBar: React.FC = () => {
    return (
        <Container>
            <Topside>
                <Logo />
                <MenuButton>
                    <HomeIcon />
                    <span>Pagina Inicial</span>
                </MenuButton>
                <MenuButton>
                    <BellIcon />
                    <span>Notificações</span>
                </MenuButton>
                <MenuButton>
                    <EmailIcon />
                    <span>Mensagens</span>
                </MenuButton>
                <MenuButton>
                    <FavoriteIcon />
                    <span>Favorites</span>
                </MenuButton>
                <MenuButton className="active">
                    <ProfileIcon />
                    <span>Perfil</span>
                </MenuButton>
                <Button>
                    <span>Twittar</span>
                </Button>
            </Topside>

            <Botside>
                <Avatar />
                <ProfileData>
                    <strong>Arthur Andrade</strong>
                    <span>@Arthur</span>
                </ProfileData>
                <ExitIcon />
            </Botside>
        </Container>
    );
};

export default MenuBar;
