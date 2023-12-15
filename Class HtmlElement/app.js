var Greeter = /** @class */ (function () {
    function Greeter(n, o, t) {
        this.attributes = new Array;
        this.styles = new Array;
        this.includeTags = new Array;
        this.name = n;
        this.selfClosing = o;
        this.text = t;
    }
    Greeter.prototype.setAttr = function (attrName, attrValue) {
        this.attributes.push("".concat(attrName, "='").concat(attrValue, "'"));
    };
    Greeter.prototype.setStyle = function (stName, stValue) {
        this.styles.push("".concat(stName, ":").concat(stValue));
    };
    Greeter.prototype.setTagToEnd = function (item) {
        this.includeTags.push(item);
    };
    Greeter.prototype.setTagToBegining = function (item) {
        this.includeTags.unshift(item);
    };
    Greeter.prototype.getHtml = function () {
        var str = "<".concat(this.name, " ");
        if (this.styles.length > 0) {
            str += " style='";
            this.styles.forEach(function (s) {
                str += s + ';';
            });
            str += "' ";
        }
        if (this.attributes.length > 0) {
            this.attributes.forEach(function (a) {
                str += a + ' ';
            });
            str += ' ';
        }
        if (!this.selfClosing)
            str += '>';
        else {
            str += ' />';
        }
        str += this.text;
        if (!this.selfClosing) {
            if (this.includeTags.length > 0) {
                this.includeTags.forEach(function (ht) {
                    str += ht.getHtml();
                });
            }
            str += "</".concat(this.name, "> ");
        }
        return str;
    };
    return Greeter;
}());
window.onload = function () {
    var wrapper = new Greeter("div", false, "");
    wrapper.setStyle("display", "flex");
    wrapper.setAttr("id", "wrapper");
    var div1 = new Greeter("div", false, "");
    div1.setStyle("width", "300px");
    div1.setStyle("margin", "10px");
    var h = new Greeter("h3", false, "What is Lorem Ipsum?");
    var img = new Greeter("img", true, "");
    img.setAttr("src", "lipsum.jpg");
    img.setAttr("alt", "Lorem Ipsum");
    img.setStyle("width", "100%");
    var p = new Greeter("p", false, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt gravida urna eu viverra. Aliquam vehicula mauris dolor, non consectetur magna pharetra id. Phasellus velit nulla, ultricies ut ipsum in, vestibulum accumsan velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam eget nisi facilisis, mattis tortor in, feugiat eros. Aliquam porttitor id ante nec feugiat. Phasellus pulvinar libero et maximus finibus. Nullam ultricies quis mauris sit amet hendrerit. In non ligula in nunc dapibus egestas eget eget nisi. Vivamus iaculis magna leo, in posuere est dignissim id. Sed dignissim hendrerit turpis ac posuere. Aliquam vitae accumsan nunc.");
    p.setStyle("text-align", "justify");
    var a = new Greeter("a", false, "More...");
    a.setAttr("href", "https://www.lipsum.com");
    a.setAttr("target", "_blank");
    div1.setTagToEnd(img);
    div1.setTagToEnd(p);
    div1.setTagToEnd(a);
    div1.setTagToBegining(h);
    wrapper.setTagToEnd(div1);
    wrapper.setTagToEnd(div1);
    document.write(wrapper.getHtml());
};
//# sourceMappingURL=app.js.map