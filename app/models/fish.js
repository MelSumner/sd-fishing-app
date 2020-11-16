import Model, { attr } from '@ember-data/model';

export default class FishModel extends Model {
    @attr name;
    @attr price;
    @attr location;
    @attr season;
    @attr weather;
};
