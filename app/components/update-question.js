import Ember from 'ember';

export default Ember.Component.extend({
  update: false,
  actions: {
    showUpdate() {
      this.set('update', true);
    },
    hideUpdate() {
      this.set('update', false);
    },
    updateQuestion(question) {
      var params = {
        question: this.get('updateQuestion'),
        author: this.get('updateAuthor')
      };
      this.set('update', false);
      this.sendAction('updateQuestion', question, params)
    }
  }
});
