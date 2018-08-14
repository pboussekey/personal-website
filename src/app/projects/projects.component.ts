import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[projects]',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less']
})
export class ProjectsComponent implements OnInit {

  public projects : any;
  public selected : any;
  public timeoutImage : any;
  public timeoutProject : any;
  public imageIndex : number;
  public projectIndex : number;
  constructor() { }

  pauseCarousel(){
    if(this.timeoutProject){
      clearTimeout(this.timeoutProject);
      this.timeoutProject = null;
    }
  }
  resumeCarousel(){
    this.timeoutProject = setTimeout(this.changeProject.bind(this), 2000);
  }
  changeImage(){
    this.imageIndex++;
    if(this.selected.images && this.selected.images.length <= this.imageIndex){
      this.imageIndex = 0;
    }
    this.selected.image = this.selected.images[this.imageIndex];
    this.timeoutImage = setTimeout(this.changeImage.bind(this), 4000);
  }

  changeProject(){
    this.projectIndex++;
    if(this.projects.length <= this.projectIndex){
      this.projectIndex = 0;
    }
    this.selectProject(this.projects[this.projectIndex]);
  }

  selectProject(project){
    this.selected = project;
    this.projectIndex = this.projects.indexOf(project);
    if(this.timeoutImage){
      clearTimeout(this.timeoutImage);
      this.timeoutImage = null;
    }
    if(this.timeoutProject){
      clearTimeout(this.timeoutProject);
      this.timeoutProject = null;
    }
    if(this.selected.images){
      this.selected.image = this.selected.images[0];
      this.imageIndex = 0;
      this.timeoutImage = setTimeout(this.changeImage.bind(this), 4000);
    }
    this.timeoutProject = setTimeout(this.changeProject.bind(this), 10000);
  }

  ngOnInit() {
    this.projects = [{
        title : "TWIC - Platform",
        images : ["twic-screen.png", "twic-screen2.png", "twic-screen3.png"],
        url : "https://gnam.twic.io",
        description : "TWIC stands for \"The World is a Campus\". It's a platform connecting Business Schools around the world to provide courses and academic content. I developped it as a fullstack developper.",
        tags : ["PHP7", "MARIADB", "AngularJS",  "NodeJS", "CSS3", "LESS", "GIT", "WCAG"]
      },
      {
          title : "TWIC - Website",
          url : "https://twic.io",
          images : ["corpo-screen.png","corpo-screen2.png","corpo-screen3.png"],
          description : "TWIC stands for \"The World is a Campus\". It's a platform connecting Business Schools around the world to provide courses and academic content. I developped the commercial website too.",
          tags : [ "Angular2JS", "CSS3", "LESS", "GIT"]
      },
      {
          title : "Modz.fr",
          url : "https://modz.fr",
          images : ["modz-screen.png","modz-screen2.png","modz-screen3.png"],
          description : "Modz.fr is a french e-commerce site specializing in the destocking of major brands. I initialy worked with them as an employee in an IT Service company and then as freelance.",
          tags : ["C#.NET", "JQuery", "SQLServer", "MongoDb"]

        },
        {
            title : "(R)Evolution Voyages",
            url : "http://www.r-evolutionvoyages.com/",
            image : ["rev-screen.png"],
            description : "R-Evolution Voyages is travel agency speclialized in Cuba. I developped the first version of the website.",
            tags : ["PHP5", "MySQL", "JQuery"]

        },
        {
            title : "Twins",
            images : ["twins-screen.png", "twins-screen2.png", "twins-screen3.png"],
            url : "https://play.google.com/store/apps/details?id=com.ExoGame.Twins",
            description : "Twins is an Android 2D game where your goal is to find the common element between the 2 parts of the screen.",
            tags : ["Unity3D"]

        }];
    this.projectIndex = 0;
    this.selectProject(this.projects[this.projectIndex]);

  }

}
