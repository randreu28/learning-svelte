import type { PageLoad } from './$types';

interface todoType {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

export const load = (async ({ fetch }) => {
	const rawData = await fetch('https://jsonplaceholder.typicode.com/todos');

	if (!rawData.ok) {
		throw Error('Error' + rawData.status);
	}

	const data = (await rawData.json()) as todoType[];

	return { toDos: data };
}) satisfies PageLoad;
