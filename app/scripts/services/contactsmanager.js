'use strict';

/**
 * @ngdoc service
 * @name simpleContacsAppUsingIonicApp.ContactsManager
 * @description
 * # ContactsManager
 * Service in the simpleContacsAppUsingIonicApp.
 */
angular.module('simpleContacsAppUsingIonicApp')
  .service('ContactsManager', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var contacts = [
      { name: 'John Lennon', phone: 1234414214, address: '', email:'', avatar: '../images/lennon.jpg'  },
      { name: 'Paul McCartney', phone: 32489532, address: '', email:'', avatar: '../images/mccartney.jpg' },
      { name: 'Ringo Starr', phone: 94234532, address: '', email:'', avatar: '../images/starr.jpg' },
      { name: 'George Harrison', phone: 732423532, address: '', email:'', avatar: '../images/harrison.jpg' }
    ];

    var defaultAvatar = '../images/contact.png';

    var sharedContact = { name: undefined, phone: undefined, address:undefined, email: undefined, avatar: defaultAvatar };

    return {
      addContact: function(contact) {
        contacts.push(contact);
        console.log(contacts);
        return;
      },
      removeContact: function(contact) {
        var index = contacts.indexOf(contact);
        contacts.splice(index, 1);
        return contacts;
      },
      getContactsList: function() {
        return contacts;
      },
      setSharedContact: function(contact) {
        sharedContact = contact;
        return;
      },
      getSharedContact: function() {
        var temp = sharedContact;
        sharedContact = {};
        return temp;
      }
    };
  });
