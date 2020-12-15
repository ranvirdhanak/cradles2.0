class Sling{
	constructor(body1,body2,offsetX)
	{
		
		var options={
			bodyA:body1,
			bodyB:body2,
			pointB:{x: offsetX, y: 0}
		}
		//console.log(options);
        this.sling=Constraint.create(options)
        this.offsetX=offsetX
		World.add(world,this.sling)
	}

	display()
	{
		var pointA=this.sling.bodyA.position;
		var pointB=this.sling.bodyB.position;
push()
        strokeWeight(3);
        stroke("white")

         line(pointA.x, pointA.y, pointB.x+this.offsetX, pointB.y );
         
         pop()
	}

}