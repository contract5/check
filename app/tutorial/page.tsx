"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Define TypeScript interfaces for our data structures
interface LinkItem {
  text: string;
  url: string;
}

interface ImageItem {
  path: string;
  alt: string;
}

interface SubStep {
  title?: string;
  description: string;
  image?: string;
  images?: ImageItem[];
}

interface Step {
  id: number;
  title: string;
  description: string;
  links?: LinkItem[];
  image?: string;
  images?: ImageItem[];
  imageAlt?: string;
  subSteps?: SubStep[];
  details?: string[];
}

interface TutorialSection {
  section: string;
  steps: Step[];
}

interface SectionNavItem {
  title: string;
  firstStepId: number;
}

// Tutorial data structure based on numbered steps
const tutorialSteps: TutorialSection[] = [
  {
    section: "Installing Rabby Wallet on iOS and Android",
    steps: [
      {
        id: 1,
        title: "Install Rabby Wallet",
        description:
          "Install Rabby Wallet from the App Store (iOS) or Google Play Store (Android).",
        links: [
          { text: "iOS App Store", url: "link.com" },
          { text: "Android Google Play", url: "link.com" },
        ],
        image: "/images/1.jpg",
        imageAlt: "Rabby Wallet app store page",
      },
      {
        id: 2,
        title: "Create a new address",
        description: "Open Rabby Wallet and create a new wallet address.",
        image: "/images/2.jpg",
        imageAlt: "Creating a new wallet address in Rabby",
      },
    ],
  },
  {
    section: "Enabling the Rabby DApp Browser",
    steps: [
      {
        id: 3,
        title: "Add BNB to your wallet",
        description:
          "Add approximately $1 worth of BNB to your wallet to cover network and gas fees.",
        image: "/images/3.jpg",
        imageAlt: "Adding BNB to wallet",
      },
      {
        id: 4,
        title: "Access the DApp browser",
        description:
          "After adding BNB, the DApp browser feature is enabled. On iOS, tap DApps or Website.",
        image: "/images/4.jpg",
        imageAlt: "Accessing DApp browser in Rabby",
      },
    ],
  },
  {
    section: "Deploying the Hex Contract Using MyEtherWallet",
    steps: [
      {
        id: 5,
        title: "Open MyEtherWallet",
        description:
          "Open the DApp browser and visit: https://myetherwallet.com/",
        image: "/images/5.jpg",
        imageAlt: "MyEtherWallet homepage",
      },
      {
        id: 6,
        title: "Access wallet",
        description: "Click 'Access My Wallet' to connect Rabby Wallet.",
        image: "/images/6.jpg",
        imageAlt: "Access wallet screen on MyEtherWallet",
      },
      {
        id: 7,
        title: "Select Browser Extension",
        description: "Select 'Browser Extension' to connect with Rabby.",
        image: "/images/7.jpg",
        imageAlt: "Selecting browser extension option",
      },
      {
        id: 8,
        title: "Change network",
        description: "Change the network from Ethereum to BNB Smart Chain.",
        image: "/images/8.jpg",
        imageAlt: "Changing network to BNB Smart Chain",
      },
      {
        id: 9,
        title: "Select BNB and click 'Connect'",
        description: "Select BNB and click 'Connect'.",
        images: [
          { path: "/images/9.jpg", alt: "Selecting BNB network" },
          { path: "/images/10.jpg", alt: "Clicking Connect button" },
        ],
        imageAlt: "Connecting to BNB network",
      },
      {
        id: 10,
        title: "Verify network",
        description:
          "On MyEtherWallet, ensure the network is set to BNB Smart Chain.",
        images: [
          { path: "/images/11.jpg", alt: "Checking network settings" },
          { path: "/images/12.jpg", alt: "Confirmed BNB Smart Chain network" },
        ],
        imageAlt: "Verifying BNB Smart Chain network",
      },
    ],
  },
  {
    section: "Deploying the Contract",
    steps: [
      {
        id: 11,
        title: "Open menu",
        description:
          "Click the menu button (top-left corner) to open the menu.",
        image: "/images/13.jpg",
        imageAlt: "Opening the menu in MyEtherWallet",
      },
      {
        id: 12,
        title: "Navigate to Deploy Contract",
        description: "Navigate to Contracts > Deploy Contract.",
        image: "/images/14.jpg",
        imageAlt: "Navigating to Deploy Contract option",
      },
      {
        id: 13,
        title: "Enter Bytecode and ABI",
        description:
          "In the Deploy Contract menu, the Bytecode and ABI fields will appear.",
        subSteps: [
          {
            title: "For Bytecode:",
            description:
              "Open the Telegram channel, locate a posted Hex, and copy it. Click 'Opcode' to reveal the Hex.",
            images: [
              { path: "/images/15.jpg", alt: "Opening Telegram channel" },
              { path: "/images/16.jpg", alt: "Revealing the Hex" },
            ],
          },
          {
            description: "Click the copy button to copy the Hex.",
            image: "/images/17.jpg",
          },
          {
            title: "For ABI/JSON:",
            description: "Click the Opcode link to open and copy the ABI.",
            images: [
              { path: "/images/18.jpg", alt: "Opening ABI link" },
              { path: "/images/19.jpg", alt: "ABI code displayed" },
            ],
          },
          {
            description: "Click the copy button to copy the ABI.",
            image: "/images/20.jpg",
          },
        ],
        imageAlt: "Entering bytecode and ABI",
      },
      {
        id: 14,
        title: "Name contract",
        description: "Name the contract as 'Mint' and click 'Deploy Contract'.",
        image: "/images/21.jpg",
        imageAlt: "Naming the contract",
      },
      {
        id: 15,
        title: "Confirm transaction",
        description: "Confirm and send the deployment transaction.",
        image: "/images/22.jpg",
        imageAlt: "Confirming the transaction",
      },
      {
        id: 16,
        title: "Sign approval",
        description: "Click 'Sign' to approve the deployment.",
        image: "/images/23.jpg",
        imageAlt: "Signing the approval",
      },
      {
        id: 17,
        title: "Broadcast confirmation",
        description:
          "Click 'Confirm' to broadcast the contract deployment to the blockchain.",
        image: "/images/24.jpg",
        imageAlt: "Broadcasting confirmation",
      },
    ],
  },
  {
    section: "Retrieving the Contract Address",
    steps: [
      {
        id: 18,
        title: "Copy your deployed contract address",
        description: "Copy your deployed contract address from BscScan.",
        subSteps: [
          {
            description: "Click 'View on BscScan' to check the transaction.",
            image: "/images/25.jpg",
          },
          {
            description:
              "Scroll down to find the contract address under 'To:' (marked as 'Created'). Copy the contract address.",
            image: "/images/26.jpg",
          },
        ],
        imageAlt: "Retrieving contract address",
      },
    ],
  },
  {
    section: "Checking Mint Parameters",
    steps: [
      {
        id: 19,
        title: "Use mint parameter checker",
        description: "Use a mint parameter checker to verify your contract:",
        details: [
          "Web version: mintchecker.vercel.app/mintchecker",
          "Local method (not available on iOS):",
          "Open the HTML file in your browser.",
          "Or, use a terminal to run the cURL command.",
          "(All files are available in the Telegram channel.)",
        ],
        imageAlt: "Using the mint parameter checker",
      },
      {
        id: 20,
        title: "Input contract address",
        description: "Input the contract address and click 'Check Contract'.",
        image: "/images/27.jpg",
        imageAlt: "Inputting contract address",
      },
      {
        id: 21,
        title: "Check minting status",
        description:
          "If minting is not enabled, you must manually call the function by adding BNB to your contract.",
        details: [
          "Most contracts require 0.1 BNB for minting.",
          "The maximum BNB limit is specified in the mint parameters.",
        ],
        imageAlt: "Checking minting status",
      },
      {
        id: 22,
        title: "Enable minting",
        description: "To enable minting:",
        details: [
          "Send BNB from the same wallet used for deployment to the contract address.",
          "This ensures a contract call is made.",
        ],
        image: "/images/29.jpg",
        imageAlt: "Enabling minting",
      },
      {
        id: 23,
        title: "Verify minting enabled",
        description:
          "After a successful transaction, check the mint parameters again to confirm minting is enabled.",
        details: [
          "90% of contracts enable minting at this stage.",
          "If not, repeat the process until the contract is enabled.",
        ],
        image: "/images/30.jpg",
        imageAlt: "Verifying minting is enabled",
      },
    ],
  },
  {
    section: "Receiving Minted USDC",
    steps: [
      {
        id: 24,
        title: "Receive minted USDC",
        description:
          "Once minting is enabled, a contract interaction will occur.",
        details: [
          "The specified amount of USDC and BNB used for minting will be added to your wallet balance.",
        ],
        image: "/images/31.jpg",
        imageAlt: "Receiving minted USDC",
      },
    ],
  },
];

// Group steps by section for navigation
const sections: SectionNavItem[] = tutorialSteps.map((section) => ({
  title: section.section,
  firstStepId: section.steps[0].id,
}));

export default function Tutorial() {
  const [currentStep, setCurrentStep] = useState(1);

  // Find the current step data
  const findStepData = (
    stepId: number
  ): { section: string; step: Step } | null => {
    for (const section of tutorialSteps) {
      const step = section.steps.find((s) => s.id === stepId);
      if (step) {
        return { section: section.section, step };
      }
    }
    return null;
  };

  const currentStepData = findStepData(currentStep);

  // Get total number of steps
  const totalSteps = tutorialSteps.reduce(
    (total, section) => total + section.steps.length,
    0
  );

  // Navigate to next or previous step
  const goToNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goToPrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Jump to a specific section's first step
  const goToSection = (firstStepId: number) => {
    setCurrentStep(firstStepId);
  };

  // Helper to render images (single or multiple)
  const renderImages = (step: Step) => {
    if (step.images) {
      // Multiple images
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {step.images.map((img, idx) => (
            <div
              key={idx}
              className="relative w-full h-56 rounded overflow-hidden border border-slate-700"
            >
              <Image
                src={img.path}
                alt={img.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
      );
    } else if (step.image) {
      // Single image
      return (
        <div className="relative w-full h-56 md:h-72 rounded overflow-hidden border border-slate-700">
          <Image
            src={step.image}
            alt={step.imageAlt || step.title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      );
    }
    return null;
  };

  // Render substeps
  const renderSubSteps = (subSteps: SubStep[]) => {
    return (
      <div className="space-y-6 pl-4 border-l-2 border-slate-700 mt-4">
        {subSteps.map((subStep, idx) => (
          <div key={idx} className="ml-2">
            {subStep.title && (
              <h4 className="font-medium text-slate-300 mb-2">
                {subStep.title}
              </h4>
            )}
            <p className="text-slate-400 mb-3">{subStep.description}</p>

            {subStep.images ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                {subStep.images.map((img, imgIdx) => (
                  <div
                    key={imgIdx}
                    className="relative w-full h-48 rounded overflow-hidden border border-slate-700"
                  >
                    <Image
                      src={img.path}
                      alt={img.alt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>
            ) : subStep.image ? (
              <div className="relative w-full h-48 rounded overflow-hidden border border-slate-700 mt-3">
                <Image
                  src={subStep.image}
                  alt={subStep.description}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ) : null}
          </div>
        ))}
      </div>
    );
  };

  // Render additional details
  const renderDetails = (details?: string[]) => {
    if (!details || details.length === 0) return null;

    return (
      <ul className="mt-3 space-y-1 text-slate-300 list-disc pl-5">
        {details.map((detail, idx) => (
          <li key={idx}>{detail}</li>
        ))}
      </ul>
    );
  };

  if (!currentStepData) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-slate-800 rounded-xl shadow-xl p-4 md:p-6 mb-8 border border-slate-700">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-300">
            Contract Deployment Tutorial
          </h1>

          {/* Navigation */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-3 text-slate-200">
              Tutorial Sections
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {sections.map((section, index) => (
                <button
                  key={index}
                  onClick={() => goToSection(section.firstStepId)}
                  className={`text-left p-2 rounded ${
                    currentStepData.section === section.title
                      ? "bg-blue-600 text-white"
                      : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </div>
          </div>

          {/* Current Step */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={goToPrevStep}
                className="px-3 py-1 rounded bg-slate-700 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentStep === 1}
              >
                Previous
              </button>
              <div className="text-center">
                <div className="text-sm text-slate-400 mb-1">
                  {currentStepData.section}
                </div>
                <h2 className="text-lg font-bold text-slate-200">
                  Step {currentStepData.step.id}: {currentStepData.step.title}
                </h2>
              </div>
              <button
                onClick={goToNextStep}
                className="px-3 py-1 rounded bg-slate-700 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentStep === totalSteps}
              >
                Next
              </button>
            </div>

            {/* Step content */}
            <div className="mt-6 border border-slate-700 rounded-lg p-5 bg-slate-850">
              <p className="text-slate-300 mb-5">
                {currentStepData.step.description}
              </p>

              {/* Links if any */}
              {currentStepData.step.links && (
                <div className="mb-5">
                  {currentStepData.step.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mr-4 text-blue-400 hover:text-blue-300 underline"
                    >
                      {link.text}
                    </a>
                  ))}
                </div>
              )}

              {/* Additional details */}
              {renderDetails(currentStepData.step.details)}

              {/* Main step image(s) */}
              <div className="mt-5">{renderImages(currentStepData.step)}</div>

              {/* Sub-steps if any */}
              {currentStepData.step.subSteps &&
                renderSubSteps(currentStepData.step.subSteps)}
            </div>
          </div>

          {/* Progress indicator */}
          <div className="w-full bg-slate-700 rounded-full h-2.5 mb-8">
            <div
              className="bg-gradient-to-r from-blue-500 to-emerald-400 h-2.5 rounded-full"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 rounded-lg font-medium bg-gradient-to-r from-blue-500 to-emerald-400 hover:shadow-lg hover:from-blue-600 hover:to-emerald-500 transition-all duration-200"
            >
              Try the Contract Checker
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
