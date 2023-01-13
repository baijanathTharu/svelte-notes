<script>
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { AppBar, AppRail, AppRailTile, AppShell } from '@skeletonlabs/skeleton';
	import { storeValue } from '$store/app-rail';
	import { PencilSolid, NoteStickyRegular } from 'svelte-awesome-icons';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<h1>Svelte Notes</h1>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<AppRail selected={storeValue}>
			<AppRailTile label="Notes" title="Notes" value={1}>
				<NoteStickyRegular size="25" color="#000a" />
			</AppRailTile>
			<AppRailTile label="Write" title="Write" value={2}>
				<PencilSolid size="25" color="#000a" />
			</AppRailTile>
		</AppRail>
	</svelte:fragment>
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<!-- <svelte:fragment slot="pageFooter">Page Footer</svelte:fragment> -->
	<!-- <svelte:fragment slot="footer">Footer is here</svelte:fragment> -->
</AppShell>
