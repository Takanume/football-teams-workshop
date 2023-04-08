import { Injectable } from '@angular/core';
import {
  collection,
  collectionData,
  CollectionReference,
  Firestore,
} from '@angular/fire/firestore';
import { DocumentData } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Player } from '../types/player.interface';

@Injectable()
export class PlayersService {
  private readonly playersCollection: CollectionReference<DocumentData>;

  constructor(private fs: Firestore) {
    this.playersCollection = collection(this.fs, '/players');
  }

  add() {}

  update() {}

  remove() {}

  fetchAll() {
    return collectionData(this.playersCollection, {
      idField: 'id',
    }) as Observable<Player[]>;
  }

  fetchPlayer() {}
}
