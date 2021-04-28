---
layout: default
title: Our team
img_alt: Meeting room
img_src: /assets/img/bg/chairs.jpg
---

{% include hero.html content=page.title img_alt=page.img_alt img_src=page.img_src overlay='text' %}

{% include section.html direction='y' display_size='100px' layout='sequence' steps=site.data.team %}
