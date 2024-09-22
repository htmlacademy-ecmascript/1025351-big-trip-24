import { render } from '../render';
import ListPointView from '../view/list-point-view';
import PointView from '../view/point-view';
import SortView from '../view/sort-view';
import EditPointView from '../view/edit-point-view';

export default class TripPresenter {
  pointsListComponent = new ListPointView();

  constructor({pointsContainer}) {
    this.pointsContainer = pointsContainer;
  }

  init() {
    render(this.pointsListComponent, this.pointsContainer);
    render(new SortView(), this.pointsListComponent.getElement());
    render(new EditPointView(), this.pointsListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new PointView(),
        this.pointsListComponent.getElement());
    }
  }
}
