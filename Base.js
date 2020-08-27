class Base{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
            
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.height=height;
        this.width=width;
        World.add(world,this.body);

        
    }
    display(){
        var pos=this.body.position
        strokeWeight(5);
        fill(85,11,13);
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        
        
    }
}