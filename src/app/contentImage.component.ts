import { Component, Input } from '@angular/core';

@Component({
  selector: 'contentImage',
  template: `
    <img src={{imageData.imageURL}} alt={{imageData.imageText}}/>
  `,
  styles: `
    img
    {
      background-color:#FFFFFF;
      max-width: 100%;
      height: 100%;
    }
  `,
})
export class ContentImageComponent{

    @Input() imageDataObject:Record<string, Record<string, string>> = {};

    public imageData:ContentImage;

    constructor() {
      let imageData:ContentImage = {
        imageURL : {},
        imageText : {}
      }
      this.imageData = imageData;
    }

    ngOnInit():void
    {
      const imageURLKey:string = "imageURL";
      const imageTextKey:string = "imageText";

      let imageData:ContentImage = {
        imageURL : this.imageDataObject[imageURLKey],
        imageText : this.imageDataObject[imageTextKey]
      }

      this.imageData = imageData;

    }
}

interface ContentImage
{
    imageURL:Record<string, string>;
    imageText:Record<string, string>;
}