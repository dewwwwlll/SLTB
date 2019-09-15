import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-feedback-content',
  templateUrl: './feedback-content.component.html',
  styleUrls: ['./feedback-content.component.scss'],
})
export class FeedbackContentComponent implements OnInit {
  @Input() feedback;

  constructor() { }

  ngOnInit() {}

}
