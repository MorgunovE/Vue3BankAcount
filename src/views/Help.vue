<template>
  <app-page back title="Help">
    <question-item v-for="question in questions" :key="question.title" :question="question"></question-item>
  </app-page>
</template>

<script>
  
  
  import AppPage from '../components/ui/AppPage'
  import QuestionItem from '../components/question/QuestionItem'
  
  export default {
    setup() {
      const questions = [
        {title: 'What it is ?', text: "It's SPA banking account system with backend on FireBase"},
        {
          title: 'How it works ?',
          text: 'You can sing up with email and password, and then you can create prescription about you balance'
        },
        {title: "It's free?", text: "Yes, it's free"}
      ]
      
      return {questions}
    },
    components: {QuestionItem, AppPage}
  }
</script>
