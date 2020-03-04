This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description

This tic-tac-toe game was adopted from React official website. 

The following improvements have been made:

1. The location for each move (col, row) has been added in the move history list.

2. Each square in the board has been dynamically rendered, which means the Board Component has been rewritten to use two loops to generate the squares instead of hardcoding them.

3. When someone wins, the three squares that gained the win will be highlighted.

4. When no one wins, a message about the result being a draw will be displayed.