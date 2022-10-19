<script>
    import Card from '../components/Card.svelte';
</script>

<div class="grid">
    <section>
        <h1>Virtual assistant – executive services</h1>
        <p>A virtual assistant is a highly skilled freelance confidential personal assistant and business administrator
            who works remotely from their own fully equipped office.</p>
        <p>A virtual assistant works flexible hours to assist clients grow their business.</p>
        <ul>
            <li>Confidentiality Guaranteed;</li>
            <li>Pay As You Go, on a per Project basis;</li>
            <li>Retainer Agreements available for longer term requirements;</li>
            <li>Bespoke Packages available;</li>
            <li>Flexible working hours, to suit your requirements.</li>
        </ul>

        <Card>
            <h3>Hire me for a day</h3>
            <p>Phone: 1223232323</p>
            <p>LinkedIn</p>
        </Card>

        <Card class="dark">
            <h3>Hire me for a day</h3>
            <p>Phone: 1223232323</p>
            <p>LinkedIn</p>
        </Card>

        <h3>Benefits</h3>
        <p>Benefits of using Virtual Assistant services:</p>
        <ul>
            <li>Frees up your time so you can concentrate on your business;</li>
            <li>Flexible EA/PA and Admin support when you need it;</li>
            <li>Saves you space – no need to provide office space or equipment;</li>
            <li>You only pay for productive time;</li>
            <li>Service is tax deductible;</li>
        </ul>

        <p>Don’t ever bother about:</p>
        <ul>
            <li>National Insurance,</li>
            <li>Tax,</li>
            <li>Pension,</li>
            <li>Annual Leave Pay,</li>
            <li>Sick Pay,</li>
            <li>Maternity pay,</li>
            <li>Training to pay;</li>
        </ul>

        <p>Remote and/or onsite administration services aimed to suit the needs of your business – allowing you to
            concentrate on what you do best.</p>

    </section>

    <section>
        <div>
            <h3>Need a virtual assistant for a day? I can help you with:</h3>
            <ul>
                <li>Meeting co-ordination</li>
                <li>Printing or emailing all course material and information to clients</li>
                <li>Proactively deal with correspondence, reports and emails in a timely manner</li>
                <li>Excel spread sheet inputting, formatting and management</li>
                <li>PowerPoint presentation inputting/formatting</li>
                <li>Management of a complex diary – managing competing priorities</li>
                <li>Organisation of international and local travel, including preparation of itineraries, visas, etc.
                </li>
                <li>Organising local and international meetings, attending where necessary</li>
                <li>Processing expenses and invoices using relevant systems</li>
                <li>Liaise and engage with a wide range of people on a variety of levels, internally and externally</li>
                <li>Pro-actively tackling issues related to administrative processes to ensure speed and efficiency</li>
            </ul>
        </div>
        <div>
            <h3>General administration</h3>
            <p>Proactively deal with correspondence, reports and emails in a timely manner</p>
        </div>
        <div>
            <h3>Workshop organisation</h3>
            <p>Investigation into the best venue, connect with attendees leading up to the event</p>
        </div>
    </section>
</div>

<style>
    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin: 0 auto;
        max-width: 1200px;
        padding-bottom: 80px;
    }

    section {
        padding: 0 1rem;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    ul li:before {
        content: "✓";
        margin-right: 8px;
    }

    @media (max-width: 800px) {
        .grid {
            grid-template-columns: 1fr;
        }
    }
</style>
