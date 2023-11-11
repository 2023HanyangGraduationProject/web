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

        let varFiles = event.target.inputFiles.files;
        let row = event.target.row.value;
        let column = event.target.column.value;
        
        // check wheter the number of files is equal to the number of rows * columns
        if(varFiles.length != row * column){
            alert("The number of files is not equal to the number of rows * columns");
            return;
        }
        // check whether address is undefined or not.
        if(address == undefined){
            alert("Please connect your wallet");
            return;
        }

        let formData = new FormData();
        formData.append("address", address);
        formData.append("name", event.target.collectionName.value);
        for(let i = 0; i < varFiles.length; i++){
            formData.append("images", varFiles[i]);
        }
        formData.append("row", row);
        formData.append("column", column);
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
            {/* <h1>Hello, Listing Page!</h1>
            <div>{address}</div> */}
            
            <form className="w-2/3 min-w-720 max-w-7xl min-h-96 max-h-screen  bg-white shadow-md rounded px-8 pt-6 pb-8 mx-auto mt-16 mb-4 "onSubmit={onSubmit}>
                <label for="collectionName" className="my-2">콜렉션 이름: </label>
                <input type="text" name="collectionName" id="collectionName" className="shadow appearance-none border rounded w-48 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-web3purple focus:shadow-outline" required />
                <br />
                <label for="inputFiles" className="text-gray-700 my-2">이미지: </label>
                <input id="inputFiles" multiple type="file" />
                <br />
                <div className="text-gray-700 my-2">선택한 파일: <pre className="output text-gray-700"></pre></div>
                <label for="price1" className="block text-gray-700 text-sm font-bold mb-2 my-2">가격1: </label>
                <input type="number" name="price1" id="price1" className="shadow appearance-none border rounded w-48 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-web3purple focus:shadow-outline" required />

                <select name="currency1" className="border rounded ml-4 h-8">
                    <option value="0">ETH(ETHEREUM)</option>
                    <option value="1">ETH(SEPOLIA)</option>
                    <option value="2">MATIC(POLYGON)</option>
                    <option value="3">MATIC(MUMBAI)</option>
                </select>
                <br />
                <label for="price2" className="block text-gray-700 text-sm font-bold mb-2 my-2">가격2: </label>
                <input type="number" name="price2" id="price2" className="shadow appearance-none border rounded w-48 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-web3purple focus:shadow-outline" required />
                
                <select name="currency2" className="border rounded ml-4 h-8">
                    <option value="0">ETH(ETHEREUM)</option>
                    <option value="1">ETH(SEPOLIA)</option>
                    <option value="2">MATIC(POLYGON)</option>
                    <option value="3">MATIC(MUMBAI)</option>
                </select>
                <br />
                <label for="price3" className="block text-gray-700 text-sm font-bold mb-2 my-2">가격3: </label>
                <input type="number" name="price3" id="price3" className="shadow appearance-none border rounded w-48 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-web3purple focus:shadow-outline" required />
                
                <select name="currency3" className="border rounded ml-4 h-8">
                    <option value="0">ETH(ETHEREUM)</option>
                    <option value="1">ETH(SEPOLIA)</option>
                    <option value="2">MATIC(POLYGON)</option>
                    <option value="3">MATIC(MUMBAI)</option>
                </select>
                <br />
                행: <input type="number" name="row" className="shadow appearance-none border rounded w-48 py-2 px-3 my-2 text-gray-700 mb-3 leading-tight focus:outline-web3purple focus:shadow-outline"/>
                <br />
                열: <input type="number" name="column" className="shadow appearance-none border rounded w-48 py-2 px-3 my-2 text-gray-700 mb-3 leading-tight focus:outline-web3purple focus:shadow-outline"/>
                <br />
                <button type="submit"className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-36 h-12 py-2 px-4 my-2 rounded focus:outline-none focus:shadow-outline">등록</button>
            </form>
            <Script src="/scripts/listing.js" strategy="afterInteractive"/>
        </>
    )
    
}
