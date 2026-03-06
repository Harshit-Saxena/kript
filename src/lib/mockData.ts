export interface Coin {
  rank: number;
  id: string;
  symbol: string;
  name: string;
  price: number;
  change1h: number;
  change24h: number;
  change7d: number;
  marketCap: number;
  volume24h: number;
  sparkline: number[];
}

export const COINS: Coin[] = [
  {
    rank: 1,
    id: "bitcoin",
    symbol: "BTC",
    name: "Bitcoin",
    price: 67432.18,
    change1h: 0.12,
    change24h: 2.34,
    change7d: 5.12,
    marketCap: 1_325_000_000_000,
    volume24h: 28_400_000_000,
    sparkline: [62000, 63500, 61800, 65000, 64200, 66800, 67432],
  },
  {
    rank: 2,
    id: "ethereum",
    symbol: "ETH",
    name: "Ethereum",
    price: 3541.22,
    change1h: -0.08,
    change24h: 1.87,
    change7d: -2.41,
    marketCap: 425_000_000_000,
    volume24h: 14_200_000_000,
    sparkline: [3300, 3420, 3380, 3510, 3490, 3580, 3541],
  },
  {
    rank: 3,
    id: "tether",
    symbol: "USDT",
    name: "Tether",
    price: 1.0002,
    change1h: 0.0,
    change24h: 0.01,
    change7d: 0.02,
    marketCap: 118_000_000_000,
    volume24h: 62_000_000_000,
    sparkline: [1.0, 1.0001, 0.9999, 1.0002, 1.0001, 1.0, 1.0002],
  },
  {
    rank: 4,
    id: "bnb",
    symbol: "BNB",
    name: "BNB",
    price: 589.34,
    change1h: 0.21,
    change24h: -0.82,
    change7d: 3.15,
    marketCap: 86_000_000_000,
    volume24h: 1_800_000_000,
    sparkline: [545, 560, 552, 575, 570, 585, 589],
  },
  {
    rank: 5,
    id: "xrp",
    symbol: "XRP",
    name: "XRP",
    price: 0.6231,
    change1h: 0.55,
    change24h: 3.41,
    change7d: 8.22,
    marketCap: 67_000_000_000,
    volume24h: 2_900_000_000,
    sparkline: [0.55, 0.57, 0.56, 0.6, 0.61, 0.62, 0.6231],
  },
  {
    rank: 6,
    id: "solana",
    symbol: "SOL",
    name: "Solana",
    price: 178.92,
    change1h: -0.33,
    change24h: -1.24,
    change7d: -4.3,
    marketCap: 78_000_000_000,
    volume24h: 3_200_000_000,
    sparkline: [192, 188, 185, 180, 176, 179, 179],
  },
  {
    rank: 7,
    id: "usdc",
    symbol: "USDC",
    name: "USD Coin",
    price: 0.9999,
    change1h: 0.0,
    change24h: 0.0,
    change7d: 0.01,
    marketCap: 43_000_000_000,
    volume24h: 7_400_000_000,
    sparkline: [1.0, 0.9999, 1.0001, 1.0, 0.9998, 1.0, 0.9999],
  },
  {
    rank: 8,
    id: "cardano",
    symbol: "ADA",
    name: "Cardano",
    price: 0.4821,
    change1h: 0.14,
    change24h: 0.95,
    change7d: -1.88,
    marketCap: 17_000_000_000,
    volume24h: 390_000_000,
    sparkline: [0.5, 0.49, 0.48, 0.49, 0.47, 0.48, 0.4821],
  },
  {
    rank: 9,
    id: "avalanche",
    symbol: "AVAX",
    name: "Avalanche",
    price: 38.14,
    change1h: -0.44,
    change24h: -2.1,
    change7d: 6.45,
    marketCap: 15_500_000_000,
    volume24h: 520_000_000,
    sparkline: [34, 35, 36, 38, 37, 39, 38],
  },
  {
    rank: 10,
    id: "dogecoin",
    symbol: "DOGE",
    name: "Dogecoin",
    price: 0.1623,
    change1h: 1.02,
    change24h: 4.2,
    change7d: 12.5,
    marketCap: 23_000_000_000,
    volume24h: 1_600_000_000,
    sparkline: [0.13, 0.14, 0.14, 0.15, 0.16, 0.16, 0.1623],
  },
];

export interface MarketStats {
  totalMarketCap: string;
  volume24h: string;
  btcDominance: string;
  marketCapChange: number;
}

export const MARKET_STATS: MarketStats = {
  totalMarketCap: "$2.41T",
  volume24h: "$124.3B",
  btcDominance: "54.9%",
  marketCapChange: 1.23,
};

export interface WalletStep {
  title: string;
  description: string;
}

export interface WalletDef {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  color: string;
  steps: WalletStep[];
  faqs: { question: string; answer: string }[];
}

export const WALLETS: WalletDef[] = [
  {
    slug: "binance",
    name: "Binance",
    tagline: "Connect your Binance exchange account",
    description:
      "Link your Binance account to KripX using a read-only API key. We use military-grade encryption and never have the ability to move your funds.",
    color: "bg-yellow-500",
    steps: [
      {
        title: "Log into Binance",
        description:
          "Open your Binance account on a desktop browser and navigate to your account dashboard.",
      },
      {
        title: "Go to API Management",
        description:
          'Click on your profile icon, then select "API Management" from the dropdown menu.',
      },
      {
        title: "Create a new API key",
        description:
          'Click "Create API" and choose "System generated". Label it "KripX" for easy identification.',
      },
      {
        title: "Complete verification",
        description:
          "Complete the 2FA verification via your authenticator app and email confirmation code.",
      },
      {
        title: "Copy your credentials",
        description:
          "Copy the API Key and Secret Key. Make sure to save these — the Secret Key is only shown once.",
      },
      {
        title: "Paste into KripX",
        description:
          "Enter your API Key and Secret Key in the fields below and click Connect.",
      },
    ],
    faqs: [
      {
        question: "Is it safe to connect my Binance account?",
        answer:
          "Yes. We only request read-only permissions, meaning we can view your portfolio but cannot trade or withdraw funds.",
      },
      {
        question: "Can KripX execute trades on my behalf?",
        answer:
          "No. KripX only uses read-only API access, so we cannot place orders or move any funds.",
      },
    ],
  },
  {
    slug: "metamask",
    name: "MetaMask",
    tagline: "Connect your MetaMask wallet",
    description:
      "Track all your MetaMask wallets and DeFi positions in one place. Simply enter your wallet address — no private keys required.",
    color: "bg-orange-500",
    steps: [
      {
        title: "Open MetaMask",
        description:
          "Open the MetaMask extension in your browser or the MetaMask mobile app.",
      },
      {
        title: "Copy your wallet address",
        description:
          "Click on your account name at the top of MetaMask to copy your public wallet address.",
      },
      {
        title: "Paste address into KripX",
        description:
          "Paste your Ethereum wallet address in the field below. We only need your public address.",
      },
      {
        title: "Select networks",
        description:
          "Choose which networks to track: Ethereum, Polygon, Arbitrum, Optimism, Base, and more.",
      },
      {
        title: "Connect and view portfolio",
        description:
          "Click Connect to start tracking your MetaMask holdings, NFTs, and DeFi positions in real time.",
      },
    ],
    faqs: [
      {
        question: "Do you need my private key or seed phrase?",
        answer:
          "Never. We only need your public wallet address. We will never ask for your private key or seed phrase.",
      },
      {
        question: "Which networks are supported?",
        answer:
          "We support Ethereum, Polygon, Arbitrum, Optimism, Base, BNB Chain, Avalanche, and 100+ more EVM-compatible chains.",
      },
    ],
  },
  {
    slug: "okx",
    name: "OKX Wallet",
    tagline: "Connect your OKX Wallet",
    description:
      "Seamlessly connect your OKX Wallet to track spot balances, staking positions, and DeFi holdings across all supported chains.",
    color: "bg-slate-600",
    steps: [
      {
        title: "Open OKX",
        description:
          "Log into your OKX account on the OKX website or mobile app.",
      },
      {
        title: "Navigate to API",
        description: 'Go to Account Settings and select "API" from the menu.',
      },
      {
        title: "Create read-only API key",
        description:
          'Click "Create API Key", set permissions to "Read" only, and add a label like "KripX".',
      },
      {
        title: "Complete security verification",
        description:
          "Verify the action using your 2FA authenticator and email verification code.",
      },
      {
        title: "Enter credentials in KripX",
        description:
          "Copy the API Key, Secret Key, and Passphrase into the fields below and click Connect.",
      },
    ],
    faqs: [
      {
        question: "Is OKX Wallet connection secure?",
        answer:
          "Yes. All data is encrypted in transit and at rest. We use read-only permissions so we cannot access your funds.",
      },
      {
        question: "Which OKX products are tracked?",
        answer:
          "We track your spot wallet, savings, staking, and DeFi positions across all supported chains.",
      },
    ],
  },
  {
    slug: "coinbase",
    name: "Coinbase Wallet",
    tagline: "Connect your Coinbase Wallet",
    description:
      "Link your Coinbase Wallet to track your crypto holdings and DeFi positions in real time without ever sharing your private keys.",
    color: "bg-blue-600",
    steps: [
      {
        title: "Open Coinbase Wallet",
        description:
          "Open the Coinbase Wallet app on your mobile device or the browser extension.",
      },
      {
        title: "Copy your wallet address",
        description:
          "Tap on your wallet name to copy your public wallet address to the clipboard.",
      },
      {
        title: "Paste address into KripX",
        description:
          "Paste your Coinbase Wallet address in the field below. No private key needed.",
      },
      {
        title: "Select networks to track",
        description:
          "Choose the chains you want to monitor: Ethereum, Base, Polygon, and more.",
      },
      {
        title: "View your portfolio",
        description:
          "Click Connect to start tracking all your Coinbase Wallet assets, including NFTs and DeFi.",
      },
    ],
    faqs: [
      {
        question: "Is this different from Coinbase exchange?",
        answer:
          "Yes. Coinbase Wallet is a self-custody wallet. If you want to connect your Coinbase exchange account, use the Coinbase Exchange connector instead.",
      },
      {
        question: "Are NFTs tracked?",
        answer:
          "Yes. We track your NFT collection across Ethereum, Base, and Polygon in your portfolio dashboard.",
      },
    ],
  },
  {
    slug: "trustwallet",
    name: "Trust Wallet",
    tagline: "Connect your Trust Wallet",
    description:
      "Track your Trust Wallet assets, staking rewards, and DeFi positions across Bitcoin, Ethereum, BNB Chain, and 70+ blockchains.",
    color: "bg-sky-500",
    steps: [
      {
        title: "Open Trust Wallet",
        description: "Open the Trust Wallet app on your iOS or Android device.",
      },
      {
        title: "Find your wallet address",
        description:
          'Tap on the asset you want to track, then tap "Receive" to view and copy your public address.',
      },
      {
        title: "Paste address into KripX",
        description:
          "Paste your Trust Wallet public address into the field below.",
      },
      {
        title: "Choose blockchain",
        description:
          "Select the blockchain for this address (e.g., Ethereum, BNB Chain, Bitcoin).",
      },
      {
        title: "Connect and track",
        description:
          "Click Connect to start seeing your full Trust Wallet portfolio in KripX.",
      },
    ],
    faqs: [
      {
        question: "Can I connect multiple Trust Wallet addresses?",
        answer:
          "Yes. You can connect multiple wallet addresses from Trust Wallet across different blockchains.",
      },
      {
        question: "Is my seed phrase required?",
        answer:
          "Never. We only need your public wallet address. Your seed phrase should never be shared with anyone.",
      },
    ],
  },
];

export function formatPrice(n: number): string {
  if (n >= 1000) {
    return "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  if (n >= 1) {
    return "$" + n.toFixed(4);
  }
  return "$" + n.toFixed(6);
}

export function formatLargeNumber(n: number): string {
  if (n >= 1_000_000_000_000) return "$" + (n / 1_000_000_000_000).toFixed(2) + "T";
  if (n >= 1_000_000_000) return "$" + (n / 1_000_000_000).toFixed(2) + "B";
  if (n >= 1_000_000) return "$" + (n / 1_000_000).toFixed(2) + "M";
  return "$" + n.toLocaleString("en-US");
}

export function formatPercent(n: number): string {
  const sign = n >= 0 ? "+" : "";
  return sign + n.toFixed(2) + "%";
}

export function isPositive(n: number): boolean {
  return n >= 0;
}

export const COIN_COLORS: Record<string, string> = {
  BTC: "#F7931A",
  ETH: "#627EEA",
  USDT: "#26A17B",
  BNB: "#F3BA2F",
  XRP: "#346AA9",
  SOL: "#9945FF",
  USDC: "#2775CA",
  ADA: "#0033AD",
  AVAX: "#E84142",
  DOGE: "#C2A633",
};
