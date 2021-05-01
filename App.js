import React from 'react';
import Navigator from './route/homeStack.js';
import Notifications from './components/Notifications';

export default function App() {
	return <Notifications message="Zmieniono dane konta" color="orange" />;
}
