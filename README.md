# Simple-Animate

Simple animation library - Start Config

Configuration options for the Intersection Observer:

<pre>
const observerOptions = {
    root: null,           // Root element (viewport) for observation (null means the viewport)
    rootMargin: '0',      // Margin around the viewport to trigger observation
    threshold: 0.5,       // Visibility threshold to trigger animation (50% of the element should be visible)
};
</pre>

You can also customize the animation duration by modifying <b>--animate-time</b> in the :root of your CSS:

<pre>
:root {
    --animate-time: 1s; /* Change this value to set the animation duration */
}
</pre>

Usage:
Link files in your HTML:

    <link rel="stylesheet" href="simple-animate.css">
    <script src="simple-animate.js" defer></script>

Apply classes in your Html Elemnts:

    <div class="animate--right">
        <!-- Your content with animation from right to left -->
    </div>
    
    <div class="animate--left">
        <!-- Your content with animation from left to right -->
    </div>
    
    <div class="animate--up">
        <!-- Your content with animation from top to bottom -->
    </div>
    
    <div class="animate--down">
        <!-- Your content with animation from bottom to top -->
    </div>

