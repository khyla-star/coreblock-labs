import CareersPageContent from '../components/pages/careers/CareersPageContent';
import { useCareersPage } from '../hooks/useCareersPage';

export default function CareersPage() {
  useCareersPage();
  return <CareersPageContent />;
}
