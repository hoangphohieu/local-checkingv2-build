
"object" != typeof JSON && (JSON = {}), function () { "use strict"; var rx_one = /^[\],:{}\s]*$/, rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, rx_four = /(?:^|:|,)(?:\s*\[)+/g, rx_escapable = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta, rep; function f(t) { return t < 10 ? "0" + t : t } function this_value() { return this.valueOf() } function quote(t) { return rx_escapable.lastIndex = 0, rx_escapable.test(t) ? '"' + t.replace(rx_escapable, function (t) { var e = meta[t]; return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4) }) + '"' : '"' + t + '"' } function str(t, e) { var r, n, o, u, f, a = gap, i = e[t]; switch (i && "object" == typeof i && "function" == typeof i.toJSON && (i = i.toJSON(t)), "function" == typeof rep && (i = rep.call(e, t, i)), typeof i) { case "string": return quote(i); case "number": return isFinite(i) ? String(i) : "null"; case "boolean": case "null": return String(i); case "object": if (!i) return "null"; if (gap += indent, f = [], "[object Array]" === Object.prototype.toString.apply(i)) { for (u = i.length, r = 0; r < u; r += 1)f[r] = str(r, i) || "null"; return o = 0 === f.length ? "[]" : gap ? "[\n" + gap + f.join(",\n" + gap) + "\n" + a + "]" : "[" + f.join(",") + "]", gap = a, o } if (rep && "object" == typeof rep) for (u = rep.length, r = 0; r < u; r += 1)"string" == typeof rep[r] && (o = str(n = rep[r], i)) && f.push(quote(n) + (gap ? ": " : ":") + o); else for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (o = str(n, i)) && f.push(quote(n) + (gap ? ": " : ":") + o); return o = 0 === f.length ? "{}" : gap ? "{\n" + gap + f.join(",\n" + gap) + "\n" + a + "}" : "{" + f.join(",") + "}", gap = a, o } } "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () { return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null }, Boolean.prototype.toJSON = this_value, Number.prototype.toJSON = this_value, String.prototype.toJSON = this_value), "function" != typeof JSON.stringify && (meta = { "\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" }, JSON.stringify = function (t, e, r) { var n; if (gap = "", indent = "", "number" == typeof r) for (n = 0; n < r; n += 1)indent += " "; else "string" == typeof r && (indent = r); if (rep = e, e && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length)) throw new Error("JSON.stringify"); return str("", { "": t }) }), "function" != typeof JSON.parse && (JSON.parse = function (text, reviver) { var j; function walk(t, e) { var r, n, o = t[e]; if (o && "object" == typeof o) for (r in o) Object.prototype.hasOwnProperty.call(o, r) && (void 0 !== (n = walk(o, r)) ? o[r] = n : delete o[r]); return reviver.call(t, e, o) } if (text = String(text), rx_dangerous.lastIndex = 0, rx_dangerous.test(text) && (text = text.replace(rx_dangerous, function (t) { return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4) })), rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({ "": j }, "") : j; throw new SyntaxError("JSON.parse") }) }();


app.preferences.rulerUnits = Units.PIXELS; // hệ đo pixel
var selectFileJson;

{// tao folder in an
    var folderInAn = Folder("~/Desktop/in an");
    if (!folderInAn.exists) { folderInAn.create(); }
}

{ // thông số dialog
    var visibleDialog = true;
    var dialog = new Window("dialog");
    dialog.text = "auto";
    dialog.preferredSize.width = 300;
    dialog.preferredSize.height = 150;
    dialog.orientation = "column";
    dialog.alignChildren = ["center", "top"];
    dialog.spacing = 10;
    dialog.margins = 16;

    // PANEL1
    // ======
    var panel1 = dialog.add("panel", undefined, undefined, { name: "panel1" });
    panel1.text = "File in";
    panel1.preferredSize.width = 300;
    panel1.orientation = "row";
    panel1.alignChildren = ["center", "fill"];
    panel1.spacing = 10;
    panel1.margins = 10;

    var selectJson = panel1.add("button", undefined, undefined, { name: "selectJson" });
    selectJson.text = "Select file";
    selectJson.justify = "left";

    var statictext1 = panel1.add("statictext", undefined, undefined, { name: "statictext1" });
    statictext1.text = "...";
    statictext1.preferredSize.width = 180;
    statictext1.justify = "center";



    // GROUP1
    // ======
    var group1 = dialog.add("group", undefined, { name: "group1" });
    group1.orientation = "row";
    group1.alignChildren = ["left", "center"];
    group1.spacing = 10;
    group1.margins = [0, 0, 0, 0];

    var button1 = group1.add("button", undefined, undefined, { name: "button1" });
    button1.text = "Create";

    var button2 = group1.add("button", undefined, undefined, { name: "button2" });
    button2.text = "Cancel";
}

// xử lý dialog
selectJson.onClick = function () {
    selectFileJson = File.openDialog("Please select file .json", "*.json");
    if (selectFileJson != null) {
        statictext1.text = decodeURI(selectFileJson.name);
    }
}
button2.onClick = function () { dialog.hide(); }
button1.onClick = function () {
    // alert(statictext1.text);
    dialog.hide();

    if (statictext1.text !== "...") {

        var file = new File(selectFileJson);
        file.open("r");
        var strFile;
        strFile = file.read();
        file.close();
        // read data from json
        var data = JSON.parse(strFile);
        var type = data.type;
        var key = data.key;
        key = Number(key.slice(5, 6)) + Number(key.slice(6, 7));

        // alert(key)
        if (key == 10) {
            switch (type) {
                case "cocnhiet":
                    createCcNhiet(data, type);
                    break;

                default:
                    alert("co loi xay ra, vui long goi Hieu");
                    break;
            }
        }



    }
    else { alert("hay chon file .Json") }

}

function createCcNhiet(data) {
    var arr = data.items;
    var type = data.type;
    var FileName = data.FileName;
    var FileDesign = data.thongso.LocalFileDesign;
    var stt = 0;

    for (var i = 0; i <= arr.length - 1; i++) { // loop làm file in
        app.documents.add(2480, 3508, 300, "COCNHIET"); // tao trang a4
        app.activeDocument.layerSets.add();
        app.activeDocument.activeLayer.name = "CMYK";
        yPosition = 0;
        xPosition = 0;
        var lastName = "";

        CreateCocNhiet1(arr, lastName, stt, i, FileDesign);
        app.activeDocument.mergeVisibleLayers(); // gộp all layer 

        {// lưu file in
            var folder1 = Folder("~/Desktop/in an/COCNHIET");
            if (!folder1.exists) { folder1.create(); }
            app.activeDocument.saveAs(Folder("~/Desktop/in an/COCNHIET/"+ (i + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES); // tat file gllm
        }



        // { // tạo nhãn
        //     createTem(); // hàm tạo tem và nhãn
        //     for (var j = 0; j <= arr[i].length - 1; j++) {
        //         moveTem(arr[i][j], type, FileName);
        //         var folder1 = Folder("~/Desktop/in an/Glass " + "b-" + (i + 1) + "-" + FileName + "/tem");
        //         if (!folder1.exists) { folder1.create(); }
        //         app.activeDocument.saveAs(Folder("~/Desktop/in an/Glass " + "b-" + (i + 1) + "-" + FileName + "/tem/" + arr[i][j].stt + ".jpg"), JPEGSaveOptions, true, Extension.LOWERCASE);
        //     }
        //     app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

        // }

    } // hết làm file

};
function createTem() {
    var wtem = 50; var htem = 30;
    wtem = Math.round(wtem / 0.084667);
    htem = Math.round(htem / 0.084667);
    app.documents.add(wtem, htem, 300, "tem");

    { // màu chữ đen
        var colorTextBlack = new SolidColor(); // tao mau cho layer
        colorTextBlack.rgb.red = 0;
        colorTextBlack.rgb.green = 0;
        colorTextBlack.rgb.blue = 0;
    }
    { // tạo id client
        app.activeDocument.artLayers.add(); // tao layer text
        app.activeDocument.activeLayer.kind = LayerKind.TEXT;
        app.doAction("changeFontRoboto", "autoUv");
        app.activeDocument.activeLayer.name = "name";
        app.activeDocument.activeLayer.textItem.contents = "name";
        app.activeDocument.activeLayer.textItem.kind = TextType.PARAGRAPHTEXT; // loại text
        app.activeDocument.activeLayer.textItem.width = 100; // chiều rộng của khung
        app.activeDocument.activeLayer.textItem.height = 60; // chiều cao của khung
        app.activeDocument.activeLayer.textItem.autoLeadingAmount = 80; // leading - khoảng cách giữa 2 dòng
        app.activeDocument.activeLayer.textItem.justification = Justification.CENTER; // căn giữa
        app.activeDocument.activeLayer.textItem.size = 15; // font size
        app.activeDocument.activeLayer.textItem.color = colorTextBlack; // màu chữ 

    }
    { // tao thanh chia

        app.doAction("createRectangleTem", "autoUv");
        app.activeDocument.artLayers.getByName("Rectangle 1").translate(430, 0);
        app.doAction("moveRectangle", "autoUv");
        app.activeDocument.artLayers.getByName("Rectangle 1").translate(0, - app.activeDocument.height);
        app.activeDocument.artLayers.getByName("Rectangle 1").translate(0, 270);

    }

    { // tao ngay in 
        app.activeDocument.artLayers.add(); // tao layer text
        app.activeDocument.activeLayer.kind = LayerKind.TEXT;
        app.activeDocument.activeLayer.name = "date";
        app.activeDocument.activeLayer.textItem.contents = "date";
        app.activeDocument.activeLayer.textItem.kind = TextType.PARAGRAPHTEXT; // loại text
        app.activeDocument.activeLayer.textItem.width = 100; // chiều rộng của khung
        app.activeDocument.activeLayer.textItem.justification = Justification.CENTER; // căn giữa
        app.activeDocument.activeLayer.textItem.size = 10; // font size
        app.activeDocument.activeLayer.textItem.color = colorTextBlack; // màu chữ 
        app.doAction("moveTL", "autoUv");
        app.activeDocument.artLayers.getByName("date").translate(0, 200);

    }
    { // tạo barcode
        app.activeDocument.artLayers.add(); // tao layer text
        app.activeDocument.activeLayer.kind = LayerKind.TEXT;
        app.activeDocument.activeLayer.name = "barcode";
        app.activeDocument.activeLayer.textItem.contents = "barcode";
        app.activeDocument.activeLayer.textItem.kind = TextType.PARAGRAPHTEXT; // loại text
        app.activeDocument.activeLayer.textItem.width = 100; // chiều rộng của khung
        app.activeDocument.activeLayer.textItem.justification = Justification.CENTER; // căn giữa
        app.activeDocument.activeLayer.textItem.size = 10; // font size
        app.activeDocument.activeLayer.textItem.color = colorTextBlack; // màu chữ 
        app.doAction("moveTL", "autoUv");
        app.activeDocument.artLayers.getByName("barcode").translate(0, 270);

    }

    {// tao stt
        app.activeDocument.artLayers.add(); // tao layer text
        app.activeDocument.activeLayer.kind = LayerKind.TEXT;
        app.activeDocument.activeLayer.name = "stt";
        app.activeDocument.activeLayer.textItem.contents = "stt";
        app.activeDocument.activeLayer.textItem.size = 13; // font size
        app.activeDocument.activeLayer.textItem.color = colorTextBlack; // màu chữ 



    }

    {// tao amount
        app.activeDocument.artLayers.add(); // tao layer text
        app.activeDocument.activeLayer.kind = LayerKind.TEXT;
        app.activeDocument.activeLayer.name = "amount";
        app.activeDocument.activeLayer.textItem.contents = "amount";
        app.activeDocument.activeLayer.textItem.size = 20; // font size
        app.activeDocument.activeLayer.textItem.color = colorTextBlack; // màu chữ 
        app.activeDocument.activeLayer.textItem.fauxBold = true;
    }

}
function convertDate(FileName, type, country, phonecase) {
    var _type = type;
    switch (type) {
        case "luminous":
            _type = "Lu"
            break;
        case "glass":
            _type = "Gl"
            break;
        case "silicon":
            _type = "Si"
            break;
        case "led":
            _type = "Le"
            break;
        default:
            break;
    }

    var nameDate = FileName + " " + _type + "/" + country;
    return nameDate
}
function moveTem(item, type, FileName) {
    var PRectangleTem = app.activeDocument.artLayers.getByName("Rectangle 1").bounds;
    app.activeDocument.artLayers.getByName("date").textItem.contents = convertDate(FileName, type, item.country, item.case);
    app.activeDocument.artLayers.getByName("name").textItem.contents = item.name;
    if (item.barcode !== undefined) {
        app.activeDocument.artLayers.getByName("barcode").textItem.contents = item.barcode;
        app.activeDocument.activeLayer = app.activeDocument.artLayers.getByName("barcode");
        app.doAction("moveBarcode", "autoUv");
        app.activeDocument.artLayers.getByName("barcode").translate(0, 120);
    }
    else {
        app.activeDocument.artLayers.getByName("barcode").textItem.contents = item.case;
        app.activeDocument.activeLayer = app.activeDocument.artLayers.getByName("barcode");
        app.doAction("moveBarcode", "autoUv");
        // alert("sdgvsdv")
        app.activeDocument.artLayers.getByName("barcode").translate(0, 10);

    }
    // alert(item.amount);

    app.activeDocument.activeLayer = app.activeDocument.artLayers.getByName("name");
    app.doAction("moveTL", "autoUv");
    var Pname = app.activeDocument.artLayers.getByName("name").bounds;
    app.activeDocument.activeLayer.translate(10, (260 + Pname[1] - Pname[3]) / 2);

    app.activeDocument.artLayers.getByName("stt").textItem.contents = item.stt;
    app.activeDocument.activeLayer = app.activeDocument.artLayers.getByName("stt");
    app.doAction("moveTL", "autoUv");
    var PStt = app.activeDocument.artLayers.getByName("stt").bounds;
    app.activeDocument.artLayers.getByName("stt").translate(
        PRectangleTem[2] + ((app.activeDocument.width - PRectangleTem[2] - PStt[2] + PStt[0]) / 2),
        (app.activeDocument.height / 2) + ((app.activeDocument.height / 2) - PStt[3] + PStt[1]) / 4);

    if (item.amount <= 1) { app.activeDocument.artLayers.getByName("amount").textItem.contents = "" }
    else {
        app.activeDocument.artLayers.getByName("amount").textItem.contents = item.amount;
    }

    app.activeDocument.activeLayer = app.activeDocument.artLayers.getByName("amount");
    app.doAction("moveTL", "autoUv");
    var PAmount = app.activeDocument.artLayers.getByName("amount").bounds;
    app.activeDocument.artLayers.getByName("amount").translate(PRectangleTem[2] + ((app.activeDocument.width - PRectangleTem[2] - PAmount[2] + PAmount[0]) / 2), ((app.activeDocument.height / 2) - PAmount[3] + PAmount[1]) / 2);
}
function CreateCocNhiet1(arr, lastName, stt, i, FileDesign) {
    var H_item = 1063;
    var W_item = 2480;

    var newSize = 100;

    for (var j = 0; j <= arr[i].length - 1; j++) {
        // try {
        app.open(File(FileDesign + "/" + arr[i][j].sku + ".tif"));
        var width = app.activeDocument.width;
        var height = app.activeDocument.height;
        // } catch (error) {
        //     alert("thieu file: " + arr[i][j].sku);
        // }

        app.activeDocument.activeLayer.name = "1"
        app.activeDocument.activeLayer.duplicate(app.activeDocument.activeLayer, ElementPlacement.PLACEBEFORE); // nhân đôi layer
        app.activeDocument.resizeCanvas(W_item, H_item); // resize canvas về cỡ cần in với loại điện thoại
        if ((height / H_item) < width / W_item) { newSize = (W_item * 100 / width) }
        else { newSize = (H_item * 100 / height) }
        // alert(newSize);
        app.activeDocument.artLayers["1 copy"].resize(newSize, newSize, AnchorPosition.MIDDLECENTER);
        app.doAction("fillbackgroundWhite", "cocnhiet");
        app.activeDocument.mergeVisibleLayers(); // gộp all layer 
        app.activeDocument.activeLayer.duplicate(app.documents["COCNHIET"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        app.activeDocument.activeLayer.name = j;
        app.doAction('moveBL', "cocnhiet");
        switch (j) {
            case 0:
                {
                    app.activeDocument.activeLayer.translate(0, 0);

                    createName(arr[i][j].name, -1080)
                }
                break;
            case 1:
                {
                    app.activeDocument.activeLayer.translate(0, -1170);
                    createName(arr[i][j].name, -2255);
                }
                break;
            case 2:
                {
                    app.activeDocument.activeLayer.translate(0, -2340);
                    createName(arr[i][j].name, -3425);
                }
                break;
            default:
                break;
        }
    }

}

function createName(name, HPosition) {
    app.activeDocument.artLayers.add(); // tao layer text
    app.activeDocument.activeLayer.kind = LayerKind.TEXT;
    app.doAction("changeFontVH", "cocnhiet");
    app.activeDocument.activeLayer.textItem.contents = name;
    app.doAction('moveBL', "cocnhiet");
    app.activeDocument.activeLayer.translate(800, HPosition);
}
dialog.show(); 