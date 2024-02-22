import React from "react";
import "./_grid.scss";

export default function Grid() {
  return (
    <div className="grid">
      <main className="grid__main">
        <h1>Mythos</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          similique amet inventore, sint asperiores consequuntur aliquam
          blanditiis fugit culpa non vero suscipit rem a rerum magnam incidunt
          quas earum laudantium!
        </p>
      </main>
      <aside className="grid__sidebar">
        <h2>More Info</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ex
          facilis aperiam non totam, architecto vel libero consequuntur nam cum
          ullam necessitatibus? Repudiandae possimus ea expedita est, quo libero
          explicabo.
        </p>
      </aside>
    </div>
  );
}
