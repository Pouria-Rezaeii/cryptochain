const crypto = require("crypto");

const cryptoHash = (...inputs) => {
   const hash = crypto.createHash("sha256");
   // receives the input
   hash.update(inputs.sort().join(","));

   // returns the output
   return hash.digest("hex");
};

module.exports = cryptoHash;
