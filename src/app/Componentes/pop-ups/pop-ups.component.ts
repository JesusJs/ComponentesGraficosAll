import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pop-ups',
  templateUrl: './pop-ups.component.html',
  styleUrls: ['./pop-ups.component.scss'],
  template: `<div id="modal1" class="modal">
  <div class="modal-content">
    <h4>Modal Header</h4>
    <p>A bunch of text</p>
  </div>
  <div class="modal-footer">
    <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
  </div>
</div>`
})
export class PopUpsComponent implements OnInit {




  ngOnInit(): void {
  }


}
