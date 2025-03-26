# Battle Bots Arsenal - Static Site

This is a static site implementation of the Battle Bots Arsenal website using Jekyll. The site showcases combat robots across different weight classes and provides tools for robot design calculations.

## Prerequisites

- Ruby (version 2.7.0 or higher recommended)
- RubyGems
- GCC and Make (for compiling native extensions)

## Installation

1. Clone this repository:
   ```
   git clone https://github.com/TMU-BattleBots/battlebots-site.git
   cd battlebots-site
   ```

2. Install Jekyll and dependencies:
   ```
   bundle install
   ```

## Running Locally

To run the site locally:

```
bundle exec jekyll serve
```

This will start a local server at `http://localhost:4000`.

## Project Structure

- `_bots/` - Individual markdown files for each bot
- `_layouts/` - HTML templates for different page types
- `_includes/` - Reusable HTML components
- `assets/` - CSS, JavaScript, and image files
- `_config.yml` - Jekyll configuration
- `index.md` - Home page content
- `calculator.md` - Calculator page content

## Adding a New Bot

To add a new bot:

1. Create a new markdown file in the `_bots/` directory
2. Include the required front matter (see existing bot files for reference)
3. Add the bot's details and description in markdown format

Example:
```markdown
---
id: new-bot
name: New Bot
category: 3lb
description: A description of the new bot.
image: /images/new-bot.jpg
specs:
  weight: 3lb (1.36kg)
  dimensions: 8" x 6" x 4"
  weapon: Weapon type
  motor: Motor specs
  batteryType: Battery specs
githubLink: https://github.com/TMU-BattleBots/new-bot
cadFiles:
  - new_bot_frame.stl
  - new_bot_weapon.stl
---

## New Bot: Title

Description and details about the bot...
```

## Customization

### Changing the Theme

1. Update the `theme` setting in `_config.yml`
2. Install the new theme gem if needed
3. Update layouts and includes as necessary

### Modifying Styles

Edit the CSS files in `assets/css/` to change the site's appearance.

## Deployment

### GitHub Pages

1. Push your changes to GitHub
2. Configure GitHub Pages to build from your repository

### Other Hosting

1. Build the site:
   ```
   bundle exec jekyll build
   ```
2. Upload the contents of the `_site` directory to your web host

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
