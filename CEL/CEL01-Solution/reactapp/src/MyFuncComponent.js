import { useState } from 'react';
//MyClassComponent converted into MyFuncComponent
function MyFuncComponent(props) {
	const [input, setInput] = useState('');

	return (
		<input
			value={input}
			data-testid="funcInput"
			placeholder="Functional Component"
			onChange={e => setInput(e.target.value)}
		/>
	)
}

export default MyFuncComponent;