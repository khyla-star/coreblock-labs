import CryptoBlockchainHeroSection from './CryptoBlockchainHeroSection';
import CryptoBlockchainIntroSection from './CryptoBlockchainIntroSection';
import CryptoCapabilitiesSection from './CryptoCapabilitiesSection';
import CryptoCtaSectionV2Section from './CryptoCtaSectionV2Section';
import CryptoBlockchainServicesSection2 from './CryptoBlockchainServicesSection2';
import CryptoCapabilitiesSection2 from './CryptoCapabilitiesSection2';
import CryptoWeb3ApproachSection from './CryptoWeb3ApproachSection';
import CryptoCtaSectionV2Section2 from './CryptoCtaSectionV2Section2';
import CryptoFaqSection from './CryptoFaqSection';

export default function CryptoPageContent() {
  return (
    <div className="pages-data">
      <CryptoBlockchainHeroSection />
      <CryptoBlockchainIntroSection />
      <CryptoCapabilitiesSection />
      <CryptoCtaSectionV2Section />
      <CryptoBlockchainServicesSection2 />
      <CryptoCapabilitiesSection2 />
      <CryptoWeb3ApproachSection />
      <CryptoCtaSectionV2Section2 />
      <CryptoFaqSection />
    </div>
  );
}
