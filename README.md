# zhang.psychstat.org

My personal website built with Jekyll and inspired by the al-folio theme.

## Overview

This is a personal academic website for Johnny Zhang, showcasing research, publications, and projects in psychometrics and statistics. The site is built using Jekyll with custom layouts and styling inspired by the al-folio theme.

## Features

- **About Page**: Personal introduction and research interests
- **Publications**: List of research publications and scholarly work
- **Projects**: Research projects and collaborations
- **Blog**: Thoughts on psychometrics, statistics, and research
- **News**: Latest updates and announcements
- **Dark Mode**: Toggle between light and dark themes
- **Responsive Design**: Mobile-friendly layout

## Prerequisites

- Ruby (version 3.0 or higher)
- Bundler gem
- Jekyll gem

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/johnnyzhz/zhang.psychstat.org.git
   cd zhang.psychstat.org
   ```

2. Install dependencies:
   ```bash
   bundle install
   ```

## Local Development

To run the site locally:

```bash
bundle exec jekyll serve
```

The site will be available at `http://localhost:4000`

To build the site without serving:

```bash
bundle exec jekyll build
```

The generated site will be in the `_site` directory.

## Customization

### Personal Information

Edit `_config.yml` to update:
- Name and contact information
- Social media links
- Site description and metadata
- Theme settings

### Content

- **About**: Edit `_pages/about.md`
- **Blog Posts**: Add new posts to `_posts/` directory (format: `YYYY-MM-DD-title.md`)
- **News**: Add announcements to `_news/` directory
- **Projects**: Add projects to `_projects/` directory
- **Publications**: Add BibTeX entries to `_bibliography/papers.bib`

### Styling

- Custom CSS: Edit `assets/css/main.css`
- JavaScript: Edit `assets/js/theme.js`

## Directory Structure

```
.
├── _bibliography/      # BibTeX files for publications
├── _config.yml         # Site configuration
├── _includes/          # Reusable components (header, footer, etc.)
├── _layouts/           # Page layouts (default, page, post, about)
├── _news/              # News and announcements
├── _pages/             # Main site pages
├── _posts/             # Blog posts
├── _projects/          # Research projects
├── assets/             # CSS, JavaScript, images
│   ├── css/
│   ├── img/
│   └── js/
└── Gemfile            # Ruby dependencies
```

## Deployment

### GitHub Pages

The site is configured to work with GitHub Pages. Push to your repository and enable GitHub Pages in the repository settings.

### Manual Deployment

1. Build the site:
   ```bash
   bundle exec jekyll build
   ```

2. Deploy the contents of the `_site` directory to your web server.

## License

This website is built with open-source tools and custom code. Feel free to use the structure and design as inspiration for your own site.

## Contact

Johnny Zhang - johnny@psychstat.org

Website: https://zhang.psychstat.org

