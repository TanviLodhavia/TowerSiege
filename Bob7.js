class Bob7{
    constructor(x,y){
        var options={
            isStatic:false
        }
            
        this.body=Bodies.rectangle(x,y,20,30,options);
        this.height=40;
        this.width=30;
        World.add(world,this.body);

        
    }
    display(){
        var pos=this.body.position
        strokeWeight(3);
        stroke(0,0,0)
        fill(0,128,0);
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        
        
    }
}