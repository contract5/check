"use client";

import { Results } from "@/types";
import { useRef, useState } from "react";
import StatusIndicator from "./StatusIndicator";
import ResultsCard from "./ResultsCard";

interface ResultsDisplayProps {
  results: Results;
  contractAddress: string;
}

export default function ResultsDisplay({
  results,
  contractAddress,
}: ResultsDisplayProps) {
  const [copySuccess, setCopySuccess] = useState<string>("");
  const resultsRef = useRef<HTMLDivElement>(null);

  const copyResults = () => {
    if (!results) return;

    const textToCopy = `
Contract Address: ${contractAddress}
Mint Status: ${results.isMintEnabled ? "Enabled" : "Not Enabled"}
Contract Balance: ${results.balanceBNB} BNB
${
  results.usdcAmountDecimal
    ? `USDC Amount: ${results.usdcAmountDecimal} USDC`
    : ""
}
${results.bnbDecimal ? `Max BNB: ${results.bnbDecimal} BNB` : ""}
Mint Parameters: ${results.mintParams}
${
  results.extractedKeccak
    ? `Extracted Keccak Hash: ${results.extractedKeccak}`
    : ""
}
Keccak(True): ${results.keccakTrue}
${results.usdcAmount ? `USDC Amount (Wei): ${results.usdcAmount}` : ""}
${results.bnbAmount ? `MAX BNB (Wei): ${results.bnbAmount}` : ""}
    `.trim();

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopySuccess("Copied!");
        setTimeout(() => setCopySuccess(""), 2000);
      })
      .catch((err) => {
        setCopySuccess("Failed to copy");
        console.error("Failed to copy: ", err);
      });
  };

  return (
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

      <StatusIndicator isEnabled={results.isMintEnabled} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <ResultsCard
          title="Contract Balance"
          value={results.balanceBNB}
          valueColor="text-blue-400"
          suffix="BNB"
        />

        {results.usdcAmountDecimal && (
          <ResultsCard
            title="USDC Amount"
            value={results.usdcAmountDecimal}
            valueColor="text-emerald-400"
            suffix="USDC"
          />
        )}

        {results.bnbDecimal && (
          <ResultsCard
            title="Max BNB"
            value={results.bnbDecimal}
            valueColor="text-yellow-400"
            suffix="BNB"
          />
        )}
      </div>

      <div className="bg-slate-900 rounded-lg border border-slate-700 p-4">
        <h3 className="font-medium text-slate-300 mb-3">Mint Parameters</h3>
        <div className="space-y-2 text-sm text-slate-400 overflow-x-auto">
          <p className="break-words whitespace-pre-wrap">
            {results.mintParams}
          </p>
          {results.extractedKeccak && (
            <p className="break-words">
              <span className="text-slate-300">Extracted Keccak Hash:</span>{" "}
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
      </div>
    </div>
  );
}
