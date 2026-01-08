# ISU IT Club - Static Website for GitHub Pages

This is a fully static HTML/CSS/JavaScript website converted from the original PHP-based application. It's optimized for deployment on GitHub Pages.

## Files Structure

- **index.html** - Main website file
- **style.css** - CSS styles for the website
- **data.js** - Static data replacing database queries
- **logo/** - Directory for logo images
- **README.md** - This file

## Features

✅ **Static HTML** - No backend server required  
✅ **GitHub Pages Compatible** - Deploy for free  
✅ **Responsive Design** - Works on all devices  
✅ **Modern UI** - Built with Tailwind CSS  
✅ **JavaScript-Powered** - Dynamic content loading from data.js  

## PHP to JavaScript Conversion

The following PHP database queries have been converted to static JavaScript:

| Original PHP | Converted To |
|---|---|
| `db.php` queries | `data.js` - Static data object |
| `<?php include 'db.php'; ?>` | `<script src="data.js"></script>` |
| Dynamic carousel images | Static array in `data.js` |
| Database events | JavaScript array with sample events |
| Database messages | Static moderator/chairperson data |
| Database collaborations | Static collaborations array |

## How to Use

### Locally
1. Open `index.html` in a web browser
2. All content will load from `data.js`

### Deploy to GitHub Pages

1. **Create a GitHub Repository**
   - Go to https://github.com/new
   - Name it: `your-username.github.io` (for personal site) or any name (for project site)
   - Create the repository

2. **Upload Files**
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   # Copy all files (index.html, style.css, data.js, logo/) here
   git add .
   git commit -m "Initial commit - ISU IT Club website"
   git push origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository Settings
   - Scroll to "Pages" section
   - Select `main` branch as source
   - Save

4. **Access Your Site**
   - Personal site: `https://your-username.github.io`
   - Project site: `https://your-username.github.io/repo-name`

## Customizing the Content

All dynamic content is in `data.js`. To update:

1. Edit `data.js` and modify the `window.appData` object
2. Update carousel images, events, messages, and collaborations
3. Images can use:
   - External URLs (like Unsplash)
   - Local files (place in subdirectories like `images/`)

### Example: Adding an Event
```javascript
{
  id: 4,
  title: 'Your Event Title',
  description: 'Event description',
  location: 'Location',
  start_at: new Date(2025, 0, 15, 14, 0, 0).toISOString(),
  end_at: new Date(2025, 0, 15, 16, 0, 0).toISOString(),
  image: 'https://example.com/image.jpg'
}
```

## Removed PHP Dependencies

The following PHP-based features have been removed or converted:

- ❌ Database connections
- ❌ Login functionality (can be added with third-party services)
- ❌ Admin panel
- ❌ File uploads
- ✅ All content now served statically

## Adding New Sections

1. Add HTML structure to `index.html`
2. Add corresponding container element (e.g., `id="newSection"`)
3. Add data to `data.js`
4. Add JavaScript code to populate the section

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Technology Stack

- **HTML5** - Structure
- **CSS3** - Styling (with Tailwind CSS CDN)
- **JavaScript (Vanilla)** - Interactivity
- **Font Awesome 6** - Icons

## Performance

- ✅ No backend server needed
- ✅ Fast static file serving
- ✅ Small bundle size
- ✅ No database queries
- ✅ CDN-hosted CSS and icons

## Future Enhancements

To add back-end features (if needed):

1. **Contact Form** - Use services like Formspree or Netlify Forms
2. **User Authentication** - Use Firebase or Auth0
3. **Event Registration** - Integrate Google Forms or Typeform
4. **Comments** - Use Disqus or similar service

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please visit the GitHub repository and open an issue.

---

**Deployed on:** GitHub Pages  
**Last Updated:** 2025  
**Status:** ✅ Production Ready
