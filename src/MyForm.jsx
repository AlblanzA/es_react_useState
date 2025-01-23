import { useState, UseState } from "react"
//funzione che crea lo stato iniziale
function createData(){
    return {
        username:'',
        password:'',
        session: false
    }
}

export function MyForm () {
   const [username, setUsername] = useState(createData())
   
 
   function handleInputChange(event) {
       const name = event.target.name
       const value = event.target.value
       const checked = event.target.checked 
       const type = event.target.type 

       setData(data=> {
        return= {...d
        [name] : value
        }
       })
  }
 
   function handleResetForm(){
    setUsername({
        username:'',
        password:'',
    })
   }

    return(
        <div>
            <input name="username" value={data.username} onChange={handleInputChange} />
            <input name="password" type = "password" value={data.password} onChange={handleInputChange} />
            <input name ="session" type="checkbox" checked = {data.session} onChange={handleInputChange} />
            <button disabled={!data.username || !data.password} > Login</button>
            <button onClick = {handleResetForm}>Reset</button>

            <pre>{JSON.stringify(data,null,2)}</pre>
        </div>
    )
} 