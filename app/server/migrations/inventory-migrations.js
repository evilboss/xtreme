/**
 * Created by gilbertor on 2/3/16.
 */
if (Inventory.find().count() === 0) {
  Inventory.insert({name: 'Shampoo', quantity: 100, description: 'tide', price: 50});
  Inventory.insert({name: 'Baby Powder', quantity: 100, description: 'JohnSons', price: 30});
  Inventory.insert({name: 'Powder', quantity: 100, description: 'Surf', price: 20});
}