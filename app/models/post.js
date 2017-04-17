import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  challenge: DS.belongsTo('challenge'),
  videoUrl: DS.attr('string'),
  youtubeId: DS.attr('string')
});
