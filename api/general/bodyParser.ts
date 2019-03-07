import * as bodyparser from "body-parser";
// build json parsing middlewear
export const jsonParser = bodyparser.json();
export const urlEncodedParser = bodyparser.urlencoded({extended: true});