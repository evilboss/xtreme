/**
 * Created by jrreyes on 31/01/16.
 */
if(Services.find({}).count() === 0){
  Services.insert({
    name:'hair cut',
    price: 200,
    description:'Expert Stylist will cut your hair'
  });
  Services.insert({
    name:'Wax',
    price: 150,
    description:'Expert Stylist will wax your hair'
  });
}
