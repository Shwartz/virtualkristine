<script>
  import Card from "$lib/components/Card.svelte";
</script>

<svelte:head>
    <title>Price - Virtual Assistant</title>
    <meta name="description"
          content="Virtual assistant help you with meeting co-ordination, emailing, Excel update, management of a complex diary and more" />
</svelte:head>

<div class="grid">
    <section>
        <h1>Price</h1>
        <p><b>There are no membership fees and no hidden costs</b>. Simply hire me for the day or half day and pay for
            my time plus any expenses incurred on your behalf.</p>
        <p>Use services on a regular basis or just as a one-off. And make the most of a free 1 hour business
            consultation for all new clients!</p>
        <p>You will have benefit of having your own Personal Assistant, without the hassle involved with actually
            employing some-one. I work on an entirely freelance basis and you only pay me for the work I do –
            recruitment costs, holiday pay, sickness pay, benefits, pensions, are all a thing of the past!</p>
        <p><b>Please note, these fees are a guide, every client is different.</b></p>
        <p>I can either work on an hourly, half day or full day basis, you choose which hours you need me to work and I
            can be flexible to fit around your requirements.</p>
        <p>All rates will be calculated on an individual basis, depending on your personal requirements, regularity of
            bookings and the type of work you would like me to carry out. For example I would not charge the same fee
            for marketing as for filing.</p>
        <p>I would require 48 hours’ notice to cancel any booked services or time or 30 days’ notice to cancel an
            ongoing arrangement.</p>
        <p>My ‘on-site’ fees are based on either a full or half day starting at <b>£25 per hour plus expenses and VAT</b>. We
            can discuss all of this during your business consultation and provide a full quotation based on how I can
            best serve your needs.</p>
    </section>

    <section>
        <h3>Testimonials</h3>
        <Card>
            <p class="text-left font-italic font-small">“Highly competent and efficient service, great out of the box thinking. Fantastic time
                management and
                people skills. All in all a great business partnering service.”</p>
            <p class="text-right">Suzanne Wood – Director – MSEXCELEXPERT.COM</p>
        </Card>
        <Card>
            <p class="text-left font-italic font-small">“I had personal attention and advice from Kristine, she helped me not only to submit
                tax returns, but also to understand my finances better. What makes Kristine’s services shine above
                others is the genuine support in keeping my finances straight – whether this is prompt replies, answers
                to questions or advice and tips, I know they are working for me. I would recommend Kristine Legzdina for
                tax returns and financial advice.”</p>
            <p class="text-right">Aivars Kaupmanis – Self-employed – carpenter</p>
        </Card>
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
