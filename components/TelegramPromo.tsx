"use client";

export default function TelegramPromo() {
  return (
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
  );
}
