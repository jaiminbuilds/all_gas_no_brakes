import BlocknativeSdk from 'bnc-sdk'
// import Web3 from 'web3'
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config()
const blocknativeApi = process.env.BLOCKNATIVE_API;

console.log(blocknativeApi)

const gasEndpoint = 'https://api.blocknative.com/gasprices/blockprices'


axios.get(gasEndpoint)
  .then(response => {
    // Handle the response here
    console.log(response.data); // This will log the data received from the endpoint
  })
  .catch(error => {
    // Handle any errors here
    console.error('Error:', error);
  });