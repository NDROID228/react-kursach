const stockfish = new Worker("./stockfish.js");

export default class Engine {
  constructor() {
    this.stockfish = new Worker("./stockfish.js");
    this.bestMoveCallback = null;

    this.stockfish.addEventListener("message", (e) => {
      const bestMoveMatch = e.data?.match(/bestmove\s+(\S+)/);
      // console.log(bestMoveMatch);
      if (bestMoveMatch) {
        const bestMove = bestMoveMatch[1];
        // console.log("Best Move:", bestMove);

        if (this.bestMoveCallback) {
          this.bestMoveCallback({ bestMove });
          this.bestMoveCallback = null; // Reset callback after handling the best move
        }
      }
    });

    // Init engine
    this.init();
  }

   init() {
    this.stockfish.postMessage("uci");
    this.stockfish.postMessage("isready");
  }

  evaluatePosition(fen, depth, callback) {
    this.bestMoveCallback = callback;
    this.stockfish.postMessage(`position fen ${fen}`);
    this.stockfish.postMessage(`go depth ${depth}`);
  }

  stop() {
    this.stockfish.postMessage("stop"); // Run when changing positions
  }

  quit() {
    this.stockfish.postMessage("quit"); // Good to run this before unmounting.
  }
}

// export default class Engine {
//   constructor() {
//     this.stockfish = new Worker("./stockfish.js");
//     this.onMessage = (callback) => {
//       this.stockfish.addEventListener("message", (e) => {
//         const bestMove = e.data?.match(/bestmove\s+(\S+)/)?.[1];

//         if (bestMove) {
//           console.log("Best Move:", bestMove);
//           callback({ bestMove });
//         }
//       });
//     };
//     // Init engine

//     this.init();
//   }
//   async init() {
//     await this.stockfish.postMessage("uci");
//     await this.stockfish.postMessage("isready");
//   }
//   evaluatePosition(fen, depth) {
//     this.stockfish.postMessage(`position fen ${fen}`);
//     this.stockfish.postMessage(`go depth ${depth}`);
//   }
//   stop() {
//     this.stockfish.postMessage("stop"); // Run when changing positions
//   }
//   quit() {
//     this.stockfish.postMessage("quit"); // Good to run this before unmounting.
//   }
// }
