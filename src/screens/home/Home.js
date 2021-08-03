import React from 'react';
import GuestRegisterHostname from '../../screenSnippets/home/GuestRegisterHostname';
import HomeNavbar from '../../screenSnippets/home/HomeNavbar';
import WelcomeSection from '../../screenSnippets/home/WelcomeSection';
import AboutSection from '../../screenSnippets/home/AboutSection';
import PresentationSection from '../../screenSnippets/home/PresentationSection';
import ScrollingRowSection from '../../screenSnippets/home/ScrollingRowSection';
import Services from '../../screenSnippets/home/Services';
import Footer from '../../screenSnippets/home/Footer';
import MinorFooter from '../../screenSnippets/account/MinorFooter';

const Home = () => {

    return (
      <div className="home">
          <HomeNavbar />
          <WelcomeSection />
          <GuestRegisterHostname />
          <AboutSection />
          <PresentationSection />
          <ScrollingRowSection />
          <Services />
          <Footer />
          <MinorFooter />
      </div>
    );
}
  
export default Home;
  