# React Treasure Hunt Game

### Remember:
- Pseudocode!!
- Ask clarifying questions

### User Stories
- As a user, I can see a page with a 3 by 3 grid board game with a question mark in each square.
    - branch name -- board-setup
- As a user, when I click on one of the question marks an alert appears with the index position of that question mark in the array.
    - branch name -- index-alert
- As a user, when I click on one of the question marks instead of the alert the question mark turns into a tree emoji.
    - branch name -- emogi-tree
    - emoji keyboard shortcut - cntl + command + spacebar
- As a user, if I select the winning square the question mark will become a treasure emoji.
    - branch name -- treasure-location
    - emoji keyboard shortcut - cntl + command + spacebar
- As a user, if I select the losing square the question mark will become a bomb emoji.
    - branch name -- bomb-location
- As a user, I can see a counter that shows how many guesses I have left. The counter starts at 5 and decrements one every time I click on a square that is not the treasure nor the bomb.
    - branch name -- guess-counter
- As a user, I can see a message informing me that I won the game if I select the square that contains the treasure.
    - branch name -- winning-message
- As a user, I can see a message informing me that I lost the game if I select the square that contains the bomb.
    - branch name -- loosing-message
- As a user, I cannot continue to play the game after I win or lose.
- As a user, I can see a message informing me that I lost the game when I run out of turns (the counter reaches zero).
- As a user, I can click on a “Play Again” button that will restart the game.
