import Ember from 'ember';

export default Ember.Controller.extend({

  isValid: Ember.computed.notEmpty('name'),
  isDisabled: Ember.computed.not('isValid'),

  occupation: '--Pick_one--',
  occupations: Ember.String.w('--Pick_one-- Lawyer Garbage-man Gangster Politician Saint'),
  avatar:'',
  born:'',

  actions: {

    selectOccupation(occupation) {
        this.set('occupation', occupation);
    },

    saveContact() {
      const name = this.get('name');
      const born = this.get('born');
      const occupation = this.get('occupation');
      let avatar;
      if (typeof(this.get('avatar'))==='undefined') {avatar=''} else {avatar = (this.get('avatar'))}


      const newContact = this.store.createRecord('contact', { name:name, born:born, occupation:occupation, avatar:avatar});
      newContact.save();

      this.set('name', '');
      this.set('born', '');
      this.set('occupation', '');
      this.set('avatar', '');
      this.set('responseMessage', "Hooray, your contact has been saved!");
    },



  }
}); 