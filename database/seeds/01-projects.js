exports.seed = function(knex, Promise) {
    return knex('projects').del()
      .then(function () {
        return knex('projects').insert([
          { 
            id: 1,
            name: 'travel to a new country', 
            description: 'i would love to go to Prague',
            completed: false
          },
          { 
            id: 2,
            name: 'Having a super big Party',
            description: 'i would love to throw a huge birthday party',
            completed: false
          },
          { 
            id: 3,
            name: 'Read a book',
            description: 'Something to make me organize',
            completed: false
          }
        ]);
      });
  };