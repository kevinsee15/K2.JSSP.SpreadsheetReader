!function(){const e="SpreadsheetReader",t="File",a="Read";metadata={systemName:"k2.jssp.spreadsheetreader",displayName:"K2 JSSP Spreadsheet Reader",description:"A K2 JSSP based broker that can ingest Excel or CSV files and return as a list that can be displayed in K2 SmartForm list view.",configuration:{"Web API URL":{displayName:"Web API URL",type:"string",required:!0},"Columns To Read":{displayName:"Columns To Read",type:"string",required:!0}}},ondescribe=async function({configuration:s}){let r=s["Columns To Read"].split(",");var n={objects:{[e]:{displayName:"Spreadsheet Reader",description:"Reads a spreadsheet file in CSV or Excel format and returns the contents as a list that can be displayed in a K2 SmartForm list view.",properties:{[t]:{displayName:"File",type:"attachment"}},methods:{[a]:{displayName:"Read",type:"list",inputs:["File"],outputs:[]}}}}};for(let e of r)n.objects.SpreadsheetReader.properties[e]={displayName:e,type:"string"};n.objects.SpreadsheetReader.methods.Read.outputs=r,postSchema(n)},onexecute=async function({objectName:t,methodName:s,parameters:r,properties:n,configuration:i,schema:o}){switch(t){case e:await async function(e,t,s,r){switch(e){case a:await function(e,t){var a=new FormData;a.append("attributes",JSON.stringify({name:e.File.filename,parent:{id:"0"}})),a.append("Attachment",e.File.content);let s=t["Columns To Read"].split(",");for(let e of s)a.append("ColumnsToRead",e);var r=new XMLHttpRequest;r.onreadystatechange=function(){if(4===r.readyState){if(201!==r.status)throw new Error("Failed with status "+JSON.stringify(r.response));postResult(r.response)}};let n=t["Web API URL"].toString();r.open("POST",n,!0),r.send(a)}(t,r);break;default:throw new Error("The method "+e+" is not supported.")}}(s,n,0,i);break;default:throw new Error("The object "+t+" is not supported.")}}}();
//# sourceMappingURL=index.js.map
