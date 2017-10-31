import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  born: DS.attr('string'),
  occupation: DS.attr('string'),
  avatar: DS.attr('string')
});
