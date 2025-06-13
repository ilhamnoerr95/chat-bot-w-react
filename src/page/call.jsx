import React, { useState, useCallback, useMemo } from "react";
import ChildAja from "../components/childAja";

const Call = () => {
	const [count, setCounter] = useState(0);
	const [text, setText] = useState("");
	const bigCompute = (v, p) => {
		console.log("big compute running " + p);
		let result = 1;
		for (let i = 0; i < 1000; i++) {
			result += v;
		}
		return result;
	};

	const bigComputeMemo = useMemo(() => {
		return bigCompute(count, "pake memo");
	}, [count]);

	const noBigComputeMemo = (c) => {
		return bigCompute(c, "gak pake memo");
	};

	const functionChild = useCallback(() => {
		console.log("klik");
	}, []);

	return (
		<div>
			<h1>Counter</h1>
			<p>{count}</p>
			<button onClick={() => setCounter(count + 1)}>count now</button>
			<h1>Input: {text}</h1>
			<input onChange={(e) => setText(e.target.value)} />

			<h1>Big compute</h1>
			<p>{bigComputeMemo} pake memo</p>
			<p>{noBigComputeMemo(count)} gak pake memo</p>
			<ChildAja onClick={functionChild} />
		</div>
	);
};

export default Call;
