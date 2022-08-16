// OBJECTS

// delete property: delete obj.key
// check if key exist: 'key' in obj
// iteate: (let key in obj)

const person = {
  name: 'chris',
  age: 99,
  job: 'student',
  isStudent: true,
  saying(text) {
    console.log(text)
    return text
  },
  getName() {
    console.log(this.name)
    return this.name
  },
}

for (const key in person) {
  console.log(`key: ${key} value: ${person[key]}`)
}
person.saying('saying something from the loop')
person.getName()

console.log(`========== BREAK ===========`)

const lesson = {
  language: 'javascript',
  'data-type': 'object',
  hasKeyValuePairs: true,
  languageDataTypes: 7,
  getLanguage() {
    console.log(this.language)
    return this.language
  },
  favoriteDataType() {
    const answer = prompt('What is your favorite data-type?')
    console.log(answer)
    return answer
  },
}

for (const key in lesson) {
  console.log(`Key: ${key} value: ${lesson[key]}`)
}

lesson.getLanguage()
lesson.favoriteDataType()
