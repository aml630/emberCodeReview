import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },
  actions: {
    savePost(params) {
    var newQuestion = this.store.createRecord('question', params);
    newQuestion.save();
  },
  deleteQuestion(question) {
    question.destroyRecord();
  },
  updateQuestion(question, params) {
    Object.keys(params).forEach(function(key) {
      if(params[key] !== undefined) {
        question.set(key, params[key]);
      }
    });
    question.save();
  }
}
});
