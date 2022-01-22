import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import App from "./App";

it("renders without crashing", () => {
	render(
		<BrowserRouter>
			<App />
		</BrowserRouter>
	);
});
