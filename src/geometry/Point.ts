import {IDrawable} from "../typing";

export class Point implements IDrawable{
    classType= "Point";
    uid: string;
    public radius: number = 1;

    constructor(public x, public y, public z?) {

    }
    draw2D(ctx: CanvasRenderingContext2D) {
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }
}