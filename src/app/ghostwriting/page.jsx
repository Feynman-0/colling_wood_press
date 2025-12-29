"use client";
import GhostwritingHeroSection from '../../components/ghostwriting/GhostwritingHeroSection';
import LogoSliderBlock from '../../components/LogoSlider/LogoSliderBlock';
import GhostwritingJourneySection from '../../components/ghostwriting/GhostwritingJourneySection';
import GhostwritingSupportSection from '../../components/ghostwriting/GhostwritingSupportSection';
import GhostwritingFinalCTASection from '../../components/ghostwriting/GhostwritingFinalCTASection';

export default function GhostwritingPage() {
  return (
    <main style={{ minHeight: '60vh', padding: '2rem 0' }}>
      <GhostwritingHeroSection />
      <div style={{maxWidth: '1400px', margin: '0 auto'}}>
        <div style={{padding: '4rem 6rem'}}>
          <div style={{background: '#232B38', borderRadius: '0.375rem'}}>
            <LogoSliderBlock />
          </div>
        </div>
      </div>
      <style jsx>{`
        .ghostwriting-logo-slider-wrapper > div {
          max-width: 520px;
          margin: 0 auto;
        }
        .ghostwriting-logo-slider-wrapper .border-2 {
          padding-top: 0.25rem !important;
          padding-bottom: 0.25rem !important;
          padding-left: 0.5rem !important;
          padding-right: 0.5rem !important;
        }
      `}</style>
      <GhostwritingJourneySection />
      <GhostwritingSupportSection />
      <GhostwritingFinalCTASection />
    </main>
  );
}
