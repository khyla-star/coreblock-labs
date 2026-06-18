import AiBlockchainHeroSection from './AiBlockchainHeroSection';
import AiBlockchainIntroSection from './AiBlockchainIntroSection';
import AiCapabilitiesSection from './AiCapabilitiesSection';
import AiCtaSectionV2Section from './AiCtaSectionV2Section';
import AiBlockchainServicesSection from './AiBlockchainServicesSection';
import AiCtaSectionV2Section2 from './AiCtaSectionV2Section2';
import AiFaqSection from './AiFaqSection';

export default function AiPageContent() {
  return (
    <div className="pages-data">
      <AiBlockchainHeroSection />
      <AiBlockchainIntroSection />
      <AiCapabilitiesSection />
      <AiCtaSectionV2Section />
      <AiBlockchainServicesSection />
      <AiCtaSectionV2Section2 />
      <AiFaqSection />
    </div>
  );
}
