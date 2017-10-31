import Ember from 'ember';

export default Ember.Controller.extend({

  isValid: Ember.computed.notEmpty('name'),
  isDisabled: Ember.computed.not('isValid'),

  occupation: null,
  occupations: Ember.String.w('--Pick_one-- Lawyer Garbage-man Gangster Politician Saint'),

  actions: {

    selectOccupation(occupation) {
        this.set('occupation', occupation);
    },

    saveContact() {
      const name = this.get('name');
      const born = this.get('born');
      const occupation = this.get('occupation');

      const newContact = this.store.createRecord('contact', { name:name, born:born, occupation:occupation});
      newContact.save();

      this.set('responseMessage', `Thank you! We have just saved your contact: ${this.get('name')}`);
      this.set('name', '');
      this.set('born', '');
      this.set('occupation', '');
    }
  }
}); 