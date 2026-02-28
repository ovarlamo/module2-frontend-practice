import { Api } from '../api';
export async function deleteComment(id) {
	const resp = await Api.deleteComment(id);
	if (!resp) {
		return {
			error: 'Ошибка при удалении комментария',
			res: null,
		};
	}
	return {
		error: null,
		res: resp,
	};
}
