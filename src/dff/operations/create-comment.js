import { Api } from '../api';
export async function createComment(postId, commentText, login) {
	const resp = await Api.createComment(postId, commentText, login);
	if (!resp) {
		return {
			error: 'Комментарий не создан',
			res: null,
		};
	}
	return {
		error: null,
		res: resp,
	};
}
