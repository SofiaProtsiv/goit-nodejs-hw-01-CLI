const path = require("path");
const fs = require("fs").promises;
const { v4: uuidv4 } = require("uuid");

const contactsPath = path.normalize(__dirname + "/db/contacts.json");

async function listContacts() {
  fs.readFile(contactsPath, "utf-8")
    .then(JSON.parse)
    .then(console.table)
    .catch((err) => console.log(err));
}

async function getContactById(contactId) {
  fs.readFile(contactsPath, "utf-8")
    .then(JSON.parse)
    .then((data) => data.find((el) => String(el.id) === String(contactId)))
    .then(console.log)
    .catch((err) => console.log(err));
}

async function removeContact(contactId) {
  fs.readFile(contactsPath, "utf-8")
    .then(JSON.parse)
    .then(async (data) => {
      const contacs = data.filter((el) => String(el.id) !== String(contactId));
      await fs.writeFile(contactsPath, JSON.stringify(contacs, null, 2));
    })
    .catch((err) => console.log(err));
}

async function addContact(name, email, phone) {
  const id = uuidv4();
  const newContact = { id, name, email, phone };

  const data = await fs.readFile(contactsPath, "utf-8");
  const content = JSON.parse(data);
  content.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(content, null, 2));
  console.table(content);
}

module.exports = { listContacts, getContactById, removeContact, addContact };
