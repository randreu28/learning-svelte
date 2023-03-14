import { error } from '@sveltejs/kit';
import type { todoType } from '../../types';
import type { PageLoad } from './$types';

export const load = (async ({ fetch, params }) => {
	const rawData = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.toDo}`);

	if (!rawData.ok) {
		throw error(rawData.status);
	}

	const data = (await rawData.json()) as todoType;

	return { toDo: data };
}) satisfies PageLoad;
