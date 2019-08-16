import {getAll, getAllFromLocalStorage, getObject} from "./controller";

const TABLE = "users";

export function getUserProfile() {
    return getAllFromLocalStorage(TABLE)
}

function getUser(id) {

}