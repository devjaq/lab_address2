"use strict";


class AddressBook {
  constructor (contacts) {
   this.contacts = [
    // new Contact ("Alyssa Juday", "aj@gmail", "456-123-1234", "Family"),
    // new Contact ("John Doe", "jd@gmail", "313-123-1234", "Friend"),
    // new Contact ("Mark Morrow", "mm@gmail", "248-123-1234", "Friend")
   ];
  };

  /* AddressBook methods */

  // creates an object and puts it in contacts array //
  add() { 

    let contactName = document.getElementById("name");
    let contactEmail = document.getElementById("email");
    let contactPhone = document.getElementById("phone");
    let contactRelation = document.getElementById("relation");
    
    let info = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: contactPhone.value,
      relation: contactRelation.value
    }


      // make a new contact box
      const contactsHolder = document.getElementById("contacts-holder"); // target the container
      const newContact = document.createElement("section"); // create a contact box
      newContact.className = "contact";

      console.log(contactName.value); // this one works
      console.log(info);
       
      // create delete button //

      const deleteButton = document.createElement("button") 
      deleteButton.className = "material-icons delete" ;
      deleteButton.id = info.name;
      deleteButton.innerText = "delete";
      deleteButton.onclick = openBook.deleteAt; info;
      deleteButton.type = "button";
      console.log(newContact.id);
      console.log(deleteButton.id);

      newContact.id = "contact" + deleteButton.id;
  
    
      newContact.innerHTML = "Name: " + info.name +
        "<br>Email: " + info.email +
        "<br>Phone: " + info.phone +
        "<br>Relation: " + info.relation; // add info to the contact box
      contactsHolder.appendChild(newContact); // add contact box to container
      newContact.appendChild(deleteButton); // add delete button to contact box

      let newPerson = new Contact (info.name, info.email, info.phone, info.relation);
      this.contacts.push(newPerson);

    // // logs each contact in the list
    // for (let i = 0; i < this.contacts.length - 1; i++) {
    // console.log(this.contacts[i]);
    // }
    counter++;
    this.display();
  }

  deleteAt(info) { // deletes something 
    console.log("clicked delete");
    let position1 = this.id;
    let position = openBook.contacts.indexOf(position1);
    openBook.contacts.splice(position, 1);
    document.getElementById("contact" + position1).style.display = "none";
    openBook.display();
    
  }
  display() {
    // console.log("display works");
    console.log(this.contacts);

  }
} // End of Class AddressBook

// Subclass Contact
class Contact {
  constructor (name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone; 
    this.relation = relation;
  }
}


///////////////////////START OF PROGRAM
const openBook = new AddressBook();
const addButton = document.getElementById("add-button");

let counter = 0;

for (let i = 0; i < 3; i++) {


}

// Delete Declarations

// document.getElementsByClassName("delete").onclick = () => {
//   openBook.deleteAt();
// };

