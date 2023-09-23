'use client'
import React from "react";
import { useAccount } from 'wagmi'

export default function Page() {
    const [hydrated, setHydrated] = React.useState(false);
    const { address, connector, isConnected } = useAccount()
    React.useEffect(() => {
        setHydrated(true);
    }, []);
    if (!hydrated) {
        // Returns null on first render, so the client and server match
        return null;
    }
    return (
        <div>
            <h1>Hello, Listing Page!</h1>
            <div>{address}</div>
        </div>
    )
    
}
