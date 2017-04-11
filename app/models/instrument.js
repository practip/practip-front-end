import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  slug: DS.attr('string'),

  challenges: DS.hasMany('challenge'),
});
