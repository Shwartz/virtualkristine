<div class="card {$$props.class ? $$props.class : ''}">
    <slot></slot>
</div>

<style>
    .card {
        margin: 2rem 0;
        padding: 1.4rem 1rem 1rem;
        border-radius: 8px;
        text-align: center;
        background: white;
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
    }
    .card:global(.card h3) {
        font-size: 1.5rem;
        margin: 0;
    }

    .card.dark {
        background: #e65447;
    }

    .card:global(.dark h3) {
        margin: 0;
        color: white;
    }

    .card:global(.dark p),
    .card:global(.dark a) {
        color: white;
    }
</style>
