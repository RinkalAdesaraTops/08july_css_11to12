//Insert 
let data = []
const saveData = ()=>{
    let nm = document.getElementById('username').value
    let age = document.frm.age.value
    let sal = document.frm.salary.value
    let obj =  {
        id:1,
        name:nm,
        age:age,
        salary:sal
        
    }
    data.push(obj)
    console.log(data);
    localStorage.setItem("userinfo",JSON.stringify(data))
    document.frm.reset()
    disp()
}
const disp=()=>{
    let dt = localStorage.getItem("userinfo")
    let res = JSON.parse(dt)
    let tr=''
    res.map((i)=>{
        tr += `<tr>
                <td>${i.id}</td>
                <td>${i.name}</td>
                <td>${i.age}</td>
                <td>${i.salary}</td>
                <td><button class="btn btn-danger">Delete</button></td>
                </tr>
        `
        // tr += "<tr><td>"
        // +i.id+"</td></tr>"
    })
    document.getElementById('alldata').innerHTML = tr
}
disp()