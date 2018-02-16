import {IDrawable} from "./typing";
import {Axe} from "./element/Axe";
import {Point} from "./geometry/Point";

declare global {
    interface Window {
        Chart: any;
    }
}

export class Chart {
    public container: HTMLElement;
    public canvas: HTMLCanvasElement;
    public context: CanvasRenderingContext2D | WebGLRenderingContext;
    public elements: IDrawable[] = [];

    constructor(private IdElement: string, private contextId: "webgl" | "2d" = "2d") {
        this.init();
    }

    public addAxe() {
        const p1 = new Point(20, 0);
        const p2 = new Point(20, 100);
        const axe = new Axe(p1, p2);
        this.add(axe);
        this.draw();
    }

    public add(item: IDrawable): number {
        return this.elements.push(item);
    }

    public remove(uid: string) {
        console.warn('not implemented');
    }

    private init() {
        this.container = document.getElementById(this.IdElement);
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext(this.contextId);
        this.container.appendChild(this.canvas);
        window.addEventListener('resize', this.resize.bind(this));
        this.resize();
        this.addAxe();
    }

    private resize() {
        this.canvas.width = this.container.clientWidth;
        this.canvas.height = this.container.clientHeight;
        this.draw();
    }

    private draw() {
        const lengthElements = this.elements.length;
        let ctx: CanvasRenderingContext2D = <CanvasRenderingContext2D>this.context;
        for (let i = 0; i < lengthElements; i++) {
            ctx.beginPath();
            this.elements[i].draw2D(ctx);
            ctx.closePath();
        }
    };
}

window.Chart = Chart;