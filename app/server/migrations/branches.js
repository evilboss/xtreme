/**
 * Created by jrreyes on 25/01/16.
 */
if (Branches.find({}).count() === 0) {
  console.log('starting branch migration');
  Branches.insert({name:'Extreme Salon (MainBranch)',location:'Sto. Rosario, Angeles City'});
  Branches.insert({name:'Extreme Salon(Pampang)',location:'Pampang, Angeles City'});
  Branches.insert({name:'Extreme Salon (Plaridel)',location:'Plaridel, Angeles City'});
  Branches.insert({name:'Extreme AuF Branch',location:'Manuel Roxas, Angeles City'});
  Branches.insert({name:'Extreme Salon San fernando',location:'San Fernando City'});
}
