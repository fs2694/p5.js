class Fire{ 
     constructor(){   
       this.img = loadImage("https://i.ibb.co/GJ6K2Mb/fire.png");
       this.w=50  
       this.h=90;  
       this.x= width;
       this.y= height -this.h; 
     }
  move(){     
   this.x -=8;            

  }
  show(){           
   image(this.img,this.x,this.y,this.w,this.h); 
  }
}