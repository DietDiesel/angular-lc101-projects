import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   inactive: boolean = false;
   goldActive: boolean = true;
   silverActive: boolean = true;
   copperActive: boolean = true;
   slipperyButton: number = 100;

   constructor() { }

   ngOnInit() { }

   deactivateButton(button: string = null){
      switch (button) {
         case "gold":
            this.goldActive = false;
            break;
         case "silver":
            this.silverActive = false;
            break;
         case "copper":
            this.copperActive = false;
            break;
      }
   }

   toggleButtons() {
      this.goldActive = true;
      this.silverActive = true;
      this.copperActive = true;
   }
}
