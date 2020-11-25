class chain2{
    
    constructor(body1, body2,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:-45,y:this.offsetY},
            stiffness:1
            

        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
       var pointA=this.chain.bodyA.position;
       var pointB=this.chain.bodyB.position;
       strokeWeight(2);

       var Anchor1X=pointA.x;
       var Anchor1Y=pointB.y;

       var Anchor2X=pointB.x-45
		var Anchor2Y=pointB.y+this.offsetY

		line(Anchor1X,Anchor2Y,Anchor2X,Anchor1Y);
    }

    
}
    