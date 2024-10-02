//Array with message parts
const subjects = ['You' , 'your friend' , 'A stranger'];
const verbs = ['will encounter' , 'will find' , 'will achieve'];
const objects = ['great success' , 'an unexpected gift' , 'a small change'];

//Function to generate random index

const getRandomIndex = array => {
    return Math.floor(Math.random() * array.length);
}

//Function to generate random message

const generateMessage = () => {
    const subject = subjects[getRandomIndex(subjects)];
    const verb = verbs[getRandomIndex(verbs)];
    const object = objects[getRandomIndex(objects)];

    return `${subject} ${verb} ${object}.` ;


};


//Output the random message
console.log(generateMessage());
