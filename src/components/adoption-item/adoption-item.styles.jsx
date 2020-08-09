import styled from 'styled-components';

export const AdoptionItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
`;

export const ImageContainer = styled.div`
    width: 30%;
    padding-right: 15px;
    img {
        width: 100%;
        height: 100%;
    }
`;

export const TextContainer = styled.span`
    width: 30%;
`;

export const RemoveButtonContainer = styled.div`
    padding-left: 12px;
    cursor: pointer;
`;
