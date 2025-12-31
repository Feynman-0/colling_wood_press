"use client"

import AuthorsSpotlight from "../AuthorSpotlight/AuthorsSpotlight";
import PublishedAuthors from "./PublishedAuthors";
import RecommendedReads from "./RecommendedReads";
import TestimonialsCarousel from "./TestimonialsCarousel";
import FAQ from "./FAQ";


export default function HomeSections() {
  return (
    <>
      <AuthorsSpotlight />
      <PublishedAuthors />
      <RecommendedReads />
      <TestimonialsCarousel />
      <FAQ />
 
    </>
  );
}
