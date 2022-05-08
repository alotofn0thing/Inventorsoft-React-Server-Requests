import { useState } from 'react';
import axios from 'axios';

import { Response } from './components/Response/Response';

import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Main = () => {
	const [data, setData] = useState();
	const [error, setError] = useState();

	const instance = axios.create({
		baseURL: 'https://jsonplaceholder.typicode.com/',
	});

	const getRequest = () => {
		setError(null);
		instance
			.get('posts?_limit=3')
			.then(res => {
				setData(res);
			})
			.catch(err => {
				console.error(err);
			});
	};
	const postRequest = () => {
		setError(null);

		instance
			.post('posts', {
				title: 'New post',
				body: 'Something',
			})
			.then(res => {
				setData(res);
			})
			.catch(err => {
				console.error(err);
			});
	};

	const putRequest = () => {
		setError(null);

		instance
			.put('posts/1', {
				title: 'Updated title',
				body: 'Updated body',
				description: 'Description',
			})
			.then(res => {
				setData(res);
			})
			.catch(err => {
				console.error(err);
			});
	};

	const patchRequest = () => {
		setError(null);

		instance
			.patch('posts/1', {
				title: 'Updated title',
				body: 'Updated body',
				description: 'Description',
			})
			.then(res => {
				setData(res);
			})
			.catch(err => {
				console.error(err);
			});
	};

	const deleteRequest = () => {
		setError(null);

		instance
			.delete('posts/1')
			.then(res => {
				setData(res);
			})
			.catch(err => {
				console.error(err);
			});
	};
	const errorHandler = () => {
		instance
			.get('postss')
			.then(res => {
				setData(res);
			})
			.catch(err => {
				setError(err);
			});
	};

	return (
		<div className='container my-5'>
			<div className='text-center'>
				<h1 className='display-4 text-center mb-3'>Axios Requests</h1>
				<Button variant='warning' onClick={getRequest}>
					Get
				</Button>{' '}
				<Button variant='info' onClick={postRequest}>
					Post
				</Button>{' '}
				<Button variant='primary' onClick={putRequest}>
					Put
				</Button>{' '}
				<Button variant='secondary' onClick={patchRequest}>
					Patch
				</Button>{' '}
				<Button variant='danger' onClick={deleteRequest}>
					Delete
				</Button>{' '}
				<Button variant='dark' onClick={errorHandler}>
					Error Handling
				</Button>
			</div>
			<hr />

			{data && <Response data={data} error={error} />}
		</div>
	);
};
