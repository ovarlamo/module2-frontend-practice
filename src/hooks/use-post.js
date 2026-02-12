import { server } from '../dff/server';
import { useState, useEffect } from 'react';
import { useStateBlog } from '../store';
export function usePost(id) {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const { updatePost, removePost } = useStateBlog();
	const save = () => updatePost(data);
	const remove = () => removePost(id);
	useEffect(() => {
		async function loadData(id) {
			const resp = await server.getPost(id);

			if (resp.error) {
				setError(resp.error);
			} else {
				setData(resp.res);
			}
		}

		loadData(id);
	}, [id]);
	return { data, error, save, remove };
}
