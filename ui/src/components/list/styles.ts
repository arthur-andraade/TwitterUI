import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: var(--secondary);
    border-radius: 14px;
`;

export const Item = styled.div`
    padding: 10px 16px;
    color: var(--white);
    & + div {
        border-top: 1px solid var(--outline);
    }
    &:first-child{
        padding-top: 13px;
    }

    &:last-child{
        padding-bottom: 17px;
    }
`;

export const Title = styled.div`
    color: var(--white);
    font-weight: bold;
    font-size: 19px;
`;