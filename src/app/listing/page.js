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

    async function onSubmit(event) {
        event.preventDefault()
        
        const formData = new FormData(event.target)
        const response = await fetch('/api/listing', {
          method: 'POST',
          body: formData,
        })
     
        // Handle response if necessary
        const data = await response.json()
        // ...
    }

    return (
        <div>
            <h1>Hello, Listing Page!</h1>
            <div>{address}</div>
            
            <form onSubmit={onSubmit}>
                가격1: <select name="price1">
                            <option value="0">ETH(ETHEREUM)</option>
                            <option value="1">ETH(SEPOLIA)</option>
                            <option value="2">MATIC(POLYGON)</option>
                            <option value="3">MATIC(MUMBAI)</option>
                        </select>
                <br />
                가격2: <select name="price2">
                            <option value="0">ETH(ETHEREUM)</option>
                            <option value="1">ETH(SEPOLIA)</option>
                            <option value="2">MATIC(POLYGON)</option>
                            <option value="3">MATIC(MUMBAI)</option>
                        </select>
                <br />
                가격3: <select name="price3">
                            <option value="0">ETH(ETHEREUM)</option>
                            <option value="1">ETH(SEPOLIA)</option>
                            <option value="2">MATIC(POLYGON)</option>
                            <option value="3">MATIC(MUMBAI)</option>
                        </select>
                <br />
                행: <input type="number" name="row" />
                <br />
                열: <input type="number" name="column" />
                <br />
                <button type="submit">등록</button>
            </form>
        </div>
    )
    
}
