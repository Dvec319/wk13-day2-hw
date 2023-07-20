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
				'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6B64009617488EDBF400133C9D95516D74DFCCB3DA5D6F9B7BB97A040D39F870/scale?width=1200&aspectRatio=1.78&format=jpeg',
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
				'https://m.media-amazon.com/images/M/MV5BZTk2ZmUwYmEtNTcwZS00YmMyLWFkYjMtNTRmZDA3YWExMjc2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg',
		},
		{
			name: 'Promare',
			year: '2019',
			rating: 'PG-13',
			image:
				'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/e3152999f948cc4a8bfd3e12ac3d3ea4f77ca4cac2582bd90f506bee735750e6._RI_TTW_.jpg',
		},
		{
			name: 'Step Brothers',
			year: '2008',
			rating: 'R',
			image: 'https://ntvb.tmsimg.com/assets/p175884_v_h10_aa.jpg?w=1280&h=720',
		},
	];


  return (
    <div className="App">
      <Movies movies={movies}/>
    </div>
  );
}

export default App;
