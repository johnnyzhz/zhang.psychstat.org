---
layout: page
permalink: /blog/
title: blog
description: Thoughts on psychometrics, statistics, and research
nav: true
nav_order: 3
---

<div class="post">
  {% assign postlist = site.posts %}

  {% for post in postlist %}
    <div class="post-preview">
      <h2>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </h2>
      <p class="post-meta">
        {{ post.date | date: "%B %-d, %Y" }}
        {% if post.author %}
          • {{ post.author }}
        {% endif %}
      </p>
      <div class="post-entry">
        {{ post.excerpt }}
      </div>
      <a href="{{ post.url | relative_url }}" class="read-more">Read More</a>
    </div>
  {% endfor %}
</div>
