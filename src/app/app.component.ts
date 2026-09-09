import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Tasklist} from './tasklist/tasklist';
import {ProfileEditor} from './profile-editor/profile-editor';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, Tasklist, ProfileEditor],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('myspace');
}
