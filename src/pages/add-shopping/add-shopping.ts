import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

/**
 * Generated class for the AddShoppingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-add-shopping',
	templateUrl: 'add-shopping.html',
})
export class AddShoppingPage {


	shoppingItem = {} as ShoppingItem;

	shoppingItemRef$: AngularFireList<ShoppingItem[]>

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private database: AngularFireDatabase) {
		this.shoppingItemRef$ = this.database.list('shopping-list');
	}

	addShoppingItem(shoppingItem: ShoppingItem) {
		// this.shoppingItemRef$.push({
		// 	itemName: this.shoppingItem.itemName,
		// itemNumber: Number(this.shoppingItem.itemNumber)
		// });
		// const afList = afDb.list('items');
		// afList.push({ name: 'item' });
		// const listObservable = afList.snapshotChanges();
		// listObservable.subscribe();

		const afList = this.database.list('shopping-list');
		afList.push({ 
			itemName: this.shoppingItem.itemName,
			itemNumber: Number(this.shoppingItem.itemNumber) 
		});
		const listObservable = afList.snapshotChanges();
		listObservable.subscribe();
	}

}
