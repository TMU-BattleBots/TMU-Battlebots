# Battle Bots Arsenal - Static Site Content

This directory contains the markdown content for the Battle Bots Arsenal website, structured for use with static site generators.

## Directory Structure

- `index.md` - Main landing page
- `calculator.md` - Calculator page
- `bots/` - Directory containing individual bot markdown files
  - `mighty-mouse.md`
  - `victorious-monty.md`
  - `lebot-james.md`
  - `pancake-flipper.md`
  - `chop-chop.md`
  - `terminated.md`
  - `richard.md`

## Using with Static Site Generators

This content is structured to work with most popular static site generators. Here are instructions for a few common ones:

### Jekyll

1. Install Jekyll: `gem install jekyll bundler`
2. Create a new Jekyll site: `jekyll new battlebots-site`
3. Copy the content files to the `_posts` directory (you may need to rename files to include dates)
4. Configure `_config.yml` to set up collections for bots
5. Create appropriate layouts in the `_layouts` directory
6. Run with: `bundle exec jekyll serve`

### Hugo

1. Install Hugo: `brew install hugo` (macOS) or download from the Hugo website
2. Create a new site: `hugo new site battlebots-site`
3. Copy the content files to the `content` directory
4. Choose or create a theme in the `themes` directory
5. Configure `config.toml` to set up the site parameters
6. Run with: `hugo server -D`

### 11ty (Eleventy)

1. Install 11ty: `npm install -g @11ty/eleventy`
2. Create a new directory: `mkdir battlebots-site && cd battlebots-site`
3. Initialize npm: `npm init -y`
4. Install 11ty locally: `npm install --save-dev @11ty/eleventy`
5. Copy the content files to the project directory
6. Create `.eleventy.js` configuration file
7. Run with: `npx @11ty/eleventy --serve`

### Next.js (with Static Export)

1. Create a Next.js app: `npx create-next-app battlebots-site`
2. Install required packages: `npm install gray-matter remark remark-html`
3. Copy the content files to a `content` directory in your project
4. Create page components that read and render the markdown content
5. Configure Next.js for static export in `next.config.js`
6. Build with: `npm run build && npm run export`

## Frontmatter

Each markdown file includes frontmatter (the YAML section at the top between `---` delimiters) that provides metadata about the content. This metadata can be used by the static site generator to create navigation, filter content, and more.

## Images

The image paths in the markdown files are set to `/images/placeholder.png`. You'll need to:

1. Create an `images` directory in your static site project
2. Copy the images from the original site to this directory
3. Update the image paths in the markdown files if necessary

## Interactive Elements

The calculator functionality would need to be implemented as client-side JavaScript. You can:

1. Create a JavaScript file with the calculator logic
2. Include it on the calculator page
3. Use the static site generator's templating system to include the necessary HTML structure

## Styling

You'll need to create CSS files based on the original site's styling. Most static site generators have a specific location for CSS files, such as:

- Jekyll: `/assets/css/`
- Hugo: `/static/css/` or within the theme
- 11ty: `/css/` (configurable)
- Next.js: `/styles/` or CSS-in-JS

## Deployment

Once your static site is built, you can deploy it to various hosting platforms:

- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Any web server that can serve static files
