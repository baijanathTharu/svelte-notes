<script lang="ts">
	import { Button } from 'flowbite-svelte';
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
	<Button>Default</Button>
	<Button color="alternative">Alternative</Button>
	<Button color="dark">Dark</Button>
	<Button color="light">Light</Button>
	<Button color="green">Green</Button>
	<Button color="red">Red</Button>
	<Button color="yellow">Yellow</Button>
	<Button color="purple">Purple</Button>
	<div class="flex gap-4 flex-wrap ">
		{#each notes as note}
			<div class="border-2 border-red-200 shadow-md">
				<p>{note.title}</p>
			</div>
		{/each}
	</div>
</div>
