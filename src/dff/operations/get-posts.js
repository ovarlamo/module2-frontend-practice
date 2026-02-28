import { Api } from '../api';
export async function getPosts() {
	const res = await Api.fetchPosts();

	if (!res) {
		return {
			error: 'Статьи не найдена',
			res: null,
		};
	}
	return {
		error: null,
		res: res,
	};
}
