'use client'
import React from "react";
import Script from 'next/script'
import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import { ticketAbi } from '../../../../abi/ticket'

export default function Page() {
    const [hydrated, setHydrated] = React.useState(false);
    React.useEffect(() => {
        setHydrated(true);
    }, []);
    if (!hydrated) {
        // Returns null on first render, so the client and server match
        return null;
    }

    const { data, isLoading, isSuccess, write } = useContractWrite({
        address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
        abi: ticketAbi,
        functionName: 'mint',
    })

    return (
        <>
            <h1>Hello, Item Page!</h1>
            <div id="item"></div>
            
            <div>
            <button onClick={() => 
                write(
                    // to, tokenId, uri
                    
                )
            }>Mint</button>
                {isLoading && <div>Check Wallet</div>}
                {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
            </div>

            <Script src="/scripts/item.js" strategy="afterInteractive"/>
        </>
    )
}
