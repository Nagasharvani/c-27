//creating blue print for constraint
class chain{
//creating constructor taking bodyA and bodyB as arguments
    constructor(bodyA,bodyB)
    {
        //creating options for constraint
        var options={
     bodyA:bodyA,
     bodyB:bodyB,
     stiffness:0.04,
     length:10
        }
// creating chain using constraint
        this.chain=Constraint.create(options);
        //adding to the world
        World.add(world,this.chain);
        
    }

    display()
    {
        //name spacing
        var pointA=this.chain.bodyA.position;
        var pointB=this.chain.bodyB.position;
        //creating line between the bodies
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}