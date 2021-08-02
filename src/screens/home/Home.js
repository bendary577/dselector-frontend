import React from 'react';
import GuestRegisterHostname from '../../screenSnippets/home/GuestRegisterHostname';
import HomeNavbar from '../../screenSnippets/home/HomeNavbar';
import WelcomeSection from '../../screenSnippets/home/WelcomeSection';

const Home = () => {

    return (
      <div className="home">
          <HomeNavbar />
          <WelcomeSection />
          <GuestRegisterHostname />
      </div>
    );
}
  
export default Home;
  