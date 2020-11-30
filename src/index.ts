import "@k2oss/k2-broker-core";

const SpreadsheetReaderObject:string = "SpreadsheetReader";
const SpreadsheetReaderObjectFileProperty:string = "File";
const SpreadsheetReaderObjectReadMethod:string = "Read";

metadata = {
  systemName: "k2.jssp.spreadsheetreader",
  displayName: "K2 JSSP Spreadsheet Reader",
  description: "A K2 JSSP based broker that can ingest Excel or CSV files and return as a list that can be displayed in K2 SmartForm list view.",
  configuration: {
    "Web API URL": {
     "displayName": "Web API URL",
     "type": "string",
     required: true
    },
    "Columns To Read": {
     "displayName": "Columns To Read",
     "type": "string",
     required: true
    }
  }
};

ondescribe = async function ({ configuration }): Promise<void> {
  let columnsCSV: string = <string> configuration["Columns To Read"];
  let columns: string[] = columnsCSV.split(",");

  var schema = {
    objects: {
      [SpreadsheetReaderObject] : {
        displayName: "Spreadsheet Reader",
        description: "Reads a spreadsheet file in CSV or Excel format and returns the contents as a list that can be displayed in a K2 SmartForm list view.",
        properties: {
          [SpreadsheetReaderObjectFileProperty] : {
            displayName: "File",
            type: "attachment"
          }
        },
        methods: {
          [SpreadsheetReaderObjectReadMethod] : {
            displayName: "Read",
            type: "list",
            inputs:["File"],
            outputs:[]
          }
        }
      }
    }
  }

  for (let column of columns) {
    schema.objects.SpreadsheetReader.properties[column] = {
      displayName: column,
      type: "string"
    };
  }

  schema.objects.SpreadsheetReader.methods.Read.outputs = columns;

  postSchema(schema);
};

onexecute = async function ({
  objectName,
  methodName,
  parameters,
  properties,
  configuration,
  schema,
}): Promise<void> {
  switch (objectName) {
    case SpreadsheetReaderObject:
      await onexecute_SpreadsheetReader(methodName, properties, parameters, configuration);
      break;
    default:
      throw new Error("The object " + objectName + " is not supported.");
  }
};

async function onexecute_SpreadsheetReader(
  methodName: string,
  properties: SingleRecord,
  parameters: SingleRecord,
  configuration: SingleRecord
): Promise<void> {
  switch (methodName) {
    case SpreadsheetReaderObjectReadMethod:
      await onexecute_SpreadsheetReader_Read(properties, configuration);
      break;
    default:
      throw new Error("The method " + methodName + " is not supported.");
  }
}

function onexecute_SpreadsheetReader_Read(properties: SingleRecord, configuration: SingleRecord) {
  var data = new FormData();
  data.append('file', properties[SpreadsheetReaderObjectFileProperty]);
  // let columnsCSV: string = <string> configuration["Columns To Read"];
  // let columns: string[] = columnsCSV.split(",");
  // for (let column of columns) {
  //   data.append('columnstoread', column);
  // }
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;
      if (xhr.status !== 200 && xhr.status !== 201) throw new Error("Failed with status " + JSON.stringify(xhr.response));
      postResult(xhr.response);
  };
  let webAPIUrl:string = configuration["Web API URL"].toString();
  xhr.open("POST", webAPIUrl);
  xhr.send(data);
}