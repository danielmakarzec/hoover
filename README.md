<h1>
Hoover app
</h1>
<h3>Description</h3>
<p>
  This program navigates an imaginary robotic hoover through an imaginary room.
</p>
<p>
  Room dimensions (XY coordinates) identifying the top right corner of the room rectangle. This room is divided up in a grid-based on these dimensions. A room has N columns and N rows, so N*N possible hoover positions. The bottom left corner is defined by X: 0 and Y: 0.
</p>
<p>
  Initial hover position and locations of patches of dirt are also defined by X and Y coordinates identifying the bottom left corner of those grid positions.
</p>
<p>
  The room is always rectangular. Driving instructions given as N,S,W,E where N means "go north" and E "go east" etc.
</p>
<p>
  Hoovering:<br>  Placing the hoover on a patch of dirt removes the dirt and makes it clean.
</p>
<p>
  Walls are boundaries hoover can't cross or bounce off from.
</p>
<h3>Instalation</h3>
<p>install <a href="http://nodejs.org">Node.js</a></p>
<pre><code>npm install</code></pre>
<h3>Run</h3>
<p>clone this repository</p>
<p>go to ./hoover</p>
<pre><code>node index.js</code></pre>
<h3>Testing</h3>
<p>JavaScript testing framework used is <a href="https://jestjs.io/">JEST</a></p>
<pre><code>npm test</code></pre>
