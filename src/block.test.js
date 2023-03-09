const Block = require("./block");
const {GENESIS_DATA} = require("./config");
const cryptoHash = require("./crypto-hash");

describe("Block", () => {
   const timestamp = "foo-timestamp";
   const data = ["foo", "bar"];
   const hash = "foo-hash";
   const lastHash = "bar-hash";
   const block = new Block({timestamp, data, hash, lastHash});

   it("has timestamp, hash, data and last hash fields", () => {
      expect(block.timestamp).toEqual(timestamp);
      expect(block.data).toEqual(data);
      expect(block.hash).toEqual(hash);
      expect(block.lastHash).toEqual(lastHash);
   });
});

describe("Block.createGenesis()", () => {
   const genesisBlock = Block.createGenesis();

   it("returns a Block instance", () => {
      expect(genesisBlock).toBeInstanceOf(Block);
   });

   it("returns the genesis data", () => {
      expect(genesisBlock).toEqual(GENESIS_DATA);
   });
});

describe("Block.mineBlock()", () => {
   const data = ["data"];
   const lastBlock = Block.createGenesis();
   const minedBlock = Block.mineBlock({previousBlock: lastBlock, data});

   it("returns a Block instance", () => {
      expect(minedBlock).toBeInstanceOf(Block);
   });

   it("contains all the expected fields correctly", () => {
      expect(minedBlock.timestamp).not.toBeFalsy();
      expect(minedBlock.data).toEqual(data);
      expect(minedBlock.hash).not.toBeFalsy();
      expect(minedBlock.lastHash).toEqual(lastBlock.hash);
   });

   it("generates the hash correctly", () => {
      expect(minedBlock.hash).toEqual(
         cryptoHash(minedBlock.timestamp, minedBlock.data, lastBlock.hash)
      );
   });
});
