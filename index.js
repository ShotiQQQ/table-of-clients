document.addEventListener('DOMContentLoaded', async () => {
    async function getClients() {
        const response = await fetch(`http://localhost:3000/api/clients`);
        const data = await response.json();

        return data;
    }

    let listOfClients = await getClients();

    function makeHeader() {
        const header = document.createElement('div');
        const logoLink = document.createElement('a');
        const logo = document.createElement('img');
        const inputSearch = document.createElement('input');


        header.classList.add('header');

        logoLink.href = 'index.html';

        logo.src = 'img/logo.svg';
        logo.classList.add('logo');

        inputSearch.classList.add('search');
        inputSearch.placeholder = 'Введите запрос';

        document.body.append(header);
        header.append(logoLink, inputSearch);
        logoLink.append(logo);
    }

    function makeTable(listOfClients) {
        const main = document.createElement('div');
        const h1 = document.createElement('h1');
        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const theadRow = document.createElement('tr');
        const tbody = document.createElement('tbody');
        const button = document.createElement('button');
        const span = document.createElement('span');

        button.classList.add('btn-reset', 'add_client');
        button.id = 'add_client';
        span.textContent = 'Добавить клиента';

        span.classList.add('button_text');

        button.append(span);

        const listOfTheadRows = [
            document.createElement('th'),
            document.createElement('th'),
            document.createElement('th'),
            document.createElement('th'),
            document.createElement('th'),
            document.createElement('th'),
        ];

        listOfSpan = [
            document.createElement('span'),
            document.createElement('span'),
            document.createElement('span'),
            document.createElement('span')
        ]

        listOfTheadRows[0].append(listOfSpan[0]);
        listOfTheadRows[1].append(listOfSpan[1]);
        listOfTheadRows[2].append(listOfSpan[2]);
        listOfTheadRows[3].append(listOfSpan[3]);

        listOfSpan[0].classList.add('id');
        listOfSpan[1].classList.add('name');
        listOfSpan[2].classList.add('date_of_create');
        listOfSpan[3].classList.add('date_of_change');

        listOfSpan[0].textContent = 'ID';
        listOfSpan[1].textContent = 'Фамилия Имя Отчество';
        listOfSpan[2].textContent = 'Дата и время создания';
        listOfSpan[3].textContent = 'Последние изменения';
        listOfTheadRows[4].textContent = 'Контакты';
        listOfTheadRows[5].textContent = 'Действия';

        listOfSpan[0].addEventListener('click', () => {
            deleteTable();
            if (sortedIdIsUp === true) {
                sortByIdDown();
                listOfSpan[0].classList.add('arrow_down', 'sort_active');
                sortedIdIsUp = false;
            } else if (sortedIdIsUp === false) {
                sortByIdUp();
                listOfSpan[0].classList.add('sort_active');
                sortedIdIsUp = true;
            }
        })

        listOfSpan[1].addEventListener('click', () => {
            deleteTable();
            if (sortedNameIsUp === true) {
                sortByNameDown();
                listOfSpan[1].classList.add('arrow_down', 'sort_active');
                sortedNameIsUp = false;
            } else if (sortedNameIsUp === false) {
                sortByNameUp();
                listOfSpan[1].classList.add('sort_active');
                sortedNameIsUp = true;
            }
        })

        listOfSpan[2].addEventListener('click', () => {
            deleteTable();
            if (sortedMakeUp === true) {
                sortByMakeDown();
                listOfSpan[2].classList.add('arrow_down', 'sort_active');
                sortedMakeUp = false;
            } else if (sortedMakeUp === false) {
                sortByMakeUp();
                listOfSpan[2].classList.add('sort_active');
                sortedMakeUp = true;
            }
        })

        listOfSpan[3].addEventListener('click', () => {
            deleteTable();
            if (sortedChangeUp === true) {
                sortByChangeDown();
                listOfSpan[3].classList.add('arrow_down', 'sort_active');
                sortedChangeUp = false;
            } else if (sortedChangeUp === false) {
                sortByChangeUp();
                listOfSpan[3].classList.add('sort_active');
                sortedChangeUp = true;
            }
        })

        table.classList.add('table');

        main.classList.add('main');

        h1.textContent = 'Клиенты';

        document.body.append(main);
        main.append(h1, table, button);
        table.append(thead, tbody);
        thead.append(theadRow);
        theadRow.append(listOfTheadRows[0], listOfTheadRows[1], listOfTheadRows[2], listOfTheadRows[3], listOfTheadRows[4], listOfTheadRows[5]);

        listOfClients.forEach((client) => {
            const tr = document.createElement('tr');
            tbody.append(tr);

            const id = client.id;
            const name = client.name;
            const surname = client.surname;
            const lastName = client.lastName;
            const timeOfCreate = new Date(client.createdAt);
            const timeOfChange = new Date(client.updatedAt);
            const groupButton = document.createElement('div');
            const changeButton = document.createElement('button');
            const deleteButton = document.createElement('button');
            const spanChange = document.createElement('span');
            const spanDelete = document.createElement('span');

            changeButton.append(spanChange);
            deleteButton.append(spanDelete);

            spanChange.textContent = 'Изменить';
            spanDelete.textContent = 'Удалить';

            groupButton.classList.add('group_button');
            groupButton.append(changeButton, deleteButton);

            changeButton.classList.add('btn-reset', 'change_button');

            deleteButton.classList.add('btn-reset', 'delete_button');

            let dayOfCreate = timeOfCreate.getDate();

            if (dayOfCreate.toString().length < 2) {
                dayOfCreate = '0' + dayOfCreate;
            }

            let monthOfCreate = timeOfCreate.getMonth();

            if (monthOfCreate.toString().length < 2) {
                monthOfCreate = '0' + monthOfCreate;
            }

            const yearOfCreate = timeOfCreate.getFullYear();

            let hourOfCreate = timeOfCreate.getHours();

            if (hourOfCreate.toString().length < 2) {
                hourOfCreate = '0' + hourOfCreate;
            }

            let minuteOfCreate = timeOfCreate.getMinutes();

            if (minuteOfCreate.toString().length < 2) {
                minuteOfCreate = '0' + minuteOfCreate;
            }

            let dayOfChange = timeOfChange.getDate();

            if (dayOfChange.toString().length < 2) {
                dayOfChange = '0' + dayOfChange;
            }

            let monthOfChange = timeOfChange.getMonth();

            if (monthOfChange.toString().length < 2) {
                monthOfChange = '0' + monthOfChange;
            }

            const yearOfChange = timeOfChange.getFullYear();

            let hourOfChange = timeOfChange.getHours();

            if (hourOfChange.toString().length < 2) {
                hourOfChange = '0' + hourOfChange;
            }

            let minuteOfChange = timeOfChange.getMinutes();

            if (minuteOfChange.toString().length < 2) {
                minuteOfChange = '0' + minuteOfChange;
            }

            const listOfTbodyRows = [
                document.createElement('th'),
                document.createElement('th'),
                document.createElement('th'),
                document.createElement('th'),
                document.createElement('th'),
                document.createElement('th'),
            ];

            listOfTbodyRows[0].textContent = id;
            listOfTbodyRows[1].textContent = surname + '\t' + name + '\t' + lastName;
            listOfTbodyRows[2].textContent = `${dayOfCreate}.${monthOfCreate}.${yearOfCreate}`;
            listOfTbodyRows[3].textContent = `${dayOfChange}.${monthOfChange}.${yearOfChange}`;
            client.contacts.forEach((contact) => {
                let contactsSpan = document.createElement('span');
                contactsSpan.classList.add('span_contacts');
                if (contact.type.toLowerCase() === 'телефон') {
                    contactsSpan.classList.add('telephone');
                } else if (contact.type.toLowerCase() === 'vk') {
                    contactsSpan.classList.add('vk');
                }  else if (contact.type.toLowerCase() === 'facebook') {
                    contactsSpan.classList.add('facebook');
                } else if (contact.type.toLowerCase() === 'email') {
                    contactsSpan.classList.add('email');
                } else {
                    contactsSpan.classList.add('another');
                }
                listOfTbodyRows[4].append(contactsSpan);
            })
            listOfTbodyRows[5].append(groupButton);

            listOfTbodyRows[0].classList.add('client_id');
            listOfTbodyRows[1].classList.add('client_full_name');
            listOfTbodyRows[2].classList.add('client_time_create')
            listOfTbodyRows[3].classList.add('client_time_change');
            listOfTbodyRows[4].classList.add('client_contacts');
            listOfTbodyRows[5].classList.add('client_do');

            tbody.append(tr);
            tr.append(listOfTbodyRows[0], listOfTbodyRows[1], listOfTbodyRows[2], listOfTbodyRows[3], listOfTbodyRows[4], listOfTbodyRows[5]);

            const timingOfCreate = document.createElement('span');
            timingOfCreate.classList.add('timing_create');
            timingOfCreate.textContent = '\t' + `${hourOfCreate}:${minuteOfCreate}`;
            listOfTbodyRows[2].append(timingOfCreate);

            const timingOfChange = document.createElement('span');
            timingOfChange.classList.add('timing_create');
            timingOfChange.textContent = '\t' + `${hourOfChange}:${minuteOfChange}`;
            listOfTbodyRows[3].append(timingOfChange);
        })

        document.querySelector('#add_client').addEventListener('click', () => {
            document.querySelector('#modal_add').classList.toggle('modal_background_active');
        })

        document.querySelectorAll('.change_button').forEach((button) => {
            button.addEventListener('click', (e) => {
                let clientForRemake = e.composedPath()[4].childNodes[0].textContent;
                makeModalRemakeClient(clientForRemake);
                document.querySelector('.button_remake_client').addEventListener('click', () => {
                    remakeClient(clientForRemake);
                    clientForRemake = '';
                });
            })
        })

        document.querySelectorAll('.delete_button').forEach((button) => {
            button.addEventListener('click', (e) => {
                document.querySelector('#modal_delete').classList.toggle('modal_background_active');
                let clientForDelete = e.composedPath()[4].childNodes[0].textContent;
                document.querySelector('.button_delete_client').addEventListener('click', () => {
                    document.querySelector('#modal_delete').classList.remove('modal_background_active');
                    deleteClient(clientForDelete);
                    clientForDelete = '';
                });
            })
        })

        return main;

    }

    async function deleteClient(clientForDelete) {
        await fetch(`http://localhost:3000/api/clients/${clientForDelete}`, {
            method: 'DELETE'
        });
        clearInputs();
        listOfClients = await getClients();
        deleteTable();
        makeTable(listOfClients);
    }

    async function remakeClient(clientForRemake) {
        const remakedClient = document.querySelectorAll('.input_remake_client');
        const clientContacts = document.querySelectorAll('.input_contacts');
        const listOfContacts = [];
        for (i = 0; i < clientContacts.length; i++) {
            let forList = {
                type: `${clientContacts[i].previousSibling.value}`,
                value: `${clientContacts[i].value}`
            }
            listOfContacts.push(forList);
        }
        await fetch(`http://localhost:3000/api/clients/${clientForRemake}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: `${remakedClient[1].value}`,
                surname: `${remakedClient[0].value}`,
                lastName: `${remakedClient[2].value}`,
                contacts: listOfContacts,
            })
        });
        clearInputs();
        deleteModalRemake();
        listOfClients = await getClients();
        deleteTable();
        table = makeTable(listOfClients);
    }

    function makeModalAddClient() {
        const modalBackground = document.createElement('div');
        const modal = document.createElement('div');
        const h2 = document.createElement('h2');
        const listOfInput = [
            document.createElement('input'),
            document.createElement('input'),
            document.createElement('input')
        ];
        const contacts = document.createElement('div');
        const buttonContact = document.createElement('button');
        const buttonAdd = document.createElement('button');
        const buttonCancel = document.createElement('button');
        const span = document.createElement('span');
        const close = document.createElement('button');

        modalBackground.classList.add('modal_background');
        modalBackground.id = 'modal_add';

        modal.classList.add('modal_add_client');

        h2.textContent = 'Новый клиент';

        listOfInput[0].placeholder = 'Фамилия*';
        listOfInput[1].placeholder = 'Имя*';
        listOfInput[2].placeholder = 'Отчество';

        listOfInput[0].classList.add('input_add_client');
        listOfInput[1].classList.add('input_add_client');
        listOfInput[2].classList.add('input_add_client');

        contacts.append(buttonContact);
        contacts.classList.add('contacts');
        buttonContact.classList.add('button_contact', 'btn-reset');
        buttonContact.id = 'add_contact_add';
        span.textContent = 'Добавить контакт';

        buttonContact.append(span);

        buttonAdd.classList.add('button_add_client', 'btn-reset');
        buttonAdd.textContent = 'Сохранить';

        buttonCancel.classList.add('button_cancel', 'btn-reset');
        buttonCancel.textContent = 'Отмена';

        close.classList.add('btn-reset', 'close');
        close.id = 'close_modal_add';

        document.body.append(modalBackground);
        modalBackground.append(modal);
        modal.append(h2, listOfInput[0], listOfInput[1], listOfInput[2], contacts, buttonAdd, buttonCancel, close);

        let countForContacts = 0;

        buttonContact.addEventListener('click', function () {
            if (countForContacts <= 9) {
                const contact = document.createElement('div');
                const select = document.createElement('select');
                const options = [
                    document.createElement('option'),
                    document.createElement('option'),
                    document.createElement('option'),
                    document.createElement('option'),
                    document.createElement('option')
                ];
                const inputContacts = document.createElement('input');
                const deleteContacts = document.createElement('button');

                contact.classList.add('contact');
                select.classList.add('select');
                inputContacts.classList.add('input_contacts');
                deleteContacts.classList.add('btn-reset', 'delete_contacts');

                options[0].textContent = 'Телефон';
                options[0].value = 'Телефон';
                options[1].textContent = 'VK';
                options[1].value = 'VK';
                options[2].textContent = 'Facebook';
                options[2].value = 'Facebook';
                options[3].textContent = 'Email';
                options[3].value = 'Email';
                options[4].textContent = 'Другое';
                options[4].value = 'another';

                deleteContacts.addEventListener('click', (e) => {
                    e.composedPath()[1].remove();
                    countForContacts-=1;
                })

                buttonAdd.addEventListener('click', () => {
                    contact.remove();
                })

                select.append(options[0], options[1], options[2], options[3], options[4]);
                contact.append(select, inputContacts, deleteContacts);

                contacts.prepend(contact);
                countForContacts+=1;
            }
        })

        buttonCancel.addEventListener('click', () => {
            document.querySelector('#modal_add').classList.remove('modal_background_active');
            document.querySelectorAll('.contact').forEach((contact) => {
                contact.remove();
                countForContacts = 0;
            })
        })

        document.querySelector('#close_modal_add').addEventListener('click', () => {
            document.querySelector('#modal_add').classList.remove('modal_background_active');
            document.querySelectorAll('.contact').forEach((contact) => {
                contact.remove();
                countForContacts = 0;
            })
        })
        document.querySelector('#modal_add').addEventListener('click', (e) => {
            if (e.target.classList.value === 'modal_background modal_background_active') {
                document.querySelector('#modal_add').classList.remove('modal_background_active');
                document.querySelectorAll('.contact').forEach((contact) => {
                    contact.remove();
                    countForContacts = 0;
                })
            }
        })
    }

    async function addClient() {
        document.querySelector('.button_add_client').addEventListener('click', async () => {
            const newClient = document.querySelectorAll('.input_add_client');
            const clientContacts = document.querySelectorAll('.input_contacts');
            const listOfContacts = [];
            for (i = 0; i < clientContacts.length; i++) {
                let forList = {
                    type: `${clientContacts[i].previousSibling.value}`,
                    value: `${clientContacts[i].value}`
                }
                listOfContacts.push(forList);
            }
            fetch(`http://localhost:3000/api/clients`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: `${newClient[1].value}`,
                    surname: `${newClient[0].value}`,
                    lastName: `${newClient[2].value}`,
                    contacts: listOfContacts,
                })
            });
            clearInputs();
            document.querySelector('#modal_add').classList.toggle('modal_background_active');
            listOfClients = await getClients();
            deleteTable();
            table = makeTable(listOfClients);
        })
    }

    function makeModalRemakeClient(clientForRemake) {
        const modalBackground = document.createElement('div');
        const modal = document.createElement('div');
        const h2 = document.createElement('h2');
        const spanId = document.createElement('span');
        const listOfInput = [
            document.createElement('input'),
            document.createElement('input'),
            document.createElement('input')
        ];
        const contacts = document.createElement('div');
        const buttonContact = document.createElement('button');
        const buttonSave = document.createElement('button');
        const buttonDelete = document.createElement('button');
        const span = document.createElement('span');
        const close = document.createElement('button');

        modalBackground.classList.add('modal_background_remake');
        modalBackground.id = 'modal_remake';

        modal.classList.add('modal_remake_client');

        h2.textContent = 'Изменить данные';

        spanId.textContent = `ID: ${clientForRemake}`;
        spanId.id = 'idClientForRemake';

        listOfInput[0].placeholder = 'Фамилия*';
        listOfInput[1].placeholder = 'Имя*';
        listOfInput[2].placeholder = 'Отчество';

        listOfInput[0].classList.add('input_remake_client');
        listOfInput[1].classList.add('input_remake_client');
        listOfInput[2].classList.add('input_remake_client');

        contacts.append(buttonContact);
        contacts.classList.add('contacts');
        buttonContact.classList.add('button_contact', 'btn-reset');
        buttonContact.id = 'add_contact_remake';
        span.textContent = 'Добавить контакт';

        let countForContacts = 0;

        buttonContact.addEventListener('click', function () {
            if (countForContacts <= 9) {
                const contact = document.createElement('div');
                const select = document.createElement('select');
                const options = [
                    document.createElement('option'),
                    document.createElement('option'),
                    document.createElement('option'),
                    document.createElement('option'),
                    document.createElement('option')
                ];
                const inputContacts = document.createElement('input');
                const deleteContacts = document.createElement('button');

                contact.classList.add('contact');
                select.classList.add('select');
                inputContacts.classList.add('input_contacts');
                deleteContacts.classList.add('btn-reset', 'delete_contacts');

                options[0].textContent = 'Телефон';
                options[0].value = 'Телефон';
                options[1].textContent = 'VK';
                options[1].value = 'VK';
                options[2].textContent = 'Facebook';
                options[2].value = 'Facebook';
                options[3].textContent = 'Email';
                options[3].value = 'Email';
                options[4].textContent = 'Другое';
                options[4].value = 'another';

                deleteContacts.addEventListener('click', (e) => {
                    e.composedPath()[1].remove();
                    countForContacts-=1;
                })

                buttonSave.addEventListener('click', () => {
                    contact.remove();
                })

                select.append(options[0], options[1], options[2], options[3], options[4]);
                contact.append(select, inputContacts, deleteContacts);

                contacts.prepend(contact);
                countForContacts+=1;
            }
        })

        buttonContact.append(span);

        buttonSave.classList.add('button_remake_client', 'btn-reset');
        buttonSave.textContent = 'Сохранить';

        buttonDelete.classList.add('button_delete', 'btn-reset');
        buttonDelete.textContent = 'Удалить клиента';

        close.classList.add('btn-reset', 'close');
        close.id = 'close_modal_remake';

        document.body.append(modalBackground);
        modalBackground.append(modal);
        modal.append(h2, spanId, listOfInput[0], listOfInput[1], listOfInput[2], contacts, buttonSave, buttonDelete, close);

        buttonDelete.addEventListener('click', () => {
            deleteModalRemake();
            document.querySelector('#modal_delete').classList.add('modal_background_active');
            document.querySelector('.button_delete_client').addEventListener('click', () => {
                deleteClient(clientForRemake);
                document.querySelector('#modal_delete').classList.remove('modal_background_active');
            });
        })

        document.querySelector('#close_modal_remake').addEventListener('click', () => {
            deleteModalRemake();
        })
        document.querySelector('#modal_remake').addEventListener('click', (e) => {
            if (e.target.classList.value === 'modal_background_remake') {
                deleteModalRemake();
            }
        })
    }

    function deleteModalRemake() {
        document.querySelector('.modal_background_remake').remove();
    }

    function makeModalDeleteClient() {
        const modalBackground = document.createElement('div');
        const modal = document.createElement('div');
        const h2 = document.createElement('h2');
        const span = document.createElement('span');
        const buttonDelete = document.createElement('button');
        const buttonCancel = document.createElement('button');
        const close = document.createElement('button');

        modalBackground.classList.add('modal_background');
        modalBackground.id = 'modal_delete';

        modal.classList.add('modal_delete_client');

        h2.textContent = 'Удалить клиента';
        h2.classList.add('title_delete_client');

        span.textContent = 'Вы действительно хотите удалить данного клиента?';
        span.classList.add('text_delete_client');

        buttonDelete.textContent = 'Удалить';
        buttonDelete.classList.add('btn-reset', 'button_delete_client');

        buttonCancel.textContent = 'Отмена';
        buttonCancel.classList.add('btn-reset', 'button_cancel_delete');

        close.classList.add('btn-reset', 'close');
        close.id = 'close_modal_delete';

        document.body.append(modalBackground);
        modalBackground.append(modal);
        modal.append(h2, span, buttonDelete, buttonCancel, close);

        document.querySelector('.button_cancel_delete').addEventListener('click', () => {
            document.querySelector('#modal_delete').classList.remove('modal_background_active');
        })

        document.querySelector('#close_modal_delete').addEventListener('click', () => {
            document.querySelector('#modal_delete').classList.remove('modal_background_active');
        })

        document.querySelector('#modal_delete').addEventListener('click', (e) => {
            if (e.target.classList.value === 'modal_background modal_background_active') {
                document.querySelector('#modal_delete').classList.remove('modal_background_active');
            }
        })
    }

    function clearInputs() {
        const inputs = document.querySelectorAll('.input_add_client');
        for (input of inputs) {
            input.value = '';
        }
    }

    function deleteTable() {
        document.querySelector('.main').remove();
    }

    let sortedIdIsUp = true;
    let sortedNameIsUp = true;
    let sortedMakeUp = true;
    let sortedChangeUp = true;

    function sortByIdUp() {
        listOfClients.sort((a, b) => a.id - b.id);
        makeTable(listOfClients);
    }

    function sortByIdDown() {
        listOfClients.sort((a, b) => b.id - a.id);
        makeTable(listOfClients);
    }

    function sortByNameUp() {
        listOfClients.sort((a, b) => {
            let nameOne = a.surname.toLowerCase() + a.name.toLowerCase() + a.lastName.toLowerCase();
            let nameTwo = b.surname.toLowerCase() + b.name.toLowerCase() + b.lastName.toLowerCase()
            if (nameOne < nameTwo) {
                return -1
            } else if (nameOne > nameTwo) {
                return 1
            } else {
                return 0
            }
        })
        makeTable(listOfClients);
    }

    function sortByNameDown() {
        listOfClients.sort((a, b) => {
            let nameOne = a.surname.toLowerCase() + a.name.toLowerCase() + a.lastName.toLowerCase();
            let nameTwo = b.surname.toLowerCase() + b.name.toLowerCase() + b.lastName.toLowerCase()
            if (nameOne < nameTwo) {
                return 1
            } else if (nameOne > nameTwo) {
                return -1
            } else {
                return 0
            }
        })
        makeTable(listOfClients);
    }

    function sortByMakeUp() {
        listOfClients.sort(function(a, b) {
            let dateOne = new Date(a.createdAt);
            let dateTwo = new Date(b.createdAt);
            return dateOne - dateTwo //сортировка по возрастающей дате
            })
            makeTable(listOfClients);
    }

    function sortByMakeDown() {
        listOfClients.sort(function(a, b) {
            let dateOne = new Date(a.createdAt);
            let dateTwo = new Date(b.createdAt);
            return dateTwo - dateOne //сортировка по возрастающей дате
            })
            makeTable(listOfClients);
    }

    function sortByChangeUp() {
        listOfClients.sort(function(a, b) {
            let dateOne = new Date(a.updatedAt);
            let dateTwo = new Date(b.updatedAt);
            return dateOne - dateTwo //сортировка по возрастающей дате
            })
            makeTable(listOfClients);
    }

    function sortByChangeDown() {
        listOfClients.sort(function(a, b) {
            let dateOne = new Date(a.updatedAt);
            let dateTwo = new Date(b.updatedAt);
            return dateTwo - dateOne //сортировка по возрастающей дате
            })
            makeTable(listOfClients);
    }

    makeHeader();
    let table = makeTable(listOfClients);
    makeModalAddClient();
    addClient();
    makeModalDeleteClient();

    let timeOut;

    function stopTimeOut() {
        clearTimeout(timeOut);
    }

    function findAnything() {
        timeOut = setTimeout(async () => {
            let input = document.querySelector('.search').value;
            const response = await fetch(`http://localhost:3000/api/clients?search=${input}`);
            const data = await response.json();
            deleteTable();
            table = makeTable(data);
        }, 300)
    }

    document.querySelector('.search').addEventListener('input', stopTimeOut);
    document.querySelector('.search').addEventListener('input', findAnything);
});