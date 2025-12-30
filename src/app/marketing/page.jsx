import FAQ from "@/components/home/FAQ";
import Testimonials from "@/components/home/Testimonials";
import RecommendedReads from "@/components/home/RecommendedReads";
import PublishedAuthors from "@/components/home/PublishedAuthors";


import MarketingHero from "@/components/marketing/MarketingHero";
import MarketingKeyFeaturesIntro from "@/components/marketing/MarketingKeyFeaturesIntro";
import VideoTestimonials from "@/components/common/VideoTestimonials";

export default function MarketingPage() {
  return (
    <>
      <MarketingHero />
      <MarketingKeyFeaturesIntro />
      <VideoTestimonials />
      <PublishedAuthors />
      <RecommendedReads />
      <Testimonials />
      <FAQ />
    </>
  );
}
