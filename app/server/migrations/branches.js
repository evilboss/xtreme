/**
 * Created by jrreyes on 25/01/16.
 */
if (Branches.find({}).count() === 0) {
  console.log('starting branch migration');
  Branches.insert({name:'Main Branch',location:'Angeles City'});
  Branches.insert({name:'Savers Branch',location:'Angeles City'});
}
