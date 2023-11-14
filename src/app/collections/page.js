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
            <div id="collections" className="grid grid-cols-4 gap-4 bg-slate-300 rounded-xl m-20 p-10">
                
            </div>
            
            <Script src="/scripts/collections.js" strategy="afterInteractive"/>
        </>
    )
}
