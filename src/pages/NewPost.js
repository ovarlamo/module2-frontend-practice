import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { server } from '../dff/server';
import { useStateBlog } from '../store';
import { ErrMsgBox } from '../components/ErrMsgBlock';
import { Comment } from '../components/Comment';
import { Icon } from '../components/UI/Icon';
import styled from 'styled-components';
import { checkAccess } from '../utils/check-access';

function NewPostContainer({ className }) {
	const navigate = useNavigate();
	const [post, setPost] = useState({});

	const [error, setError] = useState(null);
	const { createPost, currentUser } = useStateBlog();
	const [isEditMode, setIsEditMode] = useState(true);

	const handleCreatePost = () => {
		createPost(post);
		navigate('/posts');
	};
	const handleChangeTitle = ({ target }) =>
		setPost((state) => {
			return { ...state, title: target.value };
		});
	const handleChangeText = ({ target }) =>
		setPost((state) => {
			return { ...state, text: target.value };
		});

	return (
		<div className={className}>
			{error && <ErrMsgBox>{error}</ErrMsgBox>}

			<Title>
				Новая статья:
				{isEditMode ? (
					<input
						name="post-title"
						type="text"
						value={post.title}
						className="post-title-edit"
						onChange={handleChangeTitle}
						placeholder="Заголовок ..."
					/>
				) : (
					post?.title
				)}
			</Title>

			<Content>
				{isEditMode ? (
					<textarea
						placeholder="Текст ..."
						className="post-text-edit"
						name="post-text"
						onChange={handleChangeText}
						value={post?.text}
					></textarea>
				) : (
					post?.text
				)}
			</Content>
			<EditPanel>
				<button onClick={handleCreatePost}>Создать </button>
			</EditPanel>
		</div>
	);
}
const Content = styled.div``;

const Title = styled.div`
	margin-bottom: 50px;
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
const EditPanel = styled.div``;
export const NewPost = styled(NewPostContainer)`
	padding: 50px;

	.post-text-edit {
		width: 100%;
		height: 10rem;
	}
`;
