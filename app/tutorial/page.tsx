"use client";

import MintParameterChecker from "@/components/MintParameterChecker";
import Image from "next/image";
import Link from "next/link";

export default function Tutorial() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-slate-800 rounded-xl shadow-xl p-4 md:p-6 mb-8 border border-slate-700">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-300">
            Mint Tutorial
          </h1>

          {/* Table of Contents */}
          <div className="mb-8 p-4 bg-slate-750 rounded-lg border border-slate-700">
            <h2 className="text-xl font-semibold mb-3 text-slate-200">
              Contents
            </h2>
            <ul className="space-y-1 text-blue-400">
              <li>
                <a href="#section-1" className="hover:text-blue-300">
                  Installing Rabby Wallet on iOS and Android
                </a>
              </li>
              <li>
                <a href="#section-2" className="hover:text-blue-300">
                  Enabling the Rabby DApp Browser
                </a>
              </li>
              <li>
                <a href="#section-3" className="hover:text-blue-300">
                  Deploying the Hex Contract Using MyEtherWallet
                </a>
              </li>
              <li>
                <a href="#section-4" className="hover:text-blue-300">
                  Deploying the Contract
                </a>
              </li>
              <li>
                <a href="#section-5" className="hover:text-blue-300">
                  Retrieving the Contract Address
                </a>
              </li>
              <li>
                <a href="#section-6" className="hover:text-blue-300">
                  Checking Mint Parameters
                </a>
              </li>
              <li>
                <a href="#section-7" className="hover:text-blue-300">
                  Receiving Minted USDC
                </a>
              </li>
            </ul>
          </div>

          {/* Section 1 */}
          <div id="section-1" className="mb-10">
            <h2 className="text-xl font-bold text-blue-400 mb-4 pb-2 border-b border-slate-700">
              Installing Rabby Wallet on iOS and Android
            </h2>

            <div className="space-y-8">
              <div className="bg-slate-750 rounded-lg p-4 border border-slate-700">
                <h3 className="font-semibold text-lg mb-2">
                  Step 1: Install Rabby Wallet
                </h3>
                <p className="text-slate-300 mb-3">
                  Install Rabby Wallet from the App Store (iOS) or Google Play
                  Store (Android).
                </p>
                <div className="mb-3">
                  <a
                    href="https://apps.apple.com/us/app/rabby-wallet-crypto-evm/id6474381673"
                    className="text-blue-400 hover:text-blue-300 mr-4"
                  >
                    iOS App Store
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.debank.rabbymobile&pli=1"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    Android Google Play
                  </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative w-full h-56 rounded overflow-hidden border border-slate-700">
                    <Image
                      src="/images/1.jpg"
                      alt="Rabby Wallet play store page"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="relative w-full h-56 rounded overflow-hidden border border-slate-700">
                    <Image
                      src="/images/ios.jpg"
                      alt="Rabby Wallet app store page"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-slate-750 rounded-lg p-4 border border-slate-700">
                <h3 className="font-semibold text-lg mb-2">
                  Step 2: Create a new address
                </h3>
                <p className="text-slate-300 mb-3">
                  Open Rabby Wallet and create a new wallet address.
                </p>
                <div className="relative w-full h-56 rounded overflow-hidden border border-slate-700">
                  <Image
                    src="/images/2.jpg"
                    alt="Creating a new wallet address in Rabby"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div id="section-2" className="mb-10">
            <h2 className="text-xl font-bold text-blue-400 mb-4 pb-2 border-b border-slate-700">
              Enabling the Rabby DApp Browser
            </h2>

            <div className="space-y-8">
              <div className="bg-slate-750 rounded-lg p-4 border border-slate-700">
                <h3 className="font-semibold text-lg mb-2">
                  Step 3: Enabling the Dapp browser
                </h3>
                <p className="text-slate-300 mb-3">
                  Enable rabby wallet dApp function by adding about $1 worth
                  of bnb on that
                </p>
                <div className="relative w-full h-56 rounded overflow-hidden border border-slate-700">
                  <Image
                    src="/images/3.jpg"
                    alt="Adding BNB to wallet"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              <div className="bg-slate-750 rounded-lg p-4 border border-slate-700">
                <h3 className="font-semibold text-lg mb-2">
                  Step 4: Access the DApp browser
                </h3>
                <p className="text-slate-300 mb-3">
                  After adding BNB, the DApp browser feature is enabled. Tap
                  DApps or Website.
                </p>
                <div className="relative w-full h-56 rounded overflow-hidden border border-slate-700">
                  <Image
                    src="/images/4.jpg"
                    alt="Accessing DApp browser in Rabby"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div id="section-3" className="mb-10">
            <h2 className="text-xl font-bold text-blue-400 mb-4 pb-2 border-b border-slate-700">
              Deploying the Hex Contract Using MyEtherWallet
            </h2>

            <div className="space-y-8">
              <div className="bg-slate-750 rounded-lg p-4 border border-slate-700">
                <h3 className="font-semibold text-lg mb-2">
                  Step 5: Open MyEtherWallet
                </h3>
                <p className="text-slate-300 mb-3">
                  Open the DApp browser and visit: https://myetherwallet.com/
                </p>
                <div className="relative w-full h-56 rounded overflow-hidden border border-slate-700">
                  <Image
                    src="/images/5.jpg"
                    alt="MyEtherWallet homepage"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              <div className="bg-slate-750 rounded-lg p-4 border border-slate-700">
                <h3 className="font-semibold text-lg mb-2">
                  Step 6: Access wallet
                </h3>
                <p className="text-slate-300 mb-3">
                  Click &apos;Access My Wallet&apos; to connect Rabby Wallet.
                </p>
                <div className="relative w-full h-56 rounded overflow-hidden border border-slate-700">
                  <Image
                    src="/images/6.jpg"
                    alt="Access wallet screen on MyEtherWallet"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              <div className="bg-slate-750 rounded-lg p-4 border border-slate-700">
                <h3 className="font-semibold text-lg mb-2">
                  Step 7: Select Browser Extension
                </h3>
                <p className="text-slate-300 mb-3">
                  Select &apos;Browser Extension&apos; to connect with Rabby.
                </p>
                <div className="relative w-full h-56 rounded overflow-hidden border border-slate-700">
                  <Image
                    src="/images/7.jpg"
                    alt="Selecting browser extension option"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              <div className="bg-slate-750 rounded-lg p-4 border border-slate-700">
                <h3 className="font-semibold text-lg mb-2">
                  Step 8: Change network
                </h3>
                <p className="text-slate-300 mb-3">
                  Change the network from Ethereum to BNB Smart Chain.
                </p>
                <div className="relative w-full h-56 rounded overflow-hidden border border-slate-700">
                  <Image
                    src="/images/8.jpg"
                    alt="Changing network to BNB Smart Chain"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              <div className="bg-slate-750 rounded-lg p-4 border border-slate-700">
                <h3 className="font-semibold text-lg mb-2">
                  Step 9: Select BNB and click &apos;Connect&apos;
                </h3>
                <p className="text-slate-300 mb-3">
                  Select BNB and click &apos;Connect&apos;.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative w-full h-56 rounded overflow-hidden border border-slate-700">
                    <Image
                      src="/images/9.jpg"
                      alt="Selecting BNB network"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="relative w-full h-56 rounded overflow-hidden border border-slate-700">
                    <Image
                      src="/images/10.jpg"
                      alt="Clicking Connect button"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-slate-750 rounded-lg p-4 border border-slate-700">
                <h3 className="font-semibold text-lg mb-2">
                  Step 10: Verify network
                </h3>
                <p className="text-slate-300 mb-3">
                  On MyEtherWallet, ensure the network is set to BNB Smart
                  Chain.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative w-full h-56 rounded overflow-hidden border border-slate-700">
                    <Image
                      src="/images/11.jpg"
                      alt="Checking network settings"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="relative w-full h-56 rounded overflow-hidden border border-slate-700">
                    <Image
                      src="/images/12.jpg"
                      alt="Confirmed BNB Smart Chain network"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div id="section-4" className="mb-10">
            <h2 className="text-xl font-bold text-blue-400 mb-4 pb-2 border-b border-slate-700">
              Deploying the Contract
            </h2>

            <div className="space-y-8">
              <div className="bg-slate-750 rounded-lg p-4 border border-slate-700">
                <h3 className="font-semibold text-lg mb-2">
                  Step 11: Open menu
                </h3>
                <p className="text-slate-300 mb-3">
                  Click the menu button (top-left corner) to open the menu.
                </p>
                <div className="relative w-full h-56 rounded overflow-hidden border border-slate-700">
                  <Image
                    src="/images/13.jpg"
                    alt="Opening the menu in MyEtherWallet"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              <div className="bg-slate-750 rounded-lg p-4 border border-slate-700">
                <h3 className="font-semibold text-lg mb-2">
                  Step 12: Navigate to Deploy Contract
                </h3>
                <p className="text-slate-300 mb-3">
                  Navigate to Contracts &gt; Deploy Contract.
                </p>
                <div className="relative w-full h-56 rounded overflow-hidden border border-slate-700">
                  <Image
                    src="/images/14.jpg"
                    alt="Navigating to Deploy Contract option"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              <div className="bg-slate-750 rounded-lg p-4 border border-slate-700">
                <h3 className="font-semibold text-lg mb-2">
                  Step 13: Enter Bytecode and ABI
                </h3>
                <p className="text-slate-300 mb-3">
                  In the Deploy Contract menu, the Bytecode and ABI fields will
                  appear.
                </p>

                <h4 className="font-medium text-slate-300 mb-2">
                  For Bytecode:
                </h4>
                <p className="text-slate-300 mb-3">
                  Open the{" "}
                  <Link
                    href="https://t.me/bitcoinhackingsoftwares"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    Telegram
                  </Link>{" "}
                  channel, locate a posted Hex, and copy it. Click
                  &apos;Opcode&apos; to reveal the Hex.
                </p>
                <div className="relative w-full h-48 rounded overflow-hidden border border-slate-700">
                  <Image
                    src="/images/16.jpg"
                    alt="Revealing the Hex"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <p className="text-slate-300 mb-2">
                  Click the copy button to copy the Hex.
                </p>
                <div className="relative w-full h-48 rounded overflow-hidden border border-slate-700 mb-4">
                  <Image
                    src="/images/17.jpg"
                    alt="Copying the Hex"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <h4 className="font-medium text-slate-300 mb-2">
                  For ABI/JSON:
                </h4>
                <p className="text-slate-300 mb-3">
                  Click the Opcode link to open and copy the ABI.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="relative w-full h-48 rounded overflow-hidden border border-slate-700">
                    <Image
                      src="/images/18.jpg"
                      alt="Opening ABI link"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="relative w-full h-48 rounded overflow-hidden border border-slate-700">
                    <Image
                      src="/images/19.jpg"
                      alt="ABI code displayed"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>

                <p className="text-slate-300 mb-2">
                  Click the copy button to copy the ABI.
                </p>
                <div className="relative w-full h-48 rounded overflow-hidden border border-slate-700">
                  <Image
                    src="/images/20.jpg"
                    alt="Copying the ABI"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              <div className="bg-slate-750 rounded-lg p-4 border border-slate-700">
                <h3 className="font-semibold text-lg mb-2">
                  Step 14: Name contract
                </h3>
                <p className="text-slate-300 mb-3">
                  Name the contract as &apos;Mint&apos; and click &apos;Deploy
                  Contract&apos;.
                </p>
                <div className="relative w-full h-56 rounded overflow-hidden border border-slate-700">
                  <Image
                    src="/images/21.jpg"
                    alt="Naming the contract"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              <div className="bg-slate-750 rounded-lg p-4 border border-slate-700">
                <h3 className="font-semibold text-lg mb-2">
                  Step 15: Confirm transaction
                </h3>
                <p className="text-slate-300 mb-3">
                  Confirm and send the deployment transaction.
                </p>
                <div className="relative w-full h-56 rounded overflow-hidden border border-slate-700">
                  <Image
                    src="/images/22.jpg"
                    alt="Confirming the transaction"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              <div className="bg-slate-750 rounded-lg p-4 border border-slate-700">
                <h3 className="font-semibold text-lg mb-2">
                  Step 16: Sign approval
                </h3>
                <p className="text-slate-300 mb-3">
                  Click &apos;Sign&apos; to approve the deployment.
                </p>
                <div className="relative w-full h-56 rounded overflow-hidden border border-slate-700">
                  <Image
                    src="/images/23.jpg"
                    alt="Signing the approval"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              <div className="bg-slate-750 rounded-lg p-4 border border-slate-700">
                <h3 className="font-semibold text-lg mb-2">
                  Step 17: Broadcast confirmation
                </h3>
                <p className="text-slate-300 mb-3">
                  Click &apos;Confirm&apos; to broadcast the contract deployment
                  to the blockchain.
                </p>
                <div className="relative w-full h-56 rounded overflow-hidden border border-slate-700">
                  <Image
                    src="/images/24.jpg"
                    alt="Broadcasting confirmation"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div id="section-5" className="mb-10">
            <h2 className="text-xl font-bold text-blue-400 mb-4 pb-2 border-b border-slate-700">
              Retrieving the Contract Address
            </h2>

            <div className="space-y-8">
              <div className="bg-slate-750 rounded-lg p-4 border border-slate-700">
                <h3 className="font-semibold text-lg mb-2">
                  Step 18: Copy your deployed contract address
                </h3>
                <p className="text-slate-300 mb-3">
                  Copy your deployed contract address from BscScan.
                </p>

                <p className="text-slate-300 mb-2">
                  Click &apos;View on BscScan&apos; to check the transaction.
                </p>
                <div className="relative w-full h-48 rounded overflow-hidden border border-slate-700 mb-4">
                  <Image
                    src="/images/25.jpg"
                    alt="Viewing on BscScan"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <p className="text-slate-300 mb-2">
                  Scroll down to find the contract address under &apos;To:&apos;
                  (marked as &apos;Created&apos;). Copy the contract address.
                </p>
                <div className="relative w-full h-48 rounded overflow-hidden border border-slate-700">
                  <Image
                    src="/images/26.jpg"
                    alt="Copying contract address"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <div id="section-6" className="mb-10">
            <h2 className="text-xl font-bold text-blue-400 mb-4 pb-2 border-b border-slate-700">
              Checking Mint Parameters
            </h2>

            <div className="space-y-8">
              <MintParameterChecker />

              <div className="bg-slate-750 rounded-lg p-4 border border-slate-700">
                <h3 className="font-semibold text-lg mb-2">
                  Step 20: Input contract address
                </h3>
                <p className="text-slate-300 mb-3">
                  Input the contract address and click &apos;Check
                  Contract&apos;.
                </p>
                <div className="relative w-full h-56 rounded overflow-hidden border border-slate-700">
                  <Image
                    src="/images/27.jpg"
                    alt="Inputting contract address"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              <div className="bg-slate-750 rounded-lg p-4 border border-slate-700">
                <h3 className="font-semibold text-lg mb-2">
                  Step 21: Check minting status
                </h3>
                <p className="text-slate-300 mb-3">
                  This displays the mint parameters, the amount of USDC, the
                  mint status, the maximum BNB, and the called data
                </p>
                <ul className="list-disc pl-6 mb-3 text-slate-300">
                  <li>
                    The maximum BNB limit is specified in the call function That
                    is the maximum amount of BNB your contract can hold to
                    enable its mint function
                  </li>
                </ul>

                <div className="relative w-full h-56 rounded overflow-hidden border border-slate-700">
                  <Image
                    src="/images/28.jpg"
                    alt="Inputting contract address"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              <div className="bg-slate-750 rounded-lg p-4 border border-slate-700">
                <h3 className="font-semibold text-lg mb-2">
                  Step 22: Enable minting
                </h3>
                <p className="text-slate-300 mb-3">To enable minting:</p>
                <ul className="list-disc pl-6 mb-3 text-slate-300">
                  <li>
                    Send BNB from the same wallet used for deployment to the
                    contract address.
                  </li>
                  <li>This ensures a contract call is made.</li>
                </ul>
                <div className="relative w-full h-56 rounded overflow-hidden border border-slate-700">
                  <Image
                    src="/images/29.jpg"
                    alt="Enabling minting"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              <div className="bg-slate-750 rounded-lg p-4 border border-slate-700">
                <h3 className="font-semibold text-lg mb-2">
                  Step 23: Verify minting enabled
                </h3>

                <ul className="list-disc pl-6 mb-3 text-slate-300">
                  <li>90% of contract&apos;s mint are enabled on 0.1 BNB</li>
                  <li>
                    If not, make another until the contract is mint is enabled
                  </li>
                </ul>
                <div className="relative w-full h-56 rounded overflow-hidden border border-slate-700">
                  <Image
                    src="/images/30.jpg"
                    alt="Verifying minting is enabled"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 7 */}
          <div id="section-7" className="mb-10">
            <h2 className="text-xl font-bold text-blue-400 mb-4 pb-2 border-b border-slate-700">
              Receiving Minted USDC
            </h2>

            <div className="space-y-8">
              <div className="bg-slate-750 rounded-lg p-4 border border-slate-700">
                <h3 className="font-semibold text-lg mb-2">
                  Step 24: Receive minted USDC
                </h3>
                <p className="text-slate-300 mb-3">
                  When the mint is enabled, a contract interaction will occur.
                </p>
                <ul className="list-disc pl-6 mb-3 text-slate-300">
                  <li>
                    The specified amount of USDC and BNB used for minting will
                    be added to your wallet balance.
                  </li>
                </ul>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="relative w-full h-56 rounded overflow-hidden border border-slate-700">
                    <Image
                      src="/images/31.jpg"
                      alt="Receiving minted USDC"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  <div className="relative w-full h-56 rounded overflow-hidden border border-slate-700">
                    <Image
                      src="/images/32.png"
                      alt="Receiving minted USDC 2"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 rounded-lg font-medium bg-gradient-to-r from-blue-500 to-emerald-400 hover:shadow-lg hover:from-blue-600 hover:to-emerald-500 transition-all duration-200"
            >
              Contract Checker
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
