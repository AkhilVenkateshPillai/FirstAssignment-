var rs=require("readline-sync");
var score=0;
var scoreNotif=''

var data=[
  {
    name:"Akhil",
    score:3
  },
  { name:"vithul",
    score:2
  },
  { name:"nandhu",
    score:4
  }
]

var name=rs.question("\nHi there, let me know your name : ");

console.log(`\n\n---- Hi ${name}, welcome to the game----\n\n`);

//--------------------------------------gameplay function

function play(question,answer){
  var userName=rs.question(question);

  if(userName.toUpperCase()===answer.toUpperCase()){
    score++;
    console.log("\n You're right :)\n");
  }
 else{
   console.log("\n You're wrong :(\n");
 }

  console.log("-------");
}

var questions=[{
  question:"which is my dream company: ",
  answer:"apple"
},{question:"where was i born: ",
  answer:"kerala"},
  { question:"Who is my marg-dharshak mentor: ",
  answer:"tanay"
  },
  { question:"whats the name of the codecamp which i'm attending: ",
  answer:"neog"
  },
  { question:"what's my currect goal: ",
  answer:"job"
  }]

for(var i=0;i<questions.length;i++){
  play(questions[i].question,questions[i].answer);
}

console.log(`your total score is: ${score}\n`)

//--------------------------------------------score comparison check

for(var j=0;j<data.length;j++){
if(score>data[j].score){
  if(!scoreNotif){
     scoreNotif=`----WoW, you have the highest score among all my friends----`
     console.log(scoreNotif) ;
  }
 
}
};

