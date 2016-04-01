import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    savePost() {
      var params = {
        question: this.get('question'),
        author: this.get('author')
      };
      this.sendAction('savePost', params);
    }
  }
});
