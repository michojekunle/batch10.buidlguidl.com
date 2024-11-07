import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
// import { Contract } from "ethers";

// Update with your Batch number
// const BATCH_NUMBER = "10";

/**
 * Deploys a contract named "deployYourContract" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployYourContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  /*
    On localhost, the deployer account is the one that comes with Hardhat, which is already funded.

    When deploying to live networks (e.g `yarn deploy --network sepolia`), the deployer account
    should have sufficient balance to pay for the gas fees for contract creation.

    You can generate a random account with `yarn generate` which will fill DEPLOYER_PRIVATE_KEY
    with a random private key in the .env file (then used on hardhat.config.ts)
    You can run the `yarn account` command to check your balance in every network.
  */
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  // await deploy("BatchRegistry", {
  //   from: deployer,
  //   // Contract constructor arguments
  //   args: ["0xee27c9B1822962C6742B4136f8a4D6d8D35cD06D", BATCH_NUMBER],
  //   log: true,
  //   // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
  //   // automatically mining the contract deployment transaction. There is no effect on live networks.
  //   autoMine: true,
  // });

  // // Get the deployed contract to interact with it after deploying.
  // const batchRegistry = await hre.ethers.getContract<Contract>("BatchRegistry", deployer);
  // console.log("\nBatchRegistry deployed to:", await batchRegistry.getAddress());
  // console.log("Remember to update the allow list!\n");

  // await deploy("AmdCheckIn", {
  //   from: deployer,
  //   // Contract constructor arguments
  //   args: [await batchRegistry.getAddress()],
  //   log: true,
  //   // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
  //   // automatically mining the contract deployment transaction. There is no effect on live networks.
  //   autoMine: true,
  // });

  // // The GraduationNFT contract is deployed on the BatchRegistry constructor.
  // const batchGraduationNFTAddress = await batchRegistry.batchGraduationNFT();
  // console.log("BatchGraduation NFT deployed to:", batchGraduationNFTAddress, "\n");

  await deploy("GraduateNFTMetadata", {
    from: deployer,
    // Contract constructor arguments
    args: [],
    log: true,
    // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
    // automatically mining the contract deployment transaction. There is no effect on live networks.
    autoMine: true,
  });
};

export default deployYourContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployYourContract.tags = ["BatchRegistry"];
