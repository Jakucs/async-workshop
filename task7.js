import { sleepTwoSecs } from "./promises.js";

/*
  - Rewrite the function from the previous task to async - await.
  - Use the sleepTwoSecs() function.

  Goal: Practice the promise chaining with async - await syntax.

  Hints:
    - https://javascript.info/async-await
    - https://javascript.info/promise-chaining (first chapter)

*/

const task = async () => {
  await sleepTwoSecs()
  console.log("Step 1")

  await sleepTwoSecs()
  console.log("Step 2")
}

task()