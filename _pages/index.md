---
layout: default
title: Medicine Personalized by Your DNA
---

{% capture tagline %}
# Our algorithms<br> use cutting-edge research<br> to turn your DNA<br> into a **treatment for high blood pressure.**

<p class="buttonset">
  <a
    class="button--transparent--on-dark"
    href="{% include tell_doc %}" 
    target="_blank"
  >Tell your doctor</a>

  <a
    class="button--transparent--on-dark"
    href="/api"
  >Use our API</a>
</p>

{% endcapture %}
{% include section.html content=tagline height='full' layout='hero' overlay='text' img_alt='Lab with Geneticure test kit' img_src='/assets/img/bg/lab-kit.jpg' img_style='object-fit: cover; object-position: 75% bottom' margins=false %}

{% capture product_intro %}
## Prescriptions for your body.<br>_Decisions from your DNA._

Geneticure uses a sample of your DNA to recommend blood pressure medications just for you, summarized in a personalized, printable report.

Each Geneticure test kit contains two sterile cheek swabs, and a prepaid envelope to mail them to us. Your doctor can [register your kit]({{ site.portal.url }}) on this website, swab your cheek, and drop the envelope in the mail. They'll be notified in 10-15 business days that your report is ready.

<p class="buttonset">
  <a
    class="button--low"
    href="{% include tell_doc %}" 
    target="_blank"
  >Tell your doctor</a>

  <a
    href="{{ site.contact.url }}"
  >Contact us</a>
</p>

{% endcapture %}
{% include section.html align='right' content=product_intro img_alt='Geneticure kit' img_src='/assets/img/kit-w-contents.jpg' img_style='object-fit: contain' layout='text-display' reverse=true %}

{% capture product_sequence_section %}
## How does it work?

{% include sequence.html steps=site.data.howitworks direction='y' %}
{% endcapture %}
{% include section.html content=product_sequence_section hide='sm,md' layout='hero' img_src='/assets/img/bg/lab-techs.jpg' img_alt='Lab techs' img_style='object-position: right' overlay='float' width='half' margins=false %}

{% capture report_intro %}
## A unique prescription plan _just for you._

**Other genetic tests** can tell doctors how much medication will get into your bloodstream, but not how your body will react to it. Doctors have to treat high blood pressure with trial-and-error: if one medication doesn't work, try the next one.

**Geneticure's test** looks at 17 genotypes and 11 genes to determine how your body responds to each medication. Your personalized report haelps your doctor prescribe the right medication from the start.

Your report describes the responsiveness of 3 of your body's main organ systems:

{% include sequence.html steps=site.data.organs direction='y' %}

<p class="buttonset">
  <a
    class="button--low"
    href="/research" 
  >See our research</a>

  <a
    href="{{ site.contact.url }}"
  >Contact us</a>
</p>

{% endcapture %}
{% capture report_display %}
  {% include frame.html type='tablet' img_alt='Geneticure report' img_src='/assets/img/report.png' %}
{% endcapture %}
{% include section.html align='right' content=report_intro display=report_display layout='text-display' reverse=true %}

{% capture for_whom %}
## Who is it for?

### _Patients & Caregivers._

**Your DNA is unique. Your high blood pressure prescription should be, too.** No matter where you are in your treatment plan — whether you've been newly diagnosed or have been managing your blood pressure for years — with the help of your doctor, Geneticure's test can help get you on the right path.

<a href="/faq" class="cta-link">Frequently asked questions</a>

---

### _Healthcare Providers._

**Proven DNA results to improve your patients' blood pressure therapy.** The test assesses hypertension treatment in a comprehensive integrative nature, from drug metabolizing enzymes to receptors that are important to heart, blood vessel and kidney function, with a focus on and appreciation of the complexity of the disease.

<a href="/research" class="cta-link">See our research</a>

---

### _Genetic Testing Labs._

**Our RESTful API adds our patented algorithm to your product line.** Generate reports whitelabeled with your company's own branding, or consume our data using a simple JSON interface and add it to your own templates.

<a href="/api" class="cta-link">Use our API</a>

---

### _Employers._

**Increase your employees' quality of life while decreasing your healthcare costs.** Employees with cardiovascular disease (including high blood pressure) cost employers _an extra $1,100 per year in lost productivity alone_<sup><a href="/research#pharmaco-cim">*</a></sup>, compared with healthier employees. With Geneticure, you may be able to significantly reduce your company's chronic disease spending by an estimated 16x ROI or _$1409 per year per employee_.<sup><a href="/research#pharmaco-jme">**</a></sup>

<a href="{{ site.url.contact }}" class="cta-link">Get in touch</a>

{% endcapture %}
{% include section.html align='right' content=for_whom hide='sm,md' img_alt='Geneticure' img_shape='circle' img_style='object-position: left' img_src='/assets/img/bg/doctor-consult.jpg' layout='text-display' overlay='block' margins=true %}

{% capture about_us %}
## ![Minnesota](/assets/img/mn_fill.svg) Built with love in _Minnesota_.

For 10 years we've put science and innovation to work, taking personalized medicine to the next level. Our unique focus on the physiology and combinatorial pharmacogenomics specific to each disease is unparalleled in a field of shotgun approaches to personalized medicine. Our first solution is helping to solve the trial-and-error approach in the leading preventable cause of death in the world: hypertension or high blood pressure. And we're just getting started.

<p class="buttonset">
  <a
    class="button--low"
    href="/team" 
  >Meet our team</a>

  <a
    href="{{ site.contact.url }}"
  >Contact us</a>
</p>

{% endcapture %}
{% capture map %}
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45904.882603545106!2d-92.49840832065428!3d44.02025457911051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f75f631adca1b1%3A0x9af7c3b31dbb04ce!2s4%203rd%20St%20SW%20%23305b%2C%20Rochester%2C%20MN%2055902!5e0!3m2!1sen!2sus!4v1618862134497!5m2!1sen!2sus" allowfullscreen="" loading="lazy" title="Geneticure map"></iframe>
{% endcapture %}
{% include section.html align='right' content=about_us display=map layout='text-display' reverse=true text=true %}

{% capture press_latest %}
## In the press

{% assign press_latest = site.data.press|slice:0,3 %}
{% include sequence-timeline.html steps=press_latest %}

<p class="buttonset">
  <a
    class="button--low"
    href="/press" 
  >See more press</a>

  <a
    href="{% include tell_doc %}"
    target="_blank"
  >Contact us</a>
</p>

{% endcapture %}
{% include section.html align='center' content=press_latest hide='sm,md' img_alt='People meeting' img_src='/assets/img/bg/meeting.jpg' img_style='object-position: top center' layout='hero' margins=false overlay='float' %}
