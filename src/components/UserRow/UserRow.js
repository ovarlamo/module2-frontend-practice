import styled from 'styled-components';
import { useStateBlog } from '../../store/use-state-blog';
import { useEffect, useState } from 'react';
import { RoleSelect } from '../RoleSelect';
import { Icon } from '../UI/Icon';
export const UserRow = ({ user }) => {
	const { saveUser, deleteUser, roles, updateUserRole } = useStateBlog();
	const [newRoleId, setNewRoleId] = useState(user.role_id);
	const handleRoleChange = (newRoleId) => {
		setNewRoleId(newRoleId);
	};
	const handleSave = () => {
		updateUserRole(user.id, newRoleId);
	};
	return (
		<tr>
			<td>{user.login}</td>
			<td>{new Date(user.registed_at).toLocaleDateString()}</td>
			<td className="role">
				<div>
					<RoleSelect
						selectedRole={newRoleId}
						onChange={(newRoleId) => handleRoleChange(newRoleId)}
						roles={roles}
					/>
					<Icon
						className="fa-save"
						disabled={user.role_id === newRoleId}
						onClick={handleSave}
					></Icon>
				</div>
			</td>
			<td>
				<Icon
					onClick={() => deleteUser(user.id)}
					disabled={false}
					className="fa-trash-o"
				/>
			</td>
		</tr>
	);
};
