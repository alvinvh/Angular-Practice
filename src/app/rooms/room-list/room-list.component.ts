import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomListComponent implements OnInit, OnChanges {
  @Input() rooms: RoomList[] = [];
  @Input() title:string = '';
  @Output() selectedRoom = new EventEmitter<RoomList>();
  selectRoom(room: RoomList){
    this.selectedRoom.emit(room)
  }
  ngOnInit() : void{
    
  };
  ngOnChanges(changes: SimpleChanges): void{
    
  }
}
