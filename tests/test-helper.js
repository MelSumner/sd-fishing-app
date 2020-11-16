import Application from 'sd-fishing-app/app';
import config from 'sd-fishing-app/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
