import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../component/Sidebar/Sidebar.component";

const MainWrapper = () => {
	return (
		<div className="row">
			<Sidebar />
			<Outlet />
		</div>
	);
};

export default MainWrapper;
