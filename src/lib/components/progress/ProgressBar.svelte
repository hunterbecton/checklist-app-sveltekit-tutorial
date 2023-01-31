<script>
	export let title;
	export let percentage;

	$: completeClass = title === 'Completed' ? 'bg-green-four' : 'bg-leaf-one';
</script>

<div>
	<div class="flex justify-between text-base font-normal text-gray-three">
		<p>{title}</p>
		<p>{percentage}%</p>
	</div>
	<div class="mt-5 h-4 w-full overflow-hidden rounded-full bg-gray-one">
		<div
			class="{completeClass} h-4 rounded-full transition-all duration-500 ease-out"
			style="width: {percentage}%"
		/>
	</div>
</div>
