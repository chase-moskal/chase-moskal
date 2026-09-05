
import {template, html, socialCard} from "@e280/scute"

const title = "CHASE MOSKAL"
const domain = "chasemoskal.com"
const favicon = "/assets/c.png"

export default template(import.meta.url, async orb => html`
	<!doctype html>
	<html>
		<head>
			<meta charset="utf-8"/>
			<meta name="viewport" content="width=device-width,initial-scale=1"/>
			<meta name="darkreader-lock"/>
			<style>@layer base{html{background:#000}}</style>

			<title>CHASE MOSKAL</title>
			<link rel="icon" href="${orb.hashurl(favicon)}"/>

			${socialCard({
				title,
				siteName: domain,
				themeColor: "#a7ff78",
				url: `https://${domain}/`,
				image: `https://${domain}${favicon}`,
				description: "obsessed buildercore maniac",
			})}

			<link rel="stylesheet" href="${orb.hashurl("style.css")}"/>
			<script type="module" src="${orb.hashurl("main.bundle.min.js")}"></script>

			<link rel="preconnect" href="https://fonts.googleapis.com"/>
			<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
			<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@900&family=Share+Tech&display=swap" rel="stylesheet"/>
		</head>
		<body>
			<h1>
				<strong>CHASE MOSKAL</strong>
				<span class=version>${orb.packageVersion()}</span>
			</h1>

			<nav>
				<a href="https://github.com/chase-moskal">github</a>
				<a href="https://benev.gg/">benev</a>
				<a href="https://e280.org/">e280</a>
				<a href="https://authlocal.org/">authlocal</a>
				<a href="/assets/fastfetch.webp">arch btw</a>
			</nav>

			<div class=plate>
				<img class=avatar alt="" src="/assets/chase.webp"/>
				<blockquote>
					<p><strong>a cheap laptop is all you need to touch the lives of millions.</strong></p>
					<p>if only you knew how to type the right sequence of keystrokes.</p>
					<p>too bad software is the hardest thing in the world.</p>
				</blockquote>
			</div>
		</body>
	</html>
`)

