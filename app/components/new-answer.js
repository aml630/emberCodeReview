import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer() {
      var params = {
        author: this.get('author'),
        answer: this.get('answer'),
        question: this.get('question')
      };
      this.sendAction('saveAnswer', params)

    }
  }
});
