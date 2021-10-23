import http from "../http-common";

const get = (data) => {
    console.log("http data sent to server for login attempt", data)
    return http.get("/user", data);
}

const create = (data) => {
    return http.post("/user", data);
}


// eslint-disable-next-line
export default {
    get,
    create,
    
}