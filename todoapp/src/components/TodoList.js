import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
	flex: 1;
	padding: 20px 32px;
	padding-bottom: 48px;
	overflow-y: auto;
`;

function TodoList() {
	return (
		<TodoListBlock>
			<TodoItem text="test텍스트" done={true} />
			<TodoItem text="해야할 일" done={false} />
		</TodoListBlock>
	);
}

export default TodoList;
