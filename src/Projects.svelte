<script>
  async function getRepos() {
    const resp = await fetch("https://api.github.com/orgs/berkeleyopensource/repos")
    const data = await resp.json();
    return resp.ok ? data : new Error(data);
  }

  const lorem = Array(3).fill({
    name: "Lorem ipsum dolor sit amet.", 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis tortor eu nibh vestibulum congue."
  });
</script>

<div class="projects">
  {#each lorem as repo}
    <div class="project-card">
      <a href="/">
        <h3>{repo.name}</h3>
        <p>{repo.description}</p>
      </a>
    </div>
  {/each}
</div>

<style>
  .projects {
    display: grid;
    margin: 1em 0;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 1em;
  }

  .project-card {
    padding: 1em;
    height: 15em;
    border: 1px solid #E1E1E0;
    border-radius: 3px;
    box-shadow: 3px 3px 1em rgba(80, 80, 80, 0.1);
    transition: transform 0.2s ease-in-out;
    user-select: none;
    cursor: pointer;
  }

  .project-card:hover {
    transform: translateY(-3px);
  }

  .project-card a {
    text-decoration: none;
    color: inherit;
  }

</style>
