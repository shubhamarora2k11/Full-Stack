function getAllStudents(){
    const httpRequest = new XMLHttpRequest();
    httpRequest.open('GET','http://localhost:3000/contacts');
    httpRequest.setRequestHeader('Content-Type','application/json');
    httpRequest.onreadystatechange = function(){
        if(httpRequest.readyState === XMLHttpRequest.DONE){
            const studentsList = JSON.parse(httpRequest.response);
            console.log(studentsList);

            studentsList.sort((student1,student2) => (student1.name == student2.name) ? 0 : ((student1.name > student2.name) ? 1 : -1 ));

            const tbody = document.getElementsByTagName('tbody')[0];

            let studentRowsHTML = '';
            
            studentsList.forEach(student => {
             
            
              studentRowsHTML = studentRowsHTML + `
                                <tr>
                                <td>${student.name}</td>
                                <td>${student.contactno}</td>
                                <td>${student.email}</td>
                                <td><button class=btn btn-primary onclick=updateStudentInfo(${student.id})>update</button></td>
                                <td><button class=btn btn-primary onclick=removeStudentInfo(${student.id})>delete</button></td>
                                <tr>
              `;
               
              
              tbody.innerHTML = studentRowsHTML;
            });
            
            
        }
    };

    httpRequest.send();
}



function addStudentToJSON(event){
    event.preventDefault();
    const name = document.getElementById('name').value;
    const contactno = document.getElementById('contactno').value;
    const email = document.getElementById('email').value;

    console.log(name + " " + contactno + " " + email);

    const student = {
        "name" : name,
        "contactno" : contactno,
        "email" : email
    }

    const httpRequest = new XMLHttpRequest();
    httpRequest.open('POST','http://localhost:3000/contacts');
    httpRequest.setRequestHeader('Content-Type','application/json');
    httpRequest.onreadystatechange = function(){
        if(httpRequest.readyState === XMLHttpRequest.DONE){
            getAllStudents();
        }
    };

    httpRequest.send(JSON.stringify(student));


    
}


function removeStudentInfo(id){
    
    const httpRequest = new XMLHttpRequest();
    httpRequest.open('DELETE',`http://localhost:3000/contacts/${id}`);
    httpRequest.setRequestHeader('Content-Type','application/json');
    httpRequest.onreadystatechange = function(){
        if(httpRequest.readyState === XMLHttpRequest.DONE){
            getAllStudents();
        }
    };

    httpRequest.send();
}


function updateStudentInfo(id){
    console.log(typeof(student));
   // Event.preventDefault();
    
    const httpRequest = new XMLHttpRequest();
    httpRequest.open('PUT',`http://localhost:3000/contacts/${id}`);
    httpRequest.setRequestHeader('Content-Type','application/json');
    const studentInfo = {
                      "name" :'name _updated',
                     "contactno" : '111111',
                     "email" : 'upatedemail@stackroute.in' }
    httpRequest.onreadystatechange = function(){
        if(httpRequest.readyState === XMLHttpRequest.DONE){
           getAllStudents();
        }
    };
    //console.log(student);
    
    httpRequest.send(JSON.stringify(studentInfo));


}




