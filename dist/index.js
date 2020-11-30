!function(){const e="SpreadsheetReader",t="File",a="Read";metadata={systemName:"k2.jssp.spreadsheetreader",displayName:"K2 JSSP Spreadsheet Reader",description:"A K2 JSSP based broker that can ingest Excel or CSV files and return as a list that can be displayed in K2 SmartForm list view.",configuration:{"Web API URL":{displayName:"Web API URL",type:"string",required:!0},"Columns To Read":{displayName:"Columns To Read",type:"string",required:!0}}},ondescribe=async function({configuration:s}){let r=s["Columns To Read"].split(",");var i={objects:{[e]:{displayName:"Spreadsheet Reader",description:"Reads a spreadsheet file in CSV or Excel format and returns the contents as a list that can be displayed in a K2 SmartForm list view.",properties:{[t]:{displayName:"File",type:"attachment"}},methods:{[a]:{displayName:"Read",type:"list",inputs:["File"],outputs:[]}}}}};for(let e of r)i.objects.SpreadsheetReader.properties[e]={displayName:e,type:"string"};i.objects.SpreadsheetReader.methods.Read.outputs=r,postSchema(i)},onexecute=async function({objectName:t,methodName:s,parameters:r,properties:i,configuration:n,schema:o}){switch(t){case e:await async function(e,t,s,r){switch(e){case a:await function(e,t){var a=new FormData;a.append("attachment",e.File);var s=new XMLHttpRequest;s.onreadystatechange=function(){if(4===s.readyState){if(201!==s.status)throw new Error("Failed with status "+JSON.stringify(s.response));postResult(s.response)}};let r=t["Web API URL"].toString();console.log("Sending request..."),s.open("POST",r),s.send(a)}(t,r);break;default:throw new Error("The method "+e+" is not supported.")}}(s,i,0,n);break;default:throw new Error("The object "+t+" is not supported.")}}}();
//# sourceMappingURL=index.js.map
