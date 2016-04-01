import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    savePost() {
      var params = {
        question: this.get('question'),
        author: this.get('author'),
        date: new Date()
      };
      this.sendAction('savePost', params);
    }
  }
});
