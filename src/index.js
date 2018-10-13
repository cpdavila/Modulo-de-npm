import EUWeb from "capacitacion-js-basico";

const eu = new EUWeb();

eu.addNews({ slug: "soy genial B)" });

document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<pre>
 ${JSON.stringify(eu.getNews(), null, 2)}
</pre>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;
