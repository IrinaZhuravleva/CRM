const modelController = (function () {

    const data = storage.get('data') || [];

    //Находится на Редактировании и Таблице, поэтому оставлена здесь, т к модель является общим скриптом
    const badge = document.querySelector('.badge');

    const Request = function ( id, date, course, name, email, phone, status ) {
    // let Request = function ({ id, date, course, name, email, phone, status }) {
        this.id = id;
        this.date = date;
        this.course = course;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.status = status;
    }

    function addItem({date, course, name, email, phone, status}) {
    // function addItem(input) {
        let ID;
        if (data.length > 0) {
            // ID = data.length + 1;
            ID = data[data.length - 1].id + 1;
        } else {
            ID = 1;
        }

        let newItem = new Request(ID, date, course, name, email, phone, status);
        //вернулась к прежнему варианту, потому что перестал записываться ID
        // let newItem = new Request({ ID, ...input });
        data.push(newItem);
        storage.set('data', data);
    }

    //Считает количество новых заявок
    function countNewItems(arr) {
        let newRequestsQuantity = arr.filter(item => item.status === 'new');
        badge.innerText = newRequestsQuantity.length;
    }
   
    return {
        addItem: addItem,
        countNewItems: countNewItems,
        getData: function () {
            return data;
        }
    }
})();
