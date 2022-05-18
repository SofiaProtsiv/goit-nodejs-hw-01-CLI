# Получаем и выводим весь список контактов в виде таблицы (console.table)

node index.js --action list
![](screenshots/show%20list.png)

# Получаем контакт по id

node index.js --action get --id 5
![](screenshots/get%20by%20id.png)

# Добавялем контакт

node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
![](screenshots/add.png)

# Удаляем контакт

node index.js --action remove --id=3
![](screenshots/remove.png)
