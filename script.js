nn.on('load', () =>  {
      //scene
  kaplay({
    focus: false,
    background: [155, 155, 155]
  })
  
  const label = make([
    rect(400, 200),
    pos(0, 0),
    color(BLACK)
  ]);
  
  label.add([
    text("Sprites n whatnot")]);
  add(label)

//Zack drew the Wizard
loadSprite("wizard", "assets/wizard_2.png")
const wizard = add([
  sprite('wizard'),
  pos(200, 300),
  scale(5)
])

//Jason (I) created the pots
loadSprite("pot", "assets/Potion.png",{
  sliceX: 2,
  sliceY: 3,
  anims: {
    idle: {
      from:0, 
      to: 4
    }
  }
});
  
const pot = add([
  sprite('pot'),
  pos(100, 400),
  scale(5) //Used https://kaplayjs.com/docs/api/ctx/scale/
])


pot.onAnimEnd((anim) => {
    if (anim === "idle") {
    pot.play("idle")
    }
  });
      pot.play("idle")

//Same thing but blue
loadSprite("Bpot", "assets/B_Potion.png",{
  sliceX: 2,
  sliceY: 3,
  anims: {
    idle: {
      from:0, 
      to: 4
    }
  }
});
  
const Bpot = add([
  sprite('Bpot'),
  pos(600, 400),
  scale(5)
])


Bpot.onAnimEnd((anim) => {
    if (anim === "idle") {
    Bpot.play("idle")
    }
  });
      Bpot.play("idle")
  
  //AUDIO WARNING; Main was created by Marcos and the sound effects were created by Joesph (I modified it)
  loadMusic("bg", "assets/bgmusic.mp3");
  loadSound("dead", "assets/dead_2.mp3");
  loadSound("step", "assets/step.mp3");
  
onKeyDown('right', () => {
    play("step")
  })

  onKeyDown('left', () => {
    play("dead")
  })
  
  onKeyDown('up', () => {
    play("bg")
  })
})