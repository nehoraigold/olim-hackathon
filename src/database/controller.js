import {USERS} from "./mockdata/users";
import {BENEFITS} from "./mockdata/benefits"
import {CONTENT} from "./mockdata/content"

const TABLE_USERS = "users";
const TABLE_BENEFITS = "benefits";
const TABLE_CONTENT = "content";

const print = browserPrint;

export default function init() {
    //if local storage doesn't contain value "app_initialized", populate with JSON
    let initialized = window.localStorage.getItem("app_initialized");

    if (!initialized) {
        populateLocalStorage()
    }
}

function populateLocalStorage() {
    writeAll(TABLE_USERS, USERS);
    writeAll(TABLE_BENEFITS, BENEFITS);
    writeAll(TABLE_CONTENT, CONTENT);

    print("local storage populated");
}

export function getUserProfile() {
    return getObject(TABLE_USERS, "0");
}

function getContentForCategory(userId, category) {

}

function getObject(table, key, funcGetAll = getAllFromLocalStorage) {
    let collection = funcGetAll(table);
    let object = collection[key];
    return !object ? null : object;
}

function getAllFromLocalStorage(table) {
    let collection = JSON.parse(window.localStorage.getItem(table));
    return !collection ? null : collection;
}

function getAll(table, func = getAllFromLocalStorage) {
    let collection = func(table);
    print(collection.toString());
    return !collection ? null : collection;
}

function writeAll(table, object) {
    console.log("setting for table " + table + ": " + JSON.stringify(object));
    window.localStorage.setItem(table, JSON.stringify(object));
}

function writeObject(table, key, object) {
    let collection = getAll(table);
    collection[key] = object;
    writeAll(table, collection);
}

function nodePrint(message) {
    process.stdout.write(message);
    process.stdout.write("\n");
}

function browserPrint(message) {
    console.log(message);
    console.log("\n");
}

const getAllFromJsonFileNOT_IN_BROWSER = (table, callback) => {
    let fs = require('fs');
    let path = process.cwd() + "/src/database/mockdata/" + table + ".json";
    let contents = fs.readFileSync(path).toString();
    return JSON.parse(contents)
};

function testGetUsers() {
    let users = getAll("users", getAllFromJsonFileNOT_IN_BROWSER);
    print(JSON.stringify(users));
}

function testGetUser() {
    let user = getObject("users", "0", getAllFromJsonFileNOT_IN_BROWSER);
    print(JSON.stringify(user));
}