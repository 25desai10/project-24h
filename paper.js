class Paper {
    constructor(x, y, radius) {
      var options = {
          isStatic : false,
        'restitution':0.1,
          'friction':0.3,
          'density':1.2
      }
      
      this.radius = radius

       this.image = loadImage("paper.png")

      this.body = Bodies.circle(x, y, radius, options);
      
      World.add(world, this.body);
    }
    
    display(){
      

        fill ("pink")
        imageMode(IMAGE);
        image(this.image, this.body.position.x, this.body.position.y, this.radius , this.radius)
    }
  }