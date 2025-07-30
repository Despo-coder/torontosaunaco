"use client";
import Contact from "@/components/Contact";
import { GoogleTagManager } from "@next/third-parties/google";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const QuoteContent = () => {
  const searchParams = useSearchParams();
  const sauna = searchParams.get("sauna");
  const dimensions = searchParams.get("dimensions");

  // Create a dynamic subject based on the sauna information
  let defaultSubject = "General Inquiry";
  if (sauna) {
    defaultSubject = `Quote Request - ${sauna}`;
    if (dimensions) {
      defaultSubject += ` (${dimensions})`;
    }
  }

  return (
    <>
      <Contact defaultSubject={defaultSubject} />
      <GoogleTagManager gtmId="AW-16622832527" />
    </>
  );
};

const Quote = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <QuoteContent />
    </Suspense>
  );
};

export default Quote;
