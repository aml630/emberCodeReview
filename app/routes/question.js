import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      console.log(params);
      console.log(newAnswer);
      console.log(newAnswer.question);

      var question = params.question;
      console.log(question);
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function () {
        return question.save();
      })
    },
    deleteAnswer(answer) {
      answer.destroyRecord();
    }
  }
});
