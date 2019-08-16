import {getObject} from "./controller";

const TABLE = "users";

export function getUserProfile() {
    return getUser( "0");
}

function getUser(id) {
    getObject(TABLE, id);
}