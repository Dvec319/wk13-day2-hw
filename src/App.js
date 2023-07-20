import './App.css';
import Movies from './compnents/Movies';
import Movie from './compnents/Movie';

function App() {

  const movies = [
		{
			name: 'Holes',
			year: '2003',
			rating: 'PG',
			image:
				'https://www.dvdsreleasedates.com/posters/800/H/Holes-movie-poster.jpg',
		},
		{
			name: 'Airplane!',
			year: '1980',
			rating: 'PG',
			image:
				'https://image.tmdb.org/t/p/original/nIiIf7pEB3RMvnt1nvRG4fG4njr.jpg',
		},
		{
			name: 'Jumanji',
			year: '1995',
			rating: 'PG',
			image:
				'https://th.bing.com/th/id/OIP.kvUa6YZJhfV-5-pa4rALPQHaJx?pid=ImgDet&rs=1',
		},
		{
			name: 'Promare',
			year: '2019',
			rating: 'PG-13',
			image:
				'https://th.bing.com/th/id/OIP.xXbBUHwVgUqspEviDRefsgHaLH?pid=ImgDet&rs=1',
		},
		{
			name: 'Step Brothers',
			year: '2008',
			rating: 'R',
			image: 'https://flxt.tmsimg.com/assets/p175884_p_v10_aa.jpg',
		},
	];


  return (
    <div className="App">
      <Movies movies={movies}/>
    </div>
  );
}

export default App;
