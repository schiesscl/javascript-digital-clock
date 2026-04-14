# JavaScript Digital Clock

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)

A visually pleasing vintage LCD 7-segment digital clock mimicking the aesthetic of classic digital wristwatches. This project serves as a practical exercise in DOM manipulation, modular styling, and continuous event loops using vanilla JavaScript.


## Features

- **Real-Time Updates:** Updates time synchronously every second using `setInterval`.
- **Classic Aesthetic:** Utilizes the [DSEG7 Classic](https://www.keshikan.net/fonts-e.html) open-source font to replicate the iconic 7-segment LCD displays.
- **Dynamic Styling Strategy:** Employs Bootstrap 5 utility classes dynamically injected through JavaScript natively keeping the HTML minimal, whilst local CSS files handle strict aesthetic properties like neon glows, metallic gradients, and complex shadows.
- **English Date Ordinals:** Evaluates the present date and appends intelligent English ordinal indicators (st, nd, rd, th).
- **Sub-Layer Ghosting:** A custom unlit UI overlay effect that adds realism by displaying inactive LCD segments behind the brightly lit contextual runtime data.

## Technologies Used

- **HTML5:** Semantic structure and container layouts.
- **CSS3:** Advanced radial backgrounds, layered `box-shadow` techniques, scanline effects, custom `@font-face` bindings, and overlapping `z-index` layering.
- **JavaScript (ES6):** Arrow functions, string template literals, Date manipulation, direct DOM ClassList mutating.
- **Bootstrap 5:** Fluid structural alignments and grid utilities.
- **Google Fonts:** Utilizing **Orbitron** for the date typography.

## Installation & Usage

1. Clone or download this repository.
2. Open the `index.html` file in any modern web browser.
3. No build steps, bundlers, or local servers are strictly required!

## Project Structure

```text
├── css/
│   └── styles.css          # Core visual aesthetic (colors, lighting, LCD fonts)
├── fonts/
│   ├── DSEG7Classic-Regular.woff
│   └── DSEG7Classic-Regular.woff2 
├── js/
│   └── clock.js            # Core JS logic, class manipulation, and timing intervals
├── index.html              # Clean markup structure
└── README.md
```

## Acknowledgments

Created as an active learning project for JavaScript fundamentals.
