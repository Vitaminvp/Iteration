"use strict";

const ages = persons => {
  for (const person in persons) {
    const age = persons[person].died - persons[person].born;
    console.log(age);
    persons[person] = age;
  }
  return persons;
};

module.exports = { ages };
