import { Component, Injector, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Component({
  selector: 'ngx-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  constructor(private injector:Injector) { }

  ngOnInit(): void {
    this.fetchDocumentIds();
  }


  fetchDocumentIds() {
    const collectionRef: AngularFirestoreCollection<any> =this.injector.get(AngularFirestore).collection('products');
    return collectionRef.get().toPromise().then((querySnapshot: any) => {
      console.log(querySnapshot)
    });
  }
}
