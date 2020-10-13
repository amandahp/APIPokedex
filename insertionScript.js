const axios = require('axios');

let insertObj = [ 
  { id: 2, name: 'Ivysaur', type: [ 'grass', 'poison' ] },
  { id: 3, name: 'Venusaur', type: [ 'grass', 'poison' ] },
  { id: 4, name: 'Charmander', type: [ 'fire' ] },
  { id: 5, name: 'Charmeleon', type: [ 'fire' ] },
  { id: 6, name: 'Charizard', type: [ 'fire', 'flying' ] },
  { id: 7, name: 'Squirtle', type: [ 'water' ] },
  { id: 8, name: 'Wartortle', type: [ 'water' ] },
  { id: 9, name: 'Blastoise', type: [ 'water' ] },
  { id: 10, name: 'Caterpie', type: [ 'bug' ] },
  { id: 11, name: 'Metapod', type: [ 'bug' ] },
  { id: 12, name: 'Butterfree', type: [ 'bug', 'flying' ] },
  { id: 13, name: 'Weedle', type: [ 'bug', 'poison' ] },
  { id: 14, name: 'Kakuna', type: [ 'bug', 'poison' ] },
  { id: 15, name: 'Beedrill', type: [ 'bug', 'poison' ] },
  { id: 16, name: 'Pidgey', type: [ 'normal', 'flying' ] },
  { id: 17, name: 'Pidgeotto', type: [ 'normal', 'flying' ] },
  { id: 18, name: 'Pidgeot', type: [ 'normal', 'flying' ] },
  { id: 19, name: 'Rattata', type: [ 'normal' ] },
  { id: 20, name: 'Raticate', type: [ 'normal' ] },
  { id: 21, name: 'Spearow', type: [ 'normal', 'flying' ] },
  { id: 22, name: 'Fearow', type: [ 'normal', 'flying' ] },
  { id: 23, name: 'Ekans', type: [ 'poison' ] },
  { id: 24, name: 'Arbok', type: [ 'poison' ] },
  { id: 25, name: 'Pikachu', type: [ 'electric' ] },
  { id: 26, name: 'Raichu', type: [ 'electric' ] },
  { id: 27, name: 'Sandshrew', type: [ 'ground' ] },
  { id: 28, name: 'Sandslash', type: [ 'ground' ] },
  { id: 29, name: 'Nidoran♀', type: [ 'poison' ] },
  { id: 30, name: 'Nidorina', type: [ 'poison' ] },
  { id: 31, name: 'Nidoqueen', type: [ 'poison', 'ground' ] },
  { id: 32, name: 'Nidoran♂', type: [ 'poison' ] },
  { id: 33, name: 'Nidorino', type: [ 'poison' ] },
  { id: 34, name: 'Nidoking', type: [ 'poison', 'ground' ] },
  { id: 35, name: 'Clefairy', type: [ 'fairy' ] },
  { id: 36, name: 'Clefable', type: [ 'fairy' ] },
  { id: 37, name: 'Vulpix', type: [ 'fire' ] },
  { id: 38, name: 'Ninetales', type: [ 'fire' ] },
  { id: 39, name: 'Jigglypuff', type: [ 'normal', 'fairy' ] },
  { id: 40, name: 'Wigglytuff', type: [ 'normal', 'fairy' ] },
  { id: 41, name: 'Zubat', type: [ 'poison', 'flying' ] },
  { id: 42, name: 'Golbat', type: [ 'poison', 'flying' ] },
  { id: 43, name: 'Oddish', type: [ 'poison', 'grass' ] },
  { id: 44, name: 'Gloom', type: [ 'poison', 'grass' ] },
  { id: 45, name: 'Vileplume', type: [ 'poison', 'grass' ] },
  { id: 46, name: 'Paras', type: [ 'bug', 'grass' ] },
  { id: 47, name: 'Parasect', type: [ 'bug', 'grass' ] },
  { id: 48, name: 'Venonat', type: [ 'bug', 'poison' ] },
  { id: 49, name: 'Venomoth', type: [ 'bug', 'poison' ] },
  { id: 50, name: 'Diglett', type: [ 'ground' ] },
  { id: 51, name: 'Dugtrio', type: [ 'ground' ] },
  { id: 52, name: 'Meowth', type: [ 'normal' ] },
  { id: 53, name: 'Persian', type: [ 'normal' ] },
  { id: 54, name: 'Psyduck', type: [ 'water' ] },
  { id: 55, name: 'Golduck', type: [ 'water' ] },
  { id: 56, name: 'Mankey', type: [ 'fighting' ] },
  { id: 57, name: 'Primeape', type: [ 'fighting' ] },
  { id: 58, name: 'Growlithe', type: [ 'fire' ] },
  { id: 59, name: 'Arcanine', type: [ 'fire' ] },
  { id: 60, name: 'Poliwag', type: [ 'water' ] },
  { id: 61, name: 'Poliwhirl', type: [ 'water' ] },
  { id: 62, name: 'Poliwrath', type: [ 'water', 'fighting' ] },
  { id: 63, name: 'Abra', type: [ 'psychic' ] },
  { id: 64, name: 'Kadabra', type: [ 'psychic' ] },
  { id: 65, name: 'Alakazam', type: [ 'psychic' ] },
  { id: 66, name: 'Machop', type: [ 'fighting' ] },
  { id: 67, name: 'Machoke', type: [ 'fighting' ] },
  { id: 68, name: 'Machamp', type: [ 'fighting' ] },
  { id: 69, name: 'Bellsprout', type: [ 'grass', 'poison' ] },
  { id: 70, name: 'Weepinbell', type: [ 'grass', 'poison' ] },
  { id: 71, name: 'Victreebel', type: [ 'grass', 'poison' ] },
  { id: 72, name: 'Tentacool', type: [ 'water', 'poison' ] },
  { id: 73, name: 'Tentacruel', type: [ 'water', 'poison' ] },
  { id: 74, name: 'Geodude', type: [ 'ground', 'rock' ] },
  { id: 75, name: 'Graveler', type: [ 'ground', 'rock' ] },
  { id: 76, name: 'Golem', type: [ 'ground', 'rock' ] },
  { id: 77, name: 'Ponyta', type: [ 'fire' ] },
  { id: 78, name: 'Rapidash', type: [ 'fire' ] },
  { id: 79, name: 'Slowpoke', type: [ 'water', 'psychic' ] },
  { id: 80, name: 'Slowbro', type: [ 'water', 'psychic' ] },
  { id: 81, name: 'Magnemite', type: [ 'electric', 'steel' ] },
  { id: 82, name: 'Magneton', type: [ 'electric', 'steel' ] },
  { id: 83, name: 'Farfetch\'d', type: [ 'normal', 'flying' ] },
  { id: 84, name: 'Doduo', type: [ 'normal', 'flying' ] },
  { id: 85, name: 'Dodrio', type: [ 'normal', 'flying' ] },
  { id: 86, name: 'Seel', type: [ 'water' ] },
  { id: 87, name: 'Dewgong', type: [ 'water', 'ice' ] },
  { id: 88, name: 'Grimer', type: [ 'poison' ] },
  { id: 89, name: 'Muk', type: [ 'poison' ] },
  { id: 90, name: 'Shellder', type: [ 'water' ] },
  { id: 91, name: 'Cloyster', type: [ 'water', 'ice' ] },
  { id: 92, name: 'Gastly', type: [ 'ghost', 'poison' ] },
  { id: 93, name: 'Haunter', type: [ 'ghost', 'poison' ] },
  { id: 94, name: 'Gengar', type: [ 'ghost', 'poison' ] },
  { id: 95, name: 'Onix', type: [ 'rock', 'ground' ] },
  { id: 96, name: 'Drowzee', type: [ 'psychic' ] },
  { id: 97, name: 'Hypno', type: [ 'psychic' ] },
  { id: 98, name: 'Krabby', type: [ 'water' ] },
  { id: 99, name: 'Kingler', type: [ 'water' ] },
  { id: 100, name: 'Voltorb', type: [ 'electric' ] },
  { id: 101, name: 'Electrode', type: [ 'electric' ] },
  { id: 102, name: 'Exeggcute', type: [ 'grass', 'psychic' ] },
  { id: 103, name: 'Exeggutor', type: [ 'grass', 'psychic' ] },
  { id: 104, name: 'Cubone', type: [ 'ground' ] },
  { id: 105, name: 'Marowak', type: [ 'ground' ] },
  { id: 106, name: 'Hitmonlee', type: [ 'fighting' ] },
  { id: 107, name: 'Hitmonchan', type: [ 'fighting' ] },
  { id: 108, name: 'Lickitung', type: [ 'normal' ] },
  { id: 109, name: 'Koffing', type: [ 'poison' ] },
  { id: 110, name: 'Weezing', type: [ 'poison' ] },
  { id: 111, name: 'Rhyhorn', type: [ 'ground', 'rock' ] },
  { id: 112, name: 'Rhydon', type: [ 'ground', 'rock' ] },
  { id: 113, name: 'Chansey', type: [ 'normal' ] },
  { id: 114, name: 'Tangela', type: [ 'grass' ] },
  { id: 115, name: 'Kangaskhan', type: [ 'normal' ] },
  { id: 116, name: 'Horsea', type: [ 'water' ] },
  { id: 117, name: 'Seadra', type: [ 'water' ] },
  { id: 118, name: 'Goldeen', type: [ 'water' ] },
  { id: 119, name: 'Seaking', type: [ 'water' ] },
  { id: 120, name: 'Staryu', type: [ 'water' ] },
  { id: 121, name: 'Starmie', type: [ 'water', 'psychic' ] },
  { id: 122, name: 'Mr. Mime', type: [ 'psychic', 'fairy' ] },
  { id: 123, name: 'Scyther', type: [ 'bug', 'flying' ] },
  { id: 124, name: 'Jynx', type: [ 'ice', 'psychic' ] },
  { id: 125, name: 'Electabuzz', type: [ 'electric' ] },
  { id: 126, name: 'Magmar', type: [ 'fire' ] },
  { id: 127, name: 'Pinsir', type: [ 'bug' ] },
  { id: 128, name: 'Tauros', type: [ 'normal' ] },
  { id: 129, name: 'Magikarp', type: [ 'water' ] },
  { id: 130, name: 'Gyarados', type: [ 'water', 'flying' ] },
  { id: 131, name: 'Lapras', type: [ 'water', 'ice' ] },
  { id: 132, name: 'Ditto', type: [ 'normal' ] },
  { id: 133, name: 'Eevee', type: [ 'normal' ] },
  { id: 134, name: 'Vaporeon', type: [ 'water' ] },
  { id: 135, name: 'Jolteon', type: [ 'electric' ] },
  { id: 136, name: 'Flareon', type: [ 'fire' ] },
  { id: 137, name: 'Porygon', type: [ 'normal' ] },
  { id: 138, name: 'Omanyte', type: [ 'rock', 'water' ] },
  { id: 139, name: 'Omastar', type: [ 'rock', 'water' ] },
  { id: 140, name: 'Kabuto', type: [ 'rock', 'water' ] },
  { id: 141, name: 'Kabutops', type: [ 'rock', 'water' ] },
  { id: 142, name: 'Aerodactyl', type: [ 'rock', 'flying' ] },
  { id: 143, name: 'Snorlax', type: [ 'normal' ] },
  { id: 144, name: 'Articuno', type: [ 'ice', 'flying' ] },
  { id: 145, name: 'Zapdos', type: [ 'electric', 'flying' ] },
  { id: 146, name: 'Moltres', type: [ 'fire', 'flying' ] },
  { id: 147, name: 'Dratini', type: [ 'dragon' ] },
  { id: 148, name: 'Dragonair', type: [ 'dragon' ] },
  { id: 149, name: 'Dragonite', type: [ 'dragon', 'flying' ] },
  { id: 150, name: 'Mewtwo', type: [ 'psychic' ] },
  { id: 151, name: 'Mew', type: [ 'psychic' ] } 
  ]



try {
	insertObj.forEach(data => {
	axios.post('http://localhost:3000/pokedex',
		{ ...data }
	).then(res=>console.log(res))
.catch(e=>console.log(e))
	})
}catch(e) {
	console.log(e)
}

