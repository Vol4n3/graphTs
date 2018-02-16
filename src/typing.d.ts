import {Point} from "./geometry/Point";

export interface IDrawable {
    uid: string;

    draw2D(ctx: CanvasRenderingContext2D): void;
}

export interface Interactable {
    drag(p: Point): boolean;
}