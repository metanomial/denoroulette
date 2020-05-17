import { serve } from "https://deno.land/std/http/server.ts";

const decoder = new TextDecoder("utf-8");
const indexHtml = decoder.decode(Deno.readFileSync("index.html"));
const scripts: string[] = [];
for (const dirEntry of Deno.readDirSync("scripts")) {
	if(dirEntry.isFile) {
		scripts.push(decoder.decode(Deno.readFileSync(`scripts/${ dirEntry.name }`)));
	}
}

const typescriptHeaders = new Headers;
typescriptHeaders.append("Content-Type", "application/typescript");

const server = serve({ port: 8000 });
for await (const request of server) {
	console.log(new Date().getTime(), request.method, request.url);
	if(request.method == "GET") switch(request.url) {
		case "/":
		case "/index.html":
			request.respond({ body: indexHtml });
			break;
		case "/random.ts":
			const randomScript = scripts[Math.floor(Math.random() * scripts.length)];
			request.respond({
				headers: typescriptHeaders,
				body: randomScript
			});
			break;
		default:
			request.respond({ status: 404 });
	}
	else request.respond({ status: 405 });
}
