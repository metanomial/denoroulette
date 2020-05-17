import { serve } from "https://deno.land/std/http/server.ts";

const decoder = new TextDecoder("utf-8");
const indexHtml = decoder.decode(Deno.readFileSync("index.html"));
const server = serve({ port: 8000 });

for await (const request of server) {
	console.log(new Date().getTime(), request.method, request.url);
	if(request.method == "GET") switch(request.url) {
		case "/":
		case "/index.html":
			request.respond({ body: indexHtml });
			break;
		default:
			request.respond({ status: 404 });
	}
	else request.respond({ status: 405 });
}
