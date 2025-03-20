"use client";

import ContractChecker from "@/components/ContractChecker";
import TelegramPromo from "@/components/TelegramPromo";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <ContractChecker />
        <TelegramPromo />
      </div>
    </div>
  );
}
