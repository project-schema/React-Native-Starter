import { NavMenu } from '@/components/nav/NavMenu';
import { store } from '@/features/store';
import { Slot } from 'expo-router';
import { Provider } from 'react-redux';
import './globals.css';

export default function RootLayout() {
	return (
		<Provider store={store}>
			<NavMenu />
			<Slot />
		</Provider>
	);
}
