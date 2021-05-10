class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();
    textSize(30);
    background("yellow")
   fill(0)
    text("Result Of Te Quiz",300,50);
    textSize(10)
    fill(0)
    stroke(1)
    strokeWeight(1.5)
    text("_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _",282,55);
    Contestant.getPlayerInfo();

    if(allContestants!==undefined){
fill("blue");
textSize(20);
stroke(0)
strokeWeight(0)
text("*NOTE: Contestant who answered correct are highlighted in green color",130,230)

var display_position=250;     
for(var plr in allContestants){
  var correctAns="2"
  if(correctAns===allContestants[plr].answer)
  fill("green");
  else
  fill("red")
  display_position+=30;
  textSize(15);
  stroke(0)
  strokeWeight(0)
  text(allContestants[plr].name+":"+allContestants[plr].answer,120,display_position)
  
    }
    }
  
    //write code to change the background color here

    //write code to show a heading for showing the result of Quiz

    //call getContestantInfo( ) here


    //write condition to check if contestantInfor is not undefined

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
