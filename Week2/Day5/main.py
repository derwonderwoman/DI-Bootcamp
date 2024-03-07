import random

board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
]

def game():
    userX_input()
    user0_input()
    userX_input()
    user0_input()
    userX_input()
    check()
    user0_input()
    check()
    userX_input()
    check()
    user0_input()
    check()
    userX_input()
    check()
    print("Game over!It's a draw")


def display_board(board):
    for i, row in enumerate(board):
        print(" " + " | ".join(row) + " ")
        if i < len(board) - 1:
            print("---|---|---")

def userX_input():
    print("User X it's your turn ...")
    r = int(input("Enter row: "))
    c = int(input("Enter column: "))
    user_markX(r,c)

def user0_input():
    print("User 0 it's your turn ...")
    r = int(input("Enter row: "))
    c = int(input("Enter column: "))
    user_mark0(r,c)

def user_markX(r,c):
    if r < 1 or r > 3 or c < 1 or c > 3:
        print("Invalid row or column!")
        userX_input()
    elif board[r-1][c-1] != ' ':
        print("Cell is already marked!")
        userX_input()
    else:
        board[r-1][c-1] = 'X'
        display_board(board)

def user_mark0(r,c):
    if r < 1 or r > 3 or c < 1 or c > 3:
        print("Invalid row or column!")
        user0_input()
    elif board[r-1][c-1] != ' ':
        print("Cell is already marked!")
        user0_input()
    else:
        board[r-1][c-1] = '0'
        display_board(board)

def check_rows():
    for r in board:
        if board[r][0] == board[r][1] and board[r][1] == board[r][2] and board[r][0] == "X":
            print("User X is the winner")
            exit()
        elif board[r][0] == board[r][1] and board[r][1] == board[r][2] and board[r][0] == "0":
            print("User 0 is the winner")
            exit()

def check_columns():
    for c in range(0,3):
        if board[0][c] == board[1][c] and board[2][c] == board[1][c] and board[0][c] == "X":
            print("User X is the winner")
            exit()
        if board[0][c] == board[1][c] and board[2][c] == board[1][c] and board[0][c] == "0":
            print("User 0 is the winner")
            exit()

def check_diagonals():
    if board[0][0] == board[1][1] and board[2][2] == board[0][0] and board[0][0] == "X":
            print("User X is the winner")
            exit()
    elif board[0][0] == board[1][1] and board[2][2] == board[0][0] and board[0][0] == "0":
            print("User 0 is the winner")
            exit()
    elif board[0][2] == board[1][1] and board[2][0] == board[1][1] and board[0][2] == "X":
            print("User X is the winner")
            exit()
    elif board[0][2] == board[1][1] and board[2][0] == board[1][1] and board[0][2] == "0":
            print("User 0 is the winner")
            exit()

def check():
    check_columns()
    check_diagonals()
    check_columns()

print("Welcome to TIC TAC TOE!")
display_board(board)
game()