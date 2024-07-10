const data = {
    animals: [
        { word: "Lion", image: "assets/images/animals/lion.png", audio: "assets/audios/animals/lion.mp3", description: "A large carnivorous feline mammal, native to Africa and India." },
        { word: "Cat", image: "assets/images/animals/cat.png", audio: "assets/audios/animals/cat.mp3", description: "A small domesticated carnivorous mammal with soft fur, a short snout, and retractile claws." },
        { word: "Dog", image: "assets/images/animals/dog.png", audio: "assets/audios/animals/dog.mp3", description: "A domesticated carnivorous mammal that typically has a long snout, an acute sense of smell, and a barking, howling, or whining voice." },
        { word: "Elephant", image: "assets/images/animals/elephant.png", audio: "assets/audios/animals/elephant.mp3", description: "A very large herbivorous mammal with a trunk and ivory tusks, native to Africa and southern Asia." },
        { word: "Wolf", image: "assets/images/animals/wolf.png", audio: "assets/audios/animals/wolf.mp3", description: "A wild carnivorous mammal of the dog family, living and hunting in packs." },
        { word: "Sheep", image: "assets/images/animals/sheep.png", audio: "assets/audios/animals/sheep.mp3", description: "A domesticated ruminant mammal with a thick woolly coat and typically kept as livestock." },
        { word: "Shark", image: "assets/images/animals/shark.png", audio: "assets/audios/animals/shark.mp3", description: "A long-bodied chiefly marine fish with a cartilaginous skeleton, a prominent dorsal fin, and toothlike scales." },
        { word: "Rabbit", image: "assets/images/animals/rabbit.png", audio: "assets/audios/animals/rabbit.mp3", description: "A burrowing, gregarious, plant-eating mammal with long ears, long hind legs, and a short tail." },
        { word: "Tiger", image: "assets/images/animals/tiger.png", audio: "assets/audios/animals/tiger.mp3", description: "A large solitary cat with a yellowish-brown coat striped with black, native to Asia." },
        { word: "Chicken", image: "assets/images/animals/chicken.png", audio: "assets/audios/animals/chicken.mp3", description: "A domesticated bird that is typically kept for its eggs and meat, especially a young one." }
        ],

   fruits: [
        { 
            word: "Apple", 
            image: "assets/images/fruits/apple.png", 
            audio: "assets/apple.mp3", 
            description: "A round fruit with smooth skin, typically red, yellow, or green. Crisp texture, sweet to slightly tart taste. Rich in fiber and vitamin C, good for digestion, immune health, eyes, and skin."
        },
        { 
            word: "Banana", 
            image: "assets/images/fruits/banana.png", 
            audio: "assets/banana.mp3", 
            description: "A curved fruit with yellow peel and soft, creamy flesh. Sweet flavor, rich in potassium and vitamins, good for heart health, muscles, eyes, and skin."
        },
        { 
            word: "Coconut", 
            image: "assets/images/fruits/coconut.png", 
            audio: "assets/coconut.mp3", 
            description: "An oval nut with a hard brown husk, containing sweet, creamy white flesh and coconut water. Rich in electrolytes and healthy fats, good for hydration, energy, and skin health."
        },
        { 
            word: "Dragon Fruit", 
            image: "assets/images/fruits/dragon-fruit.png", 
            audio: "assets/dragon-fruit.mp3", 
            description: "A tropical fruit with bright pink or yellow skin and white or pink flesh speckled with black seeds. Mild, sweet flavor, rich in antioxidants, vitamins, and fiber, good for immunity, digestion, eyes, and skin."
        },
        { 
            word: "Grape", 
            image: "assets/images/fruits/grape.png", 
            audio: "assets/grape.mp3", 
            description: "Small berries with thin skin, green, red, or purple. Juicy flesh, sweet with a hint of tartness. Rich in antioxidants and vitamins, good for heart health, immunity, eyes, and skin."
        },
        { 
            word: "Jackfruit", 
            image: "assets/images/fruits/jack-fruit.png", 
            audio: "assets/jack-fruit.mp3", 
            description: "A large tropical fruit with spiky green or yellow skin and sweet, fragrant yellow flesh. Rich in fiber, vitamins, and minerals, good for digestion, immune function, and skin health."
        },
        { 
            word: "Melon", 
            image: "assets/images/fruits/melon.png", 
            audio: "assets/melon.mp3", 
            description: "A round fruit with smooth or netted skin, green, yellow, orange, or white. Juicy, sweet flesh, refreshing taste. Rich in water, vitamins, and antioxidants, good for hydration, skin, and eyes."
        },
        { 
            word: "Orange", 
            image: "assets/images/fruits/orange.png", 
            audio: "assets/orange.mp3", 
            description: "A citrus fruit with bright orange peel and juicy segmented flesh. Tangy sweet flavor, rich in vitamin C and antioxidants, good for immunity, skin health, and eyes."
        },
        { 
            word: "Peach", 
            image: "assets/images/fruits/peach.png", 
            audio: "assets/peach.mp3", 
            description: "A round fruit with velvety skin, yellow to red blush. Juicy, sweet flesh with a large pit. Rich in vitamins and antioxidants, good for heart health, digestion, skin, and hair."
        },
        { 
            word: "Strawberry", 
            image: "assets/images/fruits/strawberry.png", 
            audio: "assets/strawberry.mp3", 
            description: "A small heart-shaped berry with red skin and juicy flesh. Sweet with a hint of tartness. Rich in vitamin C, antioxidants, and fiber, good for immunity, digestion, eyes, and skin."
        }
        // Tambahkan lebih banyak kata buah di sini
    ],




    vehicles: [
        { word: "Bus", image: "assets/bus.png", audio: "assets/bus.mp3", description: "A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare." },
        { word: "Truck", image: "assets/truck.png", audio: "assets/truck.mp3", description: "A large, heavy motor vehicle for transporting goods or troops." },
        { word: "Motorcycle", image: "assets/motorcycle.png", audio: "assets/motorcycle.mp3", description: "A two-wheeled vehicle that is powered by an internal combustion engine." },
        { word: "Van", image: "assets/van.png", audio: "assets/van.mp3", description: "A covered motor vehicle used for transporting goods or people." },
        { word: "Scooter", image: "assets/scooter.png", audio: "assets/scooter.mp3", description: "A small-wheeled vehicle propelled by a motor or by the rider pushing off the ground." },
        { word: "Train", image: "assets/train.png", audio: "assets/train.mp3", description: "A series of connected railroad cars pulled or pushed by one or more locomotives." },
        { word: "Helicopter", image: "assets/helicopter.png", audio: "assets/helicopter.mp3", description: "A type of aircraft that derives both lift and propulsion from one or more sets of horizontally revolving overhead rotors." },
        { word: "Boat", image: "assets/boat.png", audio: "assets/boat.mp3", description: "A small vessel propelled on water by oars, sails, or an engine." },
        { word: "Airplane", image: "assets/airplane.png", audio: "assets/airplane.mp3", description: "A powered flying vehicle with fixed wings and a weight greater than that of the air it displaces." },
        { word: "Submarine", image: "assets/submarine.png", audio: "assets/submarine.mp3", description: "A watercraft capable of independent operation below the surface of the water." }
    ],

    colors: [
        { word: "Yellow", image: "assets/yellow.png", audio: "assets/yellow.mp3", description: "A color like that of egg yolk or ripe lemons." },
        { word: "Green", image: "assets/green.png", audio: "assets/green.mp3", description: "The color of growing foliage, as well as emeralds." },
        { word: "Purple", image: "assets/purple.png", audio: "assets/purple.mp3", description: "A color intermediate between red and blue." },
        { word: "Orange", image: "assets/orange.png", audio: "assets/orange.mp3", description: "A bright, reddish-yellow color like that of the skin of a ripe orange." },
        { word: "Pink", image: "assets/pink.png", audio: "assets/pink.mp3", description: "A color intermediate between red and white." },
        { word: "Brown", image: "assets/brown.png", audio: "assets/brown.mp3", description: "A color produced by mixing red, yellow, and blue, as of dark wood or rich soil." },
        { word: "Black", image: "assets/black.png", audio: "assets/black.mp3", description: "The darkest color, resulting from the absence or complete absorption of light." },
        { word: "White", image: "assets/white.png", audio: "assets/white.mp3", description: "The color or achromatic color of maximum lightness." },
        { word: "Gray", image: "assets/gray.png", audio: "assets/gray.mp3", description: "A color intermediate between black and white." },
        { word: "Silver", image: "assets/silver.png", audio: "assets/silver.mp3", description: "A shiny grayish-white metallic color." }
    ],

    clothing: [
        { word: "Dress", image: "assets/dress.png", audio: "assets/dress.mp3", description: "A one-piece garment for a woman or girl that covers the body and extends down over the legs." },
        { word: "Skirt", image: "assets/skirt.png", audio: "assets/skirt.mp3", description: "A garment hanging from the waist and worn by women and girls." },
        { word: "Jacket", image: "assets/jacket.png", audio: "assets/jacket.mp3", description: "A short coat, typically extending to the hips." },
        { word: "Sweater", image: "assets/sweater.png", audio: "assets/sweater.mp3", description: "A knitted garment worn on the upper body." },
        { word: "Coat", image: "assets/coat.png", audio: "assets/coat.mp3", description: "A long outer garment worn to protect against the weather." },
        { word: "Shorts", image: "assets/shorts.png", audio: "assets/shorts.mp3", description: "Garments worn on the lower part of the body, typically covering the hips and thighs." },
        { word: "Socks", image: "assets/socks.png", audio: "assets/socks.mp3", description: "Garments worn on the feet, typically covering the ankle and lower leg." },
        { word: "Gloves", image: "assets/gloves.png", audio: "assets/gloves.mp3", description: "Coverings for the hands, typically having separate sections for each finger and the thumb." },
        { word: "Hat", image: "assets/hat.png", audio: "assets/hat.mp3", description: "A shaped covering for the head worn for warmth, as a fashion item, or as part of a uniform." },
        { word: "Scarf", image: "assets/scarf.png", audio: "assets/scarf.mp3", description: "A length or square of fabric worn around the neck or head." }
    ],

    bodyparts: [
        { word: "Head", image: "assets/head.png", audio: "assets/head.mp3", description: "The upper part of the human body, containing the brain, eyes, ears, nose, and mouth." },
        { word: "Face", image: "assets/face.png", audio: "assets/face.mp3", description: "The front part of a person's head, from the forehead to the chin." },
        { word: "Eye", image: "assets/eye.png", audio: "assets/eye.mp3", description: "Each of a pair of globular organs in the head through which people and vertebrate animals see." },
        { word: "Ear", image: "assets/ear.png", audio: "assets/ear.mp3", description: "The organ of hearing and balance in humans and other vertebrates, especially the external part of this." },
        { word: "Mouth", image: "assets/mouth.png", audio: "assets/mouth.mp3", description: "The opening in the face of a person or animal through which food is taken in and vocal sounds are emitted." },
        { word: "Nose", image: "assets/nose.png", audio: "assets/nose.mp3", description: "The part projecting above the mouth on the face of a person or animal, containing the nostrils and used for breathing and smelling." },
        { word: "Leg", image: "assets/leg.png", audio: "assets/leg.mp3", description: "Each of the limbs on which a person or animal walks and stands." },
        { word: "Arm", image: "assets/arm.png", audio: "assets/arm.mp3", description: "Each of the two upper limbs of the human body from the shoulder to the hand." },
        { word: "Knee", image: "assets/knee.png", audio: "assets/knee.mp3", description: "The joint between the thigh and the lower leg in humans." },
        { word: "Back", image: "assets/back.png", audio: "assets/back.mp3", description: "The rear surface of the human body from the shoulders to the hips." }
    ],

    occupations: [
        { word: "Engineer", image: "assets/engineer.png", audio: "assets/engineer.mp3", description: "A person who designs, builds, or maintains engines, machines, or structures." },
        { word: "Lawyer", image: "assets/lawyer.png", audio: "assets/lawyer.mp3", description: "A person who practices or studies law, especially (in the UK) a solicitor or a barrister." },
        { word: "Chef", image: "assets/chef.png", audio: "assets/chef.mp3", description: "A professional cook, typically the chief cook in a restaurant or hotel." },
        { word: "Artist", image: "assets/artist.png", audio: "assets/artist.mp3", description: "A person who creates paintings or drawings as a profession or hobby." },
        { word: "Police Officer", image: "assets/police.png", audio: "assets/police.mp3", description: "A member of a police force; a law enforcement officer." },
        { word: "Firefighter", image: "assets/firefighter.png", audio: "assets/firefighter.mp3", description: "A person whose job is to extinguish fires." },
        { word: "Pilot", image: "assets/pilot.png", audio: "assets/pilot.mp3", description: "A person who operates the controls of an aircraft or spacecraft." },
        { word: "Journalist", image: "assets/journalist.png", audio: "assets/journalist.mp3", description: "A person who writes for newspapers, magazines, or news websites or prepares news to be broadcast." },
        { word: "Architect", image: "assets/architect.png", audio: "assets/architect.mp3", description: "A person who designs buildings and in many cases also supervises their construction." },
        { word: "Electrician", image: "assets/electrician.png", audio: "assets/electrician.mp3", description: "A person who installs and maintains electrical equipment." }
    ],

    countries: [
        { word: "China", image: "assets/china.png", audio: "assets/china.mp3", description: "A country in East Asia, known for its ancient civilization and modern economic power." },
        { word: "India", image: "assets/india.png", audio: "assets/india.mp3", description: "A country in South Asia, known for its cultural diversity and rich history." },
        { word: "Brazil", image: "assets/brazil.png", audio: "assets/brazil.mp3", description: "A country in South America, known for its vast Amazon rainforest and vibrant culture." },
        { word: "Russia", image: "assets/russia.png", audio: "assets/russia.mp3", description: "The largest country in the world, located in Eastern Europe and Northern Asia." },
        { word: "Germany", image: "assets/germany.png", audio: "assets/germany.mp3", description: "A country in Central Europe known for its engineering prowess and rich cultural heritage." },
        { word: "France", image: "assets/france.png", audio: "assets/france.mp3", description: "A country in Western Europe known for its art, fashion, and cuisine." },
        { word: "Australia", image: "assets/australia.png", audio: "assets/australia.mp3", description: "A country and continent surrounded by the Indian and Pacific oceans, known for its diverse wildlife and landscapes." },
        { word: "Canada", image: "assets/canada.png", audio: "assets/canada.mp3", description: "A country in North America known for its vast wilderness and multicultural cities." },
        { word: "Mexico", image: "assets/mexico.png", audio: "assets/mexico.mp3", description: "A country in North America known for its ancient ruins, beaches, and vibrant culture." },
        { word: "South Africa", image: "assets/south-africa.png", audio: "assets/south-africa.mp3", description: "A country on the southernmost tip of Africa, known for its diverse cultures, wildlife, and landscapes." }
    ],
    sports: [
        { word: "Tennis", image: "assets/tennis.png", audio: "assets/tennis.mp3", description: "A sport played with a racket and ball on a rectangular court, with players on either side of a net." },
        { word: "Golf", image: "assets/golf.png", audio: "assets/golf.mp3", description: "A sport played on a large outdoor course, in which players use specially designed clubs to hit a small ball into a series of holes in the fewest strokes." },
        { word: "Swimming", image: "assets/swimming.png", audio: "assets/swimming.mp3", description: "The sport or activity of propelling oneself through water using the limbs." },
        { word: "Athletics", image: "assets/athletics.png", audio: "assets/athletics.mp3", description: "A collection of sporting events that involve competitive running, jumping, throwing, and walking." },
        { word: "Cricket", image: "assets/cricket.png", audio: "assets/cricket.mp3", description: "A bat-and-ball game played between two teams of eleven players on a field, with the objective of scoring runs." },
        { word: "Boxing", image: "assets/boxing.png", audio: "assets/boxing.mp3", description: "A sport in which two opponents fight using their fists, typically in a boxing ring." },
        { word: "Hockey", image: "assets/hockey.png", audio: "assets/hockey.mp3", description: "A team sport played on ice or field, in which players use sticks to hit a small, hard ball or puck into the opponent's goal." },
        { word: "Rugby", image: "assets/rugby.png", audio: "assets/rugby.mp3", description: "A contact team sport that originated in England in the first half of the 19th century." },
        { word: "Cycling", image: "assets/cycling.png", audio: "assets/cycling.mp3", description: "The sport or activity of riding a bicycle." },
        { word: "Wrestling", image: "assets/wrestling.png", audio: "assets/wrestling.mp3", description: "A sport in which two opponents grapple with each other using their arms and legs, with the aim of pinning or throwing their opponent to the ground." }
    ],
    furniture: [
        { word: "Bed", image: "assets/bed.png", audio: "assets/bed.mp3", description: "A piece of furniture used for sleeping or resting." },
        { word: "Couch", image: "assets/couch.png", audio: "assets/couch.mp3", description: "A long upholstered piece of furniture for several people to sit on." },
        { word: "Wardrobe", image: "assets/wardrobe.png", audio: "assets/wardrobe.mp3", description: "A large, tall cupboard or recess in which clothes may be hung or stored." },
        { word: "Desk", image: "assets/desk.png", audio: "assets/desk.mp3", description: "A piece of furniture with a flat or sloped surface and typically with drawers, used for writing, drawing, or working at a computer." },
        { word: "Bookshelf", image: "assets/bookshelf.png", audio: "assets/bookshelf.mp3", description: "A shelf or shelves on which books can be stored." },
        { word: "Dresser", image: "assets/dresser.png", audio: "assets/dresser.mp3", description: "A piece of furniture with drawers and typically a mirror, used for storing clothes." },
        { word: "Coffee Table", image: "assets/coffee-table.png", audio: "assets/coffee-table.mp3", description: "A low table designed to be placed in a living room and used for serving coffee or other beverages." },
        { word: "Nightstand", image: "assets/nightstand.png", audio: "assets/nightstand.mp3", description: "A small table or cabinet typically placed beside a bed." },
        { word: "Dining Table", image: "assets/dining-table.png", audio: "assets/dining-table.mp3", description: "A table at which meals are served, especially one seating several people." },
        { word: "Armchair", image: "assets/armchair.png", audio: "assets/armchair.mp3", description: "A comfortable chair with side supports for a person's arms." }
    ],
    instruments: [
        { word: "Violin", image: "assets/violin.png", audio: "assets/violin.mp3", description: "A stringed musical instrument of treble pitch, played with a horsehair bow." },
        { word: "Drums", image: "assets/drums.png", audio: "assets/drums.mp3", description: "A percussion instrument consisting of a hollow shell covered at one or both ends with a tightly stretched membrane, played by beating with the hands or a stick." },
        { word: "Flute", image: "assets/flute.png", audio: "assets/flute.mp3", description: "A wind instrument made from a tube with holes that are stopped by the fingers or keys, held vertically or horizontally." },
        { word: "Trumpet", image: "assets/trumpet.png", audio: "assets/trumpet.mp3", description: "A brass musical instrument with a flared bell and a bright, penetrating tone." },
        { word: "Saxophone", image: "assets/saxophone.png", audio: "assets/saxophone.mp3", description: "A woodwind instrument of metal with a curved tube and finger holes." },
        { word: "Harmonica", image: "assets/harmonica.png", audio: "assets/harmonica.mp3", description: "A small rectangular wind instrument with a row of metal reeds along its length, held against the lips and moved from side to side to produce different notes." },
        { word: "Accordion", image: "assets/accordion.png", audio: "assets/accordion.mp3", description: "A portable musical instrument with metal reeds blown by bellows, played by means of keys and buttons." },
        { word: "Cello", image: "assets/cello.png", audio: "assets/cello.mp3", description: "A bass instrument of the violin family, held upright on the floor between the legs of the seated player." },
        { word: "Harp", image: "assets/harp.png", audio: "assets/harp.mp3", description: "A large, stringed musical instrument that is played by plucking or strumming its strings with the fingers or a pick." },
        { word: "Percussion", image: "assets/percussion.png", audio: "assets/percussion.mp3", description: "A group of musical instruments that are played by being struck or shaken." }
    ],
    emotions: [
    { word: "Angry", image: "assets/angry.png", audio: "assets/angry.mp3", description: "Feeling or showing strong annoyance, displeasure, or hostility." },
    { word: "Excited", image: "assets/excited.png", audio: "assets/excited.mp3", description: "Very enthusiastic and eager." },
    { word: "Surprised", image: "assets/surprised.png", audio: "assets/surprised.mp3", description: "Feeling or showing mild astonishment or shock." },
    { word: "Calm", image: "assets/calm.png", audio: "assets/calm.mp3", description: "Not showing or feeling nervousness, anger, or other strong emotions." },
    { word: "Confused", image: "assets/confused.png", audio: "assets/confused.mp3", description: "Unable to think clearly; bewildered." },
    { word: "Proud", image: "assets/proud.png", audio: "assets/proud.mp3", description: "Feeling deep pleasure or satisfaction as a result of one's own achievements, qualities, or possessions." },
    { word: "Shy", image: "assets/shy.png", audio: "assets/shy.mp3", description: "Being reserved or having or showing nervousness or timidity in the company of other people." },
    { word: "Embarrassed", image: "assets/embarrassed.png", audio: "assets/embarrassed.mp3", description: "Feeling or showing embarrassment." },
    { word: "Happy", image: "assets/happy.png", audio: "assets/happy.mp3", description: "Feeling or showing pleasure or contentment." },
    { word: "Sad", image: "assets/sad.png", audio: "assets/sad.mp3", description: "Feeling or showing sorrow; unhappy." }
    ],
    shapes: [
        { word: "Triangle", image: "assets/triangle.png", audio: "assets/triangle.mp3", description: "A plane figure with three straight sides and three angles." },
        { word: "Rectangle", image: "assets/rectangle.png", audio: "assets/rectangle.mp3", description: "A plane figure with four straight sides and four right angles, especially one with unequal adjacent sides, in contrast to a square." },
        { word: "Oval", image: "assets/oval.png", audio: "assets/oval.mp3", description: "A rounded shape like that of an egg or an ellipse." },
        { word: "Diamond", image: "assets/diamond.png", audio: "assets/diamond.mp3", description: "A figure with four straight sides of equal length, forming two opposite acute angles and two opposite obtuse angles; a rhombus." },
        { word: "Pentagon", image: "assets/pentagon.png", audio: "assets/pentagon.mp3", description: "A plane figure with five straight sides and five angles." },
        { word: "Hexagon", image: "assets/hexagon.png", audio: "assets/hexagon.mp3", description: "A plane figure with six straight sides and angles." },
        { word: "Octagon", image: "assets/octagon.png", audio: "assets/octagon.mp3", description: "A plane figure with eight straight sides and eight angles." },
        { word: "Heart", image: "assets/heart.png", audio: "assets/heart.mp3", description: "A symbol or shape traditionally representing the heart." },
        { word: "Star", image: "assets/star.png", audio: "assets/star.mp3", description: "A shape with a pointed tip and typically five or more projecting straight sides, often used as a symbol." },
        { word: "Crescent", image: "assets/crescent.png", audio: "assets/crescent.mp3", description: "A shape resembling a segment of a ring tapering to points at the ends." }
    ],
    food: [
        { word: "Sushi", image: "assets/sushi.png", audio: "assets/sushi.mp3", description: "A Japanese dish consisting of small balls or rolls of vinegar-flavored cold rice served with a garnish of raw fish, vegetables, or egg." },
        { word: "Pasta", image: "assets/pasta.png", audio: "assets/pasta.mp3", description: "Italian-style food made from a mixture of flour, eggs, and water, formed into different shapes and typically served with a sauce." },
        { word: "Ice Cream", image: "assets/ice-cream.png", audio: "assets/ice-cream.mp3", description: "A sweet frozen food typically eaten as a snack or dessert." },
        { word: "Chocolate", image: "assets/chocolate.png", audio: "assets/chocolate.mp3", description: "A food in the form of a paste or solid block made from roasted and ground cacao seeds, typically sweetened and eaten as a snack or dessert." },
        { word: "Salad", image: "assets/salad.png", audio: "assets/salad.mp3", description: "A cold dish of various mixtures of raw or cooked vegetables, usually seasoned with oil, vinegar, or other dressing and sometimes accompanied by meat, fish, or other ingredients." },
        { word: "Soup", image: "assets/soup.png", audio: "assets/soup.mp3", description: "A liquid dish, typically made by boiling meat, fish, or vegetables in stock or water." },
        { word: "Fruit", image: "assets/fruit.png", audio: "assets/fruit.mp3", description: "The sweet and fleshy product of a tree or other plant that contains seed and can be eaten as food." },
        { word: "Sandwich", image: "assets/sandwich.png", audio: "assets/sandwich.mp3", description: "An item of food consisting of two pieces of bread with a filling between them, eaten as a light meal." },
        { word: "Steak", image: "assets/steak.png", audio: "assets/steak.mp3", description: "A slice of meat, typically beef, cooked by broiling, frying, or grilling." },
        { word: "Pizza", image: "assets/pizza.png", audio: "assets/pizza.mp3", description: "A dish of Italian origin consisting of a flat round base of dough baked with a topping of tomato sauce and cheese, typically with added meat or vegetables." }
    ],
    nature: [
        { word: "River", image: "assets/river.png", audio: "assets/river.mp3", description: "A large natural stream of water flowing in a channel to the sea, a lake, or another such stream." },
        { word: "Ocean", image: "assets/ocean.png", audio: "assets/ocean.mp3", description: "A very large expanse of sea, in particular each of the main areas into which the sea is divided geographically." },
        { word: "Forest", image: "assets/forest.png", audio: "assets/forest.mp3", description: "A large area covered chiefly with trees and undergrowth." },
        { word: "Sunset", image: "assets/sunset.png", audio: "assets/sunset.mp3", description: "The time in the evening when the sun disappears or daylight fades." },
        { word: "Beach", image: "assets/beach.png", audio: "assets/beach.mp3", description: "A pebbly or sandy shore, especially by the sea between high- and low-water marks." },
        { word: "Rainbow", image: "assets/rainbow.png", audio: "assets/rainbow.mp3", description: "An arc of colors visible in the sky, caused by the refraction and dispersion of the sun's light by rain or other water droplets in the atmosphere." },
        { word: "Lake", image: "assets/lake.png", audio: "assets/lake.mp3", description: "A large body of water surrounded by land." },
        { word: "Desert", image: "assets/desert.png", audio: "assets/desert.mp3", description: "A dry, barren area of land, especially one covered with sand, that is characteristically desolate, waterless, and without vegetation." },
        { word: "Waterfall", image: "assets/waterfall.png", audio: "assets/waterfall.mp3", description: "A cascade of water falling from a height, formed when a river or stream flows over a precipice or steep incline." },
        { word: "Volcano", image: "assets/volcano.png", audio: "assets/volcano.mp3", description: "A mountain or hill, typically conical, having a crater or vent through which lava, rock fragments, hot vapor, and gas are being or have been erupted from the earth's crust." }
    ],
    buildings: [
        { word: "Hospital", image: "assets/hospital.png", audio: "assets/hospital.mp3", description: "An institution providing medical and surgical treatment and nursing care for sick or injured people." },
        { word: "School", image: "assets/school.png", audio: "assets/school.mp3", description: "An institution for educating children." },
        { word: "Library", image: "assets/library.png", audio: "assets/library.mp3", description: "A building or room containing collections of books, periodicals, and sometimes films and recorded music for people to read, borrow, or refer to." },
        { word: "Museum", image: "assets/museum.png", audio: "assets/museum.mp3", description: "A building in which objects of historical, scientific, artistic, or cultural interest are stored and exhibited." },
        { word: "Airport", image: "assets/airport.png", audio: "assets/airport.mp3", description: "A place where aircraft regularly take off and land, with runways, hangars, terminals, and facilities for passengers and cargo." },
        { word: "Church", image: "assets/church.png", audio: "assets/church.mp3", description: "A building used for public Christian worship." },
        { word: "Supermarket", image: "assets/supermarket.png", audio: "assets/supermarket.mp3", description: "A large self-service store selling foods and household goods." },
        { word: "Post Office", image: "assets/post-office.png", audio: "assets/post-office.mp3", description: "An official building in a town where the postal system is administered, and mail is received and sorted." },
        { word: "Hotel", image: "assets/hotel.png", audio: "assets/hotel.mp3", description: "An establishment providing accommodations, meals, and other services for travelers and tourists." },
        { word: "Theater", image: "assets/theater.png", audio: "assets/theater.mp3", description: "A building or outdoor area in which plays and other dramatic performances are given." }
    ],
    technology: [
    { word: "Robot", image: "assets/robot.png", audio: "assets/robot.mp3", description: "A machine capable of carrying out a complex series of actions automatically, especially one programmable by a computer." },
    { word: "Satellite", image: "assets/satellite.png", audio: "assets/satellite.mp3", description: "An artificial body placed in orbit around the earth or moon or another planet in order to collect information or for communication." },
    { word: "Internet", image: "assets/internet.png", audio: "assets/internet.mp3", description: "A global computer network providing a variety of information and communication facilities, consisting of interconnected networks using standardized communication protocols." },
    { word: "Camera", image: "assets/camera.png", audio: "assets/camera.mp3", description: "A device for recording visual images in the form of photographs, film, or video signals." },
    { word: "Drone", image: "assets/drone.png", audio: "assets/drone.mp3", description: "An unmanned aerial vehicle (UAV) operated remotely and used for reconnaissance, aerial photography, or other purposes." },
    { word: "GPS", image: "assets/gps.png", audio: "assets/gps.mp3", description: "Global Positioning System, a space-based satellite navigation system that provides location and time information." },
    { word: "Smartwatch", image: "assets/smartwatch.png", audio: "assets/smartwatch.mp3", description: "A wearable device that resembles a wristwatch and provides functionality beyond timekeeping." },
    { word: "Virtual Reality", image: "assets/vr.png", audio: "assets/vr.mp3", description: "An artificial environment that is created with software and presented to the user in such a way that the user suspends belief and accepts it as a real environment." },
    { word: "Augmented Reality", image: "assets/ar.png", audio: "assets/ar.mp3", description: "An enhanced version of reality where live direct or indirect views of physical real-world environments are augmented with superimposed computer-generated images over a user's view of the real world." },
    { word: "Laptop", image: "assets/laptop.png", audio: "assets/laptop.mp3", description: "A portable computer small enough to use comfortably on one's lap." }
    ],
    transport: [
        { word: "Car", image: "assets/car.png", audio: "assets/car.mp3", description: "A road vehicle, typically with four wheels, powered by an internal combustion engine or electric motor and able to carry a small number of people." },
        { word: "Bicycle", image: "assets/bicycle.png", audio: "assets/bicycle.mp3", description: "A vehicle composed of two wheels held in a frame one behind the other, propelled by pedals and steered with handlebars attached to the front wheel." },
        { word: "Motorcycle", image: "assets/motorcycle.png", audio: "assets/motorcycle.mp3", description: "A two-wheeled vehicle that is powered by a motor and has no pedals." },
        { word: "Boat", image: "assets/boat.png", audio: "assets/boat.mp3", description: "A small vessel for traveling over water, propelled by oars, sails, or an engine." },
        { word: "Helicopter", image: "assets/helicopter.png", audio: "assets/helicopter.mp3", description: "A type of aircraft that derives both lift and propulsion from one or more sets of horizontally revolving overhead rotors." },
        { word: "Subway", image: "assets/subway.png", audio: "assets/subway.mp3", description: "An underground electric railroad." },
        { word: "Airplane", image: "assets/airplane.png", audio: "assets/airplane.mp3", description: "A powered flying vehicle with fixed wings and a weight greater than that of the air it displaces." },
        { word: "Truck", image: "assets/truck.png", audio: "assets/truck.mp3", description: "A large, heavy road vehicle used for carrying goods, materials, or troops." },
        { word: "Scooter", image: "assets/scooter.png", audio: "assets/scooter.mp3", description: "A light two-wheeled open motor vehicle on which the driver sits over an enclosed engine with legs together and feet resting on a floorboard." },
        { word: "Taxi", image: "assets/taxi.png", audio: "assets/taxi.mp3", description: "A car licensed to transport passengers in return for payment of a fare." }
    ]

};

function playSound(audioSrc) {
    const audio = new Audio(audioSrc);
    audio.play();
}

function createCard(item) {
    return `
        <div class="card" onclick="toggleDescription(this)">
            <img src="${item.image}" alt="${item.word}">
            <h3>${item.word}</h3>
            <button onclick="event.stopPropagation(); playSound('${item.audio}')">🔊</button>
            <div class="description">${item.description}</div>
        </div>
    `;
}

function createCategorySection(category, items) {
    const cards = items.map(createCard).join('');
    return `
        <section id="${category}" class="category">
            <h2>${category.charAt(0).toUpperCase() + category.slice(1)}</h2>
            <div class="cards">
                ${cards}
            </div>
        </section>
    `;
}

function loadContent() {
    const content = document.getElementById('content');
    content.innerHTML = "<p>Please select a category above to view vocabulary words.</p>";
}

function showCategory(category) {
    const content = document.getElementById('content');
    content.innerHTML = createCategorySection(category, data[category]);
}

function toggleDescription(card) {
    const description = card.querySelector('.description');
    const img = card.querySelector('img');
    
    if (description.style.display === 'none' || !description.style.display) {
        img.style.opacity = '0';
        setTimeout(() => {
            img.style.display = 'none';
            description.style.display = 'block';
            card.style.height = 'auto';
        }, 500);
    } else {
        description.style.display = 'none';
        img.style.display = 'block';
        setTimeout(() => {
            img.style.opacity = '1';
        }, 10);
    }
}

function searchCategories() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const categories = Object.keys(data).filter(category => category.includes(searchInput));
    const content = document.getElementById('content');
    
    if (categories.length > 0) {
        content.innerHTML = categories.map(category => createCategorySection(category, data[category])).join('');
    } else {
        content.innerHTML = "<p>No categories found.</p>";
    }
}

document.addEventListener('DOMContentLoaded', loadContent);
