import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete, onToggle }) => {
	return (
		<div
			className={`task ${task.reminder ? 'reminder' : ''}`}
			//double click doesn't register in chrome. Using for now because that's what's in tutorial but may fix later
			onDoubleClick={() => onToggle(task.id)}
		>
			<h3>
				{task.text}
				<FaTimes
					style={{ color: 'red', cursor: 'pointer' }}
					onClick={() => onDelete(task.id)}
				></FaTimes>
			</h3>
			<p> {task.day} </p>
		</div>
	);
};

export default Task;
