function scuberGreetingForFeet(ride){
  // Write your code here!  
  if (ride <= 400){
    return 'This one is on me!';
  } else if (ride >= 400 && ride <= 2000){
    return 'That will be twenty bucks.'
  } else if (ride > 2000 && ride < 2500){
    return 'I will gladly take your thirty bucks.'
  } else if (ride > 2500) {
    return 'No can do.'
  }
}

function ternaryCheckCity(trip){
  // Write your code here!
  return trip === 'NYC'?'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(gratuity){
  // Write your code here!
  switch(gratuity){
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'
  }
}