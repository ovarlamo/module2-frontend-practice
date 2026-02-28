import { Api } from '../api';
export async function getComments(postId) {
	const comments = await Api.fetchComments(postId);
	if (!comments) {
		return {
			error: 'Комментарии не найдены',
			res: null,
		};
	}
	return {
		error: null,
		res: comments,
	};
}
