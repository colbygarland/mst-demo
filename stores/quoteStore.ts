import { types, flow } from 'mobx-state-tree';

export const QuoteStore = types
  .model('QuoteStore')
  .props({
    fetching: types.optional(types.boolean, false),
    body: types.optional(types.string, ''),
    author: types.optional(types.string, ''),
    season: types.optional(types.string, ''),
    episode: types.optional(types.string, ''),
  })
  .actions((self) => ({
    get: flow(function* () {
      self.fetching = true;
      const response = yield fetch(
        'https://seinfeld-quotes.herokuapp.com/random'
      );
      const json = yield response.json();
      self.body = json.quote;
      self.author = json.author;
      self.episode = json.episode;
      self.season = json.season;
      self.fetching = false;
    }),
  }));
