// let btn = document.getElementById('save')
// btn.addEventListener("click",()=>{

// })
let userData = []
const saveData = () => {
    let nm = document.frm.name.value
    let ag = document.frm.age.value
    let sl = document.frm.salary.value
    let userid = document.frm.userid.value
    let alldata = JSON.parse(localStorage.getItem("UserData"))
    if (userid != '') {
        //updtaer
        userData = alldata.map((i)=>{
                        if(i.id == userid){
                            i.name = nm
                            i.age = ag
                            i.salary = sl
                        }
                    return i
        })
        // userData = res
    } else {
        //insert
        let len = alldata != null ? alldata.length + 1 : 1
        let obj = {
            "id": len,
            "name": nm,
            "age": ag,
            "salary": sl
        }
        userData.push(obj)
    }

    localStorage.setItem("UserData", JSON.stringify(userData))
    dispData()
    document.frm.reset()
}
const dispData = () => {
    let alldata = JSON.parse(localStorage.getItem("UserData"))
    let tr = ""
    alldata.map((i) => {
        tr += `<tr>
                    <td>${i.id}</td>
                    <td>${i.name}</td>
                    <td>${i.age}</td>
                    <td>${i.salary}</td>
                    <td>
                        <button onClick="editData(${i.id})">Edit</button>
                        <button onClick="delData(${i.id})">Delete</button>
                    </td>
                </tr>
        `
    })
    document.getElementById("allusers").innerHTML = tr
}
const delData = (id) => {
    let alldata = JSON.parse(localStorage.getItem("UserData"))
    let res = alldata.filter((i) => i.id != id)
    localStorage.setItem("UserData", JSON.stringify(res))
    dispData()
}
const editData = (id) => {
    let alldata = JSON.parse(localStorage.getItem("UserData"))
    let res = alldata.find((i) => i.id == id)
    document.frm.name.value = res.name
    document.frm.age.value = res.age
    document.frm.salary.value = res.salary
    document.frm.userid.value = id
}
dispData()