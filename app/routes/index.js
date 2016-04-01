import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question')
  },
  actions: {
    savePost() {
    var params = {
      question: this.get('question'),
      author: this.get('author')
    }
    var newQuestion = this.store.createRecord('question', params);
    newQuestion.save();
  }
}
});
