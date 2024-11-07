//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

interface IBatchRegistry {
     function checkIn() external;
}

contract AmdCheckIn {
    IBatchRegistry batchRegistry;

    constructor(address _batchRegistryAddress) {
        batchRegistry = IBatchRegistry(_batchRegistryAddress);
    }

    function callCheckInBatchRegistry() external {
        batchRegistry.checkIn();
    }
}