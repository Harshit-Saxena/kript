interface WalletIconProps {
  wallet: string;
  size?: number;
}

export function WalletIcon({ wallet, size = 24 }: WalletIconProps) {
  const s = size;

  if (wallet === "binance") {
    return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="6" fill="#F3BA2F" />
        <path
          d="M12 5.5L14.12 7.62L9.24 12.5L7.12 10.38L12 5.5Z"
          fill="white"
        />
        <path
          d="M14.5 8L16.62 10.12L9.24 17.5L7.12 15.38L14.5 8Z"
          fill="white"
        />
        <path
          d="M7 12L9.12 14.12L7 16.24L4.88 14.12L7 12Z"
          fill="white"
        />
        <path
          d="M17 12L19.12 14.12L17 16.24L14.88 14.12L17 12Z"
          fill="white"
        />
        <path
          d="M12 14.38L14.12 16.5L12 18.62L9.88 16.5L12 14.38Z"
          fill="white"
        />
      </svg>
    );
  }

  if (wallet === "metamask") {
    return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="6" fill="#1A1A1A" />
        <path d="M20 4L13.5 9L14.7 6.1L20 4Z" fill="#E2761B" />
        <path d="M4 4L10.4 9.1L9.3 6.1L4 4Z" fill="#E4761B" />
        <path d="M17.6 16.2L15.8 19L19.6 20.1L20.8 16.3L17.6 16.2Z" fill="#E4761B" />
        <path d="M3.2 16.3L4.4 20.1L8.2 19L6.4 16.2L3.2 16.3Z" fill="#E4761B" />
        <path d="M8 11.8L6.9 13.5L10.7 13.7L10.5 9.6L8 11.8Z" fill="#E4761B" />
        <path d="M16 11.8L13.4 9.5L13.3 13.7L17.1 13.5L16 11.8Z" fill="#E4761B" />
        <path d="M8.2 19L10.4 17.9L8.5 16.3L8.2 19Z" fill="#E4761B" />
        <path d="M13.6 17.9L15.8 19L15.5 16.3L13.6 17.9Z" fill="#E4761B" />
        <path d="M10.5 13.7L10.4 17.9L13.6 17.9L13.3 13.7L10.5 13.7Z" fill="#F6851B" />
      </svg>
    );
  }

  if (wallet === "okx") {
    return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="6" fill="#000000" />
        <rect x="4" y="9" width="4" height="4" rx="1" fill="white" />
        <rect x="10" y="9" width="4" height="4" rx="1" fill="white" />
        <rect x="16" y="9" width="4" height="4" rx="1" fill="white" />
        <rect x="7" y="12" width="4" height="4" rx="1" fill="white" />
        <rect x="13" y="12" width="4" height="4" rx="1" fill="white" />
        <rect x="7" y="6" width="4" height="4" rx="1" fill="white" />
        <rect x="13" y="6" width="4" height="4" rx="1" fill="white" />
      </svg>
    );
  }

  if (wallet === "coinbase") {
    return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="6" fill="#1652F0" />
        <rect x="8" y="8" width="8" height="8" rx="2" fill="white" />
      </svg>
    );
  }

  if (wallet === "trustwallet") {
    return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="6" fill="#0500FF" />
        <path
          d="M12 4L5 7V12C5 15.87 8.03 19.48 12 20.5C15.97 19.48 19 15.87 19 12V7L12 4Z"
          fill="url(#tw_grad)"
        />
        <defs>
          <linearGradient id="tw_grad" x1="5" y1="4" x2="19" y2="20.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0500FF" />
            <stop offset="1" stopColor="#00B8D9" />
          </linearGradient>
        </defs>
        <path
          d="M12 4L5 7V12C5 15.87 8.03 19.48 12 20.5C15.97 19.48 19 15.87 19 12V7L12 4Z"
          fill="white"
          fillOpacity="0.2"
        />
        <path
          d="M9 12L11 14L15 10"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // Generic wallet icon fallback
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="6" fill="#374151" />
      <path
        d="M5 9h14a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1v-7a1 1 0 011-1z"
        stroke="white"
        strokeWidth="1.5"
      />
      <path
        d="M5 9V7a1 1 0 011-1h12a1 1 0 011 1v2"
        stroke="white"
        strokeWidth="1.5"
      />
      <circle cx="16" cy="13.5" r="1.5" fill="white" />
    </svg>
  );
}
