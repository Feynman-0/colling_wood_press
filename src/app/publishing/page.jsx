import PublishingCtaBanner from "@/components/publishing/PublishingCtaBanner";
import PublishedAuthors from "@/components/home/PublishedAuthors";

import PublishingHero from "@/components/publishing/PublishingHero";
import PublishingProcess from "@/components/publishing/PublishingProcess";
import PublishingWhyChoose from "@/components/publishing/PublishingWhyChoose";

export default function PublishingPage() {
  return (
    <>
      <PublishingHero />
      <PublishingProcess />
      <PublishingWhyChoose />
      <PublishedAuthors />
      <PublishingCtaBanner />
    </>
  );
}
