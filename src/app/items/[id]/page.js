'use client'
import React from "react";
import Script from 'next/script'
import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import { ticketAbi } from '../../../../abi/TicketAbi'
// import { storeNFT } from "../../../lib/nftStorage";
// import SignClient from '@walletconnect/sign-client';
import { useDebounce } from '../../../helpers/hooks/useDebounce'

async function getUri() {
    const response = await fetch('http://localhost:3000/api/booking/1', {
        method: 'POST',
    })
    let data = await response.json()
    // console.log(data)
    return data
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
    
    // Use a state variable to store the uri
    const [uri, setUri] = React.useState(getUri());

    React.useEffect(() => {
        setHydrated(true);
    }, []);
    if (!hydrated) {
        // Returns null on first render, so the client and server match
        return null;
    }

    // TODO debounce (https://wagmi.sh/examples/contract-write-dynamic#step-5-add-a-debounce-to-the-input-value)
    const uri2 = getUri()

    // const { useContractWriteConfig } = usePrepareContractWrite({
    //     address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
    //     abi: ticketAbi,
    //     functionName: "mint",
    //     args: [process.env.NEXT_PUBLIC_WALLET_ADDRESS, 1, uri],
    // });
    
    // const { data, isLoading, isSuccess, write } = useContractWrite({
    //     useContractWriteConfig
    // })

    /*
        const [mintDebounced, setMintDebounced] = useDebounce(mint, 500);

    const uri = getUri();

    const { useContractWriteConfig } = usePrepareContractWrite({
        address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
        abi: ticketAbi,
        functionName: "mint",
        args: [process.env.NEXT_PUBLIC_WALLET_ADDRESS, 1, uri],
    });

    const { data, isLoading, isSuccess, write } = useContractWrite({
        useContractWriteConfig,
    });
    */

   // // Use a state variable to store the uri
   // const [uri] = React.useState(getUri());
   
   
   // Update the uri state when the input value changes
   const handleChange = (event) => {
       setUri(event.target.value);
    };
    
    // TODO hook은 loop 내부에서 사용 불가 
    // Use the useDebounce hook to debounce the uri value
 //    const debouncedUri = useDebounce(uri, 500);

    // const { useContractWriteConfig } = usePrepareContractWrite({
    //     address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
    //     abi: ticketAbi,
    //     functionName: "mint",
    //     args: [process.env.NEXT_PUBLIC_WALLET_ADDRESS, 1, "debouncedUri"],
    // });

    // const { data, isLoading, isSuccess, write } = useContractWrite({
    //     useContractWriteConfig
    // })

    return (
        <>
            <h1>Hello, Item Page!</h1>
            <div id="item"></div>
            
            <div>
                {/* { isLoading && <input type="text" value="Loading..." /> } */}
                {/* { isSuccess && <input type="text" value={JSON.stringify(data)} /> } */}
                {/* <input type="text" value={uri} onChange={handleChange} /> */}
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
