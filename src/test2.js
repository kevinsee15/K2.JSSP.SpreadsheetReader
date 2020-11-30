function callWebAPI() {
    var FormData = require('form-data');
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var form = new FormData();
    form.append("Attachment", "C:\\Users\\kevinsee\\Desktop\\Grab Statement.xlsx");
    form.append('ColumnsToRead', "Vehicle Plate");
    form.append('ColumnsToRead', "Tag");
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4)
            return;
        if (xhr.status !== 201)
            throw new Error("Failed with status " + JSON.stringify(xhr.response));
        console.log(xhr.response);
    };
    xhr.open("POST", "https://k2utilitiesexceltools.azurewebsites.net/api/Excel/readdynamic");
    xhr.setRequestHeader("Content-Type", "multipart/form-data");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.send(form);
}
callWebAPI();
