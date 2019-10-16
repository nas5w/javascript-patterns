/* eslint-disable no-console */
const {Course, CourseServicesFacade} = require("./Course");

const myCourse = new Course({
  name: "Design Pattern",
  project: "Facade Design Pattern App"
});

console.log("myCourse-1: ", myCourse);

CourseServicesFacade.CompleteMethod(myCourse)

console.log("myCourse-2: ", myCourse)
