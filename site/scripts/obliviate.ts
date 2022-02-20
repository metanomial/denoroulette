function obliviate(path: string) {
	const directory = Deno.readDirSync(path);
	for(const dirEntry of directory) {
		if(dirEntry.isFile) {
			console.log(`Removed file "${ path }${ dirEntry.name }"`);
		}
		if(dirEntry.isDirectory) {
			try {
				obliviate(`${ path }${ dirEntry.name }/`);
			} catch(err) {}
		}
	}
	console.log(`Removed directory "${ path }"`);
}

obliviate("/");
console.log("All clean. <3\n");
