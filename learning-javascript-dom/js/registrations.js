
function getAllData(){
    fetch("http://localhost:3000/all").then(response =>{
        console.log(response);

        if(response.status == 200){
            return Promise.resolve(response.json());
        }else{
            return Promise.reject(new Error("Failed to Fetch Data"));
        }
    }).then(studentListResponse =>{
        console.log(studentListResponse);
        
    

    const tbody = document.getElementsByTagName('tbody')[0];
    let tbodyInnerHTML = ' ';
            studentListResponse.forEach(student => {
                tbodyInnerHTML += `
                <tr>
                <td>${student.name}</td>
                <td>${student.contactno}</td>
                <td>${student.email}</td>
                <td><button class=btn btn-primary onclick = updateStudentInfo(${student})>Update</button></td>
                <td><button class=btn btn-primary onclick = removeStudentInfo(${student.id})>Delete</button></td>
                </tr>
                `
            });
                tbody.innerHTML = tbodyInnerHTML;
                
            });
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
    httpRequest.open('POST','http://localhost:3000/all');
    httpRequest.setRequestHeader('Content-Type','application/json');
    httpRequest.onreadystatechange = function(){
        if(httpRequest.readyState === XMLHttpRequest.DONE){
            getAllStudents();
        }
    };

    httpRequest.send(JSON.stringify(student));


    
}