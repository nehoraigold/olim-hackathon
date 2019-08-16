import {getObject} from "./controller";

const TABLE = "content";

function getContent(category) {
    return getObject(TABLE, category);
}