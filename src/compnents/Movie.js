function Movie (props) {
    return (
			<div className='movie'>
				<h1>{props.movie.name}</h1>
				<h2>{props.movie.year}</h2>
				<h2>{props.movie.rating}</h2>
				<img src={props.movie.image} alt={props.movie.name} />
			</div>
		);
}

export default Movie;