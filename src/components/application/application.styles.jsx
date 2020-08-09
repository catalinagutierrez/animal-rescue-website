import styled from 'styled-components';

export const ApplicationContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;
    text-align: center;
    padding-top: 5vh;
    padding-bottom: 5vh;

    @media screen and (max-width: 800px) {
        margin-top: 50px;
    }
`;

export const ApplicationTitle = styled.h2`
    margin: 10px 0;
`;

export const RadioButtonInput = styled.div`
    padding: 20px;
    text-align: left;
`;
