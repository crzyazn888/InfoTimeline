<?php
include("../../config/db.php");

//Function to create an Id
function createId() {
    //Two Arrays for Id
    $colors = ["Almond","AntiqueBrass","Apricot","Aquamarine","Asparagus","AtomicTangerine","BananaMania","Beaver","Bittersweet","Black","BlizzardBlue","Blue","BlueBell","BlueGray","BlueGreen","BlueViolet","Blush","BrickRed","Brown","BurntOrange","BurntSienna","CadetBlue","Canary","CaribbeanGreen","CarnationPink","Cerise","Cerulean","Chestnut","Copper","Cornflower","CottonCandy","Dandelion","Denim","DesertSand","Eggplant","ElectricLime","Fern","ForestGreen","Fuchsia","FuzzyWuzzy","Gold","Goldenrod","GrannySmithApple","Gray","Green","GreenBlue","GreenYellow","HotMagenta","Inchworm","Indigo","JazzberryJam","JungleGreen","LaserLemon","Lavender","LemonYellow","MacaroniandCheese","Magenta","MagicMint","Mahogany","Maize","Manatee","MangoTango","Maroon","Mauvelous","Melon","MidnightBlue","MountainMeadow","Mulberry","NavyBlue","NeonCarrot","OliveGreen","Orange","OrangeRed","OrangeYellow","Orchid","OuterSpace","OutrageousOrange","PacificBlue","Peach","Periwinkle","PiggyPink","PineGreen","PinkFlamingo","PinkSherbet","Plum","PurpleHeart","PurpleMountainsMajesty","PurplePizzazz","RadicalRed","RawSienna","RawUmber","RazzleDazzleRose","Razzmatazz","Red","RedOrange","RedViolet","RobinsEggBlue","RoyalPurple","Salmon","Scarlet","ScreaminGreen","SeaGreen","Sepia","Shadow","Shamrock","ShockingPink","Silver","SkyBlue","SpringGreen","Sunglow","SunsetOrange","Tan","TealBlue","Thistle","TickleMePink","Timberwolf","TropicalRainForest","Tumbleweed","TurquoiseBlue","UnmellowYellow","Violet","VioletBlue","VioletRed","VividTangerine","VividViolet","White","WildBlueYonder","WildStrawberry","WildWatermelon","Wisteria","Yellow","YellowGreen","YellowOrange"];
    $animals = ["Adelie","Affenpinscher","Hound","BushElephant","ForestElephant","Civet","Elephant","Penguin","TreeToad","Ainu","Akbash","Akita","Malamute","Albatross","Alligator","Dachsbracke","Bulldog","Foxhound","Angelfish","Ant","Anteater","Antelope","Appenzeller","Fox","Hare","Wolf","Armadillo","AsianElephant","CattleDog","KelpieDog","Mist","Shepherd","Terrier","Avocet","Axolotl","Baboon","Camel","Badger","Balinese","Bandicoot","Barb","BarnOwl","Barnacle","Barracuda","Basenji","Basking","Bat","Beagle","Bear","Collie","BeardedDragon","Beaver","Beetle","BengalTiger","Bichon","Binturong","Bird","Birman","Bison","BlackBear","Rhinoceros","Bloodhound","BlueWhale","Bluetick","Bobcat","Bolognese","Bombay","Bongo","Bonobo","Booby","BorderCollie","Orangutan","BorneoElephant","BoxerDog","Boykin","BrownBear","Budgerigar","Budgie","Buffalo","BullMastiff","BullShark","Bullfrog","Bumblebee","Burmese","Butterfly","Fish","Caiman","Lizard","Canaan","Capybara","Caracal","Carolina","Cassowary","Cat","Caterpillar","Catfish","Centipede","Cesky","Fousek","Chameleon","Chamois","Cheetah","Chicken","Chihuahua","Chimpanzee","Chinchilla","Chinook","Chinstrap","Chipmunk","ChowChow","Cichlid","Leopard","ClownFish","Clumber","Coati","Cockroach","CollaredPeccary","CommonBuzzard","CommonFrog","CommonLoon","CommonToad","Coral","Cottontop","Tamarin","Cougar","Cow","Coyote","Crab","Macaque","Crane","CrestedPenguin","Crocodile","Cuscus","Cuttlefish","Dachshund","Dalmatian","Frog","Deer","DesertTortoise","Bracke","Dhole","Dingo","Discus","Doberman","Pinscher","Dodo","Dog","Dogo","Argentino","Dolphin","Donkey","Dormouse","Dragonfly","Drever","Duck","Dugong","Dunker","Dusky","Eagle","Earwig","Gorilla","Echidna","Mau","ElectricEel","ElephantSeal","ElephantShrew","Emu","EskimoDog","Falcon","Fennec","Ferret","FinWhale","Spitz","FireBelliedToad","FishingCat","Flamingo","Flounder","Fly","FlyingSquirrel","Fossa","FoxTerrier","FrenchBulldog","Frigatebird","FrilledLizard","FurSeal","GalapagosPenguin","GalapagosTortoise","Gar","Gecko","GentooPenguin","Gerbil","Gharial","GiantClam","Gibbon","GilaMonster","Giraffe","GlassLizard","GlowWorm","Goat","Oriole","Retriever","Goose","Gopher","Grasshopper","GreatDane","GreySeal","Greyhound","GrizzlyBear","Grouse","GuineaFowl","GuineaPig","Guppy","Hammerhead","Shark","Hamster","Harrier","Havanese","Hedgehog","HerculesBeetle","HermitCrab","Heron","HighlandCattle","Himalayan","Hippopotamus","HoneyBee","HornShark","HornedFrog","Horse","HorseshoeCrab","HowlerMonkey","Human","Humboldt","Hummingbird","HumpbackWhale","Hyena","Ibis","IbizanHound","Iguana","Impala","IndianElephant","IndianRhinoceros","IndochineseTiger","Indri","Insect","Setter","WolfHound","JackRussel","Jackal","Jaguar","Chin","Javanese","Jellyfish","Kakapo","Kangaroo","KillerWhale","KingCrab","KingPenguin","Kingfisher","Kiwi","Koala","KomodoDragon","Kudu","Labradoodle","LabradorRetriever","Ladybird","LeafTailedGecko","Lemming","Lemur","LeopardCat","LeopardSeal","LeopardTortoise","Liger","Lion","Lionfish","LittlePenguin","Llama","Lobster","Owl","Lynx","MacaroniPenguin","Macaw","Magpie","MaineCoon","MalayanCivet","MalayanTiger","Maltese","Manatee","Mandrill","MantaRay","MarineToad","Markhor","MarshFrog","Mastiff","Mayfly","Meerkat","Millipede","MinkeWhale","Mole","Molly","Mongoose","Mongrel","Monitor","Monkey","Moorhen","Moose","Eel","Moray","Moth","MountainLion","Mouse","Mule","Neanderthal","Neapolitan","Newfoundland","Newt","Nightingale","Numbat","NurseShark","Ocelot","Octopus","Okapi","Olm","Opossum","Ostrich","Otter","Oyster","Pademelon","Panther","Parrot","PatasMonkey","Peacock","Pekingese","Pelican","Persian","Pheasant","PiedTamarin","Pig","Pika","Pike","Piranha","Platypus","Pointer","PolarBear","PondSkater","Poodle","PoolFrog","Porcupine","Possum","Prawn","ProboscisMonkey","PufferFish","Puffin","Pug","Puma","Marmoset","Pygmy","Quail","Quetzal","Quokka","Quoll","Rabbit","Raccoon","RaccoonDog","Ragdoll","Rat","Rattlesnake","RedPanda","RedWolf","Reindeer","RiverDolphin","RiverTurtle","Robin","RockHyrax","Rockhopper","RoseateSpoonbill","Rottweiler","RoyalPenguin","RussianBlue","SabreToothedTiger","SaintBernard","Salamander","SandLizard","Saola","Scorpion","ScorpionFish","SeaDragon","SeaLion","SeaOtter","SeaSlug","SeaSquirt","SeaTurtle","SeaUrchin","Seahorse","Seal","Serval","Sheep","ShihTzu","Shrimp","Siamese","Siberian","SiberianHusky","SiberianTiger","SilverDollar","Skunk","Sloth","SlowWorm","Snail","Snake","SnappingTurtle","Snowshoe","SnowyOwl","Somali","SpadefootToad","Sparrow","SpectacledBear","SpermWhale","SpiderMonkey","Dogfish","Sponge","Squid","Squirrel","SquirrelMonkey","StagBeetle","Starfish","Stickbug","Stingray","Stoat","SunBear","Swan","Tang","Tapir","Tarsier","TasmanianDevil","TawnyOwl","Termite","Tetra","ThornyDevil","Tiffany","Tiger","TigerSalamander","TigerShark","Tortoise","Toucan","TreeFrog","Tropicbird","Tuatara","Turkey","Uakari","Uguisu","Umbrellabird","VampireBat","VervetMonkey","Vulture","Wallaby","Walrus","Warthog","Wasp","WaterBuffalo","WaterDragon","WaterVole","Weasel","WelshCorgi","WhaleShark","Whippet","WhiteTiger","WildBoar","Wildebeest","Wolverine","Wombat","Woodlouse","Woodpecker","WoollyMammoth","WoollyMonkey","Wrasse","Yak","YellowEyedPenguin","Yorkie","Yorkiepoo","Zebra","ZebraShark","Zebu","Zonkey","Zorse"];

    //Random choices
    $color = $colors[array_rand($colors)];
    $animal = $animals[array_rand($animals)];
    return $color.$animal;
}

//Initial Id Creation and check
$id = createId();
$sql = "SELECT * FROM it_user_state WHERE id='".$id."'";
$result = $conn->query($sql);

//Make sure ID is unique
while($result->num_rows != 0) {
    $id = createId();
    $sql = "SELECT * FROM it_user_state WHERE id='".$id."'";
    $result = $conn->query($sql);
}

echo $id;
?>
