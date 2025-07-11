import React from "react";
import Card from "./Card";

const cardData = [
  {
    image:
      "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20180425164548/Phi-Phi-island-Krabi-Province-Thailand.jpg",
    library: "PRIMEREACT",
    version: "tooltip v3.1.0",
    description:
      "Tooltip functionality is integrated within various PrimeReac...",
    license: "MIT",
  },
  {
    image:
      "https://faroutmagazine.co.uk/static/uploads/1/2019/01/Top-20-most-beautiful-countries-in-the-world-revealed.jpg",
    library: "SEMANTIC-UI-REACT",
    version: "tab v0.86.0",
    description: "Called on tab change.",
    license: "MIT",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1694475331421-40cf7f468690?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG9uZG9uJTIwZXllfGVufDB8fDB8fHww",
    library: "REACT-BOOTSTRAP",
    version: "button-group v1.0.0",
    description: "Sets the size for all Buttons in the group.",
    license: "MIT",
  },
  {
    image:
      "https://hips.hearstapps.com/hmg-prod/images/paris-skyline-with-eiffel-tower-on-a-sunny-day-wide-royalty-free-image-1722542465.jpg?resize=980:*",
    library: "MATERIAL-UI",
    version: "tab v3.9.2",
    description:
      "Tabs make it easy to explore and switch between different vi...",
    license: "MIT",
  },
  {
    image:
      "https://hips.hearstapps.com/hmg-prod/images/long-boat-docked-on-beach-in-krabi-thailand-summers-royalty-free-image-1622044679.jpg?crop=1xw:1xh;center,top&resize=980:*",
    library: "RECHARTS",
    version: "line-chart v1.6.2",
    description: "Line chart React component",
    license: "MIT",
  },
  {
    image:
      "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2dldHR5aW1hZ2VzLTEyOTUxMDAzOTkuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4Mjh9fX0=",
    library: "RECHARTS",
    version: "composed-chart v1.6.2",
    description: "Composed chart React component",
    license: "MIT",
  },
  {
    image:
      "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2dldHR5aW1hZ2VzLTYxOTQyMjc3MC1sYXV0ZXJicnVubmVuLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODI4fX19",
    library: "GROMMET",
    version: "data-table v2.6.5",
    description: "A data driven table.",
    license: "APACHE",
  },
  {
    image:
      "https://lh7-us.googleusercontent.com/jSIsrEv6UIP0tNxB0qX5Nk62QUDr1hsU0q6exEXfQdFhCHzXzU3JvR6fTaLH3cSKLhaAlKXjSmX-v1UD7SLULwn73L-ZUxXAMrizxQ0PRrNMpEQeyUXylnczqteSpuFJ3V4ZsKDaLJBKPimcKxoWj_I",
    library: "MATERIAL-UI",
    version: "tooltip v3.9.2",
    description:
      "Tooltips display informative text when users hover over, foc...",
    license: "MIT",
  },
  {
    image:
      "https://imgix.ranker.com/list_img_v2/3506/883506/original/883506-u3?auto=format&q=50&fit=crop&fm=pjpg&dpr=2&crop=faces&h=185.86387434554973&w=355",
    library: "SEMANTIC-UI-REACT",
    version: "button v0.86.0",
    description: "A Button indicates a possible user action",
    license: "MIT",
  },
  {
    image:
      "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20180425164548/Phi-Phi-island-Krabi-Province-Thailand.jpg",
    library: "PRIMEREACT",
    version: "chart v3.1.0",
    description:
      "Chart components are based on Charts.js, an open source HTML...",
    license: "MIT",
  },
];

export default function CardGrid() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {cardData.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
