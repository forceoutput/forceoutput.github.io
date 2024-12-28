<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<main class="md:max-x-[500px] flex max-h-full flex-col items-center justify-center px-5 py-8">
	<h1>力強くブログを108記事アウトプットする日</h1>
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
