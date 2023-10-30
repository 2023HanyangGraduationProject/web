'use client'
import React from "react";
import Script from 'next/script'

export default function Page() {
    const [hydrated, setHydrated] = React.useState(false);
    React.useEffect(() => {
        setHydrated(true);
    }, []);
    if (!hydrated) {
        // Returns null on first render, so the client and server match
        return null;
    }

    return (
        <>
            <h1>Hello, Collections Page!</h1>
            <div id="collections"></div>
            
            <Script src="/scripts/collections.js" strategy="afterInteractive"/>
        </>
    )
}
