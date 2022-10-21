<script lang="ts">
    import { page } from '$app/stores';
    import { base } from '$app/paths';
</script>

<nav data-sveltekit-prefetch>
    <a class:active={$page.url.pathname === `${base}/`} href="{base}/">Home</a>
    <a class:active={$page.url.pathname === `${base}/services`} href="{base}/services">Services</a>
    <a class:active={$page.url.pathname === `${base}/price`} href="{base}/price">Price</a>
</nav>

<slot></slot>

<footer>
    <p class="font-small">Call: <a href="tel:+44-775-7998277">+44-775-7998277</a>
        | <a href="https://www.linkedin.com/in/kristine-skirmante-28451452/">LinkedIn</a>
        | © 2015 - 2022
    </p>
</footer>

<style>
    nav {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    nav a {
        padding: 1rem;
        text-decoration: none;
        color: #000;
        background: #b7b5b5;
        border-bottom: 1px solid rgba(183, 181, 181, 0.6);
    }

    nav a:first-child {
        border-bottom-left-radius: 8px;
        border-left: 1px solid rgba(183, 181, 181, 0.6);
    }

    nav a:last-child {
        border-bottom-right-radius: 8px;
        border-right: 1px solid rgba(183, 181, 181, 0.6);
    }

    nav a.active {
        background: white;
    }

    nav a:hover {
        text-shadow: none;
    }

    footer {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        text-align: center;
        background: #b7b5b5;
    }
</style>
