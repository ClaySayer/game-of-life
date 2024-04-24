# Game of Life

## Overview

Game of Life is a React and Redux Toolkit port of a Java version written as part of a major assignment for KXT201 Software Construction during my Graduate Diploma.

Conway's Game of Life is a cellular automaton devised by British mathematician John Horton Conway in 1970. It is a zero-player game, mesning that its evolution is determined by its initial state, requiring no further input. One interacts with the game by creating an initial configuration and observing how it evolves over time.

### rules

The universe of the Game of LIfe is an infinite, two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, live or dead. Every cell interacts with its eaight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:

1. Any live cell with fewer than two live neighbours dies, as if by underpopulation.
2. Any live cell with two or three live neighbours lives on to the next generation.
3. Any live cell with more than three live neighbours dies, as if by overpopulation.
4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed. Births and deaths occur simultaneously, and the discrete moment at which this happens is called a tick. Each generation is a pure function of the proceeding one. THe rules continue to be applied repeatedly to create further generations.

## Getting Started

### Prerequisites

Node JS
NPM

### Installation

1. Clone repo

```
  git clone https://github.com/ClaySayer/game-of-life.git
```

2. Inside the project directory install NPM packages

```
  npm install
```

3. Inside the project directory start the application

```
  npm start
```

4.Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
