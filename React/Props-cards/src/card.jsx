import "./card.css"
export default function Cards({msg,data}){
    return <>
    <div className="card">
        <h2>{msg}</h2>
        <h3>{data}</h3>
    </div>
    </>
}