'use client'
import React from "react";
import Script from 'next/script'
// import { getUri } from "../../../../public/scripts/item";
import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import { ticketAbi } from '../../../../abi/TicketAbi'
// import { storeNFT } from "../../../lib/nftStorage";
import SignClient from '@walletconnect/sign-client';
// import { getUri } from "../../../lib/nftStorage";

async function getUri() {
    const response = await fetch('http://localhost:3000/api/booking/1', {
        // headers: {
            // 'Content-Type': 'multipart/form-data',
        // },
        method: 'POST',
        // body: formData,
    })
    // response.json().url
    let data = await response.json()
    // console.log("*****a"+data.url)
    console.log(data)
    return data
    // return res.url
}

// function wagmi() {
//     const { data, isLoading, isSuccess, write } = useContractWrite({
//         address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
//         abi: ticketAbi,
//         functionName: 'mint',
//         args: ["0xF695135B90667c2cd3F96e35115c2df589cEA1BA", 1]
//         // args: ["0xF695135B90667c2cd3F96e35115c2df589cEA1BA", 1, await getUri()]
//     })
// }

// const signClient = new SignClient({
//     projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID,
//     // relayUrl: 'relay.walletconnect.com'
// });
// const connect = async () => {
//     try {
//         // console.log('Try Connecting to WalletConnect:', session);
//         const session = await signClient.connect();
//         console.log('Connected to WalletConnect:', session);
//     } catch (error) {
//         console.error('Failed to connect to WalletConnect:', error);
//     }
// };
// const { data, isSuccess, isLoading } = usePrepareContractWrite({
//     address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
//     abi: ticketAbi,
//     functionName: "mint",
//     args: [process.env.NEXT_PUBLIC_WALLET_ADDRESS, 1, await getUri()],
// });
// const signTransaction = async () => {
//     if (!isSuccess || isLoading) {
//         return;
//     }

//     try {
//         const signedTransaction = await signClient.signTransaction(data.transaction);
//         console.log('Signed transaction:', signedTransaction);

//         // Send signed transaction to the blockchain
//         const sendTransaction = async () => {
//             try {
//                 const receipt = await web3.eth.sendSignedTransaction(signedTransaction);
//                 console.log('Transaction receipt:', receipt);
//             } catch (error) {
//                 console.error('Failed to send transaction:', error);
//             }
//         };
//         sendTransaction();
//     } catch (error) {
//         console.error('Failed to sign transaction:', error);
//     }
// };


export default function Page() {
    const [hydrated, setHydrated] = React.useState(false);
    React.useEffect(() => {
        setHydrated(true);
    }, []);
    if (!hydrated) {
        // Returns null on first render, so the client and server match
        return null;
    }

    const uri = getUri()

    // TODO debound(useEffect hook과 유사) 적용 https://wagmi.sh/examples/contract-write-dynamic#step-5-add-a-debounce-to-the-input-value
    const { contractWriteConfig } = usePrepareContractWrite({
        address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
        abi: ticketAbi,
        functionName: "mint",
        args: [process.env.NEXT_PUBLIC_WALLET_ADDRESS, 1, uri],
    });

    const { data, isSuccess, isLoading } = useContractWrite(contractWriteConfig);

    return (
        <>
            <h1>Hello, Item Page!</h1>
            <div id="item"></div>
            
            <div>
                <button >
                {/* <button onClick={ mint() }> */}
                {/* // <button onClick={async () => {
                    // const uri = await getUri();
                    // await signTransaction();
                 }}> */}
                
                Mint</button>
                {/* {isLoading && <div>Check Wallet</div>} */}
                {/* {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>} */}
            </div>

            {/* <Script src="/scripts/item.js" strategy="afterInteractive" /> */}
            {/* <DynamicComponentWithNoSSR /> */}
        </>
    )
}
