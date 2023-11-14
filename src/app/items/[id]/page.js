'use client'
import React from "react";
import Script from 'next/script'
import { useAccount, useConnect } from 'wagmi'
import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi'
import { ticketAbi } from '../../../../abi/TicketAbi'
// import { storeNFT } from "../../../lib/nftStorage";
// import SignClient from '@walletconnect/sign-client';
import { useDebounce } from '../../../helpers/hooks/useDebounce'

async function getUri() {
    const response = await fetch(process.env.NEXT_PUBLIC_DOMAIN+'/api/booking/1', {
        method: 'POST',
    })
    let data = await response.json()
    console.log("dat:" + data)
    // console.log("data:" + data.url)
    // TODO 프로미스 어떻게 리턴하는지 확인
    return data
}

export default function Page() {

    const { connect, connectors } = useConnect();
    const { address, isConnecting, isConnected } = useAccount()
    
    const [hydrated, setHydrated] = React.useState(false);
    
    // Use a state variable to store the uri
    const [uri, setUri] = React.useState(getUri().then((result) => {return result.url}));
    // const [debouncedUri] = useDebounce(uri, 500);
    console.log("uri: " + uri)
    // console.log("debounceduri: " + debouncedUri)
    console.log("address: " + address)
    console.log("addr: " + process.env.NEXT_PUBLIC_CONTRACT_ADDRESS)
    
    React.useEffect(() => {
        console.log(
          `Current connection status: ${isConnected ? "connected" : "disconnected"}`
        );
      }, [isConnected]);

    const { useContractWriteConfig } = usePrepareContractWrite({
        address: "0xb368cc6aD870345d4492DCfEe561CF419222ef2E",
        // address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
        abi: ticketAbi,
        functionName: 'mint',
        gas: 1_000_000n,
        args: [process.env.NEXT_PUBLIC_WALLET_ADDRESS, 11],
        // args: [process.env.NEXT_PUBLIC_WALLET_ADDRESS, 3, "ipfs://bafyreihvuf3xonmtrmyqcvyf7elnzzsbhsymzk2h2lqbwjhqwikbaokdvm/metadata.json"],
        // args: ["0x4D264781d14bdc4194cF7eE272866Fd016446fb1", 1, "ipfs://bafyreihvuf3xonmtrmyqcvyf7elnzzsbhsymzk2h2lqbwjhqwikbaokdvm/metadata.json"],
        // args: [address, 1, debouncedUri],
    });

    const { data, write } = useContractWrite({
        useContractWriteConfig,
        // address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
        // abi: ticketAbi,
        // functionName: 'mint',
    });
    console.log("****address: "+ address)
    // console.log(data)

    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash,
      })

    React.useEffect(() => {
        setHydrated(true);
    }, []);
    if (!hydrated) {
        // Returns null on first render, so the client and server match
        return null;
    }
   
   // Update the uri state when the input value changes
   const handleChange = (event) => {
       setUri(event.target.value);
    };

    return (
        <>
            <div className="w-2/3 min-w-720 max-w-7xl min-h-96 max-h-screen  bg-white shadow-md rounded p-20 mx-auto mt-20 mb-4">
                <div className="p-10 bg-slate-300 rounded-3xl">
                    <div id="item">
                        <div className="w-[200px] h-[200px] bg-gray-100"></div>
                    </div>
                </div>
                <div>
                    { isLoading && <input type="text" value="Loading..." /> }
                    { isSuccess && <input type="text" value={JSON.stringify(data)} /> }
                    
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-36 h-12 py-2 px-4 my-2 rounded focus:outline-none focus:shadow-outline" disabled={!write || isLoading} onClick={() => write({
                        address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS, // 0xb368cc6aD870345d4492DCfEe561CF419222ef2E
                        abi: ticketAbi,
                        gas: 1_000_000n,
                        functionName: 'mint',
                        args: [process.env.NEXT_PUBLIC_WALLET_ADDRESS, window.location.pathname.split('/')[2]],
                        // args: [process.env.NEXT_PUBLIC_WALLET_ADDRESS, 3, "ipfs://bafyreihvuf3xonmtrmyqcvyf7elnzzsbhsymzk2h2lqbwjhqwikbaokdvm/metadata.json"],
                    })?.()}>
                        {isLoading ? 'Minting...' : 'Mint'}
                    </button>
                    {isSuccess && (
                        <div>
                            Successfully minted your NFT!
                            <div>
                                <a href={`https://etherscan.io/tx/${data?.hash}`}>Etherscan</a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Script src="/scripts/item.js" strategy="afterInteractive"/>
        </>
    )
}
