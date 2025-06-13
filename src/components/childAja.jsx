import React from "react";

const ChildAja = React.memo(({ onClick }) => {
	console.log("render child");

	const submit = () => {
		onClick();
	};

	return <button onClick={submit}>Button child</button>;
});

export default ChildAja;
