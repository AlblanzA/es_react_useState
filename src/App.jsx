 
import { AlertClock } from "./AlertClock"
import { MouseClicker } from "./MouseClicker"
import { MyForm } from "./MyForm"
import { Welcome } from "./Welcome"

//compongo piu componenti, creo un componente che utilizza jsx 
//per eseguire il rendering di un altro componente 
//creo quindi un albero di componenti
export function App() {
    return (
        <div>
            <h1>My Awesome Application</h1>
            <hr/>
        <Welcome name="Jimmy" age = {40}/>
        <Welcome name="Kate" age = {20}/>

        <Counter initialVAlue = {42}/>

        <AlertClock ></AlertClock>

        <Clock />

        <MouseClicker />

        <MyForm />

        </div>
    )
}