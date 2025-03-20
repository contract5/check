export interface Results {
  mintParams: string;
  extractedKeccak: string | null;
  keccakTrue: string;
  isMintEnabled: boolean;
  usdcAmount: string | null;
  bnbAmount: string | null;
  usdcAmountDecimal: string | null;
  bnbDecimal: string | null;
  balanceBNB: string;
}
