const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const profileQuestions = [
  "What's your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favourite (eg: dinner, brunch, etc.)",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!",
];

const ansArr = [];

const profileOutput = function() {
  let out = `${ansArr[0]} loves to ${ansArr[1]} while listening to ${ansArr[2]}, eating up ${ansArr[4]} for ${ansArr[3]}, prefers ${ansArr[5]} and is awesome at ${ansArr[6]}`;
  console.log(out);
};


let index = 0;

rl.question(`${profileQuestions[index]} `, (answer) => { // 1
  console.log(`Thank you for your valuable feedback: ${answer}`);
  ansArr.push(answer);
  index ++;

  rl.question(`${profileQuestions[index]} `, (answer) => {  // 2
    console.log(`Thank you for your valuable feedback: ${answer}`);
    ansArr.push(answer);
    index ++;
    
    rl.question(`${profileQuestions[index]} `, (answer) => {  // 3
      console.log(`Thank you for your valuable feedback: ${answer}`);
      ansArr.push(answer);
      index ++;
        
      rl.question(`${profileQuestions[index]} `, (answer) => {  // 4
        console.log(`Thank you for your valuable feedback: ${answer}`);
        ansArr.push(answer);
        index ++;
          
        rl.question(`${profileQuestions[index]} `, (answer) => {  // 5
          console.log(`Thank you for your valuable feedback: ${answer}`);
          ansArr.push(answer);
          index ++;
            
          rl.question(`${profileQuestions[index]} `, (answer) => {  // 6
            console.log(`Thank you for your valuable feedback: ${answer}`);
            ansArr.push(answer);
            index ++;
              
            rl.question(`${profileQuestions[index]} `, (answer) => {  // 7
              console.log(`Thank you for your valuable feedback: ${answer}`);
              ansArr.push(answer);
              index ++;
                
              console.log(profileOutput());

                
              rl.close();
            });
              

          });
            

        });
          
 
      });
        
 
    });


  });


});

  

// }


