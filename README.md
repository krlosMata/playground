```
node --max-old-space-size=12000 ./node_modules/circom/cli.js ./circuits/rollup_test.circom -c ./circuits/rollup.cpp -r ./circuits/rollup.r1cs -w ./circuits/rollup.wasm -s ./circuits/rollup.sym -v
```