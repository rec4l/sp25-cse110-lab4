let student = {
    name: 'Sarah',                         // String property
    major: 'Computer Science',            // String property
    'Grad Year': '2022',                  // Property name with a space (needs quotes)
    greeting: function() { console.log('Hello!'); },  // Method
    'Favorite Teacher': {
      name: 'Thomas Powell',
      course: 'CSE 110'
    },
    courseLoad: ['CSE 110', 'CSE 134', 'VIS 41'] // Array of strings
  };

console.log(student.name);                // Accessing a string property
console.log(student['Grad Year']);        // Accessing a property with a space
console.log(student.greeting());          // Calling a method
console.log(student['Favorite Teacher'].name); // Accessing a nested object property
console.log(student.courseLoad[0]);       // Accessing an array element