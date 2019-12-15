<h1>
Hoover
</h1>
<h3>Description</h3>
<p>
  This program navigates an imaginary robotic hoover through imaginary room.
</p>
<p>
  Room dimensions (XY coordinates) identifying the top right corner of the room rectangle. This room is divided up in a grid-based on these dimensions. A room has N columns and N rows, so N*N possible hoover positions. The bottom left corner is the point of origin for our coordinate system, so as the room contains all coordinates its bottom left corner is defined by X: 0 and Y: 0.
</p>
<p>
  Initial hover position and locations of patches of dirt are also defined by X and Y coordinates identifying the bottom left corner of those grid positions.
</p>
<p>
  The room is always rectangular. Driving instructions given as N,S,W,E where N mean "go north" and E "go east" etc.
</p>
<p>
  Hoovering: /n Placing the hoover on a patch of dirt removes the dirt and makes it clean.
</p>
<p>
  Walls are boundries hoover can't cross or bounce off from.
</p>
<h3>Instalation</h3>
<p>install <a href="http://nodejs.org">Node.js</a></p>
<code>npm install</code>
<h3>Run</h3>
<p>clone this repository</p>
<p>go to ../hover</p>
<code>node index.js</code>
<h3>Testing</h3>
<p>JavaScript testing framework used is <a href="https://jestjs.io/">JEST</a></p>
<code>npm test</code>
