console.log('Hello, welcome to rock paper scissors 2.5 update.');
console.log('')
console.log('Instructions:')
console.log('')
console.log('look where says getUserChoise(") near the bottom of the code and inside of the code you can paste in the promps')
console.log('')
console.log('The prompts are Rock, Paper, Scissors, bomb, revenge, gun, suicide, sword, glass, dagger, shoes, glitter, hand and water')
console.log('')
const getUserChoice = userImput => {
  userImput
  = userImput.toLowerCase();
  if (userImput === 'rock' || userImput === 'paper' || userImput === 'scissors' || userImput === 'bomb' || userImput === 'revenge' || userImput === 'gun' || userImput === 'suicide' || userImput === 'sword' || userImput === 'glass' || userImput === '' || userImput === 'dagger' || userImput === 'shoes' || userImput === 'water' || userImput === 'glitter' || userImput === 'hand'){
    return userImput;
  } else {
    console.log('Error!')
  }
};

 
 const getComputerChoice = () => {
   const randomNumber = Math.floor(Math.random() * 3)
   switch (randomNumber) {
   case 0:
   return 'rock'
   case 1:
   return 'paper'
   case 2: 
   return 'scissors'
   }
 };

 const determineWinner = (userChoice, computerChoice) => {
   if (userChoice === computerChoice) {
     return 'This game is a tie try again.'
   }
  if (userChoice === 'rock') {
  if (computerChoice === 'paper') {
    return 'Imagine losing to a bot';
  } else {
    return 'You won!';
  }
}
if (userChoice === 'hand') {
  if (computerChoice === 'rock') {
    return 'You slapped a rock with your hands you hand is now swollen I wonder why idoit. You both lost you died from a swollen hand, the bot died of laughter'
  }
}
if (userChoice === 'hand') {
  if (computerChoice === 'paper') {
    return 'You slapped a piece of paper with your hands. The noise was so loud that the bot died.'
  }
}
if (userChoice === 'hand') {
  if (computerChoice === 'scissors') {
    return 'You slapped scissors with your hand the scissors impaled your hand and you bleeded out to death'
  }
}
if (userChoice === 'glitter') {
  if (computerChoice === 'rock') {
    return 'You threw glitter at a rock, when the bot picked it up he malfunctioned and "accidentely" threw it at your head'
  }
}
if (userChoice === 'glitter') {
  if (computerChoice === 'scissors') {
    return 'At first you threw the glitter at the bot, you missed, this bot has feelings. He got mad and stabbed you to death with those scissors'
  }
}
if (userChoice === 'glitter') {
  if (computerChoice === 'paper') {
    return 'You threw glitter at a piece of paper that the bot was holding in front of his head. amusing, nothing happened except for a weird look the bot gave you'
  }
}
if (userChoice === 'water') {
  if (computerChoice === 'paper') {
    return 'The water soaked the paper which got all over the bot and the bot was fryed'
  }
}
if (userChoice === 'water') {
  if (computerChoice === 'scissors') {
    return 'the scissors got very rusty and made the bot rust and was now frozen until the year 3057'
  }
}
if (userChoice === 'water') {
  if (computerChoice === 'rock') {
    return 'you poured water on a rock. nothing happened'
  }
}
if (userChoice === 'shoes') {
  if (computerChoice === 'rock') {
return 'The bot put a rock in your shoe, when you tried to put the shoes on agressiveley your foot exploded and you bleeded to death.'
  }
} 
if (userChoice === 'shoes') {
  if (computerChoice === 'paper') {
return 'You stomped on the bot aggresively until the bot exploded. I think you win'
  }
} 
if (userChoice === 'shoes') {
  if (computerChoice === 'scissors') {
return 'You stomped on the bot aggresively until the bot exploded. I think you win'
  }
} 
if (userChoice === '') {
  return 'Nothing happened you threw nothing lol the bot murdered you'
}
if (userChoice === 'sword') {
  return 'Shing Shing Shing! the bot is cut up into a million pieces it got a minor paper cut and you won!'
}
if (userChoice === 'paper') {
  if (computerChoice === 'scissors') {
    return 'Imagine losing to a bot';
  } else {
    return 'You won!';
  }
}

if (userChoice === 'dagger') {
  return 'After you and the bot had an immense fight you stabbed eachother to death '
}
 if(userChoice === 'revenge') {
    return 'chunks of the bot fly through the air as you cry your victory cry saying, GET SHIT ON BOT'
  }

  if(userChoice === 'gun') {
    if (computerChoice === 'paper') {
   return 'The bot seemed to be a real person since his head exploded and brains came out of his head'
    }
  }

    if(userChoice === 'gun') {
    if (computerChoice === 'scissors') {
   return 'The bot seemed to be a real person since his head exploded and brains came out of his head'
    }
  }
if (userChoice === 'glass') {
  return 'You smashed the bots head with glass and the bot is leaking'
}

    if(userChoice === 'gun') {
    if (computerChoice === 'rock') {
   return 'The bullet bounced of the rock and hit you and pierced you brain by going in through the eye, now you dont have a left eye and your bleeding to death'
    }
  }

if (userChoice === 'scissors') {
  if (computerChoice === 'rock') {
    return 'Imagine losing to a bot';
  } else {
    return 'You won!';
  }
}

if (userChoice === 'bomb') {
  return 'You automatically win cheater cheated wins are no fun.'
} 
  if (userChoice === 'suicide') {
    return 'You are tired of losing and is now depressed you put a gun up to your head and your head exploded and your brains came out and blood was everywhere including on the bot which made the bot stop working and explode'
  }

 } //Choose what prompt to import here ???
  const playGame = () => {
   const userChoice = getUserChoice('hand');
   const computerChoice = getComputerChoice();
   console.log('You threw: ' + userChoice);
   console.log('The computer threw: ' + computerChoice);
   console.log(determineWinner(userChoice, computerChoice));
};

 


 playGame()
