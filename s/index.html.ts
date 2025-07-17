
import {ssg, html} from "@e280/scute"

const title = "CHASE MOSKAL"
const domain = "chasemoskal.com"
const favicon = "/assets/holo.png"

export default ssg.page(import.meta.url, async _orb => ({
	title: "CHASE MOSKAL",
	js: "main.bundle.min.js",
	css: "style.css",
	dark: true,
	favicon,

	head: html`
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@900&family=Share+Tech&display=swap" rel="stylesheet">
	`,

	socialCard: {
		themeColor: "#ff7700",
		siteName: domain,
		title,
		description: "unrelenting buildercore maniac",
		image: `https://${domain}${favicon}`,
		url: `https://${domain}/`,
	},

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
}))

