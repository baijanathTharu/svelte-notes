<script>
	export let header = '';
	export let body = '';
	export let footer = '';
</script>

<div class="card card-hover card-glass-primary">
	<header class="card-header">
		<div class="text-error-500">
			{header}
		</div>
	</header>
	<div class="p-4">{body}</div>
	<footer class="card-footer">{footer}</footer>
</div>
