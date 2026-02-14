let filters = {
  brightness: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%",
  },
  contrast: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%",
  },
  saturation: {
    value: 100,
    min: 0,
    max: 200,
    unit: "%",
  },
  hueRotation: {
    value: 0,
    min: 0,
    max: 360,
    unit: "deg",
  },
  blur: {
    value: 0,
    min: 0,
    max: 20,
    unit: "px",
  },
  sepia: {
    value: 0,
    min: 0,
    max: 100,
    unit: "%",
  },
  grayscale: {
    value: 0,
    min: 0,
    max: 100,
    unit: "%",
  },
  opacity: {
    value: 100,
    min: 0,
    max: 100,
    unit: "%",
  },
  invert: {
    value: 0,
    min: 0,
    max: 100,
    unit: "%",
  },
};

const filterContainer = document.querySelector(".filter-sec");

const imageCanvas = document.getElementById("image-canvas");
const chooseFile = document.querySelector("#chooseFile");
const canvasCtx = imageCanvas.getContext("2d");

const resetBtn = document.querySelector("#reset-btn");
const downloadBtn = document.querySelector("#download-btn")
const presetContainer = document.querySelector(".presets")

let file = null;
let image = null;

function createFilterElement(name, value, min, max, unit = "%") {
  const div = document.createElement("div");
  div.classList.add("filter");

  const input = document.createElement("input");
  input.value = value;
  input.min = min;
  input.max = max;
  input.id = name;
  input.type = "range";

  const p = document.createElement("p");
  p.innerText = name;

  div.appendChild(p);
  div.appendChild(input);

  input.addEventListener("input", (event) => {
    // console.log(filters[name].value);
    filters[name].value = input.value; /*updating the properties int filters to what user has selected */
    // console.log(name, filters[name]);
    applyFilters();
  });

  return div;
}

function createFilters(){
    Object.keys(filters).forEach((key) => {
        const filterElement = createFilterElement(
            key,
            filters[key].value,
            filters[key].min,
            filters[key].max,
            filters[key].unit
        );
        
        console.log(filterElement);
        
        filterContainer.appendChild(filterElement);
    });
}
createFilters()

chooseFile.addEventListener("change", (event) => {
  file = event.target.files[0]; /*to get the target file */
  const imgPlaceholder = document.querySelector(".placeholder");
  imageCanvas.style.display = "block";
  imgPlaceholder.style.display = "none ";

  const img = new Image();
  img.src = URL.createObjectURL(file);

  img.onload = () => {
    image = img;
    imageCanvas.width = img.width;
    imageCanvas.height = img.height;
    canvasCtx.drawImage(img, 0, 0);
  };
});

function applyFilters() {
  canvasCtx.clearRect(0, 0, imageCanvas.width, imageCanvas.height);

  canvasCtx.filter = `
    brightness(${filters.brightness.value}${filters.brightness.unit})
    contrast(${filters.contrast.value}${filters.contrast.unit})
    saturate(${filters.saturation.value}${filters.saturation.unit})
    hue-rotate(${filters.hueRotation.value}${filters.hueRotation.unit})
    blur(${filters.blur.value}${filters.blur.unit})
    grayscale(${filters.grayscale.value}${filters.grayscale.unit})
    sepia(${filters.sepia.value}${filters.sepia.unit})
    opacity(${filters.opacity.value}${filters.opacity.unit}) 
    invert(${filters.invert.value}${filters.invert.unit})
    `;

  canvasCtx.drawImage(image, 0, 0);
}

resetBtn.addEventListener("click", () => {
  filters = {
    brightness: {
      value: 100,
      min: 0,
      max: 200,
      unit: "%",
    },
    contrast: {
      value: 100,
      min: 0,
      max: 200,
      unit: "%",
    },
    saturation: {
      value: 100,
      min: 0,
      max: 200,
      unit: "%",
    },
    hueRotation: {
      value: 0,
      min: 0,
      max: 360,
      unit: "deg",
    },
    blur: {
      value: 0,
      min: 0,
      max: 20,
      unit: "px",
    },
    sepia: {
      value: 0,
      min: 0,
      max: 100,
      unit: "%",
    },
    grayscale: {
      value: 0,
      min: 0,
      max: 100,
      unit: "%",
    },
    opacity: {
      value: 100,
      min: 0,
      max: 100,
      unit: "%",
    },
    invert: {
      value: 0,
      min: 0,
      max: 100,
      unit: "%",
    },
  };
  applyFilters()
  filterContainer.innerHTML = ""
  createFilters()
});

downloadBtn.addEventListener("click", ()=>{
    const link = document.createElement("a")
    link.download = "edited-image.png"
    link.href = imageCanvas.toDataURL()
    link.click()
})


const presets = {
  normal: {
    brightness: 100,
    contrast: 100,
    saturation: 100,
    hueRotation: 0,
    blur: 0,
    sepia: 0,
    grayscale: 0,
    opacity: 100,
    invert: 0,
  },

  faded: {
    brightness: 110,
    contrast: 85,
    saturation: 80,
    hueRotation: 0,
    blur: 0,
    sepia: 10,
    grayscale: 5,
    opacity: 100,
    invert: 0,
  },

  oldSchool: {
    brightness: 105,
    contrast: 90,
    saturation: 70,
    hueRotation: 5,
    blur: 1,
    sepia: 40,
    grayscale: 10,
    opacity: 100,
    invert: 0,
  },

  vintage: {
    brightness: 110,
    contrast: 95,
    saturation: 75,
    hueRotation: 10,
    blur: 1,
    sepia: 35,
    grayscale: 0,
    opacity: 100,
    invert: 0,
  },

  warm: {
    brightness: 105,
    contrast: 105,
    saturation: 120,
    hueRotation: -10,
    blur: 0,
    sepia: 15,
    grayscale: 0,
    opacity: 100,
    invert: 0,
  },

  cool: {
    brightness: 100,
    contrast: 110,
    saturation: 110,
    hueRotation: 15,
    blur: 0,
    sepia: 0,
    grayscale: 0,
    opacity: 100,
    invert: 0,
  },

  dramatic: {
    brightness: 95,
    contrast: 140,
    saturation: 120,
    hueRotation: 0,
    blur: 0,
    sepia: 0,
    grayscale: 0,
    opacity: 100,
    invert: 0,
  },

  blackAndWhite: {
    brightness: 100,
    contrast: 120,
    saturation: 0,
    hueRotation: 0,
    blur: 0,
    sepia: 0,
    grayscale: 100,
    opacity: 100,
    invert: 0,
  },

  cinematic: {
    brightness: 95,
    contrast: 125,
    saturation: 85,
    hueRotation: -5,
    blur: 0,
    sepia: 10,
    grayscale: 0,
    opacity: 100,
    invert: 0,
  },

  retro: {
    brightness: 110,
    contrast: 90,
    saturation: 85,
    hueRotation: 20,
    blur: 1,
    sepia: 30,
    grayscale: 5,
    opacity: 100,
    invert: 0,
  },
   softPortrait: {
    brightness: 108,
    contrast: 92,
    saturation: 95,
    hueRotation: -2,
    blur: 0,
    sepia: 5,
    grayscale: 0,
    opacity: 100,
    invert: 0,
  },

  moody: {
    brightness: 92,
    contrast: 125,
    saturation: 85,
    hueRotation: -5,
    blur: 0,
    sepia: 8,
    grayscale: 0,
    opacity: 100,
    invert: 0,
  },

  cinematicTealOrange: {
    brightness: 96,
    contrast: 135,
    saturation: 105,
    hueRotation: -15,
    blur: 0,
    sepia: 5,
    grayscale: 0,
    opacity: 100,
    invert: 0,
  },

  matteFilm: {
    brightness: 110,
    contrast: 85,
    saturation: 90,
    hueRotation: 3,
    blur: 0,
    sepia: 10,
    grayscale: 0,
    opacity: 100,
    invert: 0,
  },

  fineArtBW: {
    brightness: 102,
    contrast: 135,
    saturation: 0,
    hueRotation: 0,
    blur: 0,
    sepia: 0,
    grayscale: 100,
    opacity: 100,
    invert: 0,
  },

  editorial: {
    brightness: 100,
    contrast: 120,
    saturation: 95,
    hueRotation: 0,
    blur: 0,
    sepia: 0,
    grayscale: 0,
    opacity: 100,
    invert: 0,
  },

  warmWedding: {
    brightness: 112,
    contrast: 98,
    saturation: 110,
    hueRotation: -8,
    blur: 0,
    sepia: 12,
    grayscale: 0,
    opacity: 100,
    invert: 0,
  },

  streetPhotography: {
    brightness: 98,
    contrast: 130,
    saturation: 80,
    hueRotation: 5,
    blur: 0,
    sepia: 5,
    grayscale: 15,
    opacity: 100,
    invert: 0,
  },

  fashionClean: {
    brightness: 105,
    contrast: 115,
    saturation: 100,
    hueRotation: 0,
    blur: 0,
    sepia: 0,
    grayscale: 0,
    opacity: 100,
    invert: 0,
  },

  fadedKodak: {
    brightness: 108,
    contrast: 88,
    saturation: 85,
    hueRotation: 6,
    blur: 0,
    sepia: 18,
    grayscale: 0,
    opacity: 100,
    invert: 0,
  },

  nightFilm: {
    brightness: 90,
    contrast: 140,
    saturation: 90,
    hueRotation: -10,
    blur: 0,
    sepia: 0,
    grayscale: 0,
    opacity: 100,
    invert: 0,
  },

  cleanProduct: {
    brightness: 115,
    contrast: 110,
    saturation: 105,
    hueRotation: 0,
    blur: 0,
    sepia: 0,
    grayscale: 0,
    opacity: 100,
    invert: 0,
  },
};


Object.keys(presets).forEach(presetName =>{
    const presetBtn = document.createElement("button")
    presetBtn.classList.add("btn")
    presetBtn.innerText = presetName
    presetContainer.appendChild(presetBtn)

    presetBtn.addEventListener('click',()=>{
        const preset = presets[presetName]

        Object.keys(preset).forEach(filterName =>{
            filters[ filterName ].value = preset[ filterName ]
        })

        applyFilters()
        filterContainer.innerHTML = ""
        createFilters()
    })
})