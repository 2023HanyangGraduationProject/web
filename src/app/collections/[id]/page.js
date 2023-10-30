'use client'
import React from "react";
import Script from 'next/script'

export default function Page() {
    return (
        <>
            <h1>Hello, Items Page!</h1>
            <div id="items"></div>
            
            <Script src="/scripts/collections_id.js" strategy="afterInteractive"/>
        </>
    )
}
