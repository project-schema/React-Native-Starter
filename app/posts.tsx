import React from 'react';
import {
	ActivityIndicator,
	FlatList,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import { useGetPostsQuery } from '../features/posts/postsApi';

const PostsScreen = () => {
	const { data: posts, error, isLoading } = useGetPostsQuery();

	if (isLoading)
		return <ActivityIndicator style={styles.centered} size="large" />;
	if (error) return <Text style={styles.error}>Error loading posts</Text>;

	return (
		<FlatList
			data={posts}
			keyExtractor={(item) => item.id.toString()}
			renderItem={({ item }) => (
				<View style={styles.post}>
					<Text style={styles.title}>{item.title}</Text>
					<Text>{item.body}</Text>
				</View>
			)}
		/>
	);
};

const styles = StyleSheet.create({
	centered: { flex: 1, justifyContent: 'center' },
	error: { color: 'red', padding: 20 },
	post: { padding: 15, borderBottomWidth: 1, borderBottomColor: '#ccc' },
	title: { fontWeight: 'bold' },
});

export default PostsScreen;
