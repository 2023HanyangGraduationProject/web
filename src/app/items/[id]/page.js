'use client'
import React from "react";
import Script from 'next/script'
// import dynamic from "next/dynamic";
import { getUri } from "../../../../public/scripts/item";
import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import { ticketAbi } from '../../../../abi/TicketAbi'

// function wagmi() {
//     const { data, isLoading, isSuccess, write } = useContractWrite({
//         address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
//         abi: ticketAbi,
//         functionName: 'mint',
//         args: ["0xF695135B90667c2cd3F96e35115c2df589cEA1BA", 1]
//         // args: ["0xF695135B90667c2cd3F96e35115c2df589cEA1BA", 1, await getUri()]
//     })
// }

// const DynamicComponentWithNoSSR = dynamic(
//     () => import('../../../../public/scripts/item.js'),
//     { ssr: false }
// )

export default function Page() {
    const [hydrated, setHydrated] = React.useState(false);
    React.useEffect(() => {
        setHydrated(true);
    }, []);
    if (!hydrated) {
        // Returns null on first render, so the client and server match
        return null;
    }

    // wagmi()

    // const [tokenId, setTokenId] = React.useState('')
    // const debouncedTokenId = useDebounce(tokenId)
   
    async () => { console.log("hi"); const uri = await getUri(); console.log(uri) }
    
    // const { config } = usePrepareContractWrite({
    //   address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
    //   abi: ticketAbi,
    //   functionName: 'mint',
    //   args: ["0xF695135B90667c2cd3F96e35115c2df589cEA1BA", 1, getUri()],
    // //   enabled: Boolean(debouncedTokenId),
    // })
    // const { write } = useContractWrite(config)

    return (
        <>
            <h1>Hello, Item Page!</h1>
            <div id="item"></div>
            
            <div>
            <button onClick={() => 
                // to, tokenId, uri
                write()
            }>Mint</button>
                {/* {isLoading && <div>Check Wallet</div>} */}
                {/* {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>} */}
            </div>

            {/* <Script src="/scripts/item.js" strategy="afterInteractive" /> */}
            {/* <DynamicComponentWithNoSSR /> */}
        </>
    )
}
