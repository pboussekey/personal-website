import { Component, OnInit } from '@angular/core';

import {
    style,
    transition,
    animate,
    state,
    trigger } from '@angular/animations';

@Component({
  selector: '[cv]',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.less'],
  animations : [
    trigger("categoryState", [
        state("selected", style({ right : "200%" })),
        state("secondPlan", style({ right : "200%", transform : "scale(0.8)",  transformOrigin : 'bottom right', backgroundColor : '#004099' })),
        transition("* => firstPlan", [style({ right : "-80rem" }), animate(15000)]),
        transition("* => secondPlan", [style({ right : "-80rem", transform : "scale(0.8)", transformOrigin : 'bottom right', backgroundColor : '#004099' }), animate(20000)]),
    ])]
})
export class CvComponent implements OnInit {
    public selected : number = 0;
    public category : any;
    public level : number;
    public callbacks : any;
    public exp : number;
    public cv : any;
    constructor() { }

    ngOnInit() {

        var now = new Date();
        this.level = now.getFullYear() - 1989;
        var nextLevel = new Date(now.getFullYear(), 2, 7);
        if(now.getMonth() < 2 || now.getMonth() === 2 && now.getDate() < 7){
            this.level--;
            nextLevel.setFullYear(nextLevel.getFullYear() - 1);
        }

        this.exp = -Math.floor(100 * (nextLevel.getTime() - now.getTime()) / 1000 / 60 / 60 / 24 / 365.25);

        this.cv = [
            {
                title : "Experience",
                icon : "i i-briefcase",
                skills : [
                  {
                      title : "Professor of Computer Science",
                      icon : "i i-diploma",
                      infos : "Maybe in another life",
                      details : "",
                      tags : [],
                      points : 0
                  },
                    {
                        title : "Fullstack developer",
                        logo : "twic.png",
                        infos : "2015 - Now / The Studnet / Monaco",
                        details : "Creation of a Learning Management System for Business Schools around the world.",
                        tags : ["PHP7", "MARIADB", "AngularJS", "Angular2JS", "NodeJS", "CSS3", "LESS", "GIT", "WCAG"],
                        points : 3
                    },

                    {
                        title : "IT service provider",
                        text : "PB",
                        infos : "2014 - Now / Freelance / Everywhere",
                        details : "Website creation.",
                        points : 4
                    },

                    {
                        title : "Back-end developer",
                        logo : "agixis.png",
                        infos : "2012 - 2014 / Agixis / Lyon",
                        details : "Maintenance and evolutions of the e-commerce website Modz.fr.",
                        tags : ["CSharpDotNET", "MVC", "Razor", "Entity", "SQLSERVER", "SVN", "WPF", "WINFORM", "SEO", "MongoDB"],
                        points : 2
                    },

                    {
                        title : "Webmaster",
                        text : "(R)",
                        infos : "2011 - 2012 / (R) Evolution Voyages / Lyon",
                        details : "Creation and maintenance of the company website.",
                        tags : ["PHP5", "HTML5", "CSS3"],
                        points : 1
                    }
                ]
            },
            {
                title : "Education",
                icon : "i i-diploma",
                skills : [
                    {
                        title : "Master in computer engineering",
                        logo : "epsi.png",
                        infos : "2011 - 2014 / EPSI Lyon",
                        details : "Alternating with a strong presence in company.",
                        points : 3
                    },

                    {
                        title : "DUT in computer science",
                        logo : "ucbl.png",
                        infos : "2009 - 2011 / IUT A Lyon I",
                        details : "University diploma in technology.",
                        points : 2
                    },

                    {
                        title : "Math/Computing Licence",
                        logo : "ucbl.png",
                        infos : "2007 - / Lyon 1 University ",
                        details : "First and second year of licence.",
                        points : 2
                    },

                    {
                        title : "Scientific Baccalaureate",
                        infos : "2007 - / 2007 / Lycee de l'Oiselet ",
                        points : 3
                    }


                ]
            },
              {
                title : "Languages",
                icon : "i i-star",
                skills : [
                   {
                        title : "Korean",
                        infos : "Would like to",
                        points : 0
                    },
                       {
                            title : "Spanish",
                            infos : "Should know that",
                            points : 1
                        },
                   {
                        title : "English",
                        infos : "Professional working proficiency",
                        details : "Excelent understanding (TOEIC : 910)",
                        points : 4
                    },
                   {
                        title : "French",
                        infos : "Mother tongue",
                        points : 5
                    }

                ]
            }
        ];
        this.category = this.cv[0];
    }

}
