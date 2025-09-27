# Risk Management: Kelly Criterion

Vault777 uses the **Kelly Criterion** to manage risk, protect liquidity providers (LPs), and ensure sustainable reward emissions. Originally designed for maximizing long-term growth in probabilistic systems, the Kelly formula helps balance profitability with safety.

## What is the Kelly Criterion?

The Kelly Criterion calculates the optimal fraction of capital to bet based on your edge and payout odds.

### Formula: f* = (bp - q) / b

Where:
- `f*` = Fraction of capital to bet
- `b` = Payout odds (e.g. 1 for 1:1 odds)
- `p` = Probability of winning
- `q` = Probability of losing (1 - p)

### Example:
For a 50/50 coin flip (no edge), the Kelly formula results in: f* = (1 × 0.5 - 0.5) / 1 = 0

Meaning no bet should be placed without an edge.

Vault777 creates positive EV (expected value) by combining fair games with $V777 token rewards, meaning players still profit over time.

## Kelly in Vault777

Vault777 adapts the Kelly model to manage various layers of risk throughout the protocol:

### Treasury Protection
- Betting limits and payout caps are informed by Kelly simulations.
- Prevents draining the treasury during high-variance streaks.
- Ensures sufficient capital remains for long-term sustainability.

### LP Exposure
- LPs never provide 100% of available capital per game.
- Risk-adjusted exposure is calculated to avoid cascading losses.
- Game types with higher variance (e.g., Mines, Plinko) allocate less capital per session.

### Reward Emissions
- Kelly helps calibrate reward outputs across games.
- High-risk games emit fewer $V777 tokens per dollar wagered.
- Prevents excessive token farming and aligns incentives.

## Kelly Example in Practice

A Mines game with high multiplier potential might:
- Cap the max win per session
- Limit total wagered amount per user
- Use only a small portion of LP funds to cover risk

This protects LPs while still offering high-reward gameplay to users.

## Benefits of Kelly-Based Risk Management

- Optimizes long-term growth of the protocol
- Keeps LPs profitable while allowing user wins
- Creates scalable and mathematically sound reward systems
- Avoids unsustainable emissions or treasury depletion

## Summary

The Kelly Criterion is not just theoretical — it powers how Vault777 operates under the hood. It balances bold betting and long-term stability by making sure **every game, pool, and reward emission is mathematically sustainable**.

