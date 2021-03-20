import React from 'react';
import useRouter from 'use-react-router';

const Todo = () => {
	const { match } = useRouter();

	return (
		<div>
			todo dengan slug {match.params.slug}
			<div>todo</div>
		</div>
	);
};

export { Todo };
