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
    const response = await fetch('http://localhost:3000/api/booking/1', {
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
    const { address, connector, isConnected } = useAccount()
    
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
        // address: "0xF695135B90667c2cd3F96e35115c2df589cEA1BA",
        address: "0x9B05f5a661c38802a629EBC98A0D226299E4d09f",
        // address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
        abi: ticketAbi,
        functionName: 'mint',
        gas: 1_000_000n,
        args: [process.env.NEXT_PUBLIC_WALLET_ADDRESS, 3, "ipfs://bafyreihvuf3xonmtrmyqcvyf7elnzzsbhsymzk2h2lqbwjhqwikbaokdvm/metadata.json"],
        // args: ["0x4D264781d14bdc4194cF7eE272866Fd016446fb1", 1, "ipfs://bafyreihvuf3xonmtrmyqcvyf7elnzzsbhsymzk2h2lqbwjhqwikbaokdvm/metadata.json"],
        // args: [address, 1, debouncedUri],
    });

    const { data, write } = useContractWrite({
        useContractWriteConfig,
        // address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
        // abi: ticketAbi,
        // functionName: 'mint',
    });
    console.log(address)
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
            <h1>Hello, Item Page!</h1>
            <div id="item"></div>
            <div>
                { isLoading && <input type="text" value="Loading..." /> }
                { isSuccess && <input type="text" value={JSON.stringify(data)} /> }
                
                <button disabled={!write || isLoading} onClick={() => write({
                    address: "0x9B05f5a661c38802a629EBC98A0D226299E4d09f",
                    abi: ticketAbi,
                    gas: 1_000_000n,
                    functionName: 'mint',
                    args: [process.env.NEXT_PUBLIC_WALLET_ADDRESS, 3, "ipfs://bafyreihvuf3xonmtrmyqcvyf7elnzzsbhsymzk2h2lqbwjhqwikbaokdvm/metadata.json"],
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
        </>
    )
}
