import Web3 from 'web3';

let web3;

if (process.browser) {
    window.ethereum.enable();
    const currProvider = window.web3.currentProvider
    web3 = new Web3(currProvider);
} 
else {
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/e2d17a5fc2724a98b9aa215fbb380a69'
    );
    web3 = new Web3(provider);
}

export default web3;
