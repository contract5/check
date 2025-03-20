"use client";

interface ResultsCardProps {
  title: string;
  value: string;
  valueColor: string;
  suffix?: string;
}

export default function ResultsCard({ title, value, valueColor, suffix = "" }: ResultsCardProps) {
  return (
    <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
      <h3 className="font-medium text-slate-300 mb-2">
        {title}
      </h3>
      <p className={`text-xl md:text-2xl font-bold ${valueColor} break-words`}>
        {value} {suffix}
      </p>
    </div>
  );
}