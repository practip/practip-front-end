import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),

  instrument: DS.belongsTo('instrument'),
  posts: DS.hasMany('post'),
});
