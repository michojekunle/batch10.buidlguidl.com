//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract GraduateNFTMetadata {
	function getName() external pure returns (string memory) {
		return "Michael Ojekunle";
	}

	function getColor() external pure returns (uint8, uint8, uint8) {
		return (211, 165, 136); //returns a shade of a really nice color for my graduation nft
	}
}
