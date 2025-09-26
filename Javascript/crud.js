//Insert 
let data = []
const saveData = ()=>{
    let nm = document.getElementById('username').value
    let age = document.frm.age.value
    let sal = document.frm.salary.value
    let alldata = JSON.parse(localStorage.getItem('userinfo'))
    let len = (alldata==null)?1:alldata.length + 1    
    let obj =  {
        id:len,
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
                <td><button class="btn btn-danger" onclick="delData(${i.id})">Delete</button></td>
                </tr>
        `
        // tr += "<tr><td>"
        // +i.id+"</td></tr>"
    })
    document.getElementById('alldata').innerHTML = tr
}
const delData = (id)=>{
    let alldata = JSON.parse(localStorage.getItem('userinfo'))
    //1 2 3 4 5 6 id=4
    let res = alldata.filter((i)=>{
            return i.id != id
    })
    localStorage.setItem("userinfo",JSON.stringify(res))
    disp()
}
disp()