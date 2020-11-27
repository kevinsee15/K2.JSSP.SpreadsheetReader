!function(){const e="SpreadsheetReader",t="File",a="Read";metadata={systemName:"k2.jssp.spreadsheetreader",displayName:"K2 JSSP Spreadsheet Reader",description:"A K2 JSSP based broker that can ingest Excel or CSV files and return as a list that can be displayed in K2 SmartForm list view.",configuration:{"Web API URL":{displayName:"Web API URL",type:"string",required:!0},"Columns To Read":{displayName:"Columns To Read",type:"string",required:!0}}},ondescribe=async function({configuration:s}){let o=s["Columns To Read"].split(",");var r={objects:{[e]:{displayName:"Spreadsheet Reader",description:"Reads a spreadsheet file in CSV or Excel format and returns the contents as a list that can be displayed in a K2 SmartForm list view.",properties:{[t]:{displayName:"File",type:"attachment"}},methods:{[a]:{displayName:"Read",type:"list",inputs:["File"],outputs:[]}}}}};for(let e of o)r.objects.SpreadsheetReader.properties[e]={displayName:e,type:"string"};r.objects.SpreadsheetReader.methods.Read.outputs=o,postSchema(r)},onexecute=async function({objectName:t,methodName:s,parameters:o,properties:r,configuration:n,schema:i}){switch(t){case e:await async function(e,t,s,o){switch(e){case a:await function(e,t){var a=new FormData;console.log(e),a.append("Attachment",e.File);let s=t["Columns To Read"].split(",");for(let e of s)console.log("appending "+e),a.append("ColumnsToRead",e);var o=new XMLHttpRequest;o.onreadystatechange=function(){if(4===o.readyState){if(201!==o.status)throw new Error("Failed with status "+JSON.stringify(o.response));postResult(o.response)}};let r=t["Web API URL"].toString();o.open("POST",r,!0),o.setRequestHeader("Content-Type","multipart/form-data"),console.log(a),o.send(a)}(t,o);break;default:throw new Error("The method "+e+" is not supported.")}}(s,r,0,n);break;default:throw new Error("The object "+t+" is not supported.")}}}();
//# sourceMappingURL=index.js.map
