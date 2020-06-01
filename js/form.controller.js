const formController = (function (modelCtrl, uiFormCtrl) {
    
    const DOM = uiFormCtrl.getDOMstrings();
    const form = document.querySelector(DOM.form);

    const setupEventListeners = function () {
       form.addEventListener('submit', ctrlAddItem);
    }

    function ctrlAddItem(event) {
        event.preventDefault();
        let input = uiFormCtrl.getInput();
        
        // modelCtrl.addItem(input.date, input.course, input.name, input.email, input.phone, input.status);
        //Для избежания ошибки при перечислении аргументов:
        modelCtrl.addItem(input);
        form.reset();
    }

    return {
        init: function () {
            setupEventListeners();
        }
    }

})(modelController, formViewController);

formController.init();