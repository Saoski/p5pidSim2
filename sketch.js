class UserInterface {
  constructor(screenWidth, screenHeight) {
    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;
    this.sliderSize = 0.35 * screenWidth;
    this.pSliderX = 0.6 * this.screenWidth;
    this.pSliderY = 0.7 * this.screenHeight;
    this.sliderSpacing = 0.1 * this.screenHeight;
    this.pSlider = createSlider(0, 100, 0);
    this.iSlider = createSlider(0, 100, 0);
    this.dSlider = createSlider(0, 100, 0);
    this.configureSliders();
  }

  configureSliders() {
    this.pSlider.position(this.pSliderX, this.pSliderY);
    this.pSlider.size(this.sliderSize);
    this.iSlider.position(this.pSliderX, this.pSliderY + this.sliderSpacing);
    this.iSlider.size(this.sliderSize);
    this.dSlider.position(this.pSliderX, this.pSliderY + 2 * this.sliderSpacing);
    this.dSlider.size(this.sliderSize);
  }

  updateSliderText() {
    let textX = this.pSliderX - 0.01 * this.screenWidth;
    let textY = this.pSliderY;
    textAlign(RIGHT, TOP);
    textSize(0.04 * SCREEN_HEIGHT);
    text("P: " + this.pSlider.value(), textX, textY);
    text("I: " + this.iSlider.value(), textX, textY + this.sliderSpacing);
    text("D: " + this.dSlider.value(), textX, textY + 2 * this.sliderSpacing);
  }
}

const SCREEN_WIDTH = 500; // TODO: when interface is complete, test with displayHeight and displayWidth
const SCREEN_HEIGHT = 500;
let userInterface;

function setup() {
  createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
  userInterface = new UserInterface(SCREEN_WIDTH, SCREEN_HEIGHT);
}

function draw() {
  background(50);
  userInterface.updateSliderText();
}
