import { server } from '../dff/server';
import { useStateBlog } from '../store';
import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ErrMsgBox } from '../components/ErrMsgBlock';
import styled from 'styled-components';
import { Icon } from '../components/UI/Icon';
import { debounce } from '../utils/debounce';

export const PostsContainer = ({ className }) => {
	console.log('PostsContainer');
	const { currentUser, posts, loadPosts } = useStateBlog();
	const [error, setError] = useState(null);
	const [searchPhaseInput, setSearchPhaseInput] = useState('');
	const [updateFlag, setUpdateFlag] = useState(false);

	const handleSearchChange = ({ target }) => {
		setSearchPhaseInput(target.value);
		delaySearch();
	};
	useEffect(() => {
		loadPosts(searchPhaseInput);
	}, [updateFlag]);

	const search = () => {
		setUpdateFlag((prev) => !prev);
	};
	const delaySearch = useMemo(() => debounce(search, 2000), []);

	return (
		<div className={className}>
			<h2>Статьи</h2>
			<div>
				<input
					type="text"
					placeholder="Поиск..."
					value={searchPhaseInput}
					onChange={handleSearchChange}
				></input>
			</div>
			<Grid>
				{posts?.map((post) => (
					<Link to={`/post/${post.id}`} key={post.id}>
						<PostCard key={post.id}>
							<img src={post.img_src}></img>
							<PostTitle>{post.title}</PostTitle>
							<div>
								<Icon className="fa-comment-o"></Icon>
								{post.commentsCount}
							</div>
						</PostCard>
					</Link>
				))}
			</Grid>
		</div>
	);
};
export const Posts = styled(PostsContainer)`
	margin: 10px auto;
	display: flex;
	flex-direction: column;
`;
const Grid = styled.div`
	display: flex;
	gap: 10px;
	margin: 10px auto;
`;
const PostCard = styled.div`
	border: 1px solid black;
	width: 10rem;
	height: 10rem;
`;
const PostTitle = styled.div`
	font-size: 1.2rem;
	font-weight: bold;
`;
