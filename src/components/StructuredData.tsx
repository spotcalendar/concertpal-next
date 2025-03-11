import Script from 'next/script'

export default function StructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "Concertpal.io",
        "applicationCategory": "Entertainment",
        "browserRequirements": "Requires Chrome Browser",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "description": "Find the cheapest concert tickets across all major ticketing platforms. Track your favorite artists, get price alerts, and never miss live shows in the US.",
        "operatingSystem": "Chrome Browser Extension",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.7",
            "ratingCount": "100",
            "bestRating": "5",
            "worstRating": "1"
        },
        "featureList": [
            "Real-time ticket price comparison",
            "Price alerts for concerts",
            "Artist tracking",
            "Multi-platform ticket search",
            "Automatic best deal finder"
        ],
        "creator": {
            "@type": "Organization",
            "name": "ConcertPal LLC",
            "url": "https://concertpal.io"
        }
    };

    return (
        <Script id="structured-data" type="application/ld+json">
            {JSON.stringify(structuredData)}
        </Script>
    );
} 