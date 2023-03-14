import { error } from '@sveltejs/kit';
import type { todoType } from '../types';
import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	const rawData = await fetch('https://jsonplaceholder.typicode.com/todos');

	if (!rawData.ok) {
		throw error(rawData.status);
	}

	const data = (await rawData.json()) as todoType[];

	return { toDos: data };
}) satisfies PageLoad;
