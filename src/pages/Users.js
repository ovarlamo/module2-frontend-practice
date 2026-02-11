import styled from 'styled-components';
import { useStateBlog } from '../store/use-state-blog';
import { useEffect, useState } from 'react';
import { UserRow } from '../components/UserRow';

import { saveUser } from '../store/thunks';

const Table = styled.table`
	width: 100%;
	border-collapse: separate;
	border-spacing: 0 10px;

	td {

		text-align: left;
		border-bottom: 1px solid black;
		border-top: 1px solid black;

	}
		td:first-child {
		border-left: 1px solid black;
		}
		td:nth-child(3) {
		border-right: 1px solid black;
		}
		td:last-child {
		border:none;
}
	}
	td,
	th {
		text-align: left;
		padding: 3px 5px;
		font-weight: normal;
		vertical-align:middle;
	}
		td.role > div{
		display:flex;
		gap:5px;

		}
`;

const UsersContainer = ({ className }) => {
	const { users, loadUsers, roles, loadRoles } = useStateBlog();

	useEffect(() => {
		loadUsers();
		loadRoles();
	}, []);
	return (
		<div className={className}>
			<h2>Пользователи</h2>
			<Table>
				<thead>
					<tr>
						<th>Логин</th>
						<th>Дата регистрации</th>
						<th>Роль</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{users.map((user) => (
						<UserRow key={user.id} user={user} />
					))}
				</tbody>
			</Table>
		</div>
	);
};
export const Users = styled(UsersContainer)`
	margin: 50px auto;
`;
