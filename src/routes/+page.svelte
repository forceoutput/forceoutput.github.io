<script>
	/** @type {import('./$types').PageData} */
	export let data;

	const count = data.blogData.then((res) => res.data.length);
</script>

<svelte:head>
	<title>力強くブログを108記事アウトプットする日</title>
	<meta
		name="description"
		content="'さもなくばイメージ画像のように「あとはやるだけ」のものが複雑に絡み合って足枷になるぞ．—— tomio2480'"
	/>
	<meta
		name="og:image"
		content="https://media.connpass.com/thumbs/a8/c5/a8c5a75cd0917b3344a86de8c15983e9.png"
	/>
	<meta name="og:title" content="力強くブログを108記事アウトプットする日" />
	<meta
		name="twitter:image"
		content="https://media.connpass.com/thumbs/a8/c5/a8c5a75cd0917b3344a86de8c15983e9.png"
	/>
	<meta name="twitter:title" content="力強くブログを108記事アウトプットする日" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:creator" content="@tomio2480" />
</svelte:head>

<main class="md:max-x-[500px] flex max-h-full flex-col items-center justify-center gap-1 px-5 py-8">
	<img
		src="https://media.connpass.com/thumbs/a8/c5/a8c5a75cd0917b3344a86de8c15983e9.png"
		alt="建物の外側に放置されている複数の椅子が絡み合って、複雑な様子を写した画像"
	/>
	<blockquote>
		'さもなくばイメージ画像のように「あとはやるだけ」のものが複雑に絡み合って足枷になるぞ'
		<cite>-- tomio2480</cite>
	</blockquote>
	<h1>力強くブログを108記事アウトプットする日</h1>
	<h2>
		{#await count}
			<span>...</span>
		{:then count}
			<span>{count}</span>
		{/await}
		/ 108
	</h2>
	{#await count then count}
		{#if count >= 108}
			<!-- 久しぶりだね. font タグだよ. 後方互換性に感謝 -->
			<marquee
				><font size="7"
					><font color="#ff0000">煩</font><font color="#ff1900">悩</font><font color="#ff3200"
						>撃</font
					><font color="#ff4b00">滅</font><font color="#ff6400">†</font><font color="#ff7d00"
						>煩</font
					><font color="#ff9600">悩</font><font color="#ffaf00">撃</font><font color="#ffaa00"
						>滅</font
					><font color="#ffb800">†</font><font color="#ffc500">煩</font><font color="#ffd300"
						>悩</font
					><font color="#ffe100">撃</font><font color="#ffee00">滅</font><font color="#fffc00"
						>†</font
					><font color="#ffff00">煩</font><font color="#e0ef00">悩</font><font color="#b9dc00"
						>撃</font
					><font color="#92c900">滅</font><font color="#6cb500">†</font><font color="#45a200"
						>煩</font
					><font color="#1e8f00">悩</font><font color="#007c00">撃</font><font color="#008307"
						>滅</font
					><font color="#00972e">†</font><font color="#00aa55">煩</font><font color="#00bd7b"
						>悩</font
					><font color="#00d0a2">撃</font><font color="#00e4c8">滅</font><font color="#00f7ef"
						>†</font
					><font color="#00ffff">煩</font><font color="#00e7ff">悩</font><font color="#00c1ff"
						>撃</font
					><font color="#009aff">滅</font><font color="#0073ff">†</font><font color="#004dff"
						>煩</font
					><font color="#0026ff">悩</font><font color="#0000ff">撃</font><font color="#0000ff"
						>滅</font
					></font
				></marquee
			>
		{/if}
	{/await}
	<h3>
		<a
			class="text-[#0000ff] underline"
			target="_blank"
			rel="noopener noreferer"
			href="https://x.com/hashtag/%E5%8A%9B%E5%BC%B7%E3%81%8F%E3%82%A2%E3%82%A6%E3%83%88%E3%83%97%E3%83%83%E3%83%88%E3%81%99%E3%82%8B%E6%97%A5"
			>#力強くブログを108記事アウトプットする日</a
		>
	</h3>
	<h3>
		<a
			href="https://forceoutput.connpass.com/event/339151/"
			class="text-[#0000ff] underline"
			target="_blank">connpass</a
		>
	</h3>
	<div>
		<font color="red">
			<a
				class="underline"
				target="_blank"
				href="https://twitter.com/intent/tweet?text=%23%E5%8A%9B%E5%BC%B7%E3%81%8F%E3%82%A2%E3%82%A6%E3%83%88%E3%83%97%E3%83%83%E3%83%88%E3%81%99%E3%82%8B%E6%97%A5%0Ahttps%3A%2F%2Fforceoutput.github.io%2F"
				>☆☆☆つぶやく☆☆☆</a
			>
		</font>
	</div>
	{#await data.blogData}
		<p>loading...</p>
	{:then blogRes}
		<ul>
			{#each blogRes.data as blog}
				<li>
					<span>No.{blog.id + 1} </span>
					<a
						class="text-[#0000ff] underline"
						href={blog.blogUrl}
						target="_blank"
						rel="noopener noreferrer">{blog.blogTitle}</a
					>
					<span>by</span>
					<a
						class="text-[#0000ff] underline"
						href={blog.profileUrl}
						target="_blank"
						rel="noopener noreferrer">{blog.name}</a
					>
				</li>
			{/each}
		</ul>
	{/await}
</main>
