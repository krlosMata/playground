const chai = require("chai");
const path = require("path");
const snarkjs = require("snarkjs");
const compiler = require("circom").compiler;
const bigInt = require("snarkjs").bigInt;
const SMTMemDB = require("circomlib").SMTMemDB;
const assert = chai.assert;

const NTX = 5;
const NLEVELS = 8;

describe("Rollup Basic circuit TXs", function () {
    let circuit;

    this.timeout(100000);

    before( async() => {
        const cirDef = await compiler(path.join(__dirname, "circuits", "rollup_test.circom"), {reduceConstraints:false});
        // const cirDef = JSON.parse(fs.readFileSync(path.join(__dirname, "circuits", "circuit.json"), "utf8"));
        circuit = new snarkjs.Circuit(cirDef);
        console.log("NConstrains Rollup: " + circuit.nConstraints);
    });

    it("Should create empty TXs", async () => {

        console.log("circuit compiled");
    });
});
