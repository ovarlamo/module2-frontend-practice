import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { server } from '../dff/server';
import { useStateBlog } from '../store';
import { ErrMsgBox } from '../components/ErrMsgBlock';
import { Comment } from '../components/Comment';
import { Icon } from '../components/UI/Icon';
import styled from 'styled-components';
import { checkAccess } from '../utils/check-access';

function PostContainer({ className }) {
	const navigate = useNavigate();
	const { postId } = useParams();

	const [data, setData] = useState({});
	const [comments, setComments] = useState([]);
	const [newCommentText, setNewCommentText] = useState('');
	const [error, setError] = useState(null);
	const { updatePost, removePost, currentUser } = useStateBlog();
	const [isEditMode, setIsEditMode] = useState(false);
	useEffect(() => {
		async function loadData(postId) {
			const resp = await server.getPost(postId);

			if (resp.error) {
				setError(resp.error);
			} else {
				setData(resp.res);
			}
		}
		async function loadComments(postId) {
			const resp = await server.getComments(postId);

			if (resp.error) {
				setError(resp.error);
			} else {
				setComments(resp.res);
			}
		}

		loadData(postId);
		loadComments(postId);
	}, [postId]);

	const handleDeletePost = () => {
		if (window.confirm('Подтвердите удаление')) {
			removePost(postId);
			navigate('/posts');
		}
	};
	const handleSavePost = () => {
		updatePost(data);
		setIsEditMode(false);
	};
	const handleChangeTitle = ({ target }) =>
		setData((state) => {
			return { ...state, title: target.value };
		});
	const handleChangeText = ({ target }) =>
		setData((state) => {
			return { ...state, text: target.value };
		});

	const handleAddComment = () => {
		server.createComment(postId, newCommentText, currentUser.login).then((ret) => {
			setComments((state) => {
				return [...state, ret.res];
			});
			setNewCommentText('');
		});
	};
	const handleRemoveComment = (id) => {
		server.deleteComment(id).then(() => {
			setComments((state) => {
				return state.filter((comment) => {
					return comment.id !== id;
				});
			});
		});
	};

	return (
		<div className={className}>
			{error && <ErrMsgBox>{error}</ErrMsgBox>}
			{!error && (
				<>
					<Img src={data?.img_src} />

					<Title>
						{isEditMode ? (
							<input
								name="post-title"
								type="text"
								value={data.title}
								className="post-title-edit"
								onChange={handleChangeTitle}
							/>
						) : (
							data?.title
						)}
					</Title>

					{checkAccess('EDIT_POST', currentUser.role_id) && (
						<EditPanel>
							<span className="created_at">{data?.created_at}</span>
							{isEditMode ? (
								<Icon
									className="fa-floppy-o"
									onClick={handleSavePost}
								></Icon>
							) : (
								<Icon
									className="fa-pencil-square-o"
									onClick={() => setIsEditMode(true)}
								></Icon>
							)}

							<Icon
								className="fa-trash-o"
								onClick={handleDeletePost}
							></Icon>
						</EditPanel>
					)}
					<Content>
						{isEditMode ? (
							<textarea
								className="post-text-edit"
								name="post-text"
								value={data?.text} // Передаем значение из стейта
								onChange={handleChangeText}
							>
								data?.text
							</textarea>
						) : (
							data?.text
						)}
					</Content>
					<Comments>
						{checkAccess('ADD_COMMENT', currentUser.role_id) && (
							<CommentRow>
								<NewComment
									name="new-comment"
									placeholder="Комментарий..."
									value={newCommentText}
									onChange={({ target }) =>
										setNewCommentText(target.value)
									}
								></NewComment>
								<Icon
									className="fa-paper-plane-o right"
									onClick={handleAddComment}
								/>
							</CommentRow>
						)}
						{comments.map((comment) => (
							<CommentRow key={comment.id}>
								<Comment {...comment}></Comment>
								{checkAccess('DELETE_COMMENT', currentUser.role_id) && (
									<Icon
										className="fa-trash-o"
										onClick={() => handleRemoveComment(comment.id)}
									/>
								)}
							</CommentRow>
						))}
					</Comments>
				</>
			)}
		</div>
	);
}
const Content = styled.div``;
const Comments = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	width: 500px;
	margin: 20px auto;
`;
const Title = styled.div`
	margin-left: 150px;
	font-size: 1.5rem;
	font-weight: 600;
	.post-title-edit {
		font-size: inherit;
		font-weight: inherit;
		width: 100%;
	}
`;
const Img = styled.img`
	float: left;
	width: 100px;
	height: 100px;
	margin: 20px;
`;
const EditPanel = styled.div`
	margin-left: 150px;
	padding: 20px;
	display: flex;
	justify-content: space-between;
	& .created_at {
		margin-right: auto;
	}
`;
export const Post = styled(PostContainer)`
	padding: 50px;

	.post-text-edit {
		width: 100%;
		height: 10rem;
	}
`;
const CommentRow = styled.div`
	display: flex;
	gap: 10px;
`;
const NewComment = styled.textarea`
	width: 600px;
	height: 3rem;
`;
