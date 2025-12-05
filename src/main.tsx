import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import HomePage from "./HomePage/HomePage";
import EventPage from "./EventPage/EventPage";
import LiveStream from "./LiveStream/LiveStream.tsx";
import Replay from "./Replay/Replay.tsx";
import EventDetailPage from "./EventDetailPage/EventDetailPage";
import TicketPage from "./TicketPage/TicketPage";
import FaqPage from "./FAQ/FaqPage.tsx";
import Store from "./Store/Store.tsx";

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "/events",
				element: <EventPage />,
			},
			{
				path: "/events/:eventId",
				element: <EventDetailPage />,
			},
			{
				path: "/stream/live",
				element: <LiveStream />,
			},
			{
				path: "/stream/replay",
				element: <Replay />,
			},
			{
				path: "/events/:eventId/tickets",
				element: <TicketPage />,
			},
			{
				path: "/Infos",
				element: <FaqPage />,
			},
			{
				path: "/store",
				element: <Store />,
			},
		],
	},
]);

const rootElement = document.getElementById("root");
if (!rootElement) {
	throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

const root = createRoot(rootElement);
root.render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
