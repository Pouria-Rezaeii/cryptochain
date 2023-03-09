const {GENESIS_DATA} = require("./config");
const cryptoHash = require("./crypto-hash");

class Block {
   constructor({timestamp, lastHash, hash, data}) {
      this.timestamp = timestamp;
      this.lastHash = lastHash;
      this.hash = hash;
      this.data = data;
   }

   static createGenesis() {
      return new this(GENESIS_DATA);
   }

   static mineBlock({previousBlock, data}) {
      const timestamp = Date.now();
      return new this({
         timestamp,
         data,
         hash: cryptoHash(timestamp, data, previousBlock.hash),
         lastHash: previousBlock.hash,
      });
   }
}

module.exports = Block;
