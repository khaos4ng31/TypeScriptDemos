class Concatenator {
    private x : HTMLInputElement;
    private y : HTMLInputElement;
    private output : HTMLSpanElement;

    constructor(xId: string, yId: string, outputId: string) {
        this.x = <HTMLInputElement>document.getElementById(xId);
        this.y = <HTMLInputElement>document.getElementById(yId);
        this.output = <HTMLSpanElement>document.getElementById(outputId);
        this.wireEvents();
    }

    wireEvents() {
        document.getElementById('Add').addEventListener('click',
            event => {
                this.output.innerHTML = this.x.value + this.y.value;
            });
    }
}

window.onload = function () {
    var calc = new Concatenator('X','Y','Output');
};
