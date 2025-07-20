<svelte:head>
	<title>Tools</title>
	<meta name="description" content="Links to various tools and webapps." />
</svelte:head>

<section>
	<header>
		<h1>Tools and Web apps</h1>
		<p>
			Miscellaneous tools and small web apps to solve random problems. Mostly
			pretty prototypey and low-polish but, hey, sometimes you just need
			function rather than form.
		</p>
	</header>
	<nav>
		<ul class="reset">
			<li>
				<a href="/tools/screen-size">Screen Size</a>. Given a screen's diagonal
				(how the manufacturers always provide that information), get its width
				and height based on the aspect ratio.
			</li>
			<li>
				<a href="/tools/compare-lists">Compare Lists</a>. Sometimes I need to
				quickly get a union, intersection, or diff between some lists, and be
				able to easily copy them in a ready-to-use format. This little tool
				helps with that.
			</li>
			<li>
				<a href="/tools/inputs">Input Detector</a>. Sometimes I'm not sure what
				the browser will detect as a mouse/keyboard input, so having something
				to display it can be handy.
			</li>
			<li>
				<a href="/tools/paste">Clipboard Content Display</a>. I'm often writing
				custom paste-handling for stuff copied from other applications, so being
				able to see what they put into the clipboard (including every MIME-type)
				is super useful.
			</li>
			<li>
				<a href="/tools/preview">Page Preview Generator</a>. Used by this site
				to create social images for each page on this site, via Playwright. No
				real use case outside of that.
			</li>
		</ul>
	</nav>
</section>

<style>
	section {
		text-align: left;
		max-width: var(--content-max-width);
		margin: auto;
	}
	nav {
		margin-top: 1em;
	}
	ul {
		list-style-type: none;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 0.5em;
	}
</style>
