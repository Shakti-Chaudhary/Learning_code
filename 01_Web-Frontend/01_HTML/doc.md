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
