import { FunctionComponent, ReactElement } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Layout } from './components/Navigation/Layout';
import { Why } from './components/pages/Why';
import { About } from './components/pages/About';
import { Player } from './components/Player';
import { GlobalStateProvider } from './store/reducers/GlobalState';

const App: FunctionComponent = (): ReactElement => {
	const routes = (
		<Switch>
			<Route path="/why" component={Why} />
			<Route path="/about" component={About} />
			<Route path="/" exact component={Player} />
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
