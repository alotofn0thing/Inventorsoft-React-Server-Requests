import 'bootstrap/dist/css/bootstrap.min.css';

export const Response = ({ data, error }) => {
	return (
		<div>
			{error ? (
				<>
					<div className='card card-body mb-4'>
						<h4>Status: {error.response.status}</h4>
					</div>
					<div className='card mt-3'>
						<div className='card-header'>
							<h5>Message:</h5>
						</div>
						<div className='card-body'>
							<p>{error.message}</p>
						</div>
					</div>
					<div className='card mt-3'>
						<div className='card-header'>
							<h5>Code:</h5>
						</div>
						<div className='card-body'>
							<p>{error.code}</p>
						</div>
					</div>
				</>
			) : (
				<>
					<div className='card card-body mb-4'>
						<h4>Status: {data.status}</h4>
					</div>
					<div className='card mt-3'>
						<div className='card-header'>
							<h5>Data:</h5>
						</div>
						<div className='card-body'>
							<pre>{JSON.stringify(data.data, null, 2)}</pre>
						</div>
					</div>
					<div className='card mt-3'>
						<div className='card-header'>
							<h5>Headers:</h5>
						</div>
						<div className='card-body'>
							<pre>{JSON.stringify(data.headers, null, 2)}</pre>
						</div>
					</div>
					<div className='card mt-3'>
						<div className='card-header'>
							<h5>Config:</h5>
						</div>
						<div className='card-body'>
							<pre>{JSON.stringify(data.config, null, 2)}</pre>
						</div>
					</div>
				</>
			)}
		</div>
	);
};
