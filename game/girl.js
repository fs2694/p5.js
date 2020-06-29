class Girl{               
     constructor(){           
//set some initial values
     this.img = loadImage("https://i.ibb.co/vqNnBZq/girl.png");
     this.w =50;              
     this.h =80;              
     this.x =80;              
     this.y =height-this.h;   
     this.vy=0;               //Vertical speed
     this.gravity = 1;    
     }  

  jump(){  
    if(this.y == height-this.h){ 
       this.vy= -18;            
    }
  }

  move(){                 
  this.y += this.vy;           
  this.vy += this.gravity;       
  this.y = constrain(this.y, 0, height-this.h);
  }

  show(){    
     image(this.img,this.x,this.y,this.w,this.h);  
  } 
  
  hits(obstacle){  
  return collideRectRect(this.x-10, this.y-5, this.w-5, this.h-10, obstacle.x, obstacle.y, obstacle.w-30, obstacle.h-35);
  } 
}



  