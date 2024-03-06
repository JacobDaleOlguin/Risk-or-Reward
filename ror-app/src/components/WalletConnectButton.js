// src/components/WalletConnectButton.js
import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { injected } from '../hooks/useWallet';

const WalletConnectButton = () => {
    const { active, account, activate, deactivate } = useWeb3React();

    const connect = async () => {
        try {
            await activate(injected);
        } catch (ex) {
            console.log(ex);
        }
    };

    const disconnect = () => {
        try {
            deactivate();
        } catch (ex) {
            console.log(ex);
        }
    };

    return (
        <div>
            {active ? (
                <button onClick={disconnect}>Disconnect Wallet</button>
            ) : (
                <button onClick={connect}>Connect Wallet</button>
            )}
            {account && <p>Account: {account}</p>}
        </div>
    );
};

export default WalletConnectButton;
