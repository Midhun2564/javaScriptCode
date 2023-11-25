
//Questiion2 Answer 
function reverse(inputSentance) {
    return inputSentance.split(' ').map(item => item.split('').reverse().join('')).join(' ');
  }
  let word = "Welcome to this Javascript Guide!";
  console.log(reverse(word))



  
//Question3Answer
const inputData = [
    {
      name: "Menu3",
      id: "1",
      parent: {
        name: "Menu2",
        id: "2",
        parent: {
          name: "Menu1",
          id: "3",
        },
      },
    },
    {
      name: "Menu44",
      id: "11",
      parent: {
        name: "Menu33",
        id: "22",
        parent: {
          name: "Menu22",
          id: "33",
          parent: {
            name: "Menu11",
            id: "44",
          },
        },
      },
    },
  ];
  
  function transform(input) {
    const output = {};
  
    input.forEach(item => {
      let parent = output;
      const keys = item.parent.name.split(/(?=[A-Z])/); 
  
      keys.forEach(key => {
        if (!parent.child) {
          parent.child = {};
        }
        if (!parent.child[key]) {
          parent.child[key] = {};
        }
        parent = parent.child[key];
      });
      parent.name = item.name;
      parent.id = item.id;
    });
    return output;
  }
  const transformedData = transform(inputData);
  console.log(transformedData);
  