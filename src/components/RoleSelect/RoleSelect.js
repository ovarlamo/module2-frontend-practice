import styled from 'styled-components';

const RoleSelectContainer = ({ selectedRole, onChange, roles }) => {
	console.log('RoleSelectContainer', roles);
	return (
		<select value={selectedRole} onChange={(e) => onChange(e.target.value)}>
			{roles.map((role) => (
				<option key={role.id} value={role.id}>
					{role.name}
				</option>
			))}
		</select>
	);
};
export const RoleSelect = styled(RoleSelectContainer)`
	padding: 8px;
	border: 1px solid #ccc;
	border-radius: 4px;
	background-color: #fff;
	font-size: 16px;
`;
