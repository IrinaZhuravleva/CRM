 const tableViewController = (function () {
    const requestsTable = document.querySelector('#requests-table tbody');

    function clearTable (){ 
        requestsTable.innerHTML = '';
    }

    function setTable(arr) {  
        arr.forEach(function (item) {
            item.date = item.date.slice(0, 10).split('-').reverse().join('.');

            let cssBadgeText = cssBadgeClasses[item.status][0];
            let cssBadgeClass = cssBadgeClasses[item.status][1];
            let courseText = coursesText[item.course];
           
            requestsTable.insertAdjacentHTML('beforeend', `
                <tr>
                    <th scope="row">${item.id}</th>
                    <td>${item.date}</td>
                    <td>${courseText}</td>
                    <td>${item.name}</td>
                    <td>${item.email}</td>
                    <td>${item.phone}</td>
                    <td>
                        <div class="badge badge-pill ${cssBadgeClass}">
                            ${cssBadgeText}
                        </div>
                    </td>
                    <td>
                        ${createLink(item)}
                    </td>
                </tr>
            `);
        });
    }

    function createLink(item) {
        if (item.status === "archived") {
            return ""
        }

        return `
            <a
                href="03-crm-edit-bid.html?request=${item.id}"
                data-id="${item.id}"
                class="link">Редактировать</a>
        `
    }

    return {
        setTable: setTable,
        clearTable: clearTable
    }

})();
