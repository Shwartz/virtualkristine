<nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/settings">Settings</a>
</nav>

<slot></slot>

<footer>
    <p>Call: 212121212, LinkedIn, Email © 2015 - 2022</p>
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
