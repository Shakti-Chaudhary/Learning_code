# Complete HTML Interview Guide with Code Examples

## Table of Contents
1. [HTML Fundamentals](#html-fundamentals)
2. [Document Structure](#document-structure)
3. [Semantic HTML](#semantic-html)
4. [Forms and Input Elements](#forms-and-input-elements)
5. [Tables and Data Representation](#tables-and-data-representation)
6. [Media Elements](#media-elements)
7. [HTML5 Features](#html5-features)
8. [Accessibility](#accessibility)
9. [Best Practices](#best-practices)
10. [Interview Questions with Answers](#interview-questions-with-answers)

---

## HTML Fundamentals

### What is HTML?
HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure and semantic meaning of web content using elements and attributes.

### Basic HTML Document Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document Title</title>
</head>
<body>
    <header>
        <h1>Main Heading</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section>
            <h2>Section Heading</h2>
            <p>This is a paragraph with some content.</p>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2025 Company Name. All rights reserved.</p>
    </footer>
</body>
</html>
```

### HTML Element Anatomy
- **Opening Tag**: `<tagname>`
- **Content**: Text or other elements
- **Closing Tag**: `</tagname>`
- **Self-closing**: `<br>` or `<img src="..." alt="...">`
- **Attributes**: `<element attribute="value">`

---

## Document Structure

### DOCTYPE Declaration
The DOCTYPE declaration tells the browser which version of HTML the document uses:
```html
<!DOCTYPE html> <!-- HTML5 -->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"> <!-- HTML 4.01 Strict -->
```

### HTML Element
The root element that contains all other elements:
```html
<html lang="en" dir="ltr">
    <!-- All content goes here -->
</html>
```

### Head Section Elements
```html
<head>
    <!-- Character encoding -->
    <meta charset="UTF-8">
    
    <!-- Viewport for responsive design -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Page description for SEO -->
    <meta name="description" content="Page description for search engines">
    
    <!-- Keywords for SEO -->
    <meta name="keywords" content="html, interview, guide">
    
    <!-- Author information -->
    <meta name="author" content="Your Name">
    
    <!-- Page title -->
    <title>Page Title - Site Name</title>
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    
    <!-- Open Graph meta tags for social media -->
    <meta property="og:title" content="Page Title">
    <meta property="og:description" content="Page description">
    <meta property="og:image" content="image-url">
    <meta property="og:url" content="page-url">
</head>
```

---

## Semantic HTML

### Why Semantic HTML Matters
- **Accessibility**: Screen readers and assistive technologies
- **SEO**: Search engines understand content better
- **Maintainability**: Code is more readable and logical
- **Performance**: Better parsing and rendering

### Semantic Elements Example
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Semantic HTML Example</title>
</head>
<body>
    <header>
        <h1>Website Title</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="hero">
            <h2>Welcome to Our Website</h2>
            <p>This is the main content area of the page.</p>
        </section>

        <section id="services">
            <h2>Our Services</h2>
            <article>
                <header>
                    <h3>Web Development</h3>
                    <time datetime="2025-01-15">Published on January 15, 2025</time>
                </header>
                <p>We create modern, responsive websites.</p>
                <footer>
                    <p>Author: <cite>John Doe</cite></p>
                </footer>
            </article>
            
            <article>
                <header>
                    <h3>Digital Marketing</h3>
                    <time datetime="2025-01-10">Published on January 10, 2025</time>
                </header>
                <p>Boost your online presence with our marketing strategies.</p>
                <aside>
                    <p><strong>Note:</strong> Results may vary based on market conditions.</p>
                </aside>
            </article>
        </section>

        <section id="testimonials">
            <h2>What Our Clients Say</h2>
            <blockquote cite="https://example.com/testimonial">
                <p>"This company delivered exceptional results for our business."</p>
                <footer>
                    <cite>Jane Smith, CEO of Example Corp</cite>
                </footer>
            </blockquote>
        </section>
    </main>

    <aside id="sidebar">
        <h2>Latest News</h2>
        <article>
            <h3>Industry Update</h3>
            <p>Recent developments in web technology...</p>
        </article>
    </aside>

    <footer>
        <section>
            <h3>Contact Information</h3>
            <address>
                <p>123 Main Street<br>
                City, State 12345<br>
                <a href="tel:+1234567890">Phone: (123) 456-7890</a><br>
                <a href="mailto:info@example.com">Email: info@example.com</a></p>
            </address>
        </section>
        
        <section>
            <h3>Follow Us</h3>
            <nav>
                <ul>
                    <li><a href="#facebook">Facebook</a></li>
                    <li><a href="#twitter">Twitter</a></li>
                    <li><a href="#linkedin">LinkedIn</a></li>
                </ul>
            </nav>
        </section>
        
        <p><small>&copy; 2025 Company Name. All rights reserved.</small></p>
    </footer>
</body>
</html>
```

### Text Formatting and Semantic Meaning
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Text Semantics</title>
</head>
<body>
    <h1>Text Formatting Examples</h1>
    
    <!-- Headings hierarchy -->
    <h1>Main Title (h1)</h1>
    <h2>Section Title (h2)</h2>
    <h3>Subsection Title (h3)</h3>
    <h4>Sub-subsection Title (h4)</h4>
    <h5>Minor Heading (h5)</h5>
    <h6>Smallest Heading (h6)</h6>
    
    <!-- Paragraphs and text formatting -->
    <p>This is a regular paragraph with <strong>important text</strong> and <em>emphasized text</em>.</p>
    
    <p>Here's some <mark>highlighted text</mark> and <small>smaller text</small>.</p>
    
    <p>Chemical formula: H<sub>2</sub>O and mathematical expression: E=mc<sup>2</sup></p>
    
    <p>The <abbr title="World Wide Web">WWW</abbr> was invented by <cite>Tim Berners-Lee</cite>.</p>
    
    <p>Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy.</p>
    
    <p>The variable <var>x</var> represents the unknown value.</p>
    
    <p>Use the <code>console.log()</code> function to debug.</p>
    
    <pre>
        function example() {
            return "This is preformatted text";
        }
    </pre>
    
    <p>The conference will be held on <time datetime="2025-03-15T09:00">March 15, 2025 at 9:00 AM</time>.</p>
    
    <blockquote cite="https://example.com/quote">
        <p>"The best way to predict the future is to invent it."</p>
        <footer>— <cite>Alan Kay</cite></footer>
    </blockquote>
    
    <p><q>To be or not to be</q> is a famous quote from Hamlet.</p>
    
    <p>The deleted text is <del>removed content</del> and the inserted text is <ins>new content</ins>.</p>
    
    <p><s>This text is no longer accurate.</s></p>
    
    <p><u>This text has a non-textual annotation.</u></p>
</body>
</html>
```

---

## Forms and Input Elements

### Comprehensive Form Example
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Comprehensive Form Example</title>
</head>
<body>
    <main>
        <h1>User Registration Form</h1>
        
        <form action="/submit" method="post" novalidate>
            <fieldset>
                <legend>Personal Information</legend>
                
                <p>
                    <label for="firstName">First Name:</label>
                    <input type="text" id="firstName" name="firstName" required 
                           placeholder="Enter your first name" autocomplete="given-name">
                </p>
                
                <p>
                    <label for="lastName">Last Name:</label>
                    <input type="text" id="lastName" name="lastName" required 
                           placeholder="Enter your last name" autocomplete="family-name">
                </p>
                
                <p>
                    <label for="email">Email Address:</label>
                    <input type="email" id="email" name="email" required 
                           placeholder="user@example.com" autocomplete="email">
                </p>
                
                <p>
                    <label for="phone">Phone Number:</label>
                    <input type="tel" id="phone" name="phone" 
                           placeholder="(123) 456-7890" autocomplete="tel">
                </p>
                
                <p>
                    <label for="birthdate">Date of Birth:</label>
                    <input type="date" id="birthdate" name="birthdate" 
                           min="1900-01-01" max="2010-12-31">
                </p>
                
                <p>
                    <label for="age">Age:</label>
                    <input type="number" id="age" name="age" min="13" max="120" step="1">
                </p>
            </fieldset>
            
            <fieldset>
                <legend>Account Details</legend>
                
                <p>
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" required 
                           minlength="3" maxlength="20" pattern="[a-zA-Z0-9_]+" 
                           title="Username must contain only letters, numbers, and underscores">
                </p>
                
                <p>
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required 
                           minlength="8" autocomplete="new-password">
                </p>
                
                <p>
                    <label for="confirmPassword">Confirm Password:</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" required>
                </p>
                
                <p>
                    <label for="website">Personal Website:</label>
                    <input type="url" id="website" name="website" 
                           placeholder="https://example.com">
                </p>
            </fieldset>
            
            <fieldset>
                <legend>Preferences</legend>
                
                <p>
                    <label for="country">Country:</label>
                    <select id="country" name="country" required>
                        <option value="">Select a country</option>
                        <optgroup label="North America">
                            <option value="us">United States</option>
                            <option value="ca">Canada</option>
                            <option value="mx">Mexico</option>
                        </optgroup>
                        <optgroup label="Europe">
                            <option value="uk">United Kingdom</option>
                            <option value="de">Germany</option>
                            <option value="fr">France</option>
                        </optgroup>
                    </select>
                </p>
                
                <p>
                    <label for="bio">Biography:</label>
                    <textarea id="bio" name="bio" rows="4" cols="50" 
                              placeholder="Tell us about yourself..." maxlength="500"></textarea>
                </p>
                
                <fieldset>
                    <legend>Gender</legend>
                    <p>
                        <input type="radio" id="male" name="gender" value="male">
                        <label for="male">Male</label>
                    </p>
                    <p>
                        <input type="radio" id="female" name="gender" value="female">
                        <label for="female">Female</label>
                    </p>
                    <p>
                        <input type="radio" id="other" name="gender" value="other">
                        <label for="other">Other</label>
                    </p>
                    <p>
                        <input type="radio" id="prefer-not-to-say" name="gender" value="prefer-not-to-say">
                        <label for="prefer-not-to-say">Prefer not to say</label>
                    </p>
                </fieldset>
                
                <fieldset>
                    <legend>Interests</legend>
                    <p>
                        <input type="checkbox" id="programming" name="interests" value="programming">
                        <label for="programming">Programming</label>
                    </p>
                    <p>
                        <input type="checkbox" id="design" name="interests" value="design">
                        <label for="design">Design</label>
                    </p>
                    <p>
                        <input type="checkbox" id="marketing" name="interests" value="marketing">
                        <label for="marketing">Marketing</label>
                    </p>
                    <p>
                        <input type="checkbox" id="photography" name="interests" value="photography">
                        <label for="photography">Photography</label>
                    </p>
                </fieldset>
                
                <p>
                    <label for="avatar">Profile Picture:</label>
                    <input type="file" id="avatar" name="avatar" accept="image/*">
                </p>
                
                <p>
                    <label for="experience">Years of Experience:</label>
                    <input type="range" id="experience" name="experience" 
                           min="0" max="20" value="5" step="1">
                    <output for="experience">5 years</output>
                </p>
                
                <p>
                    <label for="salary">Expected Salary Range:</label>
                    <input type="range" id="salary" name="salary" 
                           min="30000" max="200000" value="75000" step="5000">
                    <output for="salary">$75,000</output>
                </p>
                
                <p>
                    <label for="portfolio">Portfolio Color:</label>
                    <input type="color" id="portfolio" name="portfolio" value="#ff0000">
                </p>
                
                <p>
                    <label for="interview-time">Preferred Interview Time:</label>
                    <input type="time" id="interview-time" name="interview-time">
                </p>
                
                <p>
                    <label for="start-date">Earliest Start Date:</label>
                    <input type="date" id="start-date" name="start-date">
                </p>
                
                <p>
                    <label for="meeting-datetime">Meeting Date and Time:</label>
                    <input type="datetime-local" id="meeting-datetime" name="meeting-datetime">
                </p>
            </fieldset>
            
            <fieldset>
                <legend>Agreement</legend>
                <p>
                    <input type="checkbox" id="terms" name="terms" required>
                    <label for="terms">I agree to the <a href="/terms">Terms and Conditions</a></label>
                </p>
                
                <p>
                    <input type="checkbox" id="newsletter" name="newsletter">
                    <label for="newsletter">Subscribe to our newsletter</label>
                </p>
            </fieldset>
            
            <p>
                <button type="submit">Register</button>
                <button type="reset">Clear Form</button>
                <button type="button">Save Draft</button>
            </p>
            
            <input type="hidden" name="form-version" value="2.1">
            <input type="hidden" name="source" value="website">
        </form>
    </main>
</body>
</html>
```

---

## Tables and Data Representation

### Complex Table Example
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Advanced Table Examples</title>
</head>
<body>
    <main>
        <h1>Employee Performance Report</h1>
        
        <table>
            <caption>
                Quarterly Performance Data for Q1 2025
                <details>
                    <summary>Table Description</summary>
                    <p>This table shows employee performance metrics including sales figures, 
                       customer satisfaction scores, and project completion rates.</p>
                </details>
            </caption>
            
            <colgroup>
                <col>
                <col span="2">
                <col>
                <col span="3">
            </colgroup>
            
            <thead>
                <tr>
                    <th rowspan="2" scope="col">Employee</th>
                    <th colspan="2" scope="colgroup">Sales</th>
                    <th rowspan="2" scope="col">Customer Satisfaction</th>
                    <th colspan="3" scope="colgroup">Projects</th>
                </tr>
                <tr>
                    <th scope="col">Q1 2025</th>
                    <th scope="col">Q4 2024</th>
                    <th scope="col">Completed</th>
                    <th scope="col">In Progress</th>
                    <th scope="col">Delayed</th>
                </tr>
            </thead>
            
            <tbody>
                <tr>
                    <th scope="row">John Smith</th>
                    <td>$125,000</td>
                    <td>$110,000</td>
                    <td>4.8/5.0</td>
                    <td>8</td>
                    <td>3</td>
                    <td>1</td>
                </tr>
                <tr>
                    <th scope="row">Sarah Johnson</th>
                    <td>$135,000</td>
                    <td>$128,000</td>
                    <td>4.9/5.0</td>
                    <td>10</td>
                    <td>2</td>
                    <td>0</td>
                </tr>
                <tr>
                    <th scope="row">Mike Davis</th>
                    <td>$98,000</td>
                    <td>$105,000</td>
                    <td>4.6/5.0</td>
                    <td>6</td>
                    <td>4</td>
                    <td>2</td>
                </tr>
                <tr>
                    <th scope="row">Emily Chen</th>
                    <td>$142,000</td>
                    <td>$138,000</td>
                    <td>4.7/5.0</td>
                    <td>9</td>
                    <td>3</td>
                    <td>1</td>
                </tr>
            </tbody>
            
            <tfoot>
                <tr>
                    <th scope="row">Total/Average</th>
                    <td>$500,000</td>
                    <td>$481,000</td>
                    <td>4.75/5.0</td>
                    <td>33</td>
                    <td>12</td>
                    <td>4</td>
                </tr>
            </tfoot>
        </table>
        
        <h2>Simple Data Table</h2>
        <table>
            <caption>Product Inventory</caption>
            <thead>
                <tr>
                    <th scope="col">Product ID</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Category</th>
                    <th scope="col">Price</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>001</td>
                    <td>Laptop Pro</td>
                    <td>Electronics</td>
                    <td>$1,299.99</td>
                    <td>25</td>
                    <td>In Stock</td>
                </tr>
                <tr>
                    <td>002</td>
                    <td>Wireless Mouse</td>
                    <td>Accessories</td>
                    <td>$49.99</td>
                    <td>150</td>
                    <td>In Stock</td>
                </tr>
                <tr>
                    <td>003</td>
                    <td>Gaming Keyboard</td>
                    <td>Accessories</td>
                    <td>$129.99</td>
                    <td>0</td>
                    <td>Out of Stock</td>
                </tr>
                <tr>
                    <td>004</td>
                    <td>Monitor 27"</td>
                    <td>Electronics</td>
                    <td>$349.99</td>
                    <td>8</td>
                    <td>Low Stock</td>
                </tr>
            </tbody>
        </table>
    </main>
</body>
</html>
```

---

## Media Elements

### Comprehensive Media Example
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Media Elements Example</title>
</head>
<body>
    <main>
        <h1>Media Content Examples</h1>
        
        <section>
            <h2>Images</h2>
            
            <!-- Basic image -->
            <figure>
                <img src="https://via.placeholder.com/400x300" 
                     alt="A placeholder image showing dimensions 400x300" 
                     width="400" height="300">
                <figcaption>Basic image with alt text and dimensions</figcaption>
            </figure>
            
            <!-- Responsive image with srcset -->
            <figure>
                <img src="https://via.placeholder.com/400x300" 
                     srcset="https://via.placeholder.com/400x300 400w,
                             https://via.placeholder.com/800x600 800w,
                             https://via.placeholder.com/1200x900 1200w"
                     sizes="(max-width: 600px) 400px,
                            (max-width: 1200px) 800px,
                            1200px"
                     alt="Responsive image with multiple sizes" 
                     loading="lazy">
                <figcaption>Responsive image using srcset and sizes</figcaption>
            </figure>
            
            <!-- Picture element for art direction -->
            <figure>
                <picture>
                    <source media="(max-width: 600px)" 
                            srcset="https://via.placeholder.com/300x400">
                    <source media="(max-width: 1200px)" 
                            srcset="https://via.placeholder.com/600x300">
                    <img src="https://via.placeholder.com/800x200" 
                         alt="Art-directed responsive image">
                </picture>
                <figcaption>Art-directed responsive image using picture element</figcaption>
            </figure>
        </section>
        
        <section>
            <h2>Audio Content</h2>
            
            <!-- Basic audio player -->
            <figure>
                <audio controls preload="none">
                    <source src="audio.mp3" type="audio/mpeg">
                    <source src="audio.ogg" type="audio/ogg">
                    <p>Your browser doesn't support HTML5 audio. 
                       <a href="audio.mp3">Download the audio file</a>.</p>
                </audio>
                <figcaption>Audio player with multiple format support</figcaption>
            </figure>
            
            <!-- Audio with additional attributes -->
            <figure>
                <audio controls loop muted preload="metadata">
                    <source src="background-music.mp3" type="audio/mpeg">
                    <source src="background-music.wav" type="audio/wav">
                    <track kind="captions" src="audio-captions.vtt" srclang="en" label="English">
                    <p>Your browser doesn't support HTML5 audio.</p>
                </audio>
                <figcaption>Audio with loop, muted, and captions</figcaption>
            </figure>
        </section>
        
        <section>
            <h2>Video Content</h2>
            
            <!-- Basic video player -->
            <figure>
                <video controls width="640" height="360" preload="none" poster="video-poster.jpg">
                    <source src="video.mp4" type="video/mp4">
                    <source src="video.webm" type="video/webm">
                    <source src="video.ogv" type="video/ogg">
                    <track kind="subtitles" src="subtitles-en.vtt" srclang="en" label="English" default>
                    <track kind="subtitles" src="subtitles-es.vtt" srclang="es" label="Español">
                    <track kind="descriptions" src="descriptions.vtt" srclang="en" label="English Descriptions">
                    <p>Your browser doesn't support HTML5 video. 
                       <a href="video.mp4">Download the video file</a>.</p>
                </video>
                <figcaption>Video player with multiple formats and subtitle tracks</figcaption>
            </figure>
            
            <!-- Autoplay video (muted for policy compliance) -->
            <figure>
                <video autoplay muted loop playsinline width="320" height="240">
                    <source src="background-video.mp4" type="video/mp4">
                    <source src="background-video.webm" type="video/webm">
                    <p>Your browser doesn't support HTML5 video.</p>
                </video>
                <figcaption>Autoplay background video (muted)</figcaption>
            </figure>
        </section>
        
        <section>
            <h2>Embedded Content</h2>
            
            <!-- YouTube embed using iframe -->
            <figure>
                <iframe width="560" height="315" 
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                        title="YouTube video player" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                </iframe>
                <figcaption>Embedded YouTube video</figcaption>
            </figure>
            
            <!-- Map embed -->
            <figure>
                <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik" 
                        width="600" height="450" 
                        title="OpenStreetMap embed">
                </iframe>
                <figcaption>Embedded map using OpenStreetMap</figcaption>
            </figure>
        </section>
        
        <section>
            <h2>Interactive Media</h2>
            
            <!-- Details and summary for collapsible content -->
            <details open>
                <summary>Video Specifications</summary>
                <dl>
                    <dt>Resolution</dt>
                    <dd>1920x1080 (Full HD)</dd>
                    
                    <dt>Frame Rate</dt>
                    <dd>30 fps</dd>
                    
                    <dt>Codec</dt>
                    <dd>H.264/AVC</dd>
                    
                    <dt>Duration</dt>
                    <dd>5 minutes 32 seconds</dd>
                    
                    <dt>File Size</dt>
                    <dd>125 MB</dd>
                </dl>
            </details>
            
            <!-- Progress element -->
            <p>
                <label for="download-progress">Download Progress:</label>
                <progress id="download-progress" value="75" max="100">75%</progress>
            </p>
            
            <!-- Meter element -->
            <p>
                <label for="disk-usage">Disk Usage:</label>
                <meter id="disk-usage" value="0.7" min="0" max="1" high="0.8" optimum="0.5">70%</meter>
            </p>
        </section>
    </main>
</body>
</html>
```

---

## HTML5 Features

### Modern HTML5 Elements and APIs
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML5 Features Demo</title>
</head>
<body>
    <main>
        <h1>HTML5 Features Demonstration</h1>
        
        <section>
            <h2>New Semantic Elements</h2>
            
            <article>
                <header>
                    <h3>Article Title</h3>
                    <time datetime="2025-06-20T10:30:00Z" pubdate>June 20, 2025</time>
                    <address>
                        By <a href="mailto:author@example.com">John Author</a>
                    </address>
                </header>
                
                <p>This article demonstrates HTML5 semantic elements.</p>
                
                <aside>
                    <h4>Related Information</h4>
                    <p>This sidebar contains related content.</p>
                </aside>
                
                <footer>
                    <p>Article tags: <span>HTML5</span>, <span>Web Development</span></p>
                </footer>
            </article>
        </section>
        
        <section>
            <h2>Interactive Elements</h2>
            
            <!-- Details and Summary -->
            <details>
                <summary>Click to expand technical details</summary>
                <p>HTML5 introduced many new features including:</p>
                <ul>
                    <li>New semantic elements</li>
                    <li>Form enhancements</li>
                    <li>Media elements</li>
                    <li>Canvas API</li>
                    <li>Web Storage</li>
                    <li>Geolocation API</li>
                </ul>
            </details>
            
            <!-- Dialog Element -->
            <dialog id="example-dialog">
                <form method="dialog">
                    <h3>Modal Dialog</h3>
                    <p>This is a native HTML5 dialog element.</p>
                    <button type="submit" value="cancel">Cancel</button>
                    <button type="submit" value="confirm">Confirm</button>
                </form>
            </dialog>
            
            <button type="button" onclick="document.getElementById('example-dialog').showModal()">
                Open Dialog
            </button>
        </section>
        
        <section>
            <h2>Progress and Meter Elements</h2>
            
            <!-- Progress bars -->
            <p>
                <label for="file-progress">File Upload Progress:</label>
                <progress id="file-progress" value="32" max="100">32%</progress>
            </p>
            
            <p>
                <label for="loading-progress">Loading:</label>
                <progress id="loading-progress">Loading...</progress>
            </p>
            
            <!-- Meters -->
            <p>
                <label for="disk-c">Disk C: Usage:</label>
                <meter id="disk-c" value="0.6" min="0" max="1" low="0.3" high="0.9" optimum="0.5">
                    60% used
                </meter>
            </p>
            
            <p>
                <label for="temperature">Temperature:</label>
                <meter id="temperature" value="75" min="0" max="100" low="20" high="80" optimum="68">
                    75°F
                </meter>
            </p>
            
            <p>
                <label for="score">Test Score:</label>
                <meter id="score" value="85" min="0" max="100" low="60" high="90" optimum="100">
                    85 out of 100
                </meter>
            </p>
        </section>
        
        <section>
            <h2>Canvas Element</h2>
            <canvas id="example-canvas" width="400" height="200">
                Your browser does not support the HTML5 canvas element.
            </canvas>
            
            <script>
                // Simple canvas example
                const canvas = document.getElementById('example-canvas');
                const ctx = canvas.getContext('2d');
                
                // Draw a rectangle
                ctx.fillStyle = '#FF6B6B';
                ctx.fillRect(10, 10, 150, 100);
                
                // Draw a circle
                ctx.beginPath();
                ctx.arc(300, 60, 50, 0, 2 * Math.PI);
                ctx.fillStyle = '#4ECDC4';
                ctx.fill();
                
                // Draw text
                ctx.font = '20px Arial';
                ctx.fillStyle = '#333';
                ctx.fillText('HTML5 Canvas', 10, 150);
            </script>
        </section>
        
        <section>
            <h2>Data Attributes</h2>
            
            <div data-user-id="12345" 
                 data-user-role="admin" 
                 data-last-login="2025-06-20T08:30:00Z"
                 data-preferences='{"theme": "dark", "language": "en"}'>
                <h3>User Profile</h3>
                <p>This element contains custom data attributes.</p>
            </div>
            
            <button onclick="showDataAttributes()">Show Data Attributes</button>
            
            <script>
                function showDataAttributes() {
                    const element = document.querySelector('[data-user-id]');
                    console.log('User ID:', element.dataset.userId);
                    console.log('User Role:', element.dataset.userRole);
                    console.log('Last Login:', element.dataset.lastLogin);
                    console.log('Preferences:', element.dataset.preferences);
                }
            </script>
        </section>
        
        <section>
            <h2>Microdata Example</h2>
            
            <div itemscope itemtype="http://schema.org/Person">
                <h3 itemprop="name">Dr. Jane Smith</h3>
                <p>Job Title: <span itemprop="jobTitle">Software Engineer</span></p>
                <p>Company: <span itemprop="worksFor">Tech Corp</span></p>
                <p>Email: <a href="mailto:jane@example.com" itemprop="email">jane@example.com</a></p>
                <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
                    <p>Address:</p>
                    <span itemprop="streetAddress">123 Main Street</span><br>
                    <span itemprop="addressLocality">New York</span>,
                    <span itemprop="addressRegion">NY</span>
                    <span itemprop="postalCode">10001</span>
                </div>
            </div>
        </section>
        
        <section>
            <h2>Web Components Ready Structure</h2>
            
            <!-- Custom element placeholder -->
            <custom-button type="primary" size="large">
                Click Me
            </custom-button>
            
            <!-- Template element -->
            <template id="user-card-template">
                <div class="user-card">
                    <img src="" alt="User avatar" class="avatar">
                    <h3 class="name"></h3>
                    <p class="email"></p>
                    <button class="contact-btn">Contact</button>
                </div>
            </template>
            
            <!-- Slot example structure -->
            <article>
                <header>
                    <slot name="title">Default Title</slot>
                </header>
                <main>
                    <slot>Default content goes here</slot>
                </main>
                <footer>
                    <slot name="footer">Default footer</slot>
                </footer>
            </article>
        </section>
    </main>
</body>
</html>
```

### HTML5 Form Enhancements
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML5 Form Features</title>
</head>
<body>
    <main>
        <h1>HTML5 Form Enhancements</h1>
        
        <form novalidate>
            <fieldset>
                <legend>New Input Types</legend>
                
                <!-- HTML5 input types -->
                <p>
                    <label for="email-field">Email:</label>
                    <input type="email" id="email-field" name="email" 
                           required autocomplete="email" 
                           placeholder="user@example.com">
                </p>
                
                <p>
                    <label for="url-field">Website:</label>
                    <input type="url" id="url-field" name="website" 
                           placeholder="https://example.com">
                </p>
                
                <p>
                    <label for="tel-field">Phone:</label>
                    <input type="tel" id="tel-field" name="phone" 
                           pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                           placeholder="123-456-7890">
                </p>
                
                <p>
                    <label for="search-field">Search:</label>
                    <input type="search" id="search-field" name="search" 
                           placeholder="Search products..." 
                           list="search-suggestions">
                    <datalist id="search-suggestions">
                        <option value="Laptops">
                        <option value="Smartphones">
                        <option value="Tablets">
                        <option value="Accessories">
                    </datalist>
                </p>
                
                <p>
                    <label for="number-field">Quantity:</label>
                    <input type="number" id="number-field" name="quantity" 
                           min="1" max="100" step="1" value="1">
                </p>
                
                <p>
                    <label for="range-field">Price Range:</label>
                    <input type="range" id="range-field" name="price" 
                           min="0" max="1000" step="50" value="500">
                    <output for="range-field">$500</output>
                </p>
                
                <p>
                    <label for="date-field">Date:</label>
                    <input type="date" id="date-field" name="date">
                </p>
                
                <p>
                    <label for="time-field">Time:</label>
                    <input type="time" id="time-field" name="time">
                </p>
                
                <p>
                    <label for="datetime-field">Date and Time:</label>
                    <input type="datetime-local" id="datetime-field" 
                           name="datetime">
                </p>
                
                <p>
                    <label for="month-field">Month:</label>
                    <input type="month" id="month-field" name="month">
                </p>
                
                <p>
                    <label for="week-field">Week:</label>
                    <input type="week" id="week-field" name="week">
                </p>
                
                <p>
                    <label for="color-field">Color:</label>
                    <input type="color" id="color-field" name="color" 
                           value="#ff0000">
                </p>
            </fieldset>
            
            <fieldset>
                <legend>Form Validation</legend>
                
                <p>
                    <label for="required-field">Required Field:</label>
                    <input type="text" id="required-field" name="required" 
                           required placeholder="This field is required">
                </p>
                
                <p>
                    <label for="pattern-field">Pattern Validation:</label>
                    <input type="text" id="pattern-field" name="pattern" 
                           pattern="[A-Za-z]{3,}" 
                           title="Please enter at least 3 letters"
                           placeholder="Minimum 3 letters">
                </p>
                
                <p>
                    <label for="minlength-field">Minimum Length:</label>
                    <input type="text" id="minlength-field" name="minlength" 
                           minlength="5" maxlength="20" 
                           placeholder="5-20 characters">
                </p>
                
                <p>
                    <label for="custom-validity">Custom Validation:</label>
                    <input type="text" id="custom-validity" name="custom" 
                           oninput="validateCustomField(this)">
                </p>
            </fieldset>
            
            <fieldset>
                <legend>Advanced Form Features</legend>
                
                <p>
                    <label for="autocomplete-field">Name (with autocomplete):</label>
                    <input type="text" id="autocomplete-field" name="fullname" 
                           autocomplete="name" placeholder="Full Name">
                </p>
                
                <p>
                    <label for="spellcheck-field">Message (with spellcheck):</label>
                    <textarea id="spellcheck-field" name="message" 
                              spellcheck="true" 
                              placeholder="Type your message here..."></textarea>
                </p>
                
                <p>
                    <label for="readonly-field">Readonly Field:</label>
                    <input type="text" id="readonly-field" name="readonly" 
                           value="This cannot be edited" readonly>
                </p>
                
                <p>
                    <label for="disabled-field">Disabled Field:</label>
                    <input type="text" id="disabled-field" name="disabled" 
                           value="This is disabled" disabled>
                </p>
                
                <p>
                    <input type="checkbox" id="form-checkbox" name="agreement" 
                           required form="external-form">
                    <label for="form-checkbox">I agree (associated with external form)</label>
                </p>
            </fieldset>
            
            <p>
                <button type="submit">Submit</button>
                <button type="button" onclick="checkFormValidity()">Check Validity</button>
            </p>
        </form>
        
        <!-- External form to demonstrate form attribute -->
        <form id="external-form" action="#" method="post">
            <p>This checkbox above is associated with this form using the form attribute.</p>
            <button type="submit">Submit External Form</button>
        </form>
        
        <script>
            function validateCustomField(input) {
                if (input.value.includes('invalid')) {
                    input.setCustomValidity('The word "invalid" is not allowed');
                } else {
                    input.setCustomValidity('');
                }
            }
            
            function checkFormValidity() {
                const form = document.querySelector('form');
                if (form.checkValidity()) {
                    alert('Form is valid!');
                } else {
                    alert('Form has validation errors.');
                }
            }
            
            // Update range output
            document.getElementById('range-field').addEventListener('input', function() {
                document.querySelector('output[for="range-field"]').textContent = ' + this.value;
            });
        </script>
    </main>
</body>
</html>
```

---

## Accessibility

### Comprehensive Accessibility Example
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accessibility Best Practices Example</title>
    <meta name="description" content="Comprehensive example of HTML accessibility features and best practices">
</head>
<body>
    <!-- Skip navigation link for screen readers -->
    <a href="#main-content" class="skip-link">Skip to main content</a>
    
    <header role="banner">
        <h1>Accessible Website Example</h1>
        
        <nav role="navigation" aria-label="Main navigation">
            <ul>
                <li><a href="#home" aria-current="page">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services" aria-haspopup="true" aria-expanded="false">Services</a>
                    <ul aria-label="Services submenu">
                        <li><a href="#web-design">Web Design</a></li>
                        <li><a href="#seo">SEO</a></li>
                        <li><a href="#consulting">Consulting</a></li>
                    </ul>
                </li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <main id="main-content" role="main">
        <section aria-labelledby="intro-heading">
            <h2 id="intro-heading">Introduction to Web Accessibility</h2>
            <p>Web accessibility ensures that websites are usable by people with disabilities. 
               This includes users who rely on screen readers, keyboard navigation, or other assistive technologies.</p>
        </section>
        
        <section aria-labelledby="form-section-heading">
            <h2 id="form-section-heading">Accessible Form Example</h2>
            
            <form role="form" aria-labelledby="form-section-heading" novalidate>
                <fieldset>
                    <legend>Personal Information</legend>
                    
                    <div role="group" aria-labelledby="name-group-label">
                        <p id="name-group-label">Full Name</p>
                        <p>
                            <label for="first-name">First Name <abbr title="required" aria-label="required">*</abbr></label>
                            <input type="text" id="first-name" name="firstName" 
                                   required aria-required="true" 
                                   aria-describedby="first-name-error">
                            <span id="first-name-error" role="alert" aria-live="polite"></span>
                        </p>
                        
                        <p>
                            <label for="last-name">Last Name <abbr title="required" aria-label="required">*</abbr></label>
                            <input type="text" id="last-name" name="lastName" 
                                   required aria-required="true" 
                                   aria-describedby="last-name-error">
                            <span id="last-name-error" role="alert" aria-live="polite"></span>
                        </p>
                    </div>
                    
                    <p>
                        <label for="email">Email Address <abbr title="required" aria-label="required">*</abbr></label>
                        <input type="email" id="email" name="email" 
                               required aria-required="true" 
                               aria-describedby="email-help email-error" 
                               autocomplete="email">
                        <small id="email-help">We'll never share your email with anyone else.</small>
                        <span id="email-error" role="alert" aria-live="polite"></span>
                    </p>
                    
                    <p>
                        <label for="phone">Phone Number</label>
                        <input type="tel" id="phone" name="phone" 
                               aria-describedby="phone-format" 
                               autocomplete="tel">
                        <small id="phone-format">Format: (123) 456-7890</small>
                    </p>
                </fieldset>
                
                <fieldset>
                    <legend>Preferences</legend>
                    
                    <fieldset role="radiogroup" aria-labelledby="contact-method-legend" aria-required="true">
                        <legend id="contact-method-legend">Preferred Contact Method <abbr title="required" aria-label="required">*</abbr></legend>
                        <p>
                            <input type="radio" id="contact-email" name="contactMethod" value="email" required>
                            <label for="contact-email">Email</label>
                        </p>
                        <p>
                            <input type="radio" id="contact-phone" name="contactMethod" value="phone" required>
                            <label for="contact-phone">Phone</label>
                        </p>
                        <p>
                            <input type="radio" id="contact-mail" name="contactMethod" value="mail" required>
                            <label for="contact-mail">Postal Mail</label>
                        </p>
                    </fieldset>
                    
                    <fieldset>
                        <legend>Interests (Select all that apply)</legend>
                        <p>
                            <input type="checkbox" id="interest-web" name="interests" value="web-development">
                            <label for="interest-web">Web Development</label>
                        </p>
                        <p>
                            <input type="checkbox" id="interest-design" name="interests" value="design">
                            <label for="interest-design">Graphic Design</label>
                        </p>
                        <p>
                            <input type="checkbox" id="interest-marketing" name="interests" value="marketing">
                            <label for="interest-marketing">Digital Marketing</label>
                        </p>
                    </fieldset>
                    
                    <p>
                        <label for="message">Message</label>
                        <textarea id="message" name="message" rows="5" 
                                  aria-describedby="message-count" 
                                  maxlength="500"></textarea>
                        <span id="message-count" aria-live="polite">0/500 characters</span>
                    </p>
                </fieldset>
                
                <p>
                    <button type="submit" aria-describedby="submit-help">Submit Form</button>
                    <small id="submit-help">Press Enter or click to submit the form</small>
                </p>
            </form>
        </section>
        
        <section aria-labelledby="table-section-heading">
            <h2 id="table-section-heading">Accessible Data Table</h2>
            
            <table role="table" aria-labelledby="table-caption">
                <caption id="table-caption">
                    Employee Sales Performance Q1 2025
                    <details>
                        <summary>Table Description</summary>
                        <p>This table shows quarterly sales performance for each employee, 
                           including total sales, number of deals closed, and commission earned.</p>
                    </details>
                </caption>
                
                <thead>
                    <tr role="row">
                        <th role="columnheader" scope="col" tabindex="0" 
                            aria-sort="none" 
                            onclick="sortTable(0)">
                            Employee Name
                            <span aria-hidden="true">↕</span>
                        </th>
                        <th role="columnheader" scope="col" tabindex="0" 
                            aria-sort="none" 
                            onclick="sortTable(1)">
                            Total Sales
                            <span aria-hidden="true">↕</span>
                        </th>
                        <th role="columnheader" scope="col" tabindex="0" 
                            aria-sort="none" 
                            onclick="sortTable(2)">
                            Deals Closed
                            <span aria-hidden="true">↕</span>
                        </th>
                        <th role="columnheader" scope="col" tabindex="0" 
                            aria-sort="none" 
                            onclick="sortTable(3)">
                            Commission
                            <span aria-hidden="true">↕</span>
                        </th>
                    </tr>
                </thead>
                
                <tbody>
                    <tr role="row">
                        <th role="rowheader" scope="row">John Smith</th>
                        <td role="gridcell">$125,000</td>
                        <td role="gridcell">25</td>
                        <td role="gridcell">$12,500</td>
                    </tr>
                    <tr role="row">
                        <th role="rowheader" scope="row">Sarah Johnson</th>
                        <td role="gridcell">$150,000</td>
                        <td role="gridcell">30</td>
                        <td role="gridcell">$15,000</td>
                    </tr>
                    <tr role="row">
                        <th role="rowheader" scope="row">Mike Davis</th>
                        <td role="gridcell">$98,000</td>
                        <td role="gridcell">20</td>
                        <td role="gridcell">$9,800</td>
                    </tr>
                </tbody>
                
                <tfoot>
                    <tr role="row">
                        <th role="rowheader" scope="row">Total</th>
                        <td role="gridcell">$373,000</td>
                        <td role="gridcell">75</td>
                        <td role="gridcell">$37,300</td>
                    </tr>
                </tfoot>
            </table>
        </section>
        
        <section aria-labelledby="media-section-heading">
            <h2 id="media-section-heading">Accessible Media</h2>
            
            <figure>
                <img src="https://via.placeholder.com/400x300/0066CC/FFFFFF?text=Accessible+Image" 
                     alt="Blue placeholder image with white text reading 'Accessible Image' demonstrating proper alt text usage" 
                     longdesc="#img-description">
                <figcaption>
                    Example of an image with comprehensive alt text
                    <details id="img-description">
                        <summary>Detailed Image Description</summary>
                        <p>This is a 400x300 pixel placeholder image with a blue background (#0066CC) 
                           and white text that reads "Accessible Image". The image is used to demonstrate 
                           proper alt text implementation for accessibility.</p>
                    </details>
                </figcaption>
            </figure>
            
            <figure>
                <video controls preload="none" aria-labelledby="video-title" aria-describedby="video-description">
                    <source src="sample-video.mp4" type="video/mp4">
                    <source src="sample-video.webm" type="video/webm">
                    <track kind="subtitles" src="subtitles-en.vtt" srclang="en" label="English" default>
                    <track kind="subtitles" src="subtitles-es.vtt" srclang="es" label="Spanish">
                    <track kind="descriptions" src="audio-descriptions.vtt" srclang="en" label="Audio Descriptions">
                    <track kind="captions" src="captions.vtt" srclang="en" label="English Captions">
                    <p>Your browser doesn't support HTML5 video. 
                       <a href="sample-video.mp4">Download the video file</a>.</p>
                </video>
                <figcaption>
                    <h3 id="video-title">Accessible Video Example</h3>
                    <p id="video-description">This video demonstrates accessibility features including 
                       subtitles, captions, and audio descriptions in multiple languages.</p>
                </figcaption>
            </figure>
        </section>
        
        <section aria-labelledby="interaction-section-heading">
            <h2 id="interaction-section-heading">Interactive Elements</h2>
            
            <!-- Accessible button with state -->
            <button type="button" 
                    aria-pressed="false" 
                    aria-describedby="toggle-description" 
                    onclick="toggleButton(this)">
                Toggle Feature
            </button>
            <p id="toggle-description">Click to enable or disable the feature</p>
            
            <!-- Accessible disclosure widget -->
            <details>
                <summary aria-expanded="false" role="button">
                    Expandable Content Section
                </summary>
                <div role="region" aria-label="Expandable content">
                    <p>This content is revealed when the summary is activated. 
                       It's properly associated with the summary element for screen readers.</p>
                </div>
            </details>
            
            <!-- Progress indicator -->
            <div role="progressbar" 
                 aria-valuenow="65" 
                 aria-valuemin="0" 
                 aria-valuemax="100" 
                 aria-labelledby="progress-label" 
                 aria-describedby="progress-description">
                <span id="progress-label">Upload Progress</span>
                <div aria-hidden="true">65%</div>
            </div>
            <p id="progress-description">File upload is 65% complete</p>
            
            <!-- Live region for announcements -->
            <div id="live-region" aria-live="polite" aria-atomic="true" role="status">
                <!-- Dynamic content will be announced here -->
            </div>
            
            <!-- Alert region -->
            <div id="alert-region" role="alert" aria-live="assertive" aria-atomic="true">
                <!-- Important alerts will be announced immediately -->
            </div>
            
            <button type="button" onclick="announceUpdate()">Trigger Live Update</button>
            <button type="button" onclick="showAlert()">Trigger Alert</button>
        </section>
    </main>
    
    <aside role="complementary" aria-labelledby="sidebar-heading">
        <h2 id="sidebar-heading">Related Information</h2>
        <nav aria-label="Related links">
            <ul>
                <li><a href="#wcag">WCAG Guidelines</a></li>
                <li><a href="#aria">ARIA Specification</a></li>
                <li><a href="#testing">Accessibility Testing</a></li>
            </ul>
        </nav>
    </aside>
    
    <footer role="contentinfo">
        <p>&copy; 2025 Accessible Website Example. All rights reserved.</p>
        <nav aria-label="Footer navigation">
            <ul>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms of Service</a></li>
                <li><a href="#accessibility">Accessibility Statement</a></li>
            </ul>
        </nav>
    </footer>
    
    <script>
        // Accessibility-focused JavaScript examples
        
        function toggleButton(button) {
            const isPressed = button.getAttribute('aria-pressed') === 'true';
            button.setAttribute('aria-pressed', !isPressed);
            button.textContent = isPressed ? 'Toggle Feature' : 'Feature Enabled';
            
            // Announce the change
            announceToScreenReader(isPressed ? 'Feature disabled' : 'Feature enabled');
        }
        
        function sortTable(columnIndex) {
            // Simplified sort function for demo
            const headers = document.querySelectorAll('th[aria-sort]');
            headers.forEach(header => header.setAttribute('aria-sort', 'none'));
            
            const clickedHeader = headers[columnIndex];
            clickedHeader.setAttribute('aria-sort', 'ascending');
            
            announceToScreenReader(`Table sorted by ${clickedHeader.textContent.trim()} in ascending order`);
        }
        
        function announceUpdate() {
            const liveRegion = document.getElementById('live-region');
            liveRegion.textContent = `Content updated at ${new Date().toLoc