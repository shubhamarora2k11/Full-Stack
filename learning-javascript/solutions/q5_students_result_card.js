// Write a program to display one result card of 100 students
// with their name and percentage
// Out of 100 students, 50 has subjects - Grammer and Accounts
// and other 50 has subjects -  Grammer and Physics

// Hint : You need to calculate percentage of 100 students having different set of subjects.
//        You can assume their scores on their respective subjects.


// Write your code here

let students = [];
let student = {};
const createGroups = () => {
    let marksg = 49;
    let marksp = 99;
    let marksa = 40;
    let i = 1;
    for (i = 1; i <= 50; i = i + 1) {
        marksg += 0.7;
        marksp -= 1;
        student = {
            name: 'Student' + i,
            group: 'Grammer & Physics',
            marks1: marksg,
            marks2: marksp,
            per: function () { return parseFloat((this.marks1 + this.marks2) / 2).toFixed(2); }
        };
        students.push(student);
    
    }

    marksg = 47;
    for (i = 51; i <= 100; i = i + 1) {
        student = {
            name: 'Student' + i,
            group: 'Grammer & Accounts',
            marks1: marksg,
            marks2: marksa,
            per: function () { return parseFloat((this.marks1 + this.marks2) / 2).toFixed(2);
             }
        };
        students.push(student);
        marksg += 0.8;
        marksa += 1.22;
    }

}
createGroups();

const AllStudentReport = () => {
    let i = 0;
	let str = ''; 
    for (i = 0; i <= 99; i=i+1) {
        if (students[i].group === 'Grammer & Physics') {
            str += ('Student Name: ' + students[i].name + '; Group: ' + students[i].group +
                ';  Score: G:' + students[i].marks1 + '; P:' + students[i].marks2 + '; Perc: ' +
                 students[i].per()+'\n');
        }
        else {
            str += ('Student Name: ' + students[i].name + '; Group: ' + students[i].group +
                ';  Score: G:' + students[i].marks1 + '; A:' + students[i].marks2 + '; Perc: ' +
                 students[i].per()+'\n');

        }
    }
	return str;
};


const SingleStudentReport = (i) => {
	let str = '';
    if (students[i].group === 'Grammer & Physics') {
        str += ('Student Name: ' + students[i].name + '; Group: ' + students[i].group +
            ';  Score: G:' + students[i].marks1 + '; P:' + students[i].marks2 + '; Percentage: ' 
            + students[i].per());
    }
    else {
        str += ('Student Name: ' + students[i].name + '; Group: ' + students[i].group +
            ';  Score: G:' + students[i].marks1 + '; A:' + students[i].marks2 + '; Percentage: ' +
             students[i].per());

    }
    // console.log(str);
    return str;
    
};


// SingleStudentReport(52);
// AllStudentReport();
module.exports = SingleStudentReport;
module.exports = AllStudentReport;