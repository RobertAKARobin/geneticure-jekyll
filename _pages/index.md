---
layout: default
title: Medicine Personalized by Your DNA
---

{% capture tagline %}
# Our algorithms<br>use cutting-edge research<br>to turn your DNA<br>into a **treatment for high blood pressure.**

<a class="button button--transparent--on-dark" href="https://gcedev.herokuapp.com/contact">Get a test kit</a>
<a class="button button--transparent--on-dark" href="/api">Use our API</a>
{% endcapture %}
{% include hero.html content=tagline height='full' overlay='text' img_alt='Lab with Geneticure test kit' img_src='/assets/img/bg/lab-kit.jpg' img_style='object-fit: cover; object-position: 75% bottom' %}

{% capture product_intro %}
# Prescriptions for your body.<br>_Decisions from your DNA._

Geneticure uses a sample of your DNA to recommend blood pressure medications just for you, summarized in a personalized, printable report.

Each Geneticure test kit contains two sterile cheek swabs, and a prepaid envelope to mail them to us. [Register your kit](https://gcedev.herokuapp.com) on this website, swab your cheek, and drop your envelope in the mail. You'll be notified in 10-15 business days that your report is ready.

<a class="button button--low" href="https://gcedev.herokuapp.com/contact">Get a test kit</a>
{% endcapture %}
{% capture product_intro_section %}
  {% include img.html img_alt='Geneticure kit' img_src='/assets/img/kit-w-contents.jpg' img_style='object-fit: contain' %}
  {% include text.html content=product_intro %}
{% endcapture %}
{% include section.html content=product_intro_section layout='columns' reverse=true %}

{% capture product_sequence_section %}
# How does it work?

  {% include sequence.html steps=site.data.howitworks direction='y' %}
{% endcapture %}
{% include hero.html content=product_sequence_section hide='sm,md' overlay='block' width='half' img_src='/assets/img/bg/lab-techs.jpg' img_alt='Lab techs' %}

{% capture report_intro %}
# A unique prescription plan _just for you._

**Other genetic tests** can tell doctors how much medication will get into your bloodstream, but not how your body will react to it. Doctors have to treat high blood pressure with trial-and-error: if one medication doesn't work, try the next one.

**Geneticure's test** looks at 17 genotypes and 11 genes to determine how your body responds to each medication. Your personalized report helps your doctor prescribe the right medication from the start.

Your report describes the responsiveness of 3 of your body's main organ systems:

{% include sequence.html steps=site.data.organs direction='y' %}

<a class="button button--low" href="/research">See our research</a>
{% endcapture %}
{% capture report %}
  {% include frame.html type='tablet' img_alt='Geneticure report' img_src='/assets/img/report.png' %}
  {% include text.html content=report_intro %}
{% endcapture %}
{% include section.html content=report layout='columns' reverse=true %}

{% capture for_whom %}
# Who is it for?

## _Patients & Caregivers._

**Your DNA is unique. Your high blood pressure prescription should be, too.** No matter where you are in your treatment plan — whether you’ve been newly diagnosed or have been managing your blood pressure for years — with the help of your doctor, Geneticure’s test can help get you on the right path. [Frequently asked questions.](/faq)

---

## _Healthcare Providers._

**Proven DNA results to improve your patients' blood pressure therapy.** The test assesses hypertension treatment in a comprehensive integrative nature, from drug metabolizing enzymes to receptors that are important to heart, blood vessel and kidney function, with a focus on and appreciation of the complexity of the disease. [See our research.](/research)

---

## _Genetic Test Providers._

**Our RESTful API adds our patented algorithm to your product line.** Generate reports whitelabeled with your company's own branding, or consume our data using a simple JSON interface and add it to your own templates. [See our API.](/api)

---

## _Employers._

**Increase your employees' quality of life while decreasing your healthcare costs.** Employees with cardiovascular disease (including high blood pressure) cost employers _an extra $1,100 per year in lost productivity alone_<sup><a href="/research#pharmaco-cim">*</a></sup>, compared with healthier employees. With Geneticure, you may be able to significantly reduce your company’s chronic disease spending by an estimated 16x ROI or _$1409 per year per employee_.<sup><a href="/research#pharmaco-jme">**</a></sup> [Get in touch.](https://gcedev.herokuapp.com/contact)

{% endcapture %}
{% capture for_whom %}
  {% include text.html content=for_whom %}
{% endcapture %}
{% include hero.html align='right' content=for_whom height='full' hide='sm,md' overlay='block' width='half' img_alt='Geneticure' img_style='object-position: left' img_src='/assets/img/bg/doctor-consult.jpg' %}

{% capture about_us %}
# Built with love in _Minnesota_.

For 10 years we’ve put science and innovation to work, taking personalized medicine to the next level. Our unique focus on the physiology and combinatorial pharmacogenomics specific to each disease is unparalleled in a field of shotgun approaches to personalized medicine. Our first solution is helping to solve the trial-and-error approach in the leading preventable cause of death in the world: hypertension or high blood pressure. And we’re just getting started.

<a class="button button--low" href="/team">Meet our team</a>
{% endcapture %}
{% capture about_us %}
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45904.882603545106!2d-92.49840832065428!3d44.02025457911051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f75f631adca1b1%3A0x9af7c3b31dbb04ce!2s4%203rd%20St%20SW%20%23305b%2C%20Rochester%2C%20MN%2055902!5e0!3m2!1sen!2sus!4v1618862134497!5m2!1sen!2sus" allowfullscreen="" loading="lazy" title="Geneticure map"></iframe>
  {% include text.html content=about_us %}
{% endcapture %}
{% include section.html content=about_us layout='columns' reverse=true text=true %}

{% capture press_latest %}
# In the press

{% assign press_latest = site.data.press|slice:0,3 %}
{% include sequence-timeline.html steps=press_latest %}

<a class="button button--low" href="/press">See more news</a>
{% endcapture %}
{% include hero.html align='center' content=press_latest hide='sm,md' img_alt='People meeting' img_src='/assets/img/bg/meeting.jpg' img_style='object-position: top center' overlay='float' %}
