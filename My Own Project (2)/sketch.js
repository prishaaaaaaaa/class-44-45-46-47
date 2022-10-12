var wrongans1=true
var wrongans2=true
var wrongans3=true
var rightans=true

var score= 0
var quizcover 
var openingcover

function preload(){
  quizcover= loadImage("quizbackgrd.jpg")
  openingcover = loadImage("openingcover.jpg")
}

function setup(){
  createCanvas(1300,600)
  background(quizcover)
  fill("white")
  textSize(50)
  text("Test Your General Knowledge", 320, 210)
  textSize(30)
  text("Enter Your Name ", 530,330)
  login=createInput('')
  login.style('font-style','bold')
  login.position(555,370)
  submitbutton =createButton('Start')
  submitbutton.style('font-size','30px')
  submitbutton.style('background-color','pink')
  submitbutton.position(600,420)
  submitbutton.mousePressed(()=>{
    name1=login.value()
    if(name1===""){
      alert("Please write your name")
    }
    else{
      submitbutton.mousePressed(greeting)
    }
  })
  
}

function greeting(){
  background("openingcover")
  submitbutton.hide()
  login.hide()
  greeting=createElement('h1')
  greeting.html('hello ' + name1 +'!')
  greeting.position(300,300)
  startquiz=createButton('Start Quiz')
  startquiz.style('background-color', 'blue')
  startquiz.style('font-size', '30px')
  startquiz.position(600,500)
  startquiz.mouseClicked(q1)
}

function q1(){
background("white")
submitbutton.hide()
login.hide()
greeting.hide()
startquiz.hide()
qn1=createElement('h1')
qn1.html('What is a group of crows called?')
qn1.style('color','black')
qn1.position(50,80)

qn1a=createButton("A: a pod")
qn1a.style('font-size','24px')
qn1a.style('color','black')
qn1a.style('background-color','white')
qn1a.position(50,150)
qn1a.mousePressed(qn1option1)

qn1b=createButton("B: a barrel")
qn1b.style('font-size','24px')
qn1b.style('color','black')
qn1b.style('background-color','white')
qn1b.position(50,190)
qn1b.mousePressed(qn1option2)

qn1c=createButton("C: a murder")
qn1c.style('font-size','24px')
qn1c.style('color','black')
qn1c.style('background-color','white')
qn1c.position(50,230)
qn1c.mousePressed(qn1option3)

qn1d=createButton("D: a herd")
qn1d.style('font-size','24px')
qn1d.style('color','black')
qn1d.style('background-color','white')
qn1d.position(50,270)
qn1d.mousePressed(qn1option4)

next=createButton("Next")
next.style('font-size','24px')
next.style('color','black')
next.style('background-color','blue')
next.position(550,330)
next.mousePressed(q2)
}

function qn1option1(){
  qn1a.style('background-color','red')
  qn1c.style('background-color','green')
  qn1a.attribute("disabled","")
  qn1b.attribute("disabled","")
  qn1c.attribute("disabled","")
  qn1d.attribute("disabled","")
  wrongans1=createElement('h1')
  wrongans1.html('oopsie! wrong answer!')
  wrongans1.position(300,500)
  wrongans1.style('color', 'red')
}

function qn1option2(){
  qn1b.style('background-color','red')
  qn1c.style('background-color','green')
  qn1a.attribute("disabled","")
  qn1b.attribute("disabled","")
  qn1c.attribute("disabled","")
  qn1d.attribute("disabled","")
  wrongans2=createElement('h1')
  wrongans2.html('oopsie! wrong answer!')
  wrongans2.position(300,500)
  wrongans2.style('color', 'red')
}

function qn1option3(){
  qn1c.style('background-color','green')
  qn1a.attribute("disabled","")
  qn1b.attribute("disabled","")
  qn1c.attribute("disabled","")
  qn1d.attribute("disabled","")
  rightans=createElement('h1')
  rightans.html('bingo! correct answer!')
  rightans.position(300,500)
  rightans.style('color', 'green')
  score=score+1
}

function qn1option4(){
  qn1d.style('background-color','red')
  qn1c.style('background-color','green')
  qn1a.attribute("disabled","")
  qn1b.attribute("disabled","")
  qn1c.attribute("disabled","")
  qn1d.attribute("disabled","")
  wrongans3=createElement('h1')
  wrongans3.html('oopsie! wrong answer!')
  wrongans3.position(300,500)
  wrongans3.style('color', 'red')
}

function q2(){
  background("yellow")
  next.hide()
  qn1.hide()
  qn1a.hide()
  qn1b.hide()
  qn1c.hide()
  qn1d.hide()
  if(wrongans1.show){
    wrongans1.hide()
  }
  if(wrongans2.show){
    wrongans2.hide()
  }
  if(wrongans3.show){
    wrongans3.hide()
  }
  if(rightans.show){
    rightans.hide()
  }
  qn2=createElement('h1')
  qn2.html('What is a group of crows called?')
  qn2.style('color','black')
  qn2.position(50,80)
  
  qn2a=createButton("A: a pod")
  qn2a.style('font-size','24px')
  qn2a.style('color','black')
  qn2a.style('background-color','white')
  qn2a.position(50,150)
  qn2a.mousePressed(qn2option1)
  
  qn2b=createButton("B: a barrel")
  qn2b.style('font-size','24px')
  qn2b.style('color','black')
  qn2b.style('background-color','white')
  qn2b.position(50,190)
  qn2b.mousePressed(qn2option2)
  
  qn2c=createButton("C: a murder")
  qn2c.style('font-size','24px')
  qn2c.style('color','black')
  qn2c.style('background-color','white')
  qn2c.position(50,230)
  qn2c.mousePressed(qn2option3)
  
  qn2d=createButton("D: a herd")
  qn2d.style('font-size','24px')
  qn2d.style('color','black')
  qn2d.style('background-color','white')
  qn2d.position(50,270)
  qn2d.mousePressed(qn2option4)
  
  next=createButton("Next")
  next.style('font-size','24px')
  next.style('color','black')
  next.style('background-color','blue')
  next.position(550,330)
  next.mousePressed(q3)
  }
  
  function qn2option1(){
    qn2a.style('background-color','red')
    qn2c.style('background-color','green')
    qn2a.attribute("disabled","")
    qn2b.attribute("disabled","")
    qn2c.attribute("disabled","")
    qn2d.attribute("disabled","")
    wrongans1=createElement('h1')
    wrongans1.html('oopsie! wrong answer!')
    wrongans1.position(300,500)
    wrongans1.style('color', 'red')
  }
  
  function qn2option2(){
    qn2b.style('background-color','red')
    qn2c.style('background-color','green')
    qn2a.attribute("disabled","")
    qn2b.attribute("disabled","")
    qn2c.attribute("disabled","")
    qn2d.attribute("disabled","")
    wrongans2=createElement('h1')
    wrongans2.html('oopsie! wrong answer!')
    wrongans2.position(300,500)
    wrongans2.style('color', 'red')
  }
  
  function qn2option3(){
    qn2c.style('background-color','green')
    qn2a.attribute("disabled","")
    qn2b.attribute("disabled","")
    qn2c.attribute("disabled","")
    qn2d.attribute("disabled","")
    rightans=createElement('h1')
    rightans.html('bingo! correct answer!')
    rightans.position(300,500)
    rightans.style('color', 'green')
    score=score+1
  }
  
  function qn2option4(){
    qn2d.style('background-color','red')
    qn2c.style('background-color','green')
    qn2a.attribute("disabled","")
    qn2b.attribute("disabled","")
    qn2c.attribute("disabled","")
    qn2d.attribute("disabled","")
    wrongans3=createElement('h1')
    wrongans3.html('oopsie! wrong answer!')
    wrongans3.position(300,500)
    wrongans3.style('color', 'red')
  }

  function q3(){
    background("black")
    next.hide()
    qn2.hide()
    qn2a.hide()
    qn2b.hide()
    qn2c.hide()
    qn2d.hide()
    if(wrongans1.show){
      wrongans1.hide()
    }
    if(wrongans2.show){
      wrongans2.hide()
    }
    if(wrongans3.show){
      wrongans3.hide()
    }
    if(rightans.show){
      rightans.hide()
    }
    qn3=createElement('h1')
    qn3.html('What is a group of crows called?')
    qn3.style('color','black')
    qn3.position(50,80)
    
    qn3a=createButton("A: a pod")
    qn3a.style('font-size','24px')
    qn3a.style('color','black')
    qn3a.style('background-color','white')
    qn3a.position(50,150)
    qn3a.mousePressed(qn3option1)
    
    qn3b=createButton("B: a barrel")
    qn3b.style('font-size','24px')
    qn3b.style('color','black')
    qn3b.style('background-color','white')
    qn3b.position(50,190)
    qn3b.mousePressed(qn3option2)
    
    qn3c=createButton("C: a murder")
    qn3c.style('font-size','24px')
    qn3c.style('color','black')
    qn3c.style('background-color','white')
    qn3c.position(50,230)
    qn3c.mousePressed(qn3option3)
    
    qn3d=createButton("D: a herd")
    qn3d.style('font-size','24px')
    qn3d.style('color','black')
    qn3d.style('background-color','white')
    qn3d.position(50,270)
    qn3d.mousePressed(qn3option4)
    
    next=createButton("Next")
    next.style('font-size','24px')
    next.style('color','black')
    next.style('background-color','blue')
    next.position(550,330)
    next.mousePressed(q4)
    }
    function qn3option1(){
      qn3a.style('background-color','red')
      qn3c.style('background-color','green')
      qn3a.attribute("disabled","")
      qn3b.attribute("disabled","")
      qn3c.attribute("disabled","")
      qn3d.attribute("disabled","")
      wrongans1=createElement('h1')
      wrongans1.html('oopsie! wrong answer!')
      wrongans1.position(300,500)
      wrongans1.style('color', 'red')
    }
    
    function qn3option2(){
      qn3b.style('background-color','red')
      qn3c.style('background-color','green')
      qn3a.attribute("disabled","")
      qn3b.attribute("disabled","")
      qn3c.attribute("disabled","")
      qn3d.attribute("disabled","")
      wrongans2=createElement('h1')
      wrongans2.html('oopsie! wrong answer!')
      wrongans2.position(300,500)
      wrongans2.style('color', 'red')
    }
    
    function qn3option3(){
      qn3c.style('background-color','green')
      qn3a.attribute("disabled","")
      qn3b.attribute("disabled","")
      qn3c.attribute("disabled","")
      qn3d.attribute("disabled","")
      rightans=createElement('h1')
      rightans.html('bingo! correct answer!')
      rightans.position(300,500)
      rightans.style('color', 'green')
      score=score+1
    }
    
    function qn3option4(){
      qn3d.style('background-color','red')
      qn3c.style('background-color','green')
      qn3a.attribute("disabled","")
      qn3b.attribute("disabled","")
      qn3c.attribute("disabled","")
      qn3d.attribute("disabled","")
      wrongans3=createElement('h1')
      wrongans3.html('oopsie! wrong answer!')
      wrongans3.position(300,500)
      wrongans3.style('color', 'red')
    }
    function q4(){
      background("green")
      next.hide()
      qn3.hide()
      qn3a.hide()
      qn3b.hide()
      qn3c.hide()
      qn3d.hide()
      if(wrongans1.show){
        wrongans1.hide()
      }
      if(wrongans2.show){
        wrongans2.hide()
      }
      if(wrongans3.show){
        wrongans3.hide()
      }
      if(rightans.show){
        rightans.hide()
      }
      qn4=createElement('h1')
      qn4.html('What is a group of crows called?')
      qn4.style('color','black')
      qn4.position(50,80)
      
      qn4a=createButton("A: a pod")
      qn4a.style('font-size','24px')
      qn4a.style('color','black')
      qn4a.style('background-color','white')
      qn4a.position(50,150)
      qn4a.mousePressed(qn4option1)
      
      qn4b=createButton("B: a barrel")
      qn4b.style('font-size','24px')
      qn4b.style('color','black')
      qn4b.style('background-color','white')
      qn4b.position(50,190)
      qn4b.mousePressed(qn4option2)
      
      qn4c=createButton("C: a murder")
      qn4c.style('font-size','24px')
      qn4c.style('color','black')
      qn4c.style('background-color','white')
      qn4c.position(50,230)
      qn4c.mousePressed(qn4option3)
      
      qn4d=createButton("D: a herd")
      qn4d.style('font-size','24px')
      qn4d.style('color','black')
      qn4d.style('background-color','white')
      qn4d.position(50,270)
      qn4d.mousePressed(qn4option4)
      
      next=createButton("Next")
      next.style('font-size','24px')
      next.style('color','black')
      next.style('background-color','blue')
      next.position(550,330)
      next.mousePressed(q5)
      }
      function qn4option1(){
        qn4a.style('background-color','red')
        qn4c.style('background-color','green')
        qn4a.attribute("disabled","")
        qn4b.attribute("disabled","")
        qn4c.attribute("disabled","")
        qn4d.attribute("disabled","")
        wrongans1=createElement('h1')
        wrongans1.html('oopsie! wrong answer!')
        wrongans1.position(300,500)
        wrongans1.style('color', 'red')
      }
      
      function qn4option2(){
        qn4b.style('background-color','red')
        qn4c.style('background-color','green')
        qn4a.attribute("disabled","")
        qn4b.attribute("disabled","")
        qn4c.attribute("disabled","")
        qn4d.attribute("disabled","")
        wrongans2=createElement('h1')
        wrongans2.html('oopsie! wrong answer!')
        wrongans2.position(300,500)
        wrongans2.style('color', 'red')
      }
      
      function qn4option3(){
        qn4c.style('background-color','green')
        qn4a.attribute("disabled","")
        qn4b.attribute("disabled","")
        qn4c.attribute("disabled","")
        qn4d.attribute("disabled","")
        rightans=createElement('h1')
        rightans.html('bingo! correct answer!')
        rightans.position(300,500)
        rightans.style('color', 'green')
        score=score+1
      }
      
      function qn4option4(){
        qn4d.style('background-color','red')
        qn4c.style('background-color','green')
        qn4a.attribute("disabled","")
        qn4b.attribute("disabled","")
        qn4c.attribute("disabled","")
        qn4d.attribute("disabled","")
        wrongans3=createElement('h1')
        wrongans3.html('oopsie! wrong answer!')
        wrongans3.position(300,500)
        wrongans3.style('color', 'red')
      }
      function q5(){
        background("red")
        next.hide()
        qn4.hide()
        qn4a.hide()
        qn4b.hide()
        qn4c.hide()
        qn4d.hide()
        if(wrongans1.show){
          wrongans1.hide()
        }
        if(wrongans2.show){
          wrongans2.hide()
        }
        if(wrongans3.show){
          wrongans3.hide()
        }
        if(rightans.show){
          rightans.hide()
        }
        qn5=createElement('h1')
        qn5.html('What is a group of crows called?')
        qn5.style('color','black')
        qn5.position(50,80)
        
        qn5a=createButton("A: a pod")
        qn5a.style('font-size','24px')
        qn5a.style('color','black')
        qn5a.style('background-color','white')
        qn5a.position(50,150)
        qn5a.mousePressed(qn5option1)
        
        qn5b=createButton("B: a barrel")
        qn5b.style('font-size','24px')
        qn5b.style('color','black')
        qn5b.style('background-color','white')
        qn5b.position(50,190)
        qn5b.mousePressed(qn5option2)
        
        qn5c=createButton("C: a murder")
        qn5c.style('font-size','24px')
        qn5c.style('color','black')
        qn5c.style('background-color','white')
        qn5c.position(50,230)
        qn5c.mousePressed(qn5option3)
        
        qn5d=createButton("D: a herd")
        qn5d.style('font-size','24px')
        qn5d.style('color','black')
        qn5d.style('background-color','white')
        qn5d.position(50,270)
        qn5d.mousePressed(qn5option4)
        
        next=createButton("Next")
        next.style('font-size','24px')
        next.style('color','black')
        next.style('background-color','blue')
        next.position(550,330)
        next.mousePressed(lastpage)
        }
        function qn5option1(){
          qn5a.style('background-color','red')
          qn5c.style('background-color','green')
          qn5a.attribute("disabled","")
          qn5b.attribute("disabled","")
          qn5c.attribute("disabled","")
          qn5d.attribute("disabled","")
          wrongans1=createElement('h1')
          wrongans1.html('oopsie! wrong answer!')
          wrongans1.position(300,500)
          wrongans1.style('color', 'red')
        }
        
        function qn5option2(){
          qn5b.style('background-color','red')
          qn5c.style('background-color','green')
          qn5a.attribute("disabled","")
          qn5b.attribute("disabled","")
          qn5c.attribute("disabled","")
          qn5d.attribute("disabled","")
          wrongans2=createElement('h1')
          wrongans2.html('oopsie! wrong answer!')
          wrongans2.position(300,500)
          wrongans2.style('color', 'red')
        }
        
        function qn5option3(){
          qn5c.style('background-color','green')
          qn5a.attribute("disabled","")
          qn5b.attribute("disabled","")
          qn5c.attribute("disabled","")
          qn5d.attribute("disabled","")
          rightans=createElement('h1')
          rightans.html('bingo! correct answer!')
          rightans.position(300,500)
          rightans.style('color', 'green')
          score=score+1
        }
        
        function qn5option4(){
          qn5d.style('background-color','red')
          qn5c.style('background-color','green')
          qn5a.attribute("disabled","")
          qn5b.attribute("disabled","")
          qn5c.attribute("disabled","")
          qn5d.attribute("disabled","")
          wrongans3=createElement('h1')
          wrongans3.html('oopsie! wrong answer!')
          wrongans3.position(300,500)
          wrongans3.style('color', 'red')
        }
        function lastpage(){
          background("pink")
          next.hide()
          qn5.hide()
          qn5a.hide()
          qn5b.hide()
          qn5c.hide()
          qn5d.hide()
          if(wrongans1.show){
            wrongans1.hide()
          }
          if(wrongans2.show){
            wrongans2.hide()
          }
          if(wrongans3.show){
            wrongans3.hide()
          }
          if(rightans.show){
            rightans.hide()
          }
          text("correct answer: "+score,222,222)

        }
  
    
  
