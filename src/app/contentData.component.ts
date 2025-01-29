import { Component, Input } from '@angular/core';

@Component({
  selector: 'contentData',
  template: `
    <div class="contentDataContainer">
      <div class="topDescription">
        <div><font size="5" color=#00FF00><b>{{contentData.contentDate}} : {{contentData.contentName}}</b></font></div>
        <div><font size="4" color=#FFFFFF><b>{{contentData.contentRole}} : {{contentData.contentPlatform}}</b></font></div>
        <hr>
      </div>
      <div class="bottomDescription">
        <font size="3" color=#FFFFFF><p [innerHTML]="contentData.contentDescription"></p><br></font>
      </div>
      <div class="contentLink">
        @if (typeof contentData.contentURLPath !== 'undefined' && typeof contentData.contentURLName !== 'undefined')
        {
          <font size="3" color=#FFFFFF><a href={{contentData.contentURLPath}}>{{contentData.contentURLName}}</a></font>
        }
        @else
        {
          @if(typeof contentData.contentURLPath !== 'undefined' || typeof contentData.contentURLName !== 'undefined')
          {
            <font size="3" color=#FFFFFF>An Incomplete URL Path/Name was provided...</font>
          }
          @else
          {
            <font size="3" color=#FFFFFF>No Links Available</font>
          }
        }
      </div>
    </div>
  `,
  styles: `
    .contentDataContainer
    {
      height:100%;
    }
    .topDescription
    {
      text-align:center;
    }
    .bottomDescription
    {
    }
    .contentLink
    {
      bottom:0px;
    }
  `,
})
export class ContentDataComponent{

    @Input() contentDataObject:Record<string, Record<string, string>> = {};

    public contentData:ContentData;

    constructor()
    {
      let contentData:ContentData = {
        contentName : {},
        contentDate : {},
        contentRole : {},
        contentPlatform : {},
        contentDescription : {}
      }
      this.contentData = contentData;
    }

    ngOnInit():void
    {
      const contentNameKey:string = "contentName";
      const contentDateKey:string = "contentDate";
      const contentRoleKey:string = "contentRole";
      const contentPlatformKey:string = "contentPlatform";
      const contentDescriptionKey:string = "contentDescription";
      const contentURLPathKey:string = "contentURLPath";
      const contentURLNameKey:string = "contentURLName";

      let contentData:ContentData = {
        contentName : this.contentDataObject[contentNameKey],
        contentDate : this.contentDataObject[contentDateKey],
        contentRole : this.contentDataObject[contentRoleKey],
        contentPlatform : this.contentDataObject[contentPlatformKey],
        contentDescription : this.contentDataObject[contentDescriptionKey]
      }
      if (typeof this.contentDataObject[contentURLPathKey] !== 'undefined')
      {
        contentData.contentURLPath = this.contentDataObject[contentURLPathKey];
      }
      if (typeof this.contentDataObject[contentURLNameKey] !== 'undefined')
      {
        contentData.contentURLName = this.contentDataObject[contentURLNameKey];
      }
      this.contentData = contentData;

    }
}

interface ContentData
{
    contentName:Record<string, string>;
    contentDate:Record<string, string>;
    contentRole:Record<string, string>;
    contentPlatform:Record<string, string>;
    contentDescription:Record<string, string>;
    contentURLPath?:Record<string, string>;
    contentURLName?:Record<string, string>;
}