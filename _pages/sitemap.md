---
layout: archive
title: "Sitemap"
permalink: /sitemap/
author_profile: true
---

{% include base_path %}

<h2>Pages</h2>

<ul>
  <li><a href="{{ base_path }}/">About</a></li>
  <li><a href="{{ base_path }}/publications/">Publications</a></li>
  <li><a href="{{ base_path }}/projects/">Projects</a></li>
  <li><a href="{{ base_path }}/teaching/">Teaching</a></li>
  <li><a href="{{ base_path }}/talks/">Talks and presentations</a></li>
  <li><a href="{{ base_path }}/files/CV_Tatevik_Ter-Hovhannisyan.pdf">CV</a></li>
</ul>

<h2>Publications</h2>

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}

<h2>Projects</h2>

{% for post in site.portfolio reversed %}
  {% include archive-single.html %}
{% endfor %}

<h2>Talks and Presentations</h2>

{% for post in site.talks reversed %}
  {% include archive-single-talk.html %}
{% endfor %}
