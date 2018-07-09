// Callbacks

// function doHomework(subject, callback) {
//     setTimeout( function(){
//     console.log(`Starting my ${subject} homework.`);
//     callback();
//   }, 2000)}

function finished(){
    console.log('Finished my homework');
}

// doHomework('math', finished);

// Promise

let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("dd"), 1000);
  });
  
  // resolve runs the first function in .then
  promise.then(
    result => console.log(result), // shows "done!" after 1 second
    error => console.log(error) // doesn't run
  );

  
// The resulting promise object has internal properties:

// state — initially “pending”, then changes to either “fulfilled” or “rejected”,
// result — an arbitrary value of your choosing, initially undefined.

// When the executor finishes the job, it should call one of the functions that it gets as arguments:

// resolve(value) — to indicate that the job finished successfully:
// sets state to "fulfilled",
// sets result to value.

// reject(error) — to indicate that an error occurred:
// sets state to "rejected",
// sets result to error.