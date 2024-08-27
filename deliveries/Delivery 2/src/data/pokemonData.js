/**
 * Creates an array of Pokémon objects, each containing an id, name, and an image URL.
 * The image URL is constructed using the PUBLIC_URL environment variable.
 *
 * @constant
 * @type {Array<Object>}
 * @property {number} id - The unique identifier for the Pokémon.
 * @property {string} name - The name of the Pokémon.
 * @property {string} image - The URL to the Pokémon's image.
 */
const pokemons = [
  'Arcanine',
  'Beedrill',
  'Blastoise',
  'Bulbasaur',
  'Butterfree',
  'Caterpie',
  'Charizard',
  'Charmander',
  'Charmeleon',
  'Clefable',
  'Dewgong',
  'Farfetchd',
  'Ivysaur',
  'Golbat',
  'Kadabra',
  'Kakuna',
  'Metapod',
  'Pidgeot',
  'Pidgeotto',
  'Pidgey',
  'Pikachu',
  'Ponyta',
  'Raichu',
  'Raticate',
  'Rattata',
  'Squirtle',
  'Venusaur',
  'Vulpix',
  'Wartortle',
  'Weedle',
].map((pokemon, index) => ({
  id: index + 1, // Generate a unique id for each Pokémon
  name: pokemon,
  image: `${process.env.PUBLIC_URL}/images/pokemons/${pokemon}.png`,
}));

export default pokemons;
