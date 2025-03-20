"use client";

interface StatusIndicatorProps {
  isEnabled: boolean;
}

export default function StatusIndicator({ isEnabled }: StatusIndicatorProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
      <div
        className={`h-12 w-12 rounded-full flex items-center justify-center ${
          isEnabled
            ? "bg-emerald-500/20 text-emerald-400"
            : "bg-red-500/20 text-red-400"
        }`}
      >
        {isEnabled ? (
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
        <h3 className="font-medium text-lg text-slate-200">Mint Status</h3>
        <p className={isEnabled ? "text-emerald-400" : "text-red-400"}>
          {isEnabled ? "Mint is enabled" : "Mint is not enabled"}
        </p>
      </div>
    </div>
  );
}
