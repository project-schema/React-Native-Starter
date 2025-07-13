import { apiSlice } from '../apiSlice';
import { Post } from './postTypes';

export const postsApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getPosts: builder.query<Post[], void>({
			query: () => 'posts',
		}),
	}),
	overrideExisting: false,
});

export const { useGetPostsQuery } = postsApi;
