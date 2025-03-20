"use client";

import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { Results } from "@/types";
import ResultsDisplay from "./ResultsDisplay";

export default function ContractChecker() {
  const [contractAddress, setContractAddress] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [results, setResults] = useState<Results | null>(null);
  const [error, setError] = useState<string>("");
  const [provider, setProvider] = useState<ethers.JsonRpcProvider | null>(null);

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
      setError("Invalid BNB contract address");
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

  return (
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
        <ResultsDisplay results={results} contractAddress={contractAddress} />
      )}
    </div>
  );
}
