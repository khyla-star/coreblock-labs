import CareersJobPageContent from '../components/pages/careers/CareersJobPageContent';
import { useCareersPage } from '../hooks/useCareersPage';

export default function CareersJobPage() {
  useCareersPage();
  return <CareersJobPageContent />;
}
