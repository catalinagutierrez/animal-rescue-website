import React from 'react';

import DonationForm from '../../components/donation-form/donation-form.component';

import {
    DonatePageContainer,
    InformationContainer,
    WarningContainer,
    BackgroundImageContainer,
    ContentContainer,
} from './donate.styles';

const DonatePage = () => (
    <DonatePageContainer>
        <InformationContainer>
            <BackgroundImageContainer
                className='background-image'
                imageUrl='https://static1.squarespace.com/static/5c673e1a51f4d469f216af48/5c749b40f4e1fcec63a5ef57/5cd3572e4e17b61c5c838ec1/1560892073920/?format=1500w'
            />
            <ContentContainer className='content'>
                <h1>Meow there!</h1>
                <span>
                    Thank you for your interest in supporting us. We are a
                    non-profit, imaginary organization in service of animals who
                    need a home. Every dolar counts towards feeding and caring
                    for one of our four-legged guests, and it helps us go out
                    there to bring in more strays into our care.
                </span>
                <DonationForm />
                <WarningContainer>
                    *Please use the following test credit card for payments*
                    <br />
                    4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
                </WarningContainer>
            </ContentContainer>
        </InformationContainer>
    </DonatePageContainer>
);

export default DonatePage;
