
import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '@/components/HeroSection';
import TechnologyOverviewSection from '@/components/TechnologyOverviewSection';
import UseCasesSection from '@/components/UseCasesSection';
import WhyHealthcareSection from '@/components/WhyHealthcareSection';
import ThreePillarsSection from '@/components/ThreePillarsSection';
import CallToActionSection from '@/components/CallToActionSection';
import EvidenceSection from '@/components/EvidenceSection'; // Renamed and made visible
import PricingSection from '@/components/PricingSection'; // New component

const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>SELFIX - Autonomous AI Infrastructure for Healthcare</title>
                <meta name="description" content="Self-healing, self-defending, and self-governing AI infrastructure to guarantee 100% uptime and security for mission-critical healthcare systems." />
            </Helmet>
            <HeroSection />
            <ThreePillarsSection />
            <TechnologyOverviewSection />
            <WhyHealthcareSection /> {/* This was updated to be the features section */}
            <UseCasesSection />
            <EvidenceSection /> {/* Replaced DemoSection and populated */}
            <PricingSection /> {/* New Pricing Section */}
            <CallToActionSection />
        </>
    );
};

export default HomePage;
