import FilterView from './view/filter-view';
import TripPresenter from './presenter/trip-presenter';
import { render } from './render';

const controlsFiltersElement = document.querySelector('.trip-controls__filters');
const tripEventsElement = document.querySelector('.trip-events');
const tripPresenter = new TripPresenter({pointsContainer: tripEventsElement});

render(new FilterView(), controlsFiltersElement);

tripPresenter.init();
