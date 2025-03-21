import React, { useState } from 'react';
import { Check, Copy, Terminal, Globe, Download } from 'lucide-react';

type CopyStatusType = {
  keccak: boolean;
  script: boolean;
};

type CopyKeyType = keyof CopyStatusType;

export default function MintParameterChecker() {
  const [copyStatus, setCopyStatus] = useState<CopyStatusType>({
    keccak: false,
    script: false
  });

  const keccakCode = `function keccak_256(Mint)[]: mint_usdc_contract_address(address to, uint256 amount, uint256 fee) external onlyOwner { _mint(to, amount); } : keccak(True or False)`;

  const scriptCode = `# Check if Node.js and npm are installed
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

echo "Starting setup..."

if command_exists node && command_exists npm; then
    echo "✅ Node.js and npm are already installed."
else
    echo "📦 Installing Node.js and npm..."
    pkg update -y && pkg upgrade -y
    pkg install -y nodejs-lts git
    echo "✅ Node.js version: $(node -v)"
    echo "✅ npm version: $(npm -v)"
fi

# Initialize npm project
echo "📦 Setting up npm project..."
rm -f package.json package-lock.json
npm init -y

# Configure package.json
echo "📜 Configuring package.json..."
cat > package.json <<EOF
{
  "type": "module",
  "dependencies": {
    "ethers": "^5.8.0",
    "web3": "^4.16.0"
  }
}
EOF

# Install dependencies
echo "📦 Installing npm dependencies..."
npm install

# Function to validate Ethereum address format
is_valid_eth_address() {
    [[ $1 =~ ^0x[a-fA-F0-9]{40}$ ]]
}

# Get a valid contract address
while true; do
    read -p "🔹 Enter the contract address: " contractAddress

    if ! is_valid_eth_address "$contractAddress"; then
        echo "❌ Invalid format. Please enter a valid Ethereum contract address."
        continue
    fi

    # Test contract address
    cat > testContract.js <<EOF
import Web3 from "web3";
const contractAddress = "$contractAddress";
const abi = [{ "inputs": [], "stateMutability": "view", "name": "mintStorage", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "type": "function" }];
const web3 = new Web3("https://bsc-dataseed.binance.org/");
const contract = new web3.eth.Contract(abi, contractAddress);

async function testContract() {
    try {
        await contract.methods.mintStorage().call();
        process.exit(0);
    } catch (error) {
        process.exit(1);
    }
}

testContract();
EOF

    node testContract.js
    if [ $? -eq 0 ]; then
        rm -f testContract.js
        break
    else
        echo "❌ Invalid contract address or issue fetching data. Try again."
    fi

    rm -f testContract.js
done`;

  const handleCopy = async (text: string, type: CopyKeyType): Promise<void> => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyStatus((prev) => ({ ...prev, [type]: true }));
      setTimeout(() => {
        setCopyStatus((prev) => ({ ...prev, [type]: false }));
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="space-y-4 sm:space-y-8 max-w-full overflow-hidden">
      <div className="bg-slate-800 rounded-xl p-3 sm:p-6 border border-slate-700 shadow-lg">
        <h3 className="font-semibold text-lg sm:text-xl mb-3 sm:mb-4 text-white flex items-center gap-2">
          <Terminal className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="break-words">Step 19: Use mint parameter checker</span>
        </h3>

        <p className="text-slate-300 mb-3 sm:mb-4 text-sm sm:text-base">
          Use a mint parameter checker to verify your contract:
        </p>

        {/* Keccak Code Block */}
        <div className="mb-4 sm:mb-6 bg-slate-900 rounded-lg overflow-hidden border border-slate-700">
          <div className="p-2 sm:p-3 bg-slate-800 border-b border-slate-700">
            <p className="text-slate-300 font-mono text-xs sm:text-sm">
              The mint checker checks for the call function:
            </p>
          </div>
          <div className="relative group">
            <pre className="p-2 sm:p-4 text-xs sm:text-sm text-slate-300 overflow-x-auto bg-slate-900">
              <code>{keccakCode}</code>
            </pre>
            <button
              onClick={() => handleCopy(keccakCode, 'keccak')}
              className="absolute top-1 right-1 sm:top-2 sm:right-2 p-1.5 sm:p-2 text-slate-400 hover:text-white bg-slate-800 rounded-md transition-colors"
            >
              {copyStatus.keccak ? <Check className="w-3 h-3 sm:w-4 sm:h-4" /> : <Copy className="w-3 h-3 sm:w-4 sm:h-4" />}
            </button>
          </div>
        </div>

        {/* Access Methods */}
        <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-slate-300">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-semibold text-sm sm:text-base">Web version:</span>
            </div>
            <a
              href="https://mintchecker.vercel.app/mintchecker"
              className="text-blue-400 hover:text-blue-300 transition-colors text-sm sm:text-base break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              mintchecker.vercel.app/mintchecker
            </a>
          </div>
          
          <div className="flex items-center gap-2 text-slate-300">
            <Terminal className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="font-semibold text-sm sm:text-base">Local method (not available on iOS):</span>
          </div>
        </div>

        {/* Script Code Block */}
        <div className="bg-slate-900 rounded-lg overflow-hidden border border-slate-700">
          <div className="relative group">
            <pre className="p-2 sm:p-4 text-xs sm:text-sm text-slate-300 overflow-x-auto max-h-64 sm:max-h-96 bg-slate-900">
              <code>{scriptCode}</code>
            </pre>
            <button
              onClick={() => handleCopy(scriptCode, 'script')}
              className="absolute top-1 right-1 sm:top-2 sm:right-2 p-1.5 sm:p-2 text-slate-400 hover:text-white bg-slate-800 rounded-md transition-colors"
            >
              {copyStatus.script ? <Check className="w-3 h-3 sm:w-4 sm:h-4" /> : <Copy className="w-3 h-3 sm:w-4 sm:h-4" />}
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm">
          <a
            href="#"
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <Download className="w-3 h-3 sm:w-4 sm:h-4" />
            Download HTML file
          </a>
          <span className="hidden sm:inline text-slate-500">|</span>
          <span className="text-slate-300">
            All files available in Telegram channel
          </span>
        </div>
      </div>
    </div>
  );
}