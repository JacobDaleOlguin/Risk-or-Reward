import React, { useEffect, useState } from 'react';
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers';

function App() {
  const [web3Modal, setWeb3Modal] = useState(null);

  useEffect(() => {
    const projectId = 'YOUR_PROJECT_ID'; // Replace with your actual Project ID

    const mainnet = {
      chainId: 1,
      name: 'Ethereum',
      currency: 'ETH',
      explorerUrl: 'https://etherscan.io',
      rpcUrl: 'https://cloudflare-eth.com'
    };

    const metadata = {
      name: 'My Website',
      description: 'My Website description',
      url: 'https://mywebsite.com',
      icons: ['https://avatars.mywebsite.com/']
    };

    const modal = createWeb3Modal({
      ethersConfig: defaultConfig({ metadata }),
      chains: [mainnet],
      projectId,
      enableAnalytics: true // Optional
    });

    setWeb3Modal(modal);
  }, []);

  // interact with the modal, such as opening it on a button click, goes here.

  return (
    <div className="App">
      {/* the app content and interaction elements, like a button to open Web3Modal */}
    </div>
  );
}

export default App;
