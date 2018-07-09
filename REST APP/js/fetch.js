// function getAllStudents(){
//     fetch("http://localhost:3000/contacts").then(response=>{
//         console.log(response);

//         if(response.status == 200){
//             return Promise.resolve(response.json());
//         }else{
//             return Promise.reject(new Error("Unable to fetch Data"));
//         }

//     }).then(studentListResponse=>{
//         console.log(studentListResponse);

//         studentListResponse.sort((student1,student2)=>
//         (student1.name == student2.name) ? 0:(student1.name > student2.name) ? 1 : -1
//     );

//         const tbody = document.getElementsByTagName('tbody')[0]

//         let tbodyInnerHTML = '  ';
//         studentListResponse.forEach(student=>{
//             console.log(student);
//             tbodyInnerHTML +=
//             `<tr>
//             <td>${student.name}</td>
//             <td>${student.contactno}</td>
//             <td>${student.email}</td>
//             <td><button onClick=updateStudentInfo(${student})>update</button></td>
//             <td><button onClick=removeStudentInfo(${student.id})>Delete</button></td>
//             </tr>`

//         });
//         tbody.innerHTML = tbodyInnerHTML;

//     });
// }

// function addStudentToJSON(event){
//     event.preventDefault();
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const contact = document.getElementById('contactno').value;

//     const student = {
//         'name' : name,
//         'email' : email,
//         'contactno' : contact
//     }
//     fetch("http://localhost:3000/contacts",{
//         method : 'POST',
//         body : JSON.stringify(student),
//         headers : {
//             'content-type' : 'application/json'
//         }
//     }).then(response =>{
//         console.log(response.json());        
//     });

// }

// function removeStudentInfo(id){
//     fetch('http://localhost:3000/contacts'+'/'+id,{
//         method : 'DELETE',
//     }).then(response=>{
//         if(response.ok){
//             return Promise.resolve(response.json());
//         }else{
//             return Promise.reject(new Error('Unable to delete!!!'));
//         }
//     }).then(response=>{
//         console.log(response);

//     })
// }

function getAllStudents() {
    fetch("http://localhost:3000/contacts")
        .then(response => {
            console.log(response);

            if (response.status == 200) {
                return Promise.resolve(response.json());
            } else {
                return Promise.reject(new Error("Failed to Fetch Data"));
            }
        })
        .then(studentListResponse => {
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

function addStudentToJSON(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const contactno = document.getElementById('contactno').value;
    const email = document.getElementById('email').value;

    const student = {
        "name": name,
        "contactno": contactno,
        "email": email
    }

    fetch("http://localhost:3000/contacts", {
        method: 'POST',
        body: JSON.stringify(student),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => {
    //    console.log(response.json());
    //    console.log(response.status);

    });

}