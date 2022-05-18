const { Command } = require("commander");

const contactsFun = require("./contacts");

const program = new Command();
program
  .option("-a, --action <type>", "Action type")
  .option("-i, --id <type>", "Contact id")
  .option("-n, --name <type>", "Contact name")
  .option("-e, --email <type>", "Contact email")
  .option("-p, --phone <type>", "Contact phone");

program.parse(process.argv);

const argv = program.opts();

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      contactsFun.listContacts();
      break;

    case "get":
      contactsFun.getContactById(id);
      break;

    case "add":
      contactsFun.addContact(name, email, phone);
      break;

    case "remove":
      contactsFun.removeContact(id);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);