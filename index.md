---
layout: base
title: Test
---

{% capture hero__content %}
# Prescriptions for your body.<br />Decisions from your DNA.

At Geneticure, we use a unique approach that examines the genetics specific to each disease to help highlight the best prescription choice for each patient. The promise of personalized medicine has finally arrived.
{% endcapture %}
{% include hero.html content=hero__content %}

{% capture cards %}
## Patients & Caregivers

The cause and solution for many diseases like high blood pressure are based in physiology and could be driven by your genetics. The Geneticure test helps your doctor choose the best medications to treat your high blood pressure.

---

## Healthcare Providers

The Geneticure pharmacogenomics test for hypertension goes beyond drug metabolizing enzymes (DMEs) — where most other tests stop — to provide clear and actionable drug-selection support for better patient outcomes.

---

## Employers

High blood pressure is a leading contributor to your healthcare spending and likely affects over 1/3 of your employees. Chances are only half of them have it under control. The Geneticure test provides an immediate, measurable return on investment (ROI) through non-invasive and remote genetic testing to improve outcomes.
{% endcapture %}
{% include cards.html cards=cards %}
