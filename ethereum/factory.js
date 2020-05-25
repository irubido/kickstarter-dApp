import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x17934D1bfcFD6489AA7807b4D4377957F2cd7B06'
);
export default instance;