import Route from '@ember/routing/route';

export default Route.extend({

    model(){
        return this.store.findAll('contact');
    },

    actions:{

        willTransition(){
            this.controller.set('responseMessage','');
            this.controller.set('name', '');
            this.controller.set('born', '');
            this.controller.set('occupation', '');
            this.controller.set('avatar', '');
          }

    }

});