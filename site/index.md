---
layout: archive
permalink: /
title: "Home"
exerpt: 
---
<h3 class="home">Hiroya Ono is a Music Producer in Tokyo, Japan</h3>
<div class="filter">
  <strong>Tags: </strong>
  <a href="javascript: void(0)" class="filter-link all current">All</a>
  {% assign ptags = "" | split:"|"  %}
  {% for post in site.posts %}
  {% for tag in post.tags %}
  {% unless ptags contains tag %}
  {% assign ptags = ptags | push: tag | sort %}
  {% endunless %}
  {% endfor %}
  {% endfor %}
  {% for ptag in ptags %}
  <a href="javascript: void(0)" class="filter-link" data-tag="{{ptag}}">{{ptag}}</a>
  {% endfor %}
</div>
<div class="tiles">
{% for post in site.categories.Works-Music %}
	{% include post-grid.html %}
{% endfor %}
</div><!-- /.tiles -->
