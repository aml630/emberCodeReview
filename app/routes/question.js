import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('question', params.question_id);
  },

  actions: {
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
        // console.log(this.store.findRecord('question', params.question_id));

      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function () {
        return question.save();
      })
    },
    deleteAnswer(answer) {
      answer.destroyRecord();
    },
    updateQuestion(question, params) {
      console.log(question);
      console.log(params);
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          question.set(key, params[key]);
        }
      });
      question.save();
    }
  }
});
