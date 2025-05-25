
import "@benev/slate/x/node.js"
import {template, html, easypage, headScripts, git_commit_hash, read_file, unsanitized, renderSocialCard} from "@benev/turtle"

const domain = "chasemoskal.com"
const favicon = "/assets/c.png"

export default template(async basic => {
	const path = basic.path(import.meta.url)
	const hash = await git_commit_hash()

	return easypage({
		path,
		dark: true,
		title: "CHASE MOSKAL",
		head: html`
			<link rel="icon" href="${favicon}"/>
			<style>${unsanitized(await read_file("x/style.css"))}</style>
			<meta data-commit-hash="${hash}"/>

			<link rel="preconnect" href="https://fonts.googleapis.com">
			<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
			<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@900&family=Share+Tech&display=swap" rel="stylesheet">

			${renderSocialCard({
				themeColor: "#a7ff78",
				siteName: "chasemoskal.com",
				title: "CHASE MOSKAL",
				description: "unrelenting buildercore maniac",
				image: `https://${domain}${favicon}`,
				url: `https://${domain}/`,
			})}

			${headScripts({
				devModulePath: await path.version.root("main.bundle.js"),
				prodModulePath: await path.version.root("main.bundle.min.js"),
				importmapContent: await read_file("x/importmap.json"),
			})}
		`,
		body: html`
			<h1>
				<strong>CHASE MOSKAL</strong>
				<span class=version>v2.0.0-1</span>
			</h1>

			<nav>
				<a href="https://github.com/chase-moskal">github</a>
				<a href="https://e280.org/">e280</a>
				<a href="https://authlocal.org/">authlocal</a>
				<a href="https://benevolent.games/">benevolent</a>
				<a href="/assets/fastfetch.png">arch btw</a>
			</nav>

			<div class=plate>
				<img class=avatar alt="" src="/assets/chase.avif"/>
				<blockquote>
					<p><strong>A cheap laptop is all you need to touch the lives of millions.</strong></p>
					<p>If only you knew how to type the right sequence of keystrokes.</p>
					<p>Too bad software is the hardest thing in the world.</p>
				</blockquote>
			</div>
		`,
	})
})

