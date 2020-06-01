const storage = {

    set: function (key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    },
    get: function (key) {
        return JSON.parse(localStorage.getItem(key));
    },
    remove: function (key) {
        localStorage.removeItem(key);
    },
    clear: function () {
        localStorage.clear();
    }
};
