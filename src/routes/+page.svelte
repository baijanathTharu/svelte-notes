<script lang="ts">
	import { Button, Card } from 'flowbite-svelte';
	const notes: { date: string; title: string; status: 'DONE' | 'DRAFT' | 'IN PROGRESS' }[] = [
		{ date: '2023-01-15', title: 'Svelte notes', status: 'DRAFT' },
		{ date: '2023-01-15', title: 'SolidJS notes', status: 'IN PROGRESS' },
		{ date: '2023-01-15', title: 'NextJS notes', status: 'DONE' },
		{ date: '2023-01-15', title: 'Rust notes', status: 'IN PROGRESS' },
		{ date: '2023-01-15', title: 'SQL notes', status: 'DONE' },
		{ date: '2023-01-15', title: 'Data Science notes', status: 'DONE' },
		{ date: '2023-01-15', title: 'Control System notes', status: 'DONE' },
		{ date: '2023-01-15', title: 'Signals notes', status: 'DONE' }
	];
</script>

<div class="m-4 p-4">
	<div class="flex gap-4 flex-wrap ">
		{#each notes as note}
			<Card>
				<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					{note.title}
				</h5>
				<p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
					{note.status}
				</p>
			</Card>
		{/each}
	</div>
</div>
