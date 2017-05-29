import { Component, OnInit } from "@angular/core";

@Component({
    selector: "text",
    templateUrl: "./text.component.html",
    styleUrls: ["./text.component.css"]
})
export class TextComponent implements OnInit {

    allowButton: boolean = false;
    newText: string;
    text: string;
    textCreated: boolean = false;
    texts: Array<string> = [];

    constructor() {
        setTimeout(() => {
            //this.newText = "Text not set";
            this.allowButton = true;
        }, 2000)
    }

    ngOnInit(): void { }

    onCreateNewText(): void {
        this.textCreated = true;
        this.newText = this.text;
        this.texts.push(this.newText);
        this.text = "";
    }

    getColor(): string {
        return "#e6e6ff"
    }

    includeInText(): boolean {
        return this.newText.indexOf("text") === -1 ? true : false;
    }

    //onInputNewText(event: Event): void {
        //this.text = (<HTMLInputElement>event.target).value;
    //}
}