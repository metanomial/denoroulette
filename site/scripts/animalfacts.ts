const facts = [
	// Turtles
	"Turtles have existed for around 215 million years.",
	"The largest turtle is the leatherback sea turtle, it can weigh over 900 kg! (2000 lb)",
	"In some species of turtle the temperature determines if the egg will develop into a male or female, lower temperatures lead to a male while higher temperatures lead to a female.",
	"Sea turtles have special glands which help remove salt from the water they drink.",
	// Jellyfish
	"Though jellyfish are soft-bodied and lack a skeleton, making fossils rare, there is evidence that jellyfish predate dinosaurs by some 400 million years.",
	"Jellyfish are 95 percent water.",
	"Most jellyfish live anywhere from a few hours to a few months. But a species of jelly called Turritopsis nutricula may be immortal. The jelly reportedly can play its lifecycle in reverse, transforming from an adult medusa back to an immature polyp.",
	"Jellyfish lack not only bones, but heads, hearts and brains.",
	// Lions
	"Lions are the laziest of all the big cats, and can sleep for 16-20 hours each day.",
	"An adult male lion’s roar can be heard up to 8km away.",
	"In the wild, lions live for an average of 12 years and up to 16 years. They live up to 25 years in captivity.",
	"Often known as the ‘king of the jungle’, most lions actually live in the savannah or grasslands. Just one population of wild forest-dwelling lions remains, in Gir Forest National Park, India.",
	// Zebras
	"Zebras run in a zig-zag pattern when being chased by a predator to make it more difficult for the predator to run after them.",
	"There are different types of zebra, each with a different stripe pattern. The mountain zebra normally has vertical stripes on its neck and across its torso while horizontal strips cover their legs.",
	"A mother zebra will keep her foal away from all other zebras for two or three days until the foal can recognize her scent, voice, and appearance.",
	"Zebra’s bunch together to confuse colorblind predators, such as lions, which mistake the pattern as grass.",
	// Dogs
	"Nearly all but two breeds of dogs have pink tongues: the Chow Chow and the Shar-pei both have black tongues.",
	"All dogs, regardless of breed, are direct descendants of wolves and technically of the same species.",
	"The Basenji is the only barkless dog in the world.",
	"Contrary to popular belief, dogs do not sweat by salivating. They sweat through the pads of their feet.",
	// Monkeys
	"The most recently discovered monkey is the lesula monkey. It was discovered in 2007 in the Democratic Republic of the Congo in Africa.",
	"At the tip of a monkey's tail is a patch of bare skin that acts similar to a human's fingertips. It is sensitive to touch and also has tiny ridges that gives the tail a better grip.",
	"Monkeys that live in Central and South America are called “New World monkeys.” Monkeys that live in Africa and Asia are called “Old World monkeys.”",
	"The Japanese macaque is the northernmost monkey and is capable of living in more than 3 feet of snow in as temperatures as low as -15°C (5°F)."
];

console.log(`\nAniminal Fact: ${ facts[Math.floor(Math.random() * facts.length)] }\n`);
