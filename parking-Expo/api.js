
const urlApi = 'http://192.168.100.6:3000'

export const getUsers = async()=>{
    const res = await fetch(`${urlApi}/users`)
    return await res.json()
}

// const res = await fetch('http://192.168.100.6:3000/users')
    // const data = await res.json()
    // console.log(data)
    // console.log('entro a la api')

export const saveUser = async (newUser)=>{
    const res = await fetch(`${urlApi}/users`,{
        method:"POST",
        headers: { Accept:"application/json","Content-Type":"application/json"},
        body:JSON.stringify(newUser)
    });
    return await res.json()
}

export const updateUserApi = async (userkId, newUser) => {
    console.log(taskId, newTask)
    const res = await fetch(`${API}/${taskId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });
    return res;
  };