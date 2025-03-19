"use client";

import { useState, useEffect, useRef } from "react";
import { ethers } from "ethers";

interface Results {
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

export default function Home() {
  const [contractAddress, setContractAddress] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [results, setResults] = useState<Results | null>(null);
  const [error, setError] = useState<string>("");
  const [provider, setProvider] = useState<ethers.JsonRpcProvider | null>(null);
  const [copySuccess, setCopySuccess] = useState<string>("");
  const resultsRef = useRef<HTMLDivElement>(null);

  // Initialize ethers provider on component mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const BNB_RPC_URL = "https://bsc-dataseed.binance.org/";
      setProvider(new ethers.JsonRpcProvider(BNB_RPC_URL));
    }
  }, []);

  // Function to validate an Ethereum contract address
  const isValidEthAddress = (address: string): boolean => {
    return /^0x[a-fA-F0-9]{40}$/.test(address);
  };

  const checkContract = async (): Promise<void> => {
    if (!provider) {
      setError("Provider is not initialized yet");
      return;
    }

    setError("");
    setResults(null);
    setIsLoading(true);

    // Validate address
    if (!isValidEthAddress(contractAddress)) {
      setError("Invalid Ethereum contract address");
      setIsLoading(false);
      return;
    }

    try {
      // The ABI for the mintStorage function
      const abi = [
        {
          inputs: [],
          stateMutability: "view",
          name: "mintStorage",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          type: "function",
        },
      ];

      // Create a contract instance using the ABI and provided address
      const contract = new ethers.Contract(contractAddress, abi, provider);

      // Call the mintStorage function
      const result: string = await contract.mintStorage();

      // Process the returned string
      const parts = result.split(" : ");
      const extractedKeccak =
        parts.length >= 2 ? parts[parts.length - 1].trim() : null;

      // Compute the keccak hash of "True"
      const keccakTrue = ethers.keccak256(ethers.toUtf8Bytes("True"));

      // Check if mint is enabled
      const isMintEnabled = !!(
        extractedKeccak &&
        extractedKeccak.toLowerCase() ===
          keccakTrue.replace("0x", "").toLowerCase()
      );

      // Extract numeric values
      const numberMatch = result.match(/\b\d{10,}\b/g);
      let usdcAmount: string | null = null;
      let bnbAmount: string | null = null;
      let usdcAmountDecimal: string | null = null;
      let bnbDecimal: string | null = null;

      if (numberMatch && numberMatch.length >= 2) {
        usdcAmount = numberMatch[0];
        bnbAmount = numberMatch[1];
        usdcAmountDecimal = ethers.formatEther(usdcAmount);
        bnbDecimal = ethers.formatEther(bnbAmount);
      }

      // Fetch the contract's balance
      const balanceWei = await provider.getBalance(contractAddress);
      const balanceBNB = ethers.formatEther(balanceWei);

      setResults({
        mintParams: result,
        extractedKeccak,
        keccakTrue,
        isMintEnabled,
        usdcAmount,
        bnbAmount,
        usdcAmountDecimal,
        bnbDecimal,
        balanceBNB,
      });
    } catch (err) {
      console.error("Error fetching contract data:", err);
      setError(
        "Error fetching contract data. Please check the contract address and try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const copyResults = () => {
    if (!results) return;

    const textToCopy = `
Contract Address: ${contractAddress}
Mint Status: ${results.isMintEnabled ? "Enabled" : "Not Enabled"}
Contract Balance: ${results.balanceBNB} BNB
${results.usdcAmountDecimal ? `USDC Amount: ${results.usdcAmountDecimal} USDC` : ""}
${results.bnbDecimal ? `Max BNB: ${results.bnbDecimal} BNB` : ""}
Mint Parameters: ${results.mintParams}
${results.extractedKeccak ? `Extracted Keccak Hash: ${results.extractedKeccak}` : ""}
Keccak(True): ${results.keccakTrue}
${results.usdcAmount ? `USDC Amount (Wei): ${results.usdcAmount}` : ""}
${results.bnbAmount ? `MAX BNB (Wei): ${results.bnbAmount}` : ""}
    `.trim();

    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setCopySuccess("Copied!");
        setTimeout(() => setCopySuccess(""), 2000);
      })
      .catch(err => {
        setCopySuccess("Failed to copy");
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-4xl mx-auto p-4 md:p-6">
        <header className="mb-10 text-center">
          {/* Title and description removed as requested */}
        </header>

        <div className="bg-slate-800 rounded-xl shadow-xl p-4 md:p-6 mb-8 border border-slate-700">
          <div className="mb-6">
            <label
              htmlFor="contractAddress"
              className="block text-sm font-medium text-slate-300 mb-2"
            >
              Contract Address
            </label>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                id="contractAddress"
                value={contractAddress}
                onChange={(e) => setContractAddress(e.target.value)}
                placeholder="0x... (40 hex characters)"
                className="flex-grow px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              />
              <button
                onClick={checkContract}
                disabled={isLoading}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  isLoading
                    ? "bg-slate-600 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-500 to-emerald-400 hover:shadow-lg hover:from-blue-600 hover:to-emerald-500"
                }`}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Checking...
                  </div>
                ) : (
                  "Check Contract"
                )}
              </button>
            </div>
            {error && <p className="mt-2 text-red-400 text-sm">{error}</p>}
          </div>

          {results && (
            <div ref={resultsRef} className="mt-6 space-y-6 animate-fadeIn">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-slate-200">Results</h2>
                <button
                  onClick={copyResults}
                  className="px-3 py-1.5 bg-slate-700 hover:bg-slate-600 rounded-md text-sm flex items-center transition-colors"
                >
                  <svg 
                    className="w-4 h-4 mr-1.5" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" 
                    />
                  </svg>
                  {copySuccess || "Copy Results"}
                </button>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div
                  className={`h-12 w-12 rounded-full flex items-center justify-center ${
                    results.isMintEnabled
                      ? "bg-emerald-500/20 text-emerald-400"
                      : "bg-red-500/20 text-red-400"
                  }`}
                >
                  {results.isMintEnabled ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </div>
                <div>
                  <h3 className="font-medium text-lg text-slate-200">
                    Mint Status
                  </h3>
                  <p
                    className={
                      results.isMintEnabled
                        ? "text-emerald-400"
                        : "text-red-400"
                    }
                  >
                    {results.isMintEnabled
                      ? "Mint is enabled"
                      : "Mint is not enabled"}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
                  <h3 className="font-medium text-slate-300 mb-2">
                    Contract Balance
                  </h3>
                  <p className="text-xl md:text-2xl font-bold text-blue-400 break-words">
                    {results.balanceBNB} BNB
                  </p>
                </div>

                {results.usdcAmountDecimal && (
                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
                    <h3 className="font-medium text-slate-300 mb-2">
                      USDC Amount
                    </h3>
                    <p className="text-xl md:text-2xl font-bold text-emerald-400 break-words">
                      {results.usdcAmountDecimal} USDC
                    </p>
                  </div>
                )}

                {results.bnbDecimal && (
                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
                    <h3 className="font-medium text-slate-300 mb-2">Max BNB</h3>
                    <p className="text-xl md:text-2xl font-bold text-yellow-400 break-words">
                      {results.bnbDecimal} BNB
                    </p>
                  </div>
                )}
              </div>

              <details className="bg-slate-900 rounded-lg border border-slate-700 p-4">
                <summary className="font-medium text-slate-300 cursor-pointer">
                  Mint Parameters
                </summary>
                <div className="mt-4 space-y-2 text-sm text-slate-400 overflow-x-auto">
                  <p className="break-words whitespace-pre-wrap">{results.mintParams}</p>
                  {results.extractedKeccak && (
                    <p className="break-words">
                      <span className="text-slate-300">
                        Extracted Keccak Hash:
                      </span>{" "}
                      {results.extractedKeccak}
                    </p>
                  )}
                  {results.keccakTrue && (
                    <p className="break-words">
                      <span className="text-slate-300">Keccak(True):</span>{" "}
                      {results.keccakTrue}
                    </p>
                  )}
                  {results.usdcAmount && (
                    <p className="break-words">
                      <span className="text-slate-300">USDC Amount (Wei):</span>{" "}
                      {results.usdcAmount}
                    </p>
                  )}
                  {results.bnbAmount && (
                    <p className="break-words">
                      <span className="text-slate-300">MAX BNB (Wei):</span>{" "}
                      {results.bnbAmount}
                    </p>
                  )}
                </div>
              </details>
            </div>
          )}
        </div>

        <div className="text-center py-6">
          <p className="mb-4 text-slate-300">
            Join the official Telegram channel for more call outs
          </p>
          <a
            href="https://t.me/bitcoinhackingsoftwares"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-lg font-medium bg-[#0088cc] hover:bg-[#0099ee] transition-colors duration-200"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.612 7.518c-.123.571-.453.719-.919.447l-2.551-1.869-1.23 1.175c-.137.136-.25.25-.514.25l.184-2.573 4.714-4.225c.205-.184-.044-.285-.316-.101l-5.825 3.654-2.507-.785c-.546-.173-.558-.546.113-.811l9.786-3.757c.452-.166.85.114.677.877z" />
            </svg>
            Join Telegram Channel
          </a>
        </div>
      </div>
    </div>
  );
}