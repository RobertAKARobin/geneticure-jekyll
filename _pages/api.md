---
layout: page
title: API
img_alt: Scientists
img_src: /assets/img/bg/scientists.jpg
---

{% capture intro %}
## Add Geneticure's algorithms<br>to _your product line._

Application Programming Interfaces (APIs) are how different computer programs and websites talk to each other. Using our API, you can add offer Geneticure's treatment recommendations as **a value-add to your customers and users** through your own website or app.

We offer several tiers of API access:

1. **Raw data.** Send our webserver the genetic data for the sites considered by our algorithms, and it will immediately send back a set of unique recommendations. We "talk" in the JSON data format so that your tech stack can easily understand and display our recommendations.
1. **Reports on demand.** Get our recommendations as a print-, desktop-, and mobile-friendly report in HTML or PDF format.
1. **Custom-branded reports.** Add your logo, name, and styling to the report template for the most cohesive user experience.

<a class="button button--high" href="https://gcedev.herokuapp.com/contact">Contact us for API access</a>

{% endcapture %}
{% capture intro %}
  {% include text.html content=intro %}
  {% include frame.html type='laptop' img_alt='Geneticure report' img_src='/assets/img/doc.svg' %}
{% endcapture %}
{% include section.html content=intro layout='columns' %}

{% capture questions %}
## API FAQs

### Who can use Geneticure's API?

Any provider of healthcare services!

Just make sure you're compliant with your own state and federal regulations. For example, when a Geneticure test kit is purchased by a member of the general public, we use [our own web portal](https://gcedev.herokuapp.com) to collect their consent, and Geneticure's own network of physicians to approve the test and review the recommendations. It's only when those steps have been completed that we make the recommendations available to the consumer.

If you plan on using the healthcare recommendations you get through our API to make decisions about the treatment of patients, then you'll need to follow similar steps. Our API will provide you with instant recommendations; you'll need to make sure those recommendations are reviewed and approved by a licensed physician before they are shared with your patients.

### How much does it cost?

We offer per-request and volume pricing. We'll work with you to figure out a plan that works for everyone. <A href="https://gcedev.herokuapp.com/contact">Get in touch!</a>

### What about PII and HIPAA?

PII is Personally Identifiable Information. HIPAA is the [Health Information Portability and Accountability Act](https://www.hhs.gov/hipaa).

The only data you need to send our API is the minimum information necessary for us to be compliant with regulations. We don't collect any unnecessary PII, and no data you send us will be shared with third parties or used for marketing purposes.

Your data is secure in transit. All API requests are [authenticated](#how-is-your-api-authenticated), and are also encrypted using the secure HTTPS protocol. Data is also secure at rest, within Geneticure's encrypted database.

We encourage you to take a look at our [Terms of Service](/terms) and our [Privacy Policy](/privacy).

### What kind of API is it?

Our API uses standard RESTful endpoints.

### How is your API authenticated?

We use Bearer token authorization with [JSON Web Tokens (JWT)](https://jwt.io/).

### What data format do you use?

Our API accepts and outputs JSON.

### Does the API support AJAX?

No, nor do most APIs that require a high standard of security. You can of course use AJAX to talk to your own servers, which can then talk to our API.

### Other questions?

[Let us know!](https://gcedev.herokuapp.com/contact)

{% endcapture %}
{% include section.html content=questions text=true %}
