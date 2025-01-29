import { Component, Input } from '@angular/core';
import { ContentDataComponent } from "./contentData.component";
import { ContentImageComponent } from "./contentImage.component";

@Component({
  selector: 'contentBlock',
  template: `
    <div class="container">
        <div class="leftSide">
            <contentImage [imageDataObject]="contentBlockData.imageData"></contentImage>
        </div>
        <div class="rightSide">
            <contentData [contentDataObject]="contentBlockData.contentData"></contentData>
        </div>
    </div>`,
  styles: `
    @media only screen and (max-width: 768px)
    {
        .container > div.leftSide
        {
            max-width: 64px;
            max-height: 64px;
        }
    }

    @media only screen and (min-width: 768px)
    {
        .container > div.leftSide
        {
            max-width: 128px;
            max-height: 128px;
        }
    }

    .container
    {
        background-color:#777777;
        position:relative;
        border-style:ridge;
        border-width:4px;
        width:100%;
        min-height:80px;
        display:flex;
    }

    .container > div.leftSide
    {
        grid-area: leftSide;
        border-style: double;
        border-width: 4px;
    }

    .container > div.rightSide
    {
        grid-area: rightSide;
        height: 100%;
        width: 100%;
        margin-left: 4px;
        margin-right: 4px;
    }
    `,
    
  imports: [ContentImageComponent, ContentDataComponent],
  
})

export class ContentBlockComponent{
    
    @Input() contentBlockDataObject:Record<string, Record<string, Record<string, string>>> = {};
    
    public contentBlockData:ContentBlockData;

    constructor() {
        let contentBlockData:ContentBlockData = {
            contentData : {},
            imageData : {}
        }
        this.contentBlockData = contentBlockData;
    }

    ngOnInit():void
    {
        const contentKey:string = "contentData";
        const imageKey:string = "imageData";
    
        let contentBlockData:ContentBlockData = {
            contentData : this.contentBlockDataObject[contentKey],
            imageData : this.contentBlockDataObject[imageKey]
        }
        this.contentBlockData = contentBlockData;
    }
}

interface ContentBlockData
{
    contentData:Record<string, Record<string, string>>;
    imageData:Record<string, Record<string, string>>;
}