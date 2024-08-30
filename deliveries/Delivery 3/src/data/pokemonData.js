/**
 * Creates an array of Pokémon objects, each containing an id, name, image URL, location, rarity, and description.
 * The image URL is constructed using the PUBLIC_URL environment variable.
 *
 * @constant
 * @type {Array<Object>}
 * @property {number} id - The unique identifier for the Pokémon.
 * @property {string} name - The name of the Pokémon.
 * @property {string} image - The URL to the Pokémon's image.
 * @property {string} location - The location where the Pokémon can be found.
 * @property {string} rarity - The rarity of the Pokémon (e.g., Common, Uncommon, Rare).
 * @property {string} description - A brief description of the Pokémon.
 */
const pokemons = [
  {
    name: 'Arcanine',
    location: 'Route 7',
    rarity: 'Rare',
    description:
      'A legendary Pokémon known for its bravery and loyalty. It runs gracefully, as if it were on wings.',
  },
  {
    name: 'Beedrill',
    location: 'Viridian Forest',
    rarity: 'Uncommon',
    description:
      'Beedrill is extremely territorial. No one should ever approach its nest—this is for their own safety.',
  },
  {
    name: 'Blastoise',
    location: 'Seafoam Islands',
    rarity: 'Rare',
    description:
      'Blastoise has water spouts that protrude from its shell. They are capable of blasting water at great power.',
  },
  {
    name: 'Bulbasaur',
    location: 'Viridian Forest',
    rarity: 'Common',
    description:
      'A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.',
  },
  {
    name: 'Butterfree',
    location: 'Viridian Forest',
    rarity: 'Uncommon',
    description:
      'Butterfree has a superior ability to search for delicious honey from flowers. It can even search out, extract, and carry honey from flowers that are blooming over six miles from its nest.',
  },
  {
    name: 'Caterpie',
    location: 'Viridian Forest',
    rarity: 'Common',
    description:
      'Caterpie has a voracious appetite. It can devour leaves bigger than its body right before your eyes.',
  },
  {
    name: 'Charizard',
    location: 'Rock Tunnel',
    rarity: 'Rare',
    description:
      'Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.',
  },
  {
    name: 'Charmander',
    location: 'Rock Tunnel',
    rarity: 'Rare',
    description:
      'The flame on its tail shows the strength of its life force. If it is weak, the flame also burns weakly.',
  },
  {
    name: 'Charmeleon',
    location: 'Rock Tunnel',
    rarity: 'Uncommon',
    description:
      'Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish-white color.',
  },
  {
    name: 'Clefable',
    location: 'Mt. Moon',
    rarity: 'Uncommon',
    description:
      'Clefable is a timid fairy Pokémon that is rarely seen. It runs and hides the moment it senses people.',
  },
  {
    name: 'Dewgong',
    location: 'Seafoam Islands',
    rarity: 'Rare',
    description:
      'Its entire body is a snowy white. Unharmed by even intense cold, it swims powerfully in icy waters.',
  },
  {
    name: 'Farfetchd',
    location: 'Route 12',
    rarity: 'Uncommon',
    description:
      'Farfetchd is always seen with a stick from a plant of some sort. Apparently, there are good sticks and bad sticks. This Pokémon has been known to fight with others over sticks.',
  },
  {
    name: 'Ivysaur',
    location: 'Viridian Forest',
    rarity: 'Uncommon',
    description:
      'There is a plant bulb on its back. When it absorbs nutrients, the bulb is said to blossom into a large flower.',
  },
  {
    name: 'Golbat',
    location: 'Rock Tunnel',
    rarity: 'Common',
    description:
      'Golbat loves to drink the blood of living things. It is particularly active in the pitch black of night.',
  },
  {
    name: 'Kadabra',
    location: 'Saffron City',
    rarity: 'Uncommon',
    description:
      'Kadabra emits a peculiar alpha wave if it develops a headache. Only those people with a strong psyche can hope to become a Trainer of this Pokémon.',
  },
  {
    name: 'Kakuna',
    location: 'Viridian Forest',
    rarity: 'Common',
    description:
      'While awaiting evolution, it hides from predators under leaves and in nooks of branches.',
  },
  {
    name: 'Metapod',
    location: 'Viridian Forest',
    rarity: 'Common',
    description:
      'Metapod’s body is as hard as an iron slab. A Metapod does not move very much—it stays still because it is preparing its soft innards for evolution inside the hard shell.',
  },
  {
    name: 'Pidgeot',
    location: 'Route 16',
    rarity: 'Uncommon',
    description:
      'This Pokémon flies at Mach 2 speed, seeking prey. Its large talons are feared as wicked weapons.',
  },
  {
    name: 'Pidgeotto',
    location: 'Route 16',
    rarity: 'Common',
    description:
      'Pidgeotto claims a large area as its own territory. This Pokémon flies around, patrolling its living space.',
  },
  {
    name: 'Pidgey',
    location: 'Route 1',
    rarity: 'Common',
    description:
      'Pidgey is a docile Pokémon that prefers to avoid conflict. If disturbed, however, it can ferociously strike back.',
  },
  {
    name: 'Pikachu',
    location: 'Viridian Forest',
    rarity: 'Rare',
    description:
      'Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.',
  },
  {
    name: 'Ponyta',
    location: 'Route 17',
    rarity: 'Uncommon',
    description:
      'As a newborn, it can barely stand. However, through galloping, its legs are made tougher and faster.',
  },
  {
    name: 'Raichu',
    location: 'Power Plant',
    rarity: 'Rare',
    description:
      'If the electrical sacs become excessively charged, Raichu plants its tail in the ground and discharges. Scorched patches of ground will be found near this Pokémon’s nest.',
  },
  {
    name: 'Raticate',
    location: 'Route 4',
    rarity: 'Common',
    description:
      'Raticate’s sturdy fangs grow steadily. To keep them ground down, it gnaws on rocks and logs. It may even chew on the walls of houses.',
  },
  {
    name: 'Rattata',
    location: 'Route 1',
    rarity: 'Common',
    description:
      'Rattata is cautious in the extreme. Even while it is asleep, it constantly listens by moving its ears around.',
  },
  {
    name: 'Squirtle',
    location: 'Cerulean City',
    rarity: 'Rare',
    description:
      'When it retracts its long neck into its shell, it squirts out water with vigorous force.',
  },
  {
    name: 'Venusaur',
    location: 'Viridian Forest',
    rarity: 'Rare',
    description:
      'Venusaur’s flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower’s aroma soothes the emotions of people.',
  },
  {
    name: 'Vulpix',
    location: 'Route 7',
    rarity: 'Uncommon',
    description:
      'As each tail grows, its fur becomes more lustrous. When held, it feels slightly warm.',
  },
  {
    name: 'Wartortle',
    location: 'Seafoam Islands',
    rarity: 'Uncommon',
    description:
      'Its tail is large and covered with a rich, thick fur. The tail becomes increasingly deeper in color as Wartortle ages.',
  },
  {
    name: 'Weedle',
    location: 'Viridian Forest',
    rarity: 'Common',
    description:
      'Weedle has an extremely acute sense of smell. It is capable of distinguishing its favorite kinds of leaves from those it dislikes just by sniffing with its big red proboscis (nose).',
  },
].map((pokemon, index) => ({
  id: index + 1, // Generate a unique id for each Pokémon
  name: pokemon.name,
  image: `${process.env.PUBLIC_URL}/images/pokemons/${pokemon.name}.png`,
  location: pokemon.location,
  rarity: pokemon.rarity,
  description: pokemon.description,
}));

export default pokemons;
