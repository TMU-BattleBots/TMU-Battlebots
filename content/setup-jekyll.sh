#!/bin/bash

# Setup script for Jekyll static site generator
# This script sets up a new Jekyll site using the content from the content directory

# Exit on error
set -e

# Check if the content directory exists
if [ ! -d "content" ]; then
  echo "Error: content directory not found. Please run this script from the parent directory of the content directory."
  exit 1
fi

# Create a new Jekyll site
echo "Creating new Jekyll site..."
jekyll new battlebots-site
cd battlebots-site

# Create necessary directories
echo "Creating directories..."
mkdir -p _bots _includes assets/css assets/js

# Copy configuration
echo "Copying configuration..."
cp ../content/_config.yml .

# Copy layouts
echo "Copying layouts..."
cp -r ../content/_layouts .

# Copy bots content
echo "Copying bot content..."
cp ../content/bots/*.md _bots/

# Copy includes
echo "Copying includes..."
cp ../content/calculator-form.html _includes/

# Copy assets
echo "Copying assets..."
cp ../content/assets/css/styles.css assets/css/
cp ../content/assets/js/script.js assets/js/

# Copy main pages
echo "Copying main pages..."
cp ../content/index.md .
cp ../content/calculator.md .

# Copy README and other files
echo "Copying other files..."
cp ../content/root-README.md README.md
cp ../content/Gemfile .
cp ../content/.gitignore .

# Create _includes directory if it doesn't exist
mkdir -p _includes

# Install dependencies
echo "Installing dependencies..."
bundle install

echo "Setup complete! You can now run the site with: bundle exec jekyll serve"
