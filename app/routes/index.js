import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
    @service store;

    async model() {
        let response = await fetch('/api/fish.json');
        let { data } = await response.json();
    
        return data.map(model => {
          let { id, attributes } = model;
          let type;
    
          return { id, type, ...attributes };
        });
      }
}
