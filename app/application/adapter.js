import DS from 'ember-data';
import config from 'practip/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: config.DS.host,
});
