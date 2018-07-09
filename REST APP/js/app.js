let student = new Object();

student.name = 'Stack Route';
student.email = 'stackroute@stackroute.in';

student.hobbies = function(){
    console.log(student.name + "'s hobby1: Playing Cricket");
    console.log(student.name + "'s hobby2: Playing Cheess");
    
}

//console.log(typeof(student));
//console.log(student);

let student1 = { name : 'StackRoute1',
                 email:'stackroute1@stackroute.in',
                 hobbies : function(){
                    console.log(student1.name + "'s hobby1: Playing Cricket");
                    console.log(student1.name + "'s hobby2: Playing Cheess");
                    
                }};

//console.log(typeof(student1));

function studentInfo(student){
    console.log(`Hello : ${student.name}`);
    console.log(`Email : ${student.email}` );
    console.log("Hobbies Info");
    student.hobbies();
    
}

studentInfo(student);
studentInfo(student1);



