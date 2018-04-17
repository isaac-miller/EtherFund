import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xc05f62110b02931037ed2e10dfDABb0a4A74Ba30'
);
// Old contract address: 0xfE5C233AB7D8C1B78e290150581e350Fc00D8B4a
export default instance;