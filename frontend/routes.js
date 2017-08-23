import React from 'react';
import { Route, Switch } from 'react-router-dom';
import QuestionsAdd from './components/QuestionsAdd'

export default (
	<Switch>
		<Route exact path="/" component={QuestionsAdd} />
	</Switch>
);
