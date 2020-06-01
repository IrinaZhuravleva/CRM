const tableController = (function (modelCtrl, uiTableCtrl) {
   
    // Получаем данные 
    let userData = modelCtrl.getData();

    let filter = {
        status: '',
        course: ''
    }
    
    //Данные для баджа по количеству новых заявок
    modelCtrl.countNewItems(userData);

    //Всё равно, откуда приходит пользователь, запросы загружаются в соответствии с фильтром - допустим, такое ТЗ
    storage.set('course', 'all'); //если не поставить all, первоначальный фильтр работает некорректно 
    setFilter(userData);

    //Поиск по верхнему меню
    document.querySelector('.btn-group').addEventListener('click', filterNav);
    document.querySelector('.left-panel__navigation').addEventListener('click', filterNav);
    
    //Поиск по курсам
    document.querySelector('#inputGroupSelect01').addEventListener('change', function () {
        let select = document.querySelector('#inputGroupSelect01');
        let selectText = select[select.selectedIndex].value;
        storage.set('course', selectText);
        setFilter(userData);
    });

    function filterNav (e) {
        e.preventDefault();
        let selectText = e.target.getAttribute("data-name");
        storage.set('status', selectText);
        setFilter(userData);
    }
    
    function setFilter(arr) {
        filter.status = storage.get('status');
        filter.course = storage.get('course');
        if (filter.status === 'all' && filter.course === 'all') {
            uiTableCtrl.clearTable();
            uiTableCtrl.setTable(arr);
            return;
        }

        const filterArr = arr.filter(function (item) {
            if (filter.status === 'all' && filter.course != 'all') {
                return item.course === filter.course;
            } else if (filter.status != 'all' && filter.course === 'all') {
                return item.status === filter.status;
            } else {
                return (item.course === filter.course) && (item.status === filter.status);
            }
        })

        uiTableCtrl.clearTable();
        uiTableCtrl.setTable(filterArr);
    }

    const navContainer = document.querySelector('.left-panel__navigation_requests');
    const leftNavLinkArr = document.querySelectorAll('.left-panel__navigation_requests a');

    //Активное поле навигации
    leftNavLinkArr.forEach(function (item) {
        if (item.classList.contains('active')) {
            item.classList.remove('active');
        }
        if (item.getAttribute('data-name') === storage.get('status')) {
            item.classList.add('active');
        }
    })

    navContainer.addEventListener('click', function(e) {
        const target = e.target;
        if (target.hasAttribute('data-name')) {
            leftNavLinkArr.forEach(function (item) {
                if (item.classList.contains('active')) {
                    item.classList.remove('active');
                } 
                if (item.getAttribute('data-name') === storage.get('status')){
                    item.classList.add('active');
                }   
            })
        } 
    })

})(modelController, tableViewController);

