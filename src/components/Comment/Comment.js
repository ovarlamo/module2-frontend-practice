import { Icon } from '../UI/Icon';
import styled from 'styled-components';
const CommentContainer = ({ className, login, body, created_at }) => {
	return (
		<div className={className}>
			<div className="top">
				<div>{login}</div>
				<Icon className="fa-calendar-o"></Icon>
				<div>{created_at}</div>
			</div>
			<div>{body}</div>
		</div>
	);
};
export const Comment = styled(CommentContainer)`
	border: 1px solid black;
	width: 600px;
	.top {
		display: flex;
		justify-content: space-between;
	}
	.top > div:first-child {
		margin-right: auto;
	}
`;
