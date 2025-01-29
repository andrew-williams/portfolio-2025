import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContentBlockComponent } from './contentBlock.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ContentBlockComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent
{
  public jsonData:string;
  public contentBlocks:Record<string, Record<string, Record<string, string>>>[];
  public mainContent:ContentObject;

  constructor()
  {
    let contentData:ContentObject = {
        content : [],
    }
    this.mainContent = contentData;

    this.contentBlocks = [];

    // TODO : load json data from an external file
    // TODO : maybe in the future, develop a tool do create entries if more projets are being made
    this.jsonData = `
    {
      "content" : [
        {
          "imageData" : 
          {
            "imageURL" : "/Assets/icon_angular_gradient.png",
            "imageText" : "Portfolio v2"
          },
          "contentData" : 
          {
            "contentName" : "Portfolio v2",
            "contentDate" : "2025",
            "contentRole" : "Freelancer Programmer",
            "contentPlatform" : "Typescript, HTML, CSS in Angular using VSCode",
            "contentDescription" : "Updated portfolio <font color=#FFFF00><b>(What you are seeing right now!)</b></font>. Remade everything from the ground up using programming practices I have learned over the years.<br>The goal of this with experience in Front-End Development, in addition to looking for new career opportunities is to:<ul><li>Learn HTML and CSS</li><li>Learn a common framework (Angular)</li><li>Learn Typescript with my Javascript Experience</li><li>Apply Object Oriented coding practices</li><li>Handling JSON Data</li></ul>The portfolio will continue to look ugly because I am not an artist. Functionality is prioritized over Looks."
          }
        },
        {
          "imageData" : 
          {
            "imageURL" : "/Assets/disney_magic_kingdoms_thumb.webp",
            "imageText" : "Disney Magic Kingdoms"
          },
          "contentData" : 
          {
            "contentName" : "Disney Magic Kingdoms",
            "contentDate" : "2015 - 2024",
            "contentRole" : "Flash Scripter",
            "contentPlatform" : "Actionscript 3 - iOS",
            "contentDescription" : "Second Project I was assigned to within Gameloft. My major roles include but not limited to:<ul><li>Prototyping and Implementing UI from Artists and Designers and working with other Developers to ensure working functionality between UI and game code</li><li>Optimization, Code fixing and Playtesting the game</li><li>Documentation of Interfaces between the UI and the game</li><li>Ensuring all UIs display all text properly after localization</li></ul>Some Contributions to the project includes but not limited to:<ul><li>Implementing Daily Calendar UI Feature</li><li>Implementing Login Bonus UI Feature</li><li>Implementing Season Pass UI Feature</li><li>Implementing Gacha UI Feature</li><li>Implementing Options Menu UI</li><li>Support for UI safe zones (think iPhone X and notches)</li><li>Asset management with atlases</li></ul>",
            "contentURLPath" : "https://apps.apple.com/us/app/disney-magic-kingdoms/id731592936",
            "contentURLName" : "iOS App Store Page"
          }
        },
        {
          "imageData" : 
          {
            "imageURL" : "/Assets/csi_slots_thumb.jpg",
            "imageText" : "CSI Slots"
          },
          "contentData" : 
          {
            "contentName" : "CSI Slots",
            "contentDate" : "2014 - 2015",
            "contentRole" : "Flash Scripter",
            "contentPlatform" : "Actionscript 3 - iOS",
            "contentDescription" : "First Project I was assigned to within Gameloft. My major roles include but not limited to:<ul><li>Prototyping and Implementing UI from Artists and Designers and working with other Developers to ensure working functionality between UI and game code</li><li>Optimization, Code fixing and Playtesting the game</li><li>Documentation of Interfaces between the UI and the game</li></ul>Some Contributions to the project includes but not limited to:<ul><li>Slot machine tutorial screens</li><li>Slot machine skin swapping functionality</li><li>Asset management with atlases</li><li>Crime Scene Object Placer Tool for Designers to use</li></ul>"
          }
        },
        {
          "imageData" : 
          {
            "imageURL" : "/Assets/rdpl_thumb.png",
            "imageText" : "Disney Magic Kingdoms"
          },
          "contentData" : 
          {
            "contentName" : "Runescape Dungeoneering Progress Loader",
            "contentDate" : "2014",
            "contentRole" : "Freelancer Programmer",
            "contentPlatform" : "Actionscript 3 Using Adobe Flash CS6",
            "contentDescription" : "A tool I made to keep track of my hard mode progress in dungeoneering.<br>This way, I do not have to constantly run back and forth to Thok to find out what I completed.<br>Main goals for this project was to learn XML and handling file Input and Output.<p>This app is no longer available because it is not useful.</p>",
            "contentURLPath" : "https://github.com/andrew-williams/AS3-DGchecker",
            "contentURLName" : "Github"
          }
        },
        {
          "imageData" : 
          {
            "imageURL" : "/Assets/tilebuilder_thumb.png",
            "imageText" : "Tile Builder"
          },
          "contentData" : 
          {
            "contentName" : "Tile Builder",
            "contentDate" : "2014",
            "contentRole" : "Freelancer Programmer",
            "contentPlatform" : "Actionscript 3 Using Adobe Flash CS6",
            "contentDescription" : "Tile building project. Tile sprites change based on what tiles are connected to each others. Works with an 8 way connection.<br>Additional focus for this project is optimizations to ensure it runs well and without errors.<p>This app is no longer playable on this site for now due to no more flash support.</p>",
            "contentURLPath" : "https://github.com/andrew-williams/AS3-TileBuilder",
            "contentURLName" : "Github"
          }
        },
        {
          "imageData" : 
          {
            "imageURL" : "/Assets/temp_thumb.png",
            "imageText" : "First Portfolio"
          },
          "contentData" : 
          {
            "contentName" : "First Portfolio",
            "contentDate" : "2013",
            "contentRole" : "Student Programmer",
            "contentPlatform" : "Vanilla Javascript, HTML and CSS Using Notepad++",
            "contentDescription" : "During the final year of school, the goal is to create a portfolio that would be able to be used to aid with looking for career opportunities.<br>Hand-typed using Notepad++, this allowed me to develop some Javascript, HTML and CSS skills.<br>Hosted with dreamhost, this portfolio contributed to landing an opportunity at <a href=\\\"https://www.gameloft.com/gameloft-studios/toronto/\\\" target=\\\"_blank\\\">Gameloft Toronto</a> in 2014.",
            "contentURLPath" : "https://github.com/andrew-williams/Portfolio-v1-2014-",
            "contentURLName" : "Github"
          }
        },
        {
          "imageData" : 
          {
            "imageURL" : "/Assets/artifact_thumb.png",
            "imageText" : "Artifact"
          },
          "contentData" : 
          {
            "contentName" : "Artifact",
            "contentDate" : "2012-2013",
            "contentRole" : "Student Programmer",
            "contentPlatform" : "C# Using Unity3D",
            "contentDescription" : "This is a class project and the second game where I have been in a development group. My main role for this project was to handle the creation of the item system and functionality of items.",
            "contentURLPath" : "https://www.youtube.com/watch?v=BnyIWmKypi0",
            "contentURLName" : "Youtube"
          }
        },
        {
          "imageData" : 
          {
            "imageURL" : "/Assets/owab_thumb.png",
            "imageText" : "Out With a Bang"
          },
          "contentData" : 
          {
            "contentName" : "Out with a Bang",
            "contentDate" : "2012-2013",
            "contentRole" : "Student Programmer",
            "contentPlatform" : "Actionscript 3 Using HaxE in FlashDevelop",
            "contentDescription" : "This is a school project and the first game where I have been in a development group.<br>This game involves progressing through levels, solving puzzles with each character possessing different abilities.<br>My main role was a UI programmer.<p>The game is no longer playable on this site for now due to no more flash support.</p>"
          }
        },
        {
          "imageData" : 
          {
            "imageURL" : "/Assets/randomizer_thumb.png",
            "imageText" : "Randomizer Game"
          },
          "contentData" : 
          {
            "contentName" : "Randomizer Game",
            "contentDate" : "2012-2013",
            "contentRole" : "Student Programmer",
            "contentPlatform" : "Actionscript 3 Using Adobe Flash CS5.5",
            "contentDescription" : "This game started out as a side project to learn and improve on my programming skills and logic, which eventually became an active school assignment and became what it is right now.<br>This game was intended to be a top down shooter in a 'Dungeon Crawl' with rooms being procedurally generated based on defined room prefabs.<p>The game also comes with a built-in quake-like console for in-game testing with commands such as 'noclip' etc and a room creator.</p><p>The game is no longer playable on this site for now due to no more flash support.</p>"
          }
        },
        {
          "imageData" : 
          {
            "imageURL" : "/Assets/airplane_thumb.png",
            "imageText" : "Air Survival"
          },
          "contentData" : 
          {
            "contentName" : "Air Survival",
            "contentDate" : "2012-2013",
            "contentRole" : "Student Programmer",
            "contentPlatform" : "Actionscript 3 Using Adobe Flash CS5.5",
            "contentDescription" : "This is the first flash game I have ever worked on. It was a school assignment to learn programming and I have worked beyond its due date for the game to become what it is now.<br><p>The game is no longer playable on this site for now due to no more flash support.</p><p><b>Additional Information:</b> All music in this game is from <a href=\\\"https://cyber-rainforce.net/2018/01/10/rule/\\\" target=\\\"_blank\\\">Cyber-Rainforce</a>. Copyright rules are on the link posted.</p>"
          }
        },
        {
          "imageData" : 
          {
            "imageURL" : "/Assets/tempest_thumb.png",
            "imageText" : "Tempest"
          },
          "contentData" : 
          {
            "contentName" : "Atari Game Remake Project (Tempest)",
            "contentDate" : "2013",
            "contentRole" : "Student Programmer",
            "contentPlatform" : "Unreal Development Kit",
            "contentDescription" : "This was a school project to choose an Atari game and remake it using Unreal Development Kit. The game is programmed entirely using Kismet. Current state is complete and in a playable state. <p><b>Additional Information:</b> All sounds in this game is from <a href=\\\"http://www.atari.com/\\\" target=\\\"_blank\\\">Atari</a></p>",
            "contentURLPath" : "http://www.youtube.com/watch?v=SuM98sV9C5Y",
            "contentURLName" : "Youtube"
          }
        },
        {
          "imageData" : 
          {
            "imageURL" : "/Assets/udk_thumb.jpg",
            "imageText" : "UDK Scripting Assignment - Final"
          },
          "contentData" : 
          {
            "contentName" : "UDK Scripting Final",
            "contentDate" : "2013",
            "contentRole" : "Student Programmer",
            "contentPlatform" : "Unreal Development Kit",
            "contentDescription" : "This was a final assignment to apply all the skills learned for Unreal Engine",
            "contentURLPath" : "https://www.youtube.com/watch?v=GUjy6u1nu9A",
            "contentURLName" : "Youtube"
          }
        },
        {
          "imageData" : 
          {
            "imageURL" : "/Assets/udk_thumb.jpg",
            "imageText" : "UDK Scripting Assignment - Midterm"
          },
          "contentData" : 
          {
            "contentName" : "Kismet Midterm",
            "contentDate" : "2013",
            "contentRole" : "Student Programmer",
            "contentPlatform" : "Unreal Development Kit",
            "contentDescription" : "This was a midterm to apply Kismet skills with a provided level template. The assignment was to utilize the 5 rooms to create puzzles.",
            "contentURLPath" : "https://www.youtube.com/watch?v=g6s3rSr2vLA",
            "contentURLName" : "Youtube"
          }
        }
      ]
    }`;

  }

  ngOnInit():void
  {
    let mainContent:ContentObject = JSON.parse(this.jsonData);
    this.mainContent = mainContent;
    
    for (var i in mainContent.content)
    {
      var contentBlockData:Record<string, Record<string, Record<string, string>>> = mainContent.content[i];
      this.contentBlocks.push(contentBlockData);
    }
  }

}

interface ContentObject
{
  content:Record<string, Record<string, Record<string, string>>>[];
}




