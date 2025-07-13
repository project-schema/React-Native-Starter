import { decrement, increment } from '@/features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import React from 'react';
import { Button, Text, View } from 'react-native';

const CounterScreen = () => {
	const count = useAppSelector((state) => state.counter.value);
	const dispatch = useAppDispatch();

	return (
		<View>
			<Text>Count: {count}</Text>
			<Button title="Increment" onPress={() => dispatch(increment())} />
			<Button title="Decrement" onPress={() => dispatch(decrement())} />
		</View>
	);
};

export default CounterScreen;
