import {Point} from "./Point";
import {IDrawable} from "../typing";

export class Segment implements IDrawable {
    classType= "Segment";
    uid: string;
    public width: number = 1;
    constructor(public p1: Point, public p2: Point) {

    }

    draw2D(ctx: CanvasRenderingContext2D): void {
        ctx.lineWidth = this.width;
        ctx.moveTo(this.p1.x, this.p1.y);
        ctx.lineTo(this.p2.x, this.p2.y);
        ctx.stroke();
    }
}
