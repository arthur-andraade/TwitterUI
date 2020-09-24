import React from 'react';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles';

const ProfileInfo: React.FC = () => {
    return (
        <Container>
            <Banner>
                <Avatar />
            </Banner>
            <ProfileData>
                <EditButton outlined>Editar perfil</EditButton>
                <h1>Arthur Andrade</h1>
                <h2>@Arthur</h2>
                <p>
                    FullStack and Android Developer<br />
                    Student of Computer Enginnering
                </p>
                <ul>
                    <li>
                        <LocationIcon />
                        Nova Fátima, Brasil
                    </li>
                    <li>
                        <CakeIcon />
                        Nascido em 99 de agosto de 9999
                    </li>
                </ul>

                <Followage>
                    <span>
                        seguindo <strong> 94</strong>
                    </span>
                    <span>
                        <strong>672 </strong> seguidores
                    </span>
                </Followage>
            </ProfileData>
        </Container>
    )
}

export default ProfileInfo;