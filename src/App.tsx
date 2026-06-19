import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import ScrollToTop from './components/ScrollToTop';
import AppLayout from './layouts/AppLayout';
import AiPage from './pages/AiPage';
import BlockchainPage from './pages/BlockchainPage';
import ContactPage from './pages/ContactPage';
import CryptoPage from './pages/CryptoPage';
import HomePage from './pages/HomePage';
import Web3Page from './pages/Web3Page';

const CareersPage = lazy(() => import('./pages/CareersPage'));
const CareersJobPage = lazy(() => import('./pages/CareersJobPage'));

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="ai" element={<AiPage />} />
          <Route path="blockchain" element={<BlockchainPage />} />
          <Route path="web3" element={<Web3Page />} />
          <Route path="crypto" element={<CryptoPage />} />
          <Route path="careers" element={
            <Suspense fallback={null}>
              <CareersPage />
            </Suspense>
          } />
          <Route path="careers/jobs/:jobId" element={
            <Suspense fallback={null}>
              <CareersJobPage />
            </Suspense>
          } />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
