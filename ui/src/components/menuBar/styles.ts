import styled, { css } from "styled-components";

import {
    Twitter,
    Home,
    Notifications,
    Email,
    Person,
    ExitToApp,
    FavoriteBorder,
} from "../../styles/Icons";

export const Container = styled.div`
    display: none;

    @media (min-width: 500px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        position: sticky;
        top: 0;
        left: 0;
        padding: 9px 19px 20px;
        max-height: 100vh;

        overflow-y: auto;
    }
`;

export const Topside = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1280px) {
        align-items: flex-start;
    }
`;

export const Logo = styled(Twitter)`
    width: 40px;
    height: 40px;
    margin-bottom: 20px;
    fill: var(--twitter);
`;

export const MenuButton = styled.button`
    display: flex;
    align-items: center;
    width: 100%;
    flex-shrink: 0;
    > span {
        color: var(--white);
        display: none;
    }

    @media (min-width: 800px) {
        > span {
            display: inline;
            margin-left: 19px;
            font-weight: bold;
            font-size: 19px;
        }
        padding-right: 15px;
        padding-left: 15px;
    }

    padding: 8.25px 0;
    outline: 0;

    & + button:last-child {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 33px;
        width: 40px;
        height: 40px;

        > span {
            display: none;
        }

        @media (min-width: 800px) {
            width: 100%;
            > span {
                display: inline;
            }
        }
    }

    cursor: pointer;
    border-radius: 25px;

    &:hover {
        background: var(--twitter-dark-hover);
    }

    &:hover,
    &.active {
        span,
        svg {
            color: var(--twitter);
        }
    }
`;

export const Botside = styled.div`
    margin-top: 10px;
    display: flex;
    align-items: center;
`;

export const Avatar = styled.div`
    width: 39px;
    height: 39px;
    background: var(--gray);
    border-radius: 50%;
    flex-shrink: 0;
    margin-right: 8px;
`;

export const ProfileData = styled.div`
    display: none;
    @media(min-width: 800px){
        display: flex;
        flex-direction: column;
        margin-right: 30px;
        font-size: 14px;
        > span {
            color: var(--gray);
        }
        > strong{
            color: var(--white);
        }
    }
`;

const iconCSS = css`
    flex-shrink: 0;

    width: 30px;
    height: 30px;
    color: var(--white);
`;

export const HomeIcon = styled(Home)`
    ${iconCSS}
`;
export const BellIcon = styled(Notifications)`
    ${iconCSS}
`;
export const EmailIcon = styled(Email)`
    ${iconCSS}
`;
export const FavoriteIcon = styled(FavoriteBorder)`
    ${iconCSS}
`;
export const ProfileIcon = styled(Person)`
    ${iconCSS}
`;

export const ExitIcon = styled(ExitToApp)`
    display: none;
    @media(min-width: 800px){
        display: inline-block;
        width: 25px;
        height: 25px;
        color: var(--white);
        cursor: pointer;
        &:hover{
            path {
                opacity: 0.8;
            }
        }
    }
`;
