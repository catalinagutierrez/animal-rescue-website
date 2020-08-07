import styled from 'styled-components';

export const DonatePageContainer = styled.div`
    width: 100%;
    min-height: 90vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0;

    @media screen and (max-width: 800px) {
        width: 90%;
    }
`;

export const InformationContainer = styled.div`
    width: 100%;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    justify-content: center;
`;

export const BackgroundImageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    opacity: 1;
    background-size: cover;
    background-position: center;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const ContentContainer = styled.div`
    padding: 0 25px;
    max-width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: white;
    opacity: 0.7;
    position: absolute;
    border-radius: 5px;
    text-align: justify;
    padding-bottom: 20px;

    span {
        font-size: 24px;
        padding: 25px;
    }
`;

export const WarningContainer = styled.div`
    text-align: center;
    font-size: 20px;
    color: red;
    display: flex;
`;
