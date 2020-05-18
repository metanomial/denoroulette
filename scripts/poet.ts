/**
 * Pick random element from an array 
 */
function pickRandom(array: any[]): any {
	return array[Math.floor(Math.random() * array.length)];
}

/**
 * Generate a preposition
 */
function preposition(): string {
	return pickRandom([ "about", "against", "along", "amid", "among", "around", "as", "at", "before", "between", "beyond", "by", "despite", "except", "for", "from", "in", "into", "of", "past", "since", "to", "until", "with", "within", "without" ]);
}

/**
 * Generate an adjective
 */
function adjective(): string {
	return pickRandom([ "timeless", "infinite", "ancient", "fanciful", "beautiful", "delicate", "fragrant", "tall", "flowing", "nimble", "elusive", "hot", "cold", "tepid", "misty", "bare", "coarse", "forlorn", "empty", "pensive", "blind", "dim", "dreary", "elaborate", "enchanting", "gleaming", "glistening", "shining", "tender", "soft" ]);
}

/**
 * Generate an adverb
 */
function adverb(): string {
	return pickRandom([ "quickly", "slowly", "boldly", "always", "angrily", "cheerfully", "elegantly", "frantically", "innocently", "nervously", "powerfully", "rarely", "silently", "wildly", "warmly", "solemly", "ruthlessly", "willfully", "wishfully", "happily", "secretly", "wistfully", "cynically", "hastily", "passively" ]);
}

/**
 * Generate a noun
 */
function noun(): string {
	return pickRandom([ "sun", "field", "meadow", "sphere", "realm", "rock", "stone", "sand", "soil", "earth", "grass", "moss", "tree", "bark", "flower", "gravel", "orb", "sea", "water", "ocean", "river", "lake", "brook", "tide", "sky", "heavens", "cloud", "moon", "star", "cosmos", "eternity", "ant", "bee", "otter", "bird", "fish", "cicada", "bear", "wolf" ]);
}

/**
 * Generate a pronoun
 */
function pronoun(): string {
	return pickRandom([ "he", "she", "it", "someone" ]);
}

/**
 * Generate a verb
 */
function verb(): string {
	return pickRandom([ "kicks", "moves", "swings", "runs", "walks", "flies", "cries", "sprays", "sings", "stings", "sleeps", "drops", "ponders", "recalls", "breaks", "dreams", "awakens", "flees", "diminishes", "sweetens", "falls", "collapses", "rises", "sees", "hears", "thinks", "floats", "bellows" ]);
}

/**
 * Prepend an article to a phrase
 * @param phrase Phrase to prepend to
 */
function articlize(phrase: string): string {
	const articles = [ "the", phrase.match(/^[aeiou]/i) ? "an" : "a" ];
	return pickRandom(articles) + " " + phrase;
}

/**
 * Append a pause to a phrase
 * @param phrase Phrase to prepend to
 */
function pausify(phrase: string): string {
	const pauses = [ ",", ";", "...", "—" ];
	return phrase + pickRandom(pauses);
}

/**
 * Append a stop to a phrase
 * @param phrase Phrase to prepend to 
 */
function stopify(phrase: string): string {
	const stops = [ ".", "?", "!" ];
	return phrase + pickRandom(stops);
}

/**
 * Capitalize the first word of a phrase
 * @param phrase Phrase to capitalize
 */
function capitalize(phrase: string): string {
	return phrase[0].toUpperCase() + phrase.slice(1);
};

/**
 * Generate a line of poetry
 */
function line(): string {
	const pattern = Math.ceil(Math.random() * 5);
	switch(pattern) {
		case 1: return `${ capitalize(articlize(adjective())) } ${ noun() } ${ verb() } ${ adverb() } ${ preposition() } ${ stopify(articlize(noun())) }`;
		case 2: return `${ capitalize(articlize(adjective())) } ${ noun() } ${ preposition() } ${ noun() } ${ pausify(verb()) }`;
		case 3: return `${ capitalize(preposition()) } ${ articlize(noun()) }, ${ noun() } ${ verb() } ${ stopify(adverb()) }`;
		case 4: return `${ capitalize(articlize(noun())) } ${ preposition() } ${ articlize(adjective()) } ${ noun() } ${ verb() } ${ pausify(adverb()) }`;
		case 5: return `${ capitalize(pronoun()) } ${ adverb() } ${ verb() } ${ noun() } ${ preposition() } ${ stopify(articlize(noun())) }`;
	}
	throw new RangeError("Undefined pattern number.");
}

for(let i = 0; i < 12; ++i) {
	if(i % 4 == 0) console.log("\n" + line());
	else if(i % 2 == 1) console.log("  " + line());
	else console.log(line());
}
console.log();
