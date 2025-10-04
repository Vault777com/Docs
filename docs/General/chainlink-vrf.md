# Chainlink VRF Explained

## Introduction

Vault777 integrates **Chainlink VRF (Verifiable Random Function)** to ensure fully decentralized, provably fair, and tamper-proof randomness for all betting outcomes. This system guarantees that no entity, including Vault777 itself, can manipulate results, making it the gold standard for transparent on-chain gaming.

---

## What is Chainlink VRF?

**Chainlink VRF** is a decentralized, verifiable random number generator (RNG) that provides secure randomness to smart contracts. It uses cryptographic proofs to ensure fairness and eliminate manipulation risks.

### How It Works:

1. **User places a bet** → Vault777’s smart contract requests a random number from Chainlink VRF.  
2. **Chainlink VRF generates a cryptographic proof** alongside the random number.  
3. **Smart contract verifies the proof on-chain** to confirm its authenticity.  
4. **Random number is used to determine the bet outcome** (e.g., dice roll result, roulette spin, etc.).  
5. **Results are finalized on-chain**, ensuring full transparency.

### Key Benefits:

- **Tamper-Proof Randomness** – No entity can influence the outcome.  
- **On-Chain Verifiability** – Anyone can audit and confirm the randomness.  
- **Decentralized Oracle Network** – Prevents single points of failure.

---

## Why Vault777 Uses Chainlink VRF

Vault777 is committed to **provably fair** gaming, ensuring players have confidence in every bet placed. Chainlink VRF eliminates any possibility of unfair advantage, central manipulation, or biased results.

### Traditional RNG vs. Chainlink VRF

| Feature                | Traditional RNG      | Chainlink VRF          |
|------------------------|----------------------|-------------------------|
| Control                | Centralized operator | Decentralized oracle    |
| Manipulation Risk      | High                 | Zero                    |
| Verifiability          | None                 | Fully verifiable on-chain |
| Trust Requirements     | High                 | None (trustless)        |

---

## Security & Transparency

Vault777 ensures that every game follows a **fully auditable** process:

- All Chainlink VRF calls are recorded on-chain.  
- Users can verify outcomes using blockchain explorers.  
- Each result includes a cryptographic proof for validation.

---

## Solidity Integration Sample

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import \"@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol\";
import \"@chainlink/contracts/src/v0.8/VRFConsumerBaseV2.sol\";

contract Vault777Game is VRFConsumerBaseV2 {
    VRFCoordinatorV2Interface COORDINATOR;
    uint64 s_subscriptionId;
    bytes32 keyHash;
    uint32 callbackGasLimit = 100000;
    uint16 requestConfirmations = 3;
    uint32 numWords = 1;

    mapping(uint256 => address) public requestIdToUser;
    mapping(address => uint256) public userRandomNumber;

    event RandomnessRequested(uint256 requestId, address user);
    event RandomnessFulfilled(uint256 requestId, uint256 randomNumber);

    constructor(uint64 subscriptionId, address vrfCoordinator, bytes32 _keyHash) VRFConsumerBaseV2(vrfCoordinator) {
        COORDINATOR = VRFCoordinatorV2Interface(vrfCoordinator);
        s_subscriptionId = subscriptionId;
        keyHash = _keyHash;
    }

    function requestRandomNumber() external returns (uint256 requestId) {
        requestId = COORDINATOR.requestRandomWords(
            keyHash,
            s_subscriptionId,
            requestConfirmations,
            callbackGasLimit,
            numWords
        );
        requestIdToUser[requestId] = msg.sender;
        emit RandomnessRequested(requestId, msg.sender);
    }

    function fulfillRandomWords(uint256 requestId, uint256[] memory randomWords) internal override {
        address user = requestIdToUser[requestId];
        userRandomNumber[user] = (randomWords[0] % 6) + 1; // Dice roll (1-6)
        emit RandomnessFulfilled(requestId, userRandomNumber[user]);
    }
}
