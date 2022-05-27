 import Joke from './Joke';
 import JokesData from './JokeData';

 export default function App() {
     const jokesElement = JokesData.map(joke =>{
         return(<Joke setup ={joke.setup} punchline ={joke.punchline}/>)
     })
    return(
        jokesElement
    );
}