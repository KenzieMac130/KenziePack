// priority: 0

WorldgenEvents.remove(event => {
	event.removeOres(ores => {
		ores.blocks = ['expandeddelight:salt_ore','expandeddelight:deepslate_salt_ore']})
})