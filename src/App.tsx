import { FunctionComponent, ReactElement } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Layout } from './components/Navigation/Layout';
import { LandingPage } from 'components/pages/LandingPage';
import { Activities } from './components/pages/Activities';
import { GlobalStateProvider } from './store/reducers/GlobalState';

const App: FunctionComponent = (): ReactElement => {
	const routes = (
		<Switch>
			<Route path="/activities" component={Activities} />
			<Route path="/" exact component={LandingPage} />
			{/* Redirect any unknown link to the home page */}
			<Redirect to="/" />
		</Switch>
	);
	return (
		<GlobalStateProvider>
			<Layout>{routes}</Layout>
		</GlobalStateProvider>
	);
};

export default App;
