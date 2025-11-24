import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { AuthProvider } from '@/context/AuthContext';
import { CertificationProvider } from '@/context/CertificationContext';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import OperationsPage from '@/pages/OperationsPage';
import ClinicalSupportPage from '@/pages/ClinicalSupportPage';
import SafetyPage from '@/pages/SafetyPage';
import TechnologyPage from '@/pages/TechnologyPage';
import CompliancePage from '@/pages/CompliancePage';
import SecurityPage from '@/pages/SecurityPage';
import UseCasesPage from '@/pages/UseCasesPage';
import ApiPage from '@/pages/ApiPage';
import TrustPage from '@/pages/TrustPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import BlogPage from '@/pages/BlogPage';
import NewsPage from '@/pages/NewsPage';
import PrivacyPage from '@/pages/PrivacyPage';
import TermsPage from '@/pages/TermsPage';
import SecurityStatementPage from '@/pages/SecurityStatementPage';
import AcademyPage from '@/pages/AcademyPage';
import Level1Page from '@/pages/Level1Page';
import Level2Page from '@/pages/Level2Page';
import Level3Page from '@/pages/Level3Page';
import AdminDashboard from '@/pages/AdminDashboard';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <AuthProvider>
      <CertificationProvider>
        <Router>
          <ScrollToTop />
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/operations" element={<OperationsPage />} />
              <Route path="/clinical-support" element={<ClinicalSupportPage />} />
              <Route path="/safety" element={<SafetyPage />} />
              <Route path="/technology" element={<TechnologyPage />} />
              <Route path="/compliance" element={<CompliancePage />} />
              <Route path="/security" element={<SecurityPage />} />
              <Route path="/use-cases" element={<UseCasesPage />} />
              <Route path="/api" element={<ApiPage />} />
              <Route path="/trust" element={<TrustPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/security-statement" element={<SecurityStatementPage />} />
              <Route path="/academy" element={<AcademyPage />} />
              <Route path="/certification/level1" element={<Level1Page />} />
              <Route path="/certification/level2" element={<Level2Page />} />
              <Route path="/certification/level3" element={<Level3Page />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
            </Routes>
            <Toaster />
          </Layout>
        </Router>
      </CertificationProvider>
    </AuthProvider>
  );
}

export default App;