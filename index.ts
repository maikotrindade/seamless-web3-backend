#!/usr/bin/env ts-node

/* eslint-disable import/first */
require('dotenv').config();

const { Network, Alchemy } = require("alchemy-sdk");

const settings = {
    apiKey: process.env.ALCHEMY_KEY,
    network: Network.ETH_GOERLI,
};

const alchemy = new Alchemy(settings);

// Get the latest block
const latestBlock = alchemy.core.getBlockNumber();

// Get all outbound transfers for a provided address
alchemy.core
    .getTokenBalances('0x994b342dd87fc825f66e51ffa3ef71ad818b6893')
    .then(console.log);