const hre = require('hardhat')
const ethers = hre.ethers;

async function deployContract() {
  
  
    await hre.run('compile'); // We are compiling the contracts using subtask
    
    const [deployer] = await ethers.getSigners(); // We are getting the deployer
  
    console.log('Deploying contracts with the account:', deployer.address); // We are printing the address of the deployer
    console.log('Account balance:', (await deployer.getBalance()).toString()); // We are printing the account balance

    const LibraryCon = await ethers.getContractFactory("Library"); // 
    const LibraryContract = await LibraryCon.deploy();
    console.log('Waiting for LibraryCon deployment...');
    await LibraryContract.deployed();

    console.log('Library Contract address: ', LibraryContract.address);
    console.log('Done!');
}
  
module.exports = deployContract;