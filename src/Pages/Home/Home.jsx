import React from 'react';
import Banner from '../../Shared/Banner/Banner';
import Chef from '../../Shared/Chef/Chef';
import WhoWeAre from '../../Shared/WhoWeAre/WhoWeAre';
import Message from '../../Shared/Message/Message';

const Home = () => {
    return (
        <main>
            <Banner></Banner>
            <Chef></Chef>
            <WhoWeAre></WhoWeAre>
            <Message></Message>
        </main>
    );
};

export default Home;