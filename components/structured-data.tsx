export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Digital Computer Academy Harda",
    url: "https://digitalcomputeracademy.vercel.app",
    logo: "https://digitalcomputeracademy.vercel.app/logo.png",
    description:
      "Digital Computer Academy Harda offers comprehensive computer training programs designed to prepare students for the tech industry.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "New Bus Stand Railway station road Near Charted Bus Office",
      addressLocality: "Harda",
      addressRegion: "Madhya Pradesh",
      postalCode: "461331",
      addressCountry: "IN",
    },
    telephone: "+919111091460",
    email: "gouravgour937@gmail.com",
    foundingDate: "2008",
    founder: {
      "@type": "Person",
      name: "Pankaj Rathore",
    },
    sameAs: ["https://www.facebook.com/digitalcomputeracademy", "https://www.instagram.com/digitalcomputeracademy"],
    offers: {
      "@type": "Offer",
      category: "Computer Training Courses",
      availabilityStarts: "2025-01-01",
      description: "Various computer courses including DCA, PGDCA, and specialized training programs",
      seller: {
        "@type": "Organization",
        name: "Digital Computer Academy Harda",
      },
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}
