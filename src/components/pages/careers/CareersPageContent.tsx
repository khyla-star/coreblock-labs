import CareersFoundersSection from './CareersFoundersSection';
import CareersHeroSection from './CareersHeroSection';
import CareersOpenRolesSection from './CareersOpenRolesSection';
import CareersSuccessSection from './CareersSuccessSection';

export default function CareersPageContent() {
  return (
    <div className="pages-data careers-page">
      <CareersHeroSection />
      <CareersSuccessSection />
      <CareersFoundersSection />
      <CareersOpenRolesSection />
    </div>
  );
}
