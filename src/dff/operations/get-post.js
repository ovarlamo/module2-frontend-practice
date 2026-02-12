import { Api } from '../api';
export async function getPost(id) {
	const post = await Api.fetchPost(id);
	if (!post) {
		return {
			error: 'Статья не найдена',
			res: null,
		};
	}
	return {
		error: null,
		res: post,
	};
}
