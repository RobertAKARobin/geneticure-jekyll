---
layout: base
title: Geneticure | Team
---

{% capture title %}
Our team
{% endcapture %}
{% include hero.html content=title img_alt='Meeting room' img_src='/assets/img/bg/chairs.jpg' overlay='text' %}

{% include section.html direction='y' display_size='100px' layout='sequence' steps=site.data.team %}
