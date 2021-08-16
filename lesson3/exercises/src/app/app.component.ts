import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';
  shuttleInFlight = false;
  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  maxUp = false;
  maxDown = false;
  maxRight = false;
  maxLeft = false;

  handleTakeOff(element, field) {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
      this.color = 'blue';
      this.height = 10000;
      this.width = 0;
      this.message = 'Shuttle in flight.';
      this.shuttleInFlight = true;
      element.style.bottom = (parseInt(getComputedStyle(field)["height"]) / 2) - 37.5 + 'px';
      element.style.left = (parseInt(getComputedStyle(field)["width"]) / 2) - 37.5 + 'px';
    }
  }

  handleLanding(element, field) {
    let result = window.confirm('Engaging landing procedure.');
    if (result) {
      this.color = 'green';
      this.height = 0;
      this.width = 0;
      this.message = "Shuttle has landed.";
      this.shuttleInFlight = false;
      element.style.bottom = '0px';
      element.style.left = (parseInt(getComputedStyle(field)["width"]) / 2) - 37.5 + 'px';
    }
  }

  handleAbort(element, field) {
    let result = window.confirm('This will abort the mission. Are you sure?');
    if (result) {
      this.color = 'red';
      this.height = 0;
      this.width = 0;
      this.message = "Mission aborted. Shuttle has landed."
      this.shuttleInFlight = false;
      element.style.bottom = '0px';
    }
  }

  fieldEdgeDetect(fieldHeight, fieldWidth, elementBottom, elementleft) {
    if (elementleft < 21 || fieldWidth - elementleft < 21 || fieldHeight - elementBottom < 21){
      return 'orange';
    }
    return 'blue';
  }

  moveRocket(element, field, direction) {
    let fieldHeight = parseInt(getComputedStyle(field)["height"]) - 75;
    let fieldWidth = parseInt(getComputedStyle(field)["width"]) - 75;
    let elementBottom = parseInt(element.style.bottom);
    let elementleft = parseInt(element.style.left);
    if (this.shuttleInFlight) {
      switch(direction) {
        case "right":
          element.style.left = Math.min(elementleft + 10, fieldWidth) + 'px';
          this.color = this.fieldEdgeDetect(fieldHeight, fieldWidth, elementBottom, elementleft);
          if (elementleft >= fieldWidth){this.maxRight = true;}
          this.maxLeft = false;
          break;
        case "left":
          element.style.left = Math.max(elementleft - 10, 0) + 'px';
          this.color = this.fieldEdgeDetect(fieldHeight, fieldWidth, elementBottom, elementleft);
          if (elementleft <= 0){this.maxLeft = true;}
          this.maxRight = false;
          break;
        case "up":
          element.style.bottom = Math.min(elementBottom + 10, fieldHeight) + 'px';
          this.color = this.fieldEdgeDetect(fieldHeight, fieldWidth, elementBottom, elementleft);
          if (elementBottom >= fieldHeight){this.maxUp = true;}
          this.maxDown = false;
          break;
        case "down":
          element.style.bottom = Math.max(elementBottom - 10, 0) + 'px';
          this.color = this.fieldEdgeDetect(fieldHeight, fieldWidth, elementBottom, elementleft);
          if (elementBottom <= 0){this.maxDown = true;}
          this.maxUp = false;
          break;
      }
    }
  }
}
