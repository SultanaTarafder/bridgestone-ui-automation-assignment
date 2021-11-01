$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/ui/TireSize.feature");
formatter.feature({
  "name": "Capture Tire Count details",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@TireSize"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to \"https://www.bridgestonetire.com/size/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "TiresPageStepDefs.userNavigatesTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Capture Tire count details in CSV for different diameters",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TireSize"
    },
    {
      "name": "@CaptureTireDetails"
    }
  ]
});
formatter.step({
  "name": "User captures available wheel size diameters",
  "keyword": "When "
});
formatter.match({
  "location": "TiresPageStepDefs.userCapturesAvailableWheelSizeDiameters()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User captures Tire Size,Tire Count, URL for every diameter",
  "keyword": "And "
});
formatter.match({
  "location": "TiresPageStepDefs.userCapturesTireSizeTireCountURLForEveryDiameter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User writes captured data into CSV file",
  "keyword": "And "
});
formatter.match({
  "location": "TiresPageStepDefs.userWritesCapturedDataIntoCSVFile()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});