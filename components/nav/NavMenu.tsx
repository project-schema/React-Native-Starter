import { useRouter } from 'expo-router';
import { Button, View } from 'react-native';
import { NavStyles } from './style.css';

export function NavMenu() {
	const router = useRouter();

	return (
		<View style={NavStyles.navMenu}>
			<Button title="Home" onPress={() => router.push('/')} />
			<Button title="Counter" onPress={() => router.push('/counter')} />
			<Button title="Posts" onPress={() => router.push('/posts')} />
		</View>
	);
}
