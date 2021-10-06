import http from "../http-common";

// const getAll = () => {
//     return http.get("/tweets");
// }

// const get = (id) => {
//     return http.get(`/tweets/${id}`);
// }

const create = (data) => {
    return http.post("/user", data);
}


// eslint-disable-next-line
export default {
    
    create,
    
}