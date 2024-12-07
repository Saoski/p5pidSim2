class UserInterface { // TODO: Change angleslider to some sort of botton or other interface
  constructor(screenWidth, screenHeight) {
    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;
    this.sliderSize = 0.3 * screenWidth;
    this.pSliderX = 0.98 * screenWidth - this.sliderSize;
    this.pSliderY = 0.7 * this.screenHeight;
    this.sliderSpacing = 0.1 * this.screenHeight;
    this.angleSlider = createSlider(0, 720, 360);
    this.pSlider = createSlider(0, 100, 0);
    this.iSlider = createSlider(0, 100, 0);
    this.dSlider = createSlider(0, 100, 0);
    this.leftButton = new Button(this.pSliderX, this.pSliderY - this.sliderSpacing);
    this.configureSliders();
  }

  configureSliders() {
    this.angleSlider.position(this.pSliderX, this.pSliderY - this.sliderSpacing);
    this.angleSlider.size(this.sliderSize);
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
    text(`Angle: ${this.angleSlider.value()}`, textX, textY - this.sliderSpacing);
    text(`P: ${this.pSlider.value()}`, textX, textY);
    text(`I: ${this.iSlider.value()}`, textX, textY + this.sliderSpacing);
    text(`D: ${this.dSlider.value()}`, textX, textY + 2 * this.sliderSpacing);
  }

  drawAngleButtons() {
    this.leftButton.draw();
  }
}

class RobotArm {
  constructor(screenWidth, screenHeight) {
    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;
    this.xCenter = 0.3 * screenWidth;
    this.yCenter = 0.5 * screenHeight;
    this.armLength = 0.3 * screenHeight;
    this.circleDiameter = 0.05 * screenHeight;
  }

  /**
   * Draws the robot arm.
   *
   * @param {*} angle Angle counterclockwise in degrees
   * @param {*} alpha Transparency of arm
   * @memberof RobotArm
   */
  drawArm(angle, alpha) {
    angle = -angle * Math.PI / 180
    push();

    // Center the origin on the center of the arm (point of rotation)
    translate(this.xCenter, this.yCenter);
    rotate(angle);
    fill(255, 255, 255, alpha);

    // Draw arm
    rect(0, -this.circleDiameter/2, this.armLength, this.circleDiameter);

    // Draw center circle
    fill("red");
    circle(0, 0, this.circleDiameter);

    pop();
  }
}

class Button {
  /**
   * Creates an instance of Button.
   * @param {*} x X-coordinate for top left corner of button
   * @param {*} y Y-coordinate for top left corner of button
   * @param {*} w Width of button
   * @param {*} h Height of button
   * @memberof Button
   */
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  /**
   * Shows button onscreen. Call in draw() to function properly.
   * @memberof Button
   */
  draw() {
    push();

    fill("red");
    stroke("black");
    strokeJoin(BEVEL);
    strokeWeight(5);
    rect(this.x, this.y, this.w, this.h);

    pop();
  }


}

const SCREEN_WIDTH = 700; // TODO: when interface is complete, test with displayHeight and displayWidth
const SCREEN_HEIGHT = 500;
let userInterface;
let robotArm;

function setup() {
  createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
  userInterface = new UserInterface(SCREEN_WIDTH, SCREEN_HEIGHT);
  robotArm = new RobotArm(SCREEN_WIDTH, SCREEN_HEIGHT);
}

function draw() {
  background(50);
  userInterface.updateSliderText();
  robotArm.drawArm(userInterface.angleSlider.value())
  userInterface.drawAngleButtons();
}
