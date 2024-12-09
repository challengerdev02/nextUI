import { providers } from 'ethers'
import type { Account, Chain, Client, Transport } from 'viem'

export function clientToSigner(client: Client<Transport, Chain, Account>) {
  const { account, chain, transport } = client
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  }
  const provider = new providers.Web3Provider(transport, network)
  const signer = provider.getSigner(account.address)
  return signer
}

export const CHAIN_SEPOLIA = '16015286601757825753'
export const CHAIN_FUJI = '14767482510784806043'

export const CHAINS: {
    [key: string]: {
        id: number,
        name: string,
        url: string,
        testnet: boolean,
        mixer: string,
        tokens: {
            symbol: string,
            native: boolean,
            decimals: number,
            address: string
        }[],
        supports: {
            [key: string]: string[],
        }
    }
} = {
    [CHAIN_SEPOLIA]: {
        id: 11155111,
        name: 'Sepolia',
        url: 'https://rpc.ankr.com/eth_sepolia',
        testnet: true,
        mixer: '0x1068B90af10477BF628275998583eBa4C7f4F8B7',
        tokens: [
            { symbol: 'ETH', native: true, address: '0x0000000000000000000000000000000000000000', decimals: 18 },
            { symbol: 'USDC', native: false, address: '0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238', decimals: 6 },
        ],
        supports: {
            [CHAIN_FUJI]: ['ETH', 'USDC'],
        }
    },
    [CHAIN_FUJI]: {
        id: 43113,
        name: 'Avalanche Fuji',
        url: 'https://api.avax-test.network/ext/bc/C/rpc',
        mixer: '0xb4DF34d5CD1089C6427aA745e749F76006ebe2A2',
        testnet: true,
        tokens: [
            { symbol: 'AVAX', native: true, address: '0x0000000000000000000000000000000000000000', decimals: 18 },
            { symbol: 'USDC', native: false, address: '0x5425890298aed601595a70AB815c96711a31Bc65', decimals: 6 },
        ],
        supports: {
            [CHAIN_SEPOLIA]: ['AVAX', 'USDC'],
        }
    },
}