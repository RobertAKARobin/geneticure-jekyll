---
layout: base
title: Test
---

{% capture tagline %}
Our _algorithms_<br>
use cutting-edge _research_<br>
to turn your _DNA_<br>
into a _**treatment for high blood pressure.**_

<a class="button button--transparent--on-dark" href="#">Get a test kit</a>
<a class="button button--transparent--on-dark" href="#">Use our API</a>
{% endcapture %}
{% include hero.html content=tagline height='full' overlay='text' img_alt='Lab with Geneticure test kit' img_src='/assets/img/bg/lab-kit.jpg' img_style='object-fit: cover; object-position: 75% bottom' %}

{% capture product_intro %}
# Prescriptions for your body.<br>_Decisions from your DNA._

Geneticure uses a sample of your DNA to recommend blood pressure medications just for you, summarized in a personalized, printable report.

Each Geneticure test kit contains two sterile cheek swabs, and a prepaid envelope to mail them to us. [Register your kit](#) on this website, swab your cheek, and drop your envelope in the mail. You'll be notified in 10-15 business days that your report is ready.

<a class="button button--low" href="#">Get a test kit</a>
{% endcapture %}
{% capture product_intro_section %}
  {% include img.html img_alt='Geneticure kit' img_src='/assets/img/kit-w-contents.jpg' img_style='object-fit: contain' %}
  {% include text.html content=product_intro %}
{% endcapture %}
{% include section.html columns=true content=product_intro_section reverse=true %}

{% capture product_sequence_section %}
  {% include graphic-sequence.html steps=site.data.howitworks direction='y' highlight_first=true %}
{% endcapture %}
{% include hero.html content=product_sequence_section hide='sm,md' overlay='block' width='half' img_src='/assets/img/bg/lab-techs.jpg' img_alt='Lab techs' %}

{% capture report_intro %}
# A unique prescription plan _just for you._

**Other genetic tests** can tell doctors how much medication will get into your bloodstream, but not how your body will react to it. Doctors have to treat high blood pressure with trial-and-error: if one medication doesn't work, try the next one.

**Geneticure's test** looks at 17 genotypes and 11 genes to determine how your body responds to each medication. Your personalized report helps your doctor prescribe the right medication from the start.

Your report describes the responsiveness of 3 of your body's main organ systems:

{% include graphic-sequence.html steps=site.data.organs direction='y' %}
{% endcapture %}
{% capture report %}
  {% include frame.html type='tablet' img_alt='Geneticure report' img_src='/assets/img/report.png' %}
  {% include text.html content=report_intro %}
{% endcapture %}
{% include section.html columns=true content=report reverse=true %}

{% capture for_whom %}
# Who is it for?

## _Patients & Caregivers._

**Your DNA is unique. Your high blood pressure prescription should be, too.** No matter where you are in your treatment plan — whether you’ve been newly diagnosed or have been managing your blood pressure for years — with the help of your doctor, Geneticure’s test can help get you on the right path.

---

## _Healthcare Providers._

**Proven DNA results to improve your patients' blood pressure therapy.** The test assesses hypertension treatment in a comprehensive integrative nature, from drug metabolizing enzymes to receptors that are important to heart, blood vessel and kidney function, with a focus on and appreciation of the complexity of the disease.

---

## _Genetic Test Providers._

**Our RESTful API adds our patented algorithm to your product line.** Generate reports whitelabeled with your company's own branding, or consume our data using a simple JSON interface and add it to your own templates.

---

## _Employers._

**Increase your employees' quality of life while decreasing your healthcare costs.** Employees with cardiovascular disease (including high blood pressure) cost employers _an extra $1,100 per year in lost productivity alone_<sup>*</sup>, compared with healthier employees. With Geneticure, you may be able to significantly reduce your company’s chronic disease spending by an estimated 16x ROI or _$1409 per year per employee_.<sup>**</sup>

<a class="button button--high" href="#">Get in touch</a>
{% endcapture %}
{% capture for_whom %}
  {% include text.html content=for_whom %}
{% endcapture %}
{% include hero.html align='right' content=for_whom height='full' overlay='float' width='half' img_alt='Geneticure' img_style='object-position: left' img_src='/assets/img/bg/doctor-consult.jpg' %}

{% capture about_us %}
## Built with love in Minnesota.

For 10 years we’ve put science and innovation to work, taking personalized medicine to the next level. Our unique focus on the physiology and combinatorial pharmacogenomics specific to each disease is unparalleled in a field of shotgun approaches to personalized medicine. Our first solution is helping to solve the trial-and-error approach in the leading preventable cause of death in the world: hypertension or high blood pressure. And we’re just getting started.

<a class="button button--high" href="#">Contact us</a>
{% endcapture %}
{% capture about_us %}
  {% include text.html content=about_us %}
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45904.882603545106!2d-92.49840832065428!3d44.02025457911051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f75f631adca1b1%3A0x9af7c3b31dbb04ce!2s4%203rd%20St%20SW%20%23305b%2C%20Rochester%2C%20MN%2055902!5e0!3m2!1sen!2sus!4v1618862134497!5m2!1sen!2sus" allowfullscreen="" loading="lazy"></iframe>
{% endcapture %}
{% include section.html columns=true content=about_us type='text' %}

{% capture team %}
  {% include graphic-sequence.html steps=site.data.team direction='x' highlight_first=true %}
{% endcapture %}
{% include section.html content=team type='text' %}

{% capture research %}
<div id="research"></div>

## Our Research

### Presentations at National and International Meetings

<cite>Multi-gene Pharmacogenetics and Blood Pressure Control in Patients with Hypertension.</cite> MW Johnson, R Sprissler, TP Olson, GW Beenken, and EM Snyder. Presented at the American Society for Health-System Pharmacies, 2016. The FASEB Journal, 30(1) 942.1.

<cite>Time to Blood Pressure Control According to Drug Class in Patients with Hypertension.</cite> MW Johnson, R Sprissler, TP Olson, GW Beenken, and EM Snyder. Presented at the American Society for Health-System Pharmacies, 2016. The FASEB Journal, 30(1) 942.12.

<cite>The Integrative Nature of Pharmacogenetics of Hypertension: Moving Beyond Drug Metabolizing Enzymes.</cite> EM Snyder, R Sprissler, and TP Olson. Presented at the Mayo Clinic Center for Individualized Medicine Annual Meeting, October, 2016.

<cite>Genes Predicting the Response to Beta-Blockade May Also Influence the Blood Pressure Response to Diuretic Therapy.</cite> EM Snyder, R Sprissler, and TP Olson. Presented at the Mayo Clinic Center for Individualized Medicine Annual Meeting, October, 2017.

<cite>Influence of genes important in renal sodium handling and the blood pressure response to a diuretic in hypertension.</cite> J Ross, D Walla, EM Snyder, R Sprissler, TP Olson, and P Phelps. Presented at the American Society for Health-System Pharmacists Annual Meeting. 2017.

<cite>Influence of genes involved in the renin-angiotensin-aldosterone system and the blood pressure response to angiotensin receptor blockade in hypertension.</cite> D Walla, J Ross, EM Snyder, R Sprissler, TP Olson, and P Phelps. Presented at the American Society for Health-System Pharmacists Annual Meeting. 2017.

<cite>Pharmacoeconomic Benefit of a Multi-Gene Panel and Blood Pressure Response to Hypertension Therapy.</cite> Monica Akre, Eli F. Kelley, Scott C. Snyder, Ryan Sprissler, Thomas P. Olson, and Eric M. Snyder. Presented at the Mayo Clinic Center for Individualized Medicine Annual Meeting. 2018.

<cite>Influence of beta-1 and beta-2 adrenergic receptor genotypes on echocardiographic response to selective and non-selective beta-blockade.</cite> Jerad J. Simmons, Eric M. Snyder, Audrie Ayres, Emma K. Bulock, Danielle M. Walla, Jennifer K. Ross, Monica Akre, Ryan Sprissler, Thomas P. Olson, Pamela K. Phelps. Presented at the American Society for Health-System Pharmacists Annual Meeting. 2018.

<cite>Influence of genetic variation of beta-2 adrenergic receptors and blood pressure response to a diuretic.</cite> Audrie Ayres, Eric M. Snyder, Danielle M. Walla, Jennifer K. Ross, Jerad J. Simmons, Emma K. Bulock, Monica Akre, Pamela K. Phelps. Presented at the American Society for Health-System Pharmacists Annual Meeting. 2018.

<cite>Influence of Angiotensin-Converting Enzyme (ACE) Genotypes on Blood Pressure Control and Incidence of Cough in Response to ACE Inhibition.</cite> Emma K. Bulock, Pamela K. Phelps, Eric M. Snyder, Danielle M. Walla, Jennifer K. Ross, Jerad J. Simmons, Audrie Ayres, Monica Akre, Laurie Grund, Tammy Ho, Ryan Sprissler, and Thomas P. Olson. Presented at the American Society for Health-System Pharmacists Annual Meeting. 2018.

<cite>The influence of β1-adrenergic receptor genotype on renal sodium handling and blood pressure response to angiotensin receptor blockers in hypertension patients.</cite> Kelley, EF, Phelps, PK, Akre, M, Walla, DM, Ross, JK, Simmons, JJ, Bulok, EK, Ayres, A, & Snyder, EM (2019).  FASEB J., 33 1_supplement: 819.5

<cite>Relationship between a weighted multi-gene algorithm and blood pressure control in hypertension.</cite> Phelps, PK, Kelley, EF, Snyder, EM, Walla, DM, Ross, JK, Simmons, JJ, Bulok, EK, Ayres, A, Akre, MK, Sprissler, R, & Olson, TP (2019).  FASEB J., 33 1_supplement: 819.6

### Peer-Reviewed Manuscripts

<cite>[Association of a Multi-Gene Panel with Blood Pressure Medication Success in Patients with Hypertension.](https://www.gavinpublishers.com/articles/Research-Article/Hypertension-An-Open-Access/Association-of-a-Multi-Gene-Panel-with-Blood-Pressure-Medication-Success-in-Patients-with-Hypertension-A-Pilot-Study)</cite> Eric M. Snyder, Ryan Sprissler, Micah Johnson, Greg D. Beenken, Timothy Curry, Nicholas Cassuto, and Thomas P. Olson. Hypertension: Open Access. HTOA-103.  2019. DOI: 10.29011/ HTOA-103.100008

<cite>[Pharmacoeconomic Benefit of a Multi-Gene Panel and Blood Pressure Response to Hypertension Therapy.](https://www.tandfonline.com/doi/abs/10.1080/13696998.2018.1531011)</cite> Eli F. Kelley, Eric M. Snyder,Nimer Alkhatib, Scott C. Snyder, Ryan Sprissler, Thomas P. Olson, Monica Akre, and Ivo Abraham. Journal of Medical Economics.2018. Oct 22:1-8. DOI: 10.1080/13696998.2018.1531011. (PMID: 30280614)

<cite>The Effect of Genetically Guided Mathematical Prediction and the Blood Pressure Response to Pharmacotherapy in Hypertension Patients.</cite> Eli F. Kelley, Thomas P. Olson, Timothy Curry, Ryan Sprissler, and Eric M. Snyder. Clinical Medicine Insights: Cardiology. In press. DOI: 10.1177/1179546819845883. 2019.

<cite>[Relationship Between a Weighted Multi-Gene Algorithm and Blood Pressure Control in Hypertension.](https://www.mdpi.com/2077-0383/8/3/289)</cite> Pamela K. Phelps, Eric M. Snyder, Danielle M. Walla, Jennifer K. Ross, Jerad J. Simmons, Emma K. Bulock, Audrie Ayers, MonicaK. Akre, Ryan Sprissler, and Thomas P. Olson. Journal of Clinical Medicine. Feb 28;8(3). 2019. (PMID:30823438)

### Completed and Ongoing Trials

<cite>Relationship Between Genes Important in Blood Pressure Regulation and Blood Pressure Therapy in Hypertension.</cite> Clinicaltrials.gov identifier: NCT02524873. Completed.

<cite>Investigating the Use of Genetics to Guide Pharmacologic Therapy for Hypertension.</cite> Clinicaltrials.gov identifier: NCT02988245. Completed.

<cite>Association Between a Genetic Algorithm to Predict Hypertension Therapy and Response to Treatment.</cite> Clinicaltrials.gov identifier: NCT03292900. Completed.
{% endcapture %}
{% include section.html content=research type='text' %}
