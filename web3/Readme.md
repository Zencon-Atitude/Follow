## Introduction

This repository contains two Solidity smart contracts: `strategyNFT.sol` and `subscriptionNFT.sol`. These contracts are designed for managing NFTs related to a strategy and subscription-based services.

### strategyNFT.sol

`strategyNFT.sol` is an ERC721-compliant NFT contract that allows the creation and management of strategy NFTs. Each NFT represents a unique strategy with associated metadata.

### subscriptionNFT.sol

`subscriptionNFT.sol` is an ERC721-compliant NFT contract that implements the IERC5643 interface for managing subscription-based NFTs. It allows users to mint subscription NFTs, renew subscriptions, and check subscription-related information.

## Getting Started

To use these contracts, you will need the following dependencies:

- Solidity Compiler: Version 0.8.13
- OpenZeppelin Contracts: Referenced in the contracts via imports
- IERC5643.sol: A custom interface that should be implemented by contract users

## Usage

### strategyNFT.sol

#### Contract Initialization

- Deploy the `strategyNFT` contract. The constructor sets the contract name to "FollowTheLead" and the symbol to "FTL".

#### Minting Strategy NFTs

- Call the `mintStrategyNFT` function to mint a new strategy NFT.
- Pass the recipient's address and the URI (metadata) for the NFT.
- This function can only be called by the contract owner.

#### Transferring Strategy NFTs

- Call the `transferTo` function to transfer ownership of a strategy NFT to another address.
- Pass the recipient's address and the tokenId of the NFT.
- This function can only be called by the contract owner.

#### Retrieving Strategy Metadata

- Use the `getStrategyByTokenId` function to retrieve the metadata (URI) of a strategy NFT by its tokenId.

### subscriptionNFT.sol

#### Contract Initialization

- Deploy the `subscriptionNFT` contract. The constructor sets the contract name to "SubscriptionFollowTheLead" and the symbol to "SFTL".

#### Minting Subscription NFTs

- Call the `mintSubscriptionNFT` function to mint a new subscription NFT.
- Pass the recipient's address and the URI (metadata) for the NFT.
- This function can only be called by the contract owner.

#### Renewing Subscriptions

- Use the `renewSubscription` function to extend the subscription of a token.
- Pass the tokenId and the desired duration in seconds.
- The caller must be the owner or approved for the token.
- Sufficient payment in Ether is required for the renewal.

#### Canceling Subscriptions

- Call the `cancelSubscription` function to cancel a subscription associated with a token.
- Pass the tokenId of the subscription to cancel.
- The caller must be the owner or approved for the token.

#### Checking Subscription Information

- Use the `expiresAt` function to check the expiration timestamp of a subscription associated with a token.
- Use the `isRenewable` function to check if a token's subscription is renewable.

#### Setting Renewal Durations

- The `_setMinimumRenewalDuration` and `_setMaximumRenewalDuration` functions can be used internally to set minimum and maximum renewal durations.

#### Customizing Renewal Price

- Implement the `_getRenewalPrice` function in derived contracts to customize the renewal price calculation.
