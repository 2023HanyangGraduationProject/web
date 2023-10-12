'use client'
import React from "react";
import { useAccount } from 'wagmi'
import Script from 'next/script'

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

        let formData = new FormData();
        formData.append("address", address);
        let varFiles = event.target.inputFiles.files;
        for(let i = 0; i < varFiles.length; i++){
            formData.append("images", varFiles[i]);
        }
        formData.append("row", event.target.row.value);
        formData.append("column", event.target.column.value);
        formData.append("price1", event.target.price1.value);
        formData.append("price2", event.target.price2.value);
        formData.append("price3", event.target.price3.value);
        formData.append("currency1", event.target.currency1.value);
        formData.append("currency2", event.target.currency2.value);
        formData.append("currency3", event.target.currency3.value);

        const response = await fetch('/api/listing', {
            // headers: {
                // 'Content-Type': 'multipart/form-data',
            // },
            method: 'POST',
            body: formData,
        })
     
        // Handle response if necessary
        const data = await response.json()
        // ...
    }

    return (
        <>
            <h1>Hello, Listing Page!</h1>
            <div>{address}</div>
            
            <form onSubmit={onSubmit}>
                <input id="inputFiles" multiple type="file" />
                <pre class="output">Selected files:</pre>
                <label for="name">가격1: </label>
                <input type="number" name="price1" required />

                <select name="currency1">
                    <option value="0">ETH(ETHEREUM)</option>
                    <option value="1">ETH(SEPOLIA)</option>
                    <option value="2">MATIC(POLYGON)</option>
                    <option value="3">MATIC(MUMBAI)</option>
                </select>
                <br />
                <label for="name">가격2: </label>
                <input type="number" name="price2" required />
                
                <select name="currency2">
                    <option value="0">ETH(ETHEREUM)</option>
                    <option value="1">ETH(SEPOLIA)</option>
                    <option value="2">MATIC(POLYGON)</option>
                    <option value="3">MATIC(MUMBAI)</option>
                </select>
                <br />
                <label for="name">가격3: </label>
                <input type="number" name="price3" required />
                
                <select name="currency3">
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
            <Script src="/scripts/listing.js" strategy="afterInteractive"/>
        </>
    )
    
}
