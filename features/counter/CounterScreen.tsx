import React from 'react';
import { Button, Text, View } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { decrement, increment } from './counterSlice';

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
