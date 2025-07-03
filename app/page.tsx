"use client";

import { HeroSection } from "@/components/blocks/hero-section";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import {
  Name,
  Identity,
  Address,
  Avatar,
  EthBalance,
} from "@coinbase/onchainkit/identity";
import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownDisconnect,
} from "@coinbase/onchainkit/wallet";
import { ThemeProvider } from "next-themes";

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <BackgroundGradientAnimation>
        <main className="absolute z-50 inset-0 flex flex-col items-center justify-center text-white">
          <Wallet>
            <div className="[&_p]:text-white/80">
              <HeroSection
                title="zora coin trader mini app"
                description="create and trade zora coin easily inside mini app also we saved it inside indexeddb so you can know whether you need to sell or no"
                actions={[
                  {
                    text: "", // Not used when asChild is true
                    asChild: true,
                    children: (
                      <ConnectWallet>
                        <Name />
                      </ConnectWallet>
                    ),
                  },
                ]}
              />
            </div>
            <WalletDropdown>
              <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
                <Avatar />
                <Name />
                <Address />
                <EthBalance />
              </Identity>
              <WalletDropdownDisconnect />
            </WalletDropdown>
          </Wallet>
        </main>
      </BackgroundGradientAnimation>
    </ThemeProvider>
  );
}
