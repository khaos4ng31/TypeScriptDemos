class Textfilegrabber {
    private filepath : HTMLInputElement;
    private output : HTMLSpanElement;

    constructor(xId: string, outputId: string) {
        this.filepath = <HTMLInputElement>document.getElementById(xId);
        this.output = <HTMLSpanElement>document.getElementById(outputId);
        this.wireEvents();
    }

    wireEvents() {
        document.getElementById('Search').addEventListener('click',
            event => {
                this.output.innerHTML = this.getFile(this.filepath.value);
            });
    }

    getFile(filepath: string) {
      return "default.txt";
    }
}


window.onload = function () {
    var calc = new Textfilegrabber('filepath' ,'Output');
};
