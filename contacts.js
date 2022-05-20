const path = require("path");
const fs = require("fs").promises;
const { v4: uuidv4 } = require("uuid");

const contactsPath = path.normalize(__dirname + "/db/contacts.json");

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath);
    console.table(JSON.parse(data));
    return JSON.parse(data);
  } catch (err) {
    console.error(err);
  }
}

async function getContactById(contactId) {
  try {
    const data = await listContacts();
    return console.log(
      data.filter((contact) => contact.id === String(contactId))
    );
  } catch (err) {
    console.error(err);
  }
}

async function removeContact(contactId) {
  try {
    const sourceContacts = await listContacts();
    const newContacts = sourceContacts.filter(
      (contact) => contact.id !== String(contactId)
    );
    await fs.writeFile(contactsPath, JSON.stringify(newContacts), "utf8");
    return sourceContacts.filter((contact) => contact.id === id);
  } catch (err) {
    console.error(err);
  }
}

async function addContact(name, email, phone) {
  try {
    const id = await uuidv4();

    const newContact = { id, name, email, phone };

    const sourceContacts = await listContacts();
    const newContacts = [...sourceContacts, newContact];

    await fs.writeFile(contactsPath, JSON.stringify(newContacts), "utf8");
    return newContact;
  } catch (err) {
    console.error(err);
  }
}

module.exports = { listContacts, getContactById, removeContact, addContact };
