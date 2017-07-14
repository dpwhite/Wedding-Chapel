import { Component } from '@angular/core';

export class WeddingParty {
  id: number; 
  name: string;
  groom: string;
  bride: string;
  weddingDate: string;
}

const WEDDINGPARTIES: WeddingParty[] = [
  {id: 11, name:'White', groom:'Durward', bride:'Tonya', weddingDate:'7/12/1997'},
  {id: 12, name:'Wyche', groom:'Kenneth', bride:'Felicia', weddingDate: '10/20/2014'},
  {id: 13, name:'Bridges', groom:'David', bride:'TaKelia', weddingDate: '6/09/2009'},
  {id: 14, name:'Primus', groom: 'Jomel', bride:'Marcia', weddingDate:'12/12/1999'},
  {id: 15, name:'Horry', groom:'Clinton', bride:'NaDene', weddingDate:'09/17/2000'},
  {id: 16, name:'Espritt', groom:'Tony', bride:'Monica', weddingDate:'7/12/1997'},
  {id: 17, name:'McKelvey', groom:'Joey', bride:'Andrea', weddingDate: '3/20/2001'},
  {id: 18, name:'Williams', groom:'James', bride:'Nysha', weddingDate: '11/29/2007'},
  {id: 19, name:'Allen', groom: 'Glenn', bride:'Connie', weddingDate:'2/01/1998'},
  {id: 20, name:'Bailey', groom:'Doug', bride:'Courtney', weddingDate:'4/17/2000'}
];

@Component({
  selector: 'my-app',
 template: `
    <h1>{{title}}</h1>
    <h2>Wedding Parties</h2>
    <table class="weddingParties">
      <tr *ngFor="let weddingParty of weddingParties"
        [class.selected]="weddingParty === selectedParty"
        (click)="onSelect(weddingParty)">
        <td><span class="badge">{{weddingParty.id}}</span> {{weddingParty.name}}</td>
        <td><span>{{weddingParty.groom}}</span></td>
        <td><span>{{weddingParty.bride}}</span></td>
      </tr>
    </table>
    <div *ngIf="selectedParty">
      <h2>{{selectedParty.name}} wedding details!</h2>
      <div><label>id: </label>{{selectedParty.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedParty.name" placeholder="name"/>
      </div>
      <div>
        <label>wedding date: </label>
        <input [(ngModel)]="selectedParty.weddingDate" placeholder="wedding date" />
      </div>
    </div>
  `,
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .weddingParties {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .weddingParties tr {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .weddingParties tr.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .weddingParties tr:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .weddingParties .text {
    position: relative;
    top: -3px;
  }
  .weddingParties .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]
})
export class AppComponent  { title = 'Welcome to the Wedding Chapel';
                           weddingParties = WEDDINGPARTIES;
                            selectedParty: WeddingParty;

                            onSelect(weddingParty: WeddingParty): void {
                              this.selectedParty = weddingParty;
                            }
                          }
