// import getAllF from "./controller";

const controller = require("./controller");

const getFromJsonFile = (table) => {
    let fs = require("fs");
    let path = "./mockdata/" + table + ".json";
    let contents = fs.readFileSync(path);
    return JSON.parse(contents)
};

controller.getAllF("users", getFromJsonFile);



