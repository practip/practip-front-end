import {
  validatePresence,
  validateLength,
  validateConfirmation,
  validateFormat
} from 'ember-changeset-validations/validators';

export default {
  title: validatePresence(true),
  description: validatePresence(true)
}
