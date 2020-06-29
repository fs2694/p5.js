class Ghost{ 
     constructor(){   
       this.img = loadImage("https://i.ibb.co/Ns7ck7Z/ghost.png ");
       this.w=50  
       this.h=50;  
       this.x= width;
       this.y= height -this.h-random(1*height/5,height/3     ); 
     }   
  move(){          
   this.x -=8;            

  }
  show(){           
   image(this.img,this.x,this.y,this.w,this.h); 
  }
}      