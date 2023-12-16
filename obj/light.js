import Object from "./object.js";
import {drawLightBeam} from "../core.js";

class Light extends Object{
    constructor(x, y, radius, angle, object, ctx) {
        super(x,y,angle, object, ctx)
        this.radius = radius;
        this.opacity = 1;
        this.draw();
      }
  
      draw() {
        this.ctx.save();
        this.object = new Path2D();
        this.object.moveTo(this.x, this.y);
        this.object.arc(this.x, this.y, this.radius,0, 360);
        this.ctx.fillStyle = `yellow`;
        this.ctx.fill(this.object);
        //this.ctx.stroke(this.object);
        this.ctx.restore();
        console.log("draw")
        drawLightBeam(this.x, this.y, this.angle, "white",this.opacity);
      }
      getCenter(){
        const center = {
          x: this.x,
          y: this.y,
        };
    
        return center;
      }

      clear() {
        this.ctx.clearRect(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
      }

      
      getSettings() {
        return ["x", "y", "angle", "opacity"]
      }
}

export default Light;
