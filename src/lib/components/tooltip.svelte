<script lang="ts">
	let { children, text = '' }: { children: any; text?: string } = $props();
	let showTooltip = $state(false);
	let tooltipElement: HTMLDivElement;
	let triggerElement: HTMLSpanElement;
	let position = $state({ transform: 'translateX(-50%)', left: '50%' });
	
	function handleTouch() {
		showTooltip = !showTooltip;
		if (showTooltip && tooltipElement && triggerElement) {
			updatePosition();
		}
	}
	
	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			handleTouch();
		}
	}
	
	function updatePosition() {
		if (!tooltipElement || !triggerElement) return;
		
		const triggerRect = triggerElement.getBoundingClientRect();
		const tooltipRect = tooltipElement.getBoundingClientRect();
		const viewportWidth = window.innerWidth;
		
		let left = '50%';
		let transform = 'translateX(-50%)';
		
		// Check if tooltip would overflow on the right
		if (triggerRect.left + tooltipRect.width / 2 > viewportWidth - 10) {
			left = 'auto';
			transform = 'translateX(-100%)';
		}
		// Check if tooltip would overflow on the left
		else if (triggerRect.left - tooltipRect.width / 2 < 10) {
			left = '0';
			transform = 'translateX(0)';
		}
		
		position = { left, transform };
	}
	
	function handleMouseEnter() {
		updatePosition();
	}
</script>

<span class="relative inline-block group">
	<span 
		bind:this={triggerElement}
		onclick={handleTouch}
		ontouchstart={handleTouch}
		onkeydown={handleKeydown}
		onmouseenter={handleMouseEnter}
		role="button"
		tabindex="0"
		class="cursor-pointer"
	>
		{@render children()}
	</span>
	<div
		bind:this={tooltipElement}
		class="absolute bottom-full mb-2 px-3 py-2 text-sm font-bold text-black bg-pink-300 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-opacity duration-200 pointer-events-none w-48 md:w-64 z-10 opacity-0 group-hover:opacity-100"
		class:opacity-100={showTooltip}
		style="word-wrap: break-word; hyphens: auto; left: {position.left}; transform: {position.transform};"
	>
		{text}
	</div>
</span>