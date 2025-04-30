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

student.greeting()
