import { useState } from "react";
import _ from "lodash";
import { increment, decrement, selectCount } from "./redux/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

import "./app.less";

function App() {
	// const dispatch = useAppDispatch();
	// const count = useAppSelector(selectCount);

	// const handleIncrment = ()=>{
	//   dispatch(increment());
	// }

	// const handleDecrement = ()=>{
	//   dispatch(decrement());
	// }

	return <div className="app"></div>;
}

export default App;
