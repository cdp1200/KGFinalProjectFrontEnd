import http from "../http-common";

const getAll = () => {
    return http.get("/tweets");
}

const get = (id) => {
    return http.get(`/tweets/${id}`);
}

const create = (data) => {
    return http.post("/tweets", data);
}

const update = (id, data) => {
    return http.put(`/tweets/${id}`, data);
}

const remove = (id) => {
    return http.delete(`/tweets/${id}`);
}

const removeAll = () => {
    return http.delete("/tweets");
}

const findByTitle = (title) => {
    return http.get(`/tweets?title=${title}`);
}

// eslint-disable-next-line
export default {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
    findByTitle
}