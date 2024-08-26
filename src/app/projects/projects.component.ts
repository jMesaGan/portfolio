import { Component } from '@angular/core';
import { NgForOf } from "@angular/common";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})

export class ProjectsComponent {

  languages = [{
  name: 'Typescript',
  icon: '/images/ts.svg'
  },
  {
  name: 'Laravel',
  icon: '/images/laravel.svg'
  },
  {
  name: 'Angular',
  icon: '/images/angular.svg'
  },
  {
  name: 'C#',
  icon: '/images/cs.svg'
  },
  {
  name: 'Haskell',
  icon: '/images/haskell.svg'
  },
  {
  name: 'C++',
  icon: '/images/cpp.svg'
  },
  {
  name: '.NET',
  icon: '/images/dotnet.svg'
  },
  {
  name: 'Blazor',
  icon: '/images/blazor.svg'
  }];

  projects = [
    {
      name: 'ARTi internship',
      description: 'Description for ARTi internship',
      from: '2023-01-01',
      to: '2023-02-01',
      img: 'path/to/image1.jpg',
      technologies: [
        { name: 'Typescript', icon: this.languages[0].icon },
        { name: 'Laravel', icon: this.languages[1].icon },
        { name: 'Angular', icon: this.languages[2].icon }
      ]
    },
    {
      name: 'Vending machine',
      description: 'Description for vending machine',
      from: '2023-02-01',
      to: '2023-03-01',
      img: 'path/to/image2.jpg',
      technologies: [
        { name: 'C++', icon: this.languages[5].icon },
      ]
    },
    {
      name: 'Sudoku solver',
      description: 'Backtracking and propositional logic solver',
      from: '2023-03-01',
      to: '2023-04-01',
      img: 'path/to/image3.jpg',
      technologies: [
        { name: 'Haskell', icon: this.languages[4].icon },
        { name: 'C++', icon: this.languages[5].icon }
      ]
    },
    {
      name: 'DepoQuick',
      description: 'Created a app for a deposit system for university',
      from: '2023-04-01',
      to: '2023-05-01',
      img: 'path/to/image1.jpg',
      technologies: [
        { name: '.NET', icon: this.languages[6].icon },
        { name: 'C#', icon: this.languages[3].icon },
        { name: 'Blazor', icon: this.languages[7].icon }
      ]
    },
    {
      name: 'Large distance electric fence controller',
      description: 'Description for Lora electric fence controller',
      from: '2023-04-01',
      to: '2023-05-01',
      img: 'path/to/image1.jpg',
      technologies: [
        { name: 'C++', icon: this.languages[5].icon }
      ]
    }
  ];
}
