const editViewController = (function () {

    //ДОДЕЛАТЬ
    const DOMStrings = { 
    // //Получили идентификационный НОМЕР карточки
    //     idx: location.search.split('=')[1],

    //     //Это все заявки в LS
    //     requests: storage.get('data') || [],

        //Получаем новые данные по  карточке из формы и сохраняем в соответствующих LS
        form: '#form',
        archiveBtn: '#archive',
        saveBtn: '#save'
    }


    function setEditableRequest(item) {

        document.querySelector('#id').innerText = `Заявка № ${item.id}`;
        document.querySelector('#name').value = item.name;
        document.querySelector('#email').value = item.email;
        document.querySelector('#phone').value = item.phone;
        document.querySelector('#date').innerText = item.date;
        document.querySelector('#inputGroupSelect01').value = item.course;
        document.querySelector('#inputGroupSelect02').value = item.status;
    };

    return {
        setEditableRequest: setEditableRequest,
        DOMStrings
    }
                                    
})();