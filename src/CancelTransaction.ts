const { ethers } = require("ethers");

async function cancelTransaction() {
  const provider = new ethers.providers.JsonRpcProvider("https://rpc-amoy.polygon.technology");
  const wallet = new ethers.Wallet("0x15e0c4872f8cc5b022a6782baa434eefde01947d1ea3b553eae1e3eed3954b31", provider); // Replace with your private key

  const nonce = 141; // Replace with the nonce of the pending transaction
  const gasPrice = ethers.utils.parseUnits("30", "gwei"); // Set a higher gas price, e.g., 30 Gwei

  const tx = {
    to: wallet.address, // Send to yourself
    value: 0, // 0 POL to cancel the transaction
    nonce: nonce,
    gasPrice: gasPrice,
    gasLimit: ethers.utils.hexlify(21000), // Standard gas limit for a simple transaction
  };

  const response = await wallet.sendTransaction(tx);
  console.log("Cancellation transaction hash:", response.hash);
}

cancelTransaction().catch(console.error);