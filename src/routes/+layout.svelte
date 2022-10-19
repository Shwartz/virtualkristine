<nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/settings">Settings</a>
</nav>

<slot></slot>

<footer>
    <p class="font-small">Call: <a href="tel:+44-775-7998277">+44-775-7998277</a> | <a href="https://www.linkedin.com/in/kristine-skirmante-28451452/">LinkedIn</a> | © 2015 - 2022</p>
</footer>

<style>
    nav {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        background: #b7b5b5;
    }

    footer {
        position: fixed;
        bottom: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        background: #b7b5b5;
    }
</style>
