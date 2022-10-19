<script>
  import Card from '$lib/components/Card.svelte';
</script>

<div class="grid">
    <section>
        <h1>Services</h1>
        <p>paragraph</p>

        <Card class="dark">
            <h3>Hire me for a day</h3>
            <p>Phone: <a href="tel:+44-775-7998277">+44-775-7998277</a></p>
            <p>LinkedIn</p>
        </Card>

        <h3>Benefits</h3>
    </section>

    <section>
        <h3>Title</h3>
    </section>
</div>

<style>
    .grid {
        display: grid;
        grid-template-columns: 1fr;
        margin: 0 auto;
        max-width: 500px;
        padding-bottom: 80px;
    }

    section {
        padding: 0 1rem;
    }

    @media (min-width: 800px) {
        .grid {
            grid-template-columns: 1fr 1fr;
            max-width: 1200px;
        }
    }

    @media (min-width: 900px) {
        section {
            padding: 0 2rem;
        }
    }
</style>
