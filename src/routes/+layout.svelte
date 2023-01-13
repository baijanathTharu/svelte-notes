<script>
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { AppBar, AppRail, AppRailTile, AppShell } from '@skeletonlabs/skeleton';
	import { storeValue } from '$store/app-rail';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<h1>Svelte Notes</h1>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<AppRail selected={storeValue}>
			<AppRailTile label="Tile" title="Tile One" value={1}>(icon )</AppRailTile>
			<AppRailTile label="Tile" title="Tile Two" value={2}>(icon )</AppRailTile>
			<AppRailTile label="Tile" title="Tile Two" value={3}>(icon )</AppRailTile>
		</AppRail>
	</svelte:fragment>
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<!-- <svelte:fragment slot="pageFooter">Page Footer</svelte:fragment> -->
	<!-- <svelte:fragment slot="footer">Footer is here</svelte:fragment> -->
</AppShell>
