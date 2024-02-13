export default [
    {
      id: "basic_board_0",
      defaultPosition: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
      pgnString: `
      [Event "Before starting..."]
      [Site "?"]
      [Date "????.??.??"]
      [Round "?"]
      [White "?"]
      [Black "?"]
      [Result "*"]
      [WhiteELO "?"]
      [BlackELO "?"]
      
      {Welcome to chess lessons! In this lesson box, you can see square viewer in
      the left corner for your help. There's also board notation displayed on bottom
      and left board of the chessboard. Control panel under the chessboard controls
      moves on the board, control panel under the text switches between lessons.} 
      1. e4 {Also, if you want to read full laws of chess, click on the document 
      button which will direct you to the offical PDF file written by FIDE. 
      Enjoy your learning!}`
    },
    {
      id: "basic_board",
      defaultPosition: "k7/3PppPP/3P4/6P1/8/2P5/PP6/7K w - - 0 1",
      pgnString: `
      [Event "A pawn"]
      [Site "?"]
      [Date "????.??.??"]
      [Round "?"]
      [White "?"]
      [Black "?"]
      [Result "*"]
      [WhiteELO "?"]
      [BlackELO "?"]
      [SetUp "1"]
      [FEN "k7/3PppPP/3P4/6P1/8/2P5/PP6/7K w - - 0 1"]
      
      {Moving to the first piece - the pawn!\nThe pawn, often underestimated, is the soul of chess. Though the weakest piece on the board, with a value of just one point, pawns hold immense potential and strategic importance.} 
      1. a4 {On their first move, they have the option to boldly advance two squares.} 
      1... Kb7 {...} 2. b3 {But it is not nessecary - they can start their path with one square forward.} 
      2... Ka7 {...} 3.c4 {On other squares, pawns are moving one square straight ahead.} 
      3... Kb7 {When pawns advance, creating isolated groups separated by empty squares, they become pawn islands (a4, b3, c4). Though seemingly vulnerable, these islands can sometimes act as strongholds, controlling key areas and hindering opponent movement.} 4. dxe7 {While pawns lack the direct attacking power of other pieces, they capture diagonally, taking enemy pieces occupying the adjacent squares to their front corners.} 
      4... f5 {...} 5. gxf6 {This special capture, meaning "in passing", can be executed when an enemy pawn advances two squares from its starting position and lands next to your pawn. You can then capture it "as if" it had moved only one square, diagonally.} 
      5... Ka7 {A passed pawn is one that has no enemy pawns in its path to promotion. These pawns become powerful assets, often unstoppable forces that require careful attention and sacrifice to contain.} 
      6. d8=N {Reaching the opposite side of the board, a pawn can be promoted to a knight,..} 
      6... Kb8 {...} 7. e8=B {...a bishop,...} 
      7... Ka8 {...} 8. g8=R {...a rook,...} 
      8... Ka7 {...} 9. h8=Q {...or a queen.}`,
    },
    {
      id: "basic_board_1",
      defaultPosition: "4k3/2p5/8/p1n5/8/8/8/2B1K3 w - - 0 1",
      pgnString: `
      [Event "A bishop"]
      [Site "?"]
      [Date "????.??.??"]
      [Round "?"]
      [White "?"]
      [Black "?"]
      [Result "*"]
      [WhiteELO "?"]
      [BlackELO "?"]
      [SetUp "1"]
      [FEN "4k3/2p5/8/p1n5/8/8/8/2B1K3 w - - 0 1"]

      {Unlike the pawn's straight march, the bishop glides across the board on
      diagonals, weaving control over vast swathes of squares. Its value is 3 points
      and bishop considered as a light figure.} 1. Bf4 {Open files and diagonals,
      devoid of pawns, become highways for the bishop, maximizing its reach and
      control.} 1... Kf7 {...} 2. Bxc7 {Each bishop is confined to its chosen color
      squares, either light or dark. Once positioned, it cannot switch sides. In
      this case, bishop can defeat pawn, but can't reach the king.} 2... a4 {Oh no!
      Black pawn escaped from bishop.} 3. Ba5 {Okay, now let's set a trap for dummy
      black king.} 3... Kf8 {Aha! He made a mistake!} 4. Bb4 {This is our trap for
      black horse. By attacking two pieces simultaneously along a diagonal, the
      bishop can pin one piece in place, effectively removing it from the game.}
      4... Kf7 {Black king is trying to escape, but his horse is gone forever.} 5.
      Bxc5 {Great! Now you know basic concepts of bishop!}`,
    },
    {
      id: "basic_board_2",
      defaultPosition: "1r2k3/8/4p3/8/8/8/8/4K1N1 w - - 0 1",
      pgnString: `
      [Event "A khight and a draw"]
      [Site "?"]
      [Date "????.??.??"]
      [Round "?"]
      [White "?"]
      [Black "?"]
      [Result "*"]
      [WhiteELO "?"]
      [BlackELO "?"]
      [SetUp "1"]
      [FEN "1r2k3/8/4p3/8/8/8/8/4K1N1 w - - 0 1"]
      
      {The knight, the enigmatic hopper of the chessboard, possesses a unique
      movement pattern that makes it both fascinating and strategically potent.} 1.
      Nf3 {Unlike other pieces restricted to files, ranks, or diagonals, the knight
      travels in an "L" shape, moving two squares in one direction (vertical or
      horizontal) and then one square perpendicularly.} 1... e5 {Let's capture the
      pawn on e5.} 2. Nxe5 {Knights excel on central squares, maximizing their reach
      and ability to control key areas. From these central outposts, they can
      threaten multiple squares and participate in various tactical opportunities.}
      2... Kd8 {And now black king has fallen into the trap!} 3. Nc6+ {Boom! The
      knight's unique movement allows it to attack two pieces simultaneously,
      creating a "fork." If the opponent cannot move both threatened pieces to
      safety, you force a capture or check.} 3... Kc7 {Black king is trying to save
      his rook, but there's nothing to stop white angry horse!} 4. Nxb8 {White
      knight defeats the enemy...} 4... Kxb8 {...but sacrifices himself leaving
      only kings on the chessboard.} 5. Kd2 {By the way, this position called draw.
      That's because both sides don't have enough pieces to continue the game.}
      5... Kc7 {Remember, the knight is a versatile piece requiring strategic
      thinking. While not the strongest attacker, its unique movement and jumping
      ability make it invaluable for both offense and defense. Master its "L-shaped
      leaps" and explore its tactical potential to elevate your chess game to the
      next level.}`,
    },
    {
      id: "basic_board_3",
      defaultPosition: "6k1/5ppp/8/1p1p4/8/8/8/5R1K w - - 0 1",
      pgnString: `
      [Event "A rook and a mate"]
      [Site "?"]
      [Date "????.??.??"]
      [Round "?"]
      [White "?"]
      [Black "?"]
      [Result "*"]
      [WhiteELO "?"]
      [BlackELO "?"]
      [SetUp "1"]
      [FEN "6k1/5ppp/8/1p1p4/8/8/8/5R1K w - - 0 1"]
      
      {The rook, often depicted as a castle, commands respect on the board. While
      lacking the fancy footwork of other pieces, its straightforward movement and
      long-range power make it a crucial force for both offense and defense. } 1.
      Rb1 {Isolated pawns on b5 and d5 are defenseless, so they became an easy
      target for our rook.} 1... b4 {They can do nothing but pointlessly sacrificing
      themselves.} 2. Rxb4 {Rooks excel at anchoring defenses, particularly when
      stationed behind pawns on open files or ranks. This creates formidable
      blockades, protecting key areas and your king.} 2... d4 {Another pawn is
      doomed to be eliminated.} 3. Rxd4 {On open files (files devoid of pawns),
      rooks become unstoppable forces, delivering devastating attacks and
      controlling long distances.} 3... Kh8 {Black king runs in the corner in
      panick.} 4. Rd8# {And rook slides in the last horisontal and finishes the game
      with mate! Black king is in check and there's no possible way to deal with
      check. This type of mate called "backrank mate" and it's one of the basic mate
      nets which you'll see later. Now you know all the basic info about the rook!}`,
    },
    {
      id: "basic_board_4",
      defaultPosition: "5bk1/8/p2p2K1/8/8/2p5/8/2Q5 w - - 0 1",
      pgnString: `
      [Event "A queen and a mating net"]
      [Site "?"]
      [Date "????.??.??"]
      [Round "?"]
      [White "?"]
      [Black "?"]
      [Result "*"]
      [WhiteELO "?"]
      [BlackELO "?"]
      [SetUp "1"]
      [FEN "5bk1/8/p2p2K1/8/8/2p5/8/2Q5 w - - 0 1"]
      
      {The queen, undoubtedly the most captivating and powerful piece on the
      chessboard, rightfully deserves its regal title. With a value of around 9
      pawns, the queen is the most valuable non-king piece. This reflects its immense
      versatility and power on the board.} 1. Qxc3 {Her ability to cover vast
      distances allows for surprise attacks and swift penetration into enemy
      territory. Open files and diagonals become highways for her, creating
      immediate threats and putting pressure on enemy pieces.} 1... a5 {She can also
      execute forks, attacking two key pieces simultaneously, often leading to
      devastating consequences for the opponent.} 2. Qxa5 { The queen excels at both
      defending your pieces and launching counterattacks. Her long-range mobility
      allows her to swiftly respond to threats and provide crucial support to weaker
      pieces.} 2... d5 {Similar to the other major pieces, the queen can execute
      pins and skewers, restricting enemy movement and creating tactical
      opportunities.} 3. Qxd5+ {And now let's checkmate clack king. } 3... Kh8 {The
      king retreats, but our queen is gonna chase him! } 4. Qh5+ {Another check!}
      4... Kg8 {King retreats again, but now comes the final move...} 5. Qh7#
      {...checkmate! Previous three moves is called mate net and often there are
      lots of puzzles where you should find the mating net. Now you know about queen
      and mating net puzzles!}`
    }
  ]