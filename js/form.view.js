const formViewController = (function () {
    
    const DOMstrings = {
        inputName: "#name",
        inputPhone: "#phone",
        inputEmail: "#email",
        inputSelect: "#exampleFormControlSelect1",
        form: "#bid-form"
    }

    function getInput () {
        const select = document.querySelector(DOMstrings.inputSelect);
        let now = new Date();
        return {
            name: document.querySelector(DOMstrings.inputName).value,
            phone: document.querySelector(DOMstrings.inputPhone).value.split('_').join(''),
            email: document.querySelector(DOMstrings.inputEmail).value,
            course: select[select.selectedIndex].value,
            date: now.toISOString().split('T').join(' ').slice(0, 19),
            status: "new"
        }
    }

    return {
        getInput: getInput,
        getDOMstrings: function () {
            return DOMstrings;
        }
    }

})();