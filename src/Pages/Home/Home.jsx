import React from 'react';
import Banner from '../../Shared/Banner/Banner';
import Chef from '../../Shared/Chef/Chef';
import WhoWeAre from '../../Shared/WhoWeAre/WhoWeAre';

const Home = () => {
    return (
        <main>
            <Banner></Banner>
            <Chef></Chef>
            <WhoWeAre></WhoWeAre>
        </main>
    );
};

export default Home;