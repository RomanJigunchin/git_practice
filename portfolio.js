const firstPart = ['Hello.', 'Hi. ', 'Hey, pal. ', 'What\'s up? ', 'Good evening. ', 'Good afternoon. ', 'Good morning. ', 'Greetings, friend. '];
const secondPart = ['Have you heard about this new front-end framework Next.js? How about we meet up and discuss it at my place tomorrow morning? ',
'Did you know that Kevin has invited us both to his birthday? Will you go? ',
'How are you doing, man? Can you believe we haven\'t met since the highschool prom? Wanna go out sometime? ',
'Listen, my girlfriend said she could hook you up with one of her friends. Are you currently single? ',
'I\'m planning on going on a bike trip this weekend and I heard that you\'re into this kind of stuff. '];
const thirdPart = ['Anyway, let me know if you\'re interested.', 'Alright, see you soon. Bye.', 'Looking forward to your reply.', 'Well, text me if you\'re not too busy.'];

const output = () => {
  const num1 = Math.floor(Math.random() * firstPart.length);
  const num2 = Math.floor(Math.random() * secondPart.length);
  const num3 = Math.floor(Math.random() * thirdPart.length);
  console.log(firstPart[num1] + secondPart[num2] + thirdPart[num3]);
}

output();