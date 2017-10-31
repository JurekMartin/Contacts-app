


import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model(params) {
    return RSVP.hash({
      contacts: this.get('store').findAll('contact'),
      contact: this.get('store').findRecord('contact', params.contact_id)
    });
  },

  actions: {

    willTransition(){

      let model = this.controller.get('model.contact');

      if (model.get('hasDirtyAttributes')) {
      model.rollbackAttributes();
      }

      this.controller.set('notEditName', true);
      this.controller.set('notEditBorn',true);
      this.controller.set('notEditOccupation',true);
      this.controller.set('editAvatar','hidden');
  
    }

  }

});