const generateTestData = (function () {
    const ExampleItem = function (name, phone, email) {
        this.name = name;
        this.phone = phone;
        this.email = email;
    }

    const testData = [
        new ExampleItem("Джек Лондон", '+7(985)816-7171', "london@info.ru"),
        new ExampleItem("Пэрис Хилтон", '+7(985)999-8888', "paris@info.ru"),
    ];

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function insertInUi() {
        let random = getRandomInt(testData.length);
        let randomCourse = getRandomInt(5);
        let randomItem = testData[random];
        const courses = document.querySelectorAll('#exampleFormControlSelect1 option');

        document.querySelector('#name').value = randomItem.name;
        document.querySelector('#phone').value = randomItem.phone;
        document.querySelector('#email').value = randomItem.email;
        courses[randomCourse].selected = true;
    }

    return {
        init: insertInUi
    }

})();

generateTestData.init(); 