import React from "react";

import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
// import { hardhat } from "wagmi/chains";
import { sepolia } from "wagmi/chains";
import { alchemyProvider } from 'wagmi/providers/alchemy'

// type WagmiProviderType = {
//   children: React.ReactNode;
// };

// const chains = [hardhat];
const chains = [sepolia];
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

const { publicClient, webSocketPublicClient } = configureChains(chains, [alchemyProvider({apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY})]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 2, chains }),
  publicClient,
  webSocketPublicClient,
});

const ethereumClient = new EthereumClient(wagmiConfig, chains);
const WagmiProvider = ({ children }) => {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
};

export default WagmiProvider;
