// priority: 0

ServerEvents.recipes(event => {
	event.replaceInput({}, 'campanion:rope', 'farmersdelight:rope')
	event.replaceInput({}, 'additionaladditions:rope', 'farmersdelight:rope')
	event.remove({ output: 'campanion:rope' })
	event.remove({ output: 'additionaladditions:rope' })
	event.remove({ output: 'campanion:rope_bridge_planks' })
	event.remove({ output: 'campanion:rope_bridge_post' })
	event.remove({ output: "terrarianslimes:glowstick" })
	event.remove({ output: "terrarianslimes:bouncy_glowstick" })
	event.remove({ output: "terrarianslimes:sticky_glowstick" })
	event.remove({ output: "ad_astra:hammer" })
	event.remove({ input: "ad_astra:hammer" })
	event.remove({ input: "ad_astra:iron_plate" })
	event.remove({ output: "ad_astra:iron_plate" })

	event.remove({ output: 'computercraft:computer_normal' })
	event.remove({ output: 'computercraft:pocket_computer_normal' })
	event.remove({ output: 'computercraft:monitor_normal' })
	event.remove({ output: 'computercraft:disk_drive' })
	event.remove({ output: 'computercraft:wired_modem' })
	event.remove({ output: 'computercraft:printer' })
	event.remove({ output: 'computercraft:cable' })
	event.remove({ output: 'ad_astra:nasa_workbench' })

	event.remove({ output: 'bewitchment:cypress_broom' })
	event.remove({ output: 'bewitchment:dragons_blood_broom' })
	event.remove({ output: 'bewitchment:elder_broom' })
	event.remove({ output: 'bewitchment:juniper_broom' })
	event.remove({ output: 'bwplus:yew_broom' })

	event.shaped(
		Item.of('computercraft:computer_normal', 1),
		[
			'AAA',
			'ABA',
			'ACA'
		],
		{
			A: '#c:stones',
			B: 'minecraft:redstone',
			C: 'minecraft:echo_shard'
		}
	)

	event.shaped(
		Item.of('computercraft:pocket_computer_normal', 1),
		[
			'AAA',
			'ABA',
			'ACA'
		],
		{
			A: '#c:stones',
			B: 'minecraft:golden_apple',
			C: 'minecraft:echo_shard'
		}
	)

	event.shaped(
		Item.of('computercraft:monitor_normal', 1),
		[
			'AAA',
			'ABA',
			'AAA'
		],
		{
			A: '#c:stones',
			B: 'minecraft:echo_shard'
		}
	)

	event.shaped(
		Item.of('computercraft:disk_drive', 1),
		[
			'AAA',
			'ABA',
			'AAA'
		],
		{
			A: '#c:stones',
			B: 'minecraft:jukebox'
		}
	)

	event.shaped(
		Item.of('computercraft:wired_modem', 1),
		[
			'AAA',
			'ABA',
			'AAA'
		],
		{
			A: '#c:stones',
			B: 'createaddition:copper_wire'
		}
	)

	event.shaped(
		Item.of('computercraft:printer', 1),
		[
			'AAA',
			'ABA',
			'AAA'
		],
		{
			A: '#c:stones',
			B: 'create:mechanical_press'
		}
	)

	event.shapeless(
		Item.of('computercraft:cable', 6),
		[
			'createaddition:copper_wire',
			'minecraft:stone'
		]
	)

	event.shaped(
		Item.of('ad_astra:nasa_workbench', 1),
		[
			'EDE',
			'ACA',
			'ABA'
		],
		{
			A: 'minecraft:redstone_block',
			B: 'ad_astra:steel_block',
			C: 'computercraft:computer_normal',
			D: 'minecraft:elytra',
			E: 'minecraft:redstone_torch'
		}
	)

	event.shaped(
		Item.of('minecraft:saddle', 1),
		[
			'AAA',
			' C ',
			' B '
		],
		{
			A: 'minecraft:leather',
			B: 'minecraft:iron_ingot',
			C: 'minecraft:string'
		}
	)

	event.recipes.createMixing({
		ingredients: [
			{
				item: "minecraft:fire_charge"
			},
			{
				item: "minecraft:ink_sac"
			}
		],
		results: [
			{
				fluid: "ad_astra:oil",
				amount: 81000
			}
		]
	})
})

LootJS.modifiers(event => {
	event.addLootTableModifier(/.*/).replaceLoot("campanion:rope", "farmersdelight:rope")
	event.addLootTableModifier(/.*/).replaceLoot("additionaladditions:rope", "farmersdelight:rope")
	event.addLootTableModifier(/.*/).replaceLoot("bewitchment:waystone", "waystones:warp_stone")
	event.addLootTableModifier(/.*/).replaceLoot("ad_astra:iron_plate", "create:iron_sheet")
	event.addLootTableModifier(/.*/).removeLoot("ad_astra:hammer")
})