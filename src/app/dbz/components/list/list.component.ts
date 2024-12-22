import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  //onDelete = Index value : number
  //@Output()
  //public onDelete: EventEmitter<number> = new EventEmitter();

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter( id? : string ) : void {

    if ( !id ) return;

    //TODO: Emitir el ID del personaje
    console.log( id );

    this.onDelete.emit( id );
  }

  /*onDeleteCharacter( index : number ) : void {
    //TODO: Emitir el ID del personaje
    console.log( index );

    this.onDelete.emit( index );
  }*/

}
