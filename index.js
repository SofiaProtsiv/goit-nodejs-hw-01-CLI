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

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      return await contactsFun.listContacts();

    case "get":
      return await contactsFun.getContactById(id);

    case "add":
      return await contactsFun.addContact(name, email, phone);

    case "remove":
      return await contactsFun.removeContact(id);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
