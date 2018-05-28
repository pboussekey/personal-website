import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[projects]',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less']
})
export class ProjectsComponent implements OnInit {

  public projects : any;
  public selected : any;
  constructor() { }

  generateAvatar(){
    var pixels = [];
    for(var i = 0; i < 6; i++){
        var bit1 = Math.floor((Math.random() * 3));
        var bit2 = Math.floor((Math.random() * 3));
        var bit3 = Math.floor((Math.random() * 3));
        pixels = pixels.concat([bit1,bit2,bit3,bit3,bit2,bit1]);
    }
    return pixels;
  }

  ngOnInit() {
    this.projects = [{
        title : "TWIC - Platform",
        image : "twic-screen.jpg",
        url : "https://gnam.twic.io",
        description : "TWIC stands for \"The World is a Campus\". It's a platform connecting Business Schools around the world to provide courses and academic content. I developped it as a fullstack developper.",
        tags : ["PHP7", "MARIADB", "AngularJS",  "NodeJS", "CSS3", "LESS", "GIT", "WCAG"]
      },
      {
          title : "TWIC - Website",
          url : "https://twic.io",
          description : "TWIC stands for \"The World is a Campus\". It's a platform connecting Business Schools around the world to provide courses and academic content. I developped the commercial website too.",
          tags : [ "Angular2JS", "CSS3", "LESS", "GIT"]
      },
      {
          title : "Modz.fr",
          url : "https://modz.fr",
          description : "Modz.fr is a french e-commerce site specializing in the destocking of major brands. I initialy worked with them as an employee in an IT Service company and then as freelance.",
          tags : ["C#.NET", "JQuery", "SQLServer", "MongoDb"]

        },
        {
            title : "R-Evolution Voyages",
            url : "http://www.r-evolutionvoyages.com/",
            description : "R-Evolution Voyages is travel agency in Cuba. I developped the first version of the website.",
            tags : ["PHP5", "MySQL", "JQuery"]

        },
        {
            title : "Twins",
            url : "https://play.google.com/store/apps/details?id=com.ExoGame.Twins",
            description : "Twins is an Android 2D game where your goal is to find the common element between the 2 parts of the screen.",
            tags : ["Unity3D"]

        }];
    this.selected = this.projects[0];
    for(var i = 0; i < 16; i++){
      if(i < this.projects.length){
        this.projects[i].avatar = this.generateAvatar();
      }
      else{
        this.projects.push({ disabled : true});
      }
    }
  }

}
