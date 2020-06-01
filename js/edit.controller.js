const editController = (function (modelCtrl, editViewCtrl) {

   

    modelCtrl.countNewItems(requests);

    let request = requests.find (item => item.id == idx) || {};

    //Отрисовываем заявку на странице
    if (idx) {
        editViewCtrl.setEditableRequest(request);
    } 
    
    //Получили идентификационный НОМЕР карточки
    const idx = location.search.split('=')[1];

    //Это все заявки в LS
    const requests = storage.get('data') || [];

    //Получаем новые данные по  карточке из формы и сохраняем в соответствующих LS
    const form = document.querySelector('form');
    const archiveBtn = document.querySelector('#archive');
    const saveBtn = document.querySelector('#save');

    form.addEventListener('submit', function (e) {
        let data = new FormData(form);
        let newRequestData = getQueryString(data)
        let editedRequest = Object.assign(request, newRequestData);

        if (e.target == archiveBtn) {
            request = editedRequest;
            request.status = 'archived';
        } else if (e.target == saveBtn) {
            request = editedRequest;
        } 
        storage.set('data', requests);
        document.location.href = '02-crm-all-bids.html';
    })

    //Функция для получения новых данных по заявке
    function getQueryString(formData) {
        let pairs = {};
        for (let [key, value] of formData) {
            pairs[key] = value
        }
        return pairs
    }

    //Поиск по боковому меню
    document.querySelector('.left-panel__navigation').addEventListener('click', function (e) {
        e.preventDefault();
        let selectText = e.target.getAttribute("data-name");
        storage.set('status', selectText);
        document.location.href = '02-crm-all-bids.html';
    });

})(modelController, editViewController);
