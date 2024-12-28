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
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:creator" content="@tomio2480" />
</svelte:head>

<main class="md:max-x-[500px] flex max-h-full flex-col items-center justify-center px-5 py-8">
	<h1>力強くブログを108記事アウトプットする日</h1>
	<h2>
		{#await count}
			<span>...</span>
		{:then count}
			<span>{count}</span>
		{/await}
		/ 108
	</h2>
	<h3>
		<a
			class="text-blue-600 underline"
			target="_blank"
			rel="noopener noreferer"
			href="https://x.com/hashtag/%E5%8A%9B%E5%BC%B7%E3%81%8F%E3%82%A2%E3%82%A6%E3%83%88%E3%83%97%E3%83%83%E3%83%88%E3%81%99%E3%82%8B%E6%97%A5"
			>#力強くブログを108記事アウトプットする日</a
		>
	</h3>
	{#await data.blogData}
		<p>loading...</p>
	{:then blogRes}
		<ul>
			{#each blogRes.data as blog}
				<li>
					<span>No.{blog.id + 1} </span>
					<a
						class="text-blue-600 underline"
						href={blog.blogUrl}
						target="_blank"
						rel="noopener noreferrer">{blog.blogTitle}</a
					>
					<span>by</span>
					<a
						class="text-blue-600 underline"
						href={blog.profileUrl}
						target="_blank"
						rel="noopener noreferrer">{blog.name}</a
					>
				</li>
			{/each}
		</ul>
	{/await}
</main>
