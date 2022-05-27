
export default function Joke(props){
    console.log(props);
    return(
        <div>
            <h1> setup : {props.setup}</h1>
            <p> Punchline : {props.punchline}</p>
        </div>
            
    )
}