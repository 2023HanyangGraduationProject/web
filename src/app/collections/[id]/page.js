'use client'
import React from "react";
import Script from 'next/script'

export default function Page() {
    return (
        <>
            <div id="items" className="grid grid-cols-4 gap-4 bg-slate-300 rounded-xl m-20 p-10">
                
            </div>
            
            <Script src="/scripts/collections_id.js" strategy="afterInteractive"/>
        </>
    )
}
