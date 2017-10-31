import Ember from 'ember';

export default Ember.Controller.extend({

    occupation: null,
    occupations: Ember.String.w('--Pick_one-- Lawyer Garbage-man Gangster Politician Saint'),

    notEditName: true,
    notEditBorn:true,
    notEditOccupation:true,
    editAvatar:'hidden',
    displayButtons:false,
    editCount:0,

    actions: {

        selectOccupation(occupation) {
            this.set('model.contact.occupation', occupation);
        },

        deleteContact(contact){

            let confirmation = confirm('Are you sure you want to delete this contact?');

            if (confirmation){
                contact.destroyRecord();
                this.transitionToRoute('index');
            }

        },

        saveEdit(contact) {
            contact.save();
            this.set('notEditName', true);
            this.set('notEditOccupation', true);
            this.set('notEditBorn', true);
            this.set('editAvatar', 'hidden');
        },

        discardEdit(contact) {
            this.set('notEditName', true);
            this.set('notEditOccupation', true);
            this.set('notEditBorn', true);
            this.set('editAvatar', "hidden");
            contact.rollbackAttributes();
        },

        edit(property){
            if (this.get("notEdit"+property)){
                this.set("notEdit"+property,false);

            } else {
                this.set("notEdit"+property,true);
            }

        },

        editAvatar(){
            if (this.get('editAvatar')==='hidden'){
                this.set('editAvatar','visible');
            } else {
                this.set('editAvatar','hidden');
            }
        }

    }

});
