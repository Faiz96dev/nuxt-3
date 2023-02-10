import { defineStore } from 'pinia'
import { Configuration, OpenAIApi } from 'openai'
// require('dotenv').config()

export const useDataCombiner = defineStore('dataProcessor', {
  state: (): any => ({
    combinedData: {},
    output: '',
    loading: false,
  }),
  actions: {
    addData(data: any,) {
      this.combinedData = { ...this.combinedData, ...data }
    },
    async combineDataInPrompt() {
      this.loading = true
      let data = this.combinedData
      const reqPrompt = `
      You are my professional personal trainer in gym.
      Your task is create program for train with diet.
      create sport program with diet by parameters :
  goal: ${data.goal}
  body what i want: ${data.targetBody}
  current body type: ${data.bodyType}
  current body fat : ${data.bodyFat}
  problem areas: slim legs, slim arms, slim belly
  my height: 174cm
  current weight: 80kg
  target weight: 70kg
  level of fitness is beginner
  like: pull-ups , push-ups, cardio
  i like: running, swimming,
  also i want improve: my sleep, reduce stress
  now i can 20 pushups, 10 pull-ups, 10 squats, 10 sit-ups
  i want do exercises in gym 3 times a week
  time to spend in gym: 1 hour
  per day i drink 3 liters of water
  i ready spend 2 hours per day for prepering meal 
  my age is ${data.age}.
  Form the program in html tags so that I can use it on the site.
      `
      console.log('reqPrompt', reqPrompt);
      const configuration = new Configuration({
        apiKey: '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',
      });
      const openai = new OpenAIApi(configuration);

      const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: reqPrompt,
        max_tokens: 800,
      });
      console.log(completion.data.choices[0].text)
      this.output = completion.data.choices[0].text
      this.loading = false
    }
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useDataCombiner, import.meta.hot));
}