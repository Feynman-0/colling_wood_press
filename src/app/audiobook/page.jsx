// src/app/audiobook/page.jsx
import AudiobookHero from "@/components/Audiobook/AudiobookHero";
import Audiobookjourney from "@/components/audiobook/AudiobookJourney";
import AudiobookPackages from "@/components/audiobook/AudiobookPackages";
import AudiobookJourneySection from "@/components/audiobook/AudiobookJourneySection";
import AudiobookCTA from "@/components/audiobook/AudiobookCta";
import AudiobookFAQ from "@/components/audiobook/AudiobookFAQ";
export default function AudiobookPage() {
  return (
    <>
    
      <AudiobookHero />
      <Audiobookjourney />
      <AudiobookPackages />
      <AudiobookJourneySection />
      <AudiobookCTA />
      <AudiobookFAQ />
    </>
  );
}