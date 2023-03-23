#!/usr/bin/env ts-node
/* eslint-disable import/first */
require('dotenv').config();

const { Network, Alchemy, Utils } = require("alchemy-sdk");

const settings = {
    apiKey: process.env.ALCHEMY_KEY,
    network: Network.ETH_GOERLI,
};

const alchemy = new Alchemy(settings);

const getBalance = async () => { 
  try {
  const balance = await alchemy.core.getBalance("0xAA65C14ADDDc3B408a41d76E6E24365Fa32DE6e8", 'latest')
  console.log(`Balance is ${Utils.formatEther(balance)}: ETH`);
  } catch(err) {
    console.log(err);
  }
}  

getBalance() 