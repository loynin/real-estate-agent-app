import filepicker from 'filepicker-js';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import App from './components/App';
import Home from './components/pages/Home';
import ForSaleList from './components/pages/ForSaleList';
import ForRentList from './components/pages/ForRentList';
import ForSaleDetails from './components/pages/ForSaleDetails';
import ForRentDetails from './components/pages/ForRentDetails';
import ForSalePhotos from './components/pages/ForSalePhotos';
import ForRentPhotos from './components/pages/ForRentPhotos';
import Register from './components/pages/Register';
import Dashboard from './components/pages/Dashboard';
import NewListing from './components/pages/NewListing';
import EditListing from './components/pages/EditListing';
import NewRental from './components/pages/NewRental';
import EditRental from './components/pages/EditRental';
import FindAgent from './components/pages/FindAgent';
import AgentDetails from './components/pages/AgentDetails';

filepicker.setKey('AWEM8RWC9TUScrspS0Rdiz');

const router = (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="/forsale" component={ForSaleList} />
			<Route path="/forrent" component={ForRentList} />
			<Route path="/forsale/:listingId/details" component={ForSaleDetails} />
			<Route path="/forrent/:listingId/details" component={ForRentDetails} />
			<Route path="/forsale/:listingId/details/photos" component={ForSalePhotos} />
			<Route path="/forrent/:listingId/details/photos" component={ForRentPhotos} />
			<Route path="/auth/register" component={Register} />
			<Route path="/dashboard" component={Dashboard} />
			<Route path="/dashboard/newlisting" component={NewListing} />
			<Route path="/dashboard/editlisting" component={EditListing} />
			<Route path="/dashboard/newrental" component={NewRental} />
			<Route path="/dashboard/editrental" component={EditRental} />
			<Route path="/findagent" component={FindAgent} />
			<Route path="/findagent/:agentId/details" component={AgentDetails} />
		</Route>
	</Router>
);

ReactDOM.render(router, document.getElementById('app'));
