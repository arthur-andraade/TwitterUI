import React from 'react';

import {
    Container,
    Retweet,
    Body,
    Avatar,
    Content,
    Description,
    Header,
    Icons,
    ImageContent,
    Status,
    ComentIcon,
    RetweetIcon,
    LikeIcon,
    UploadIcon,
    Dot,
} from './styles';

const Tweet: React.FC = () => {
    return (
        <Container>
            <Retweet>
                Você retweetou
            </Retweet>

            <Body>
                <Avatar />
                <Content>
                    <Header>
                        <strong>Arthur</strong>
                        <span>@Arthur</span>
                        <Dot />
                        <time>27 de jun</time>
                    </Header>
                    <Description>
                        Dont't stop the code
                    </Description>
                    <ImageContent />
                    <Icons>
                        <Status>
                            <ComentIcon />
                            18
                        </Status>
                        <Status>
                            <RetweetIcon />
                            20
                        </Status>
                        <Status>
                            <LikeIcon />
                            899
                        </Status>
                        <Status>
                            <UploadIcon />
                        </Status>
                    </Icons>
                </Content>
            </Body>
        </Container>
    )
}

export default Tweet