import './App.css';
import Books from './Book';
	const  App = () => {
	

	  const books = [
	    {
	      id:1,
	      author:"Robert Kiyosaki",
	      title:"Rich dad Poor dad"
	    },
	    {
	      id:2,
	      author:"Chethan bhagath",
	      title:"Revolution 20 Twenty"
	    },
	    {
	      id:3,
	      author:"Napoleon Hill",
	      title:"Think and Grow Rich"
	    },
	    {
	      id:4,
	      author:"Ankur Warikoo",
	      title:"Do Epic Shit"
	    }
	  ]
	

	

	  return (
	    <div className="App">
	      <div>
	        <Books books={books}/>
	      </div>
	    </div>
	  );
	}
	

	export default App;
