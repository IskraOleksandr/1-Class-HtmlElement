class MyHtmlElement {
    private element_name: string;
    private tag_Closing: boolean;
    private element_text: string;
    private attributes: Array<string> = new Array<string>
    private styles: Array<string> = new Array<string>;
    private includeTags: Array<MyHtmlElement> = new Array<MyHtmlElement>

    constructor(element_name: string, tag_closing: boolean, element_text: string) {
        this.element_name = element_name;
        this.tag_Closing = tag_closing;
        this.element_text = element_text;
    }

    public setAttr(attrName: string, attrValue: string): void {
        this.attributes.push(`${attrName}='${attrValue}'`);
    }
    public setStyle(stName: string, stValue: string): void {
        this.styles.push(`${stName}:${stValue}`);
    }
    public setTagToEnd(item: MyHtmlElement): void {
        this.includeTags.push(item);
    }
    public setTagToBegining(item: MyHtmlElement): void {
        this.includeTags.unshift(item);
    }
    getHtml(): string {
        let str: string = `<${this.element_name} `;

        if (this.styles.length > 0) {
            str += " style='";
            this.styles.forEach((s) => {
                str += s + ';';
            });
            str += "' ";
        }
        if (this.attributes.length > 0) {
            this.attributes.forEach((a) => {
                str += a + ' ';
            });
            str += ' ';
        }
        if (!this.tag_Closing) {
            str += '>';
        }
        else {
            str += ' />';
        }

        str += this.element_text;

        if (!this.tag_Closing) {
            if (this.includeTags.length > 0) {
                this.includeTags.forEach((ht) => {
                    str += ht.getHtml();
                });
            }
            str += `</${this.element_name}> `;
        }
        return str;
    }
}

window.onload = () => {

    let wrapper: MyHtmlElement = new MyHtmlElement("div", false, "");
    wrapper.setStyle("display", "flex");
    wrapper.setAttr("id", "wrapper");

    let div1: MyHtmlElement = new MyHtmlElement("div", false, "");
    div1.setStyle("width", "300px");
    div1.setStyle("margin", "10px");

    let h3: MyHtmlElement = new MyHtmlElement("h3", false, "What is Lorem Ipsum?");
    let img: MyHtmlElement = new MyHtmlElement("img", true, "");
    img.setAttr("src", "lipsum.jpg");
    img.setAttr("alt", "Lorem Ipsum");
    img.setStyle("width", "100%");

    let p: MyHtmlElement = new MyHtmlElement("p", false, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt gravida urna eu viverra. Aliquam vehicula mauris dolor, non consectetur magna pharetra id. Phasellus velit nulla, ultricies ut ipsum in, vestibulum accumsan velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam eget nisi facilisis, mattis tortor in, feugiat eros. Aliquam porttitor id ante nec feugiat. Phasellus pulvinar libero et maximus finibus. Nullam ultricies quis mauris sit amet hendrerit. In non ligula in nunc dapibus egestas eget eget nisi. Vivamus iaculis magna leo, in posuere est dignissim id. Sed dignissim hendrerit turpis ac posuere. Aliquam vitae accumsan nunc.");
    p.setStyle("text-align", "justify");

    let a: MyHtmlElement = new MyHtmlElement("a", false, "More...");
    a.setAttr("href", "https://www.lipsum.com");
    a.setAttr("target", "_blank");

    div1.setTagToEnd(img);
    div1.setTagToEnd(p);
    div1.setTagToEnd(a);
    div1.setTagToBegining(h3);

    wrapper.setTagToEnd(div1);
    wrapper.setTagToEnd(div1);

    document.write(wrapper.getHtml());
};