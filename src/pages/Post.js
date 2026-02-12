import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { usePost } from '../hooks';
import { ErrMsgBox } from '../components/ErrMsgBlock';
import { Icon } from '../components/UI/Icon';
import styled from 'styled-components';

const Content = styled.div``;
const Comments = styled.div``;
const Img = styled.img`
	float: left;
	width: 150px;
	height: 150px;
	margin: 50px;
`;
const EditPanel = styled.div`
	padding: 10px;
	display: flex;
	justify-content: space-between;
	& .created_at {
		margin-right: auto;
	}
`;
function PostContainer({ className }) {
	const { postId } = useParams();
	const { data, error, remove, save } = usePost(postId);
	const navigate = useNavigate();
	const [isEditMode, setIsEditMode] = useState(false);

	const handleDelete = () => {
		if (window.confirm('Подтвердите удаление')) {
			remove(postId);
			navigate('/posts');
		}
	};

	return (
		<div className={className}>
			{error && <ErrMsgBox>{error}</ErrMsgBox>}
			<Img src={data?.img_src} />
			{isEditMode ? <input type="text" /> : <h2>{data?.title}</h2>}

			<EditPanel>
				<span className="created_at">{data?.created_at}</span>
				{isEditMode ? (
					<Icon className="fa-floppy-o" onClick={save}></Icon>
				) : (
					<Icon
						className="fa-pencil-square-o"
						onClick={() => setIsEditMode(true)}
					></Icon>
				)}

				<Icon className="fa-trash-o" onClick={handleDelete}></Icon>
			</EditPanel>

			<Content>{data?.text}</Content>
			<Comments></Comments>
		</div>
	);
}
export const Post = styled(PostContainer)`
	margin: 0 auto;
	padding: 20px 20px;
`;
