---
layout: page
title: projects
permalink: /projects/
description: Research projects and collaborations
nav: true
nav_order: 2
---

<div class="projects">
  <h2>Research Projects</h2>
  
  {% for project in site.projects %}
    <div class="project-item">
      <h3><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>
      {% if project.description %}
        <p>{{ project.description }}</p>
      {% endif %}
    </div>
  {% endfor %}
  
  {% if site.projects.size == 0 %}
    <p>Projects will be added here. Create project files in the _projects directory.</p>
  {% endif %}
</div>
