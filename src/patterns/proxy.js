
class Repository {
  getContributorById(id) {
    const contributors = [
      {
        id: 1,
        name: 'Sebastian Vipin',
        url: 'https://github.com/svipin',
      }, 
      {
        id: 2,
        name: 'Johanna Kenzo',
        url: 'https://github.com/jkenzo',
      },
      {
        id: 3,
        name: 'Von San Antonio',
        url: 'https://github.com/vsanantonio',
      }
    ];

    return contributors.find(contributor => contributor.id === id);
  }
}

class RepositoryProxy {
  constructor() {
    this.repository = new Repository();
    this.cache = {};
  }

  getContributorById(id) {
    if (!this.cache[id]) {
      this.cache[id] = this.repository.getContributorById(id);
    }

    return this.cache[id];
  }

  getCount() {
    return Object.keys(this.cache).length;
  }
}

module.exports = RepositoryProxy;