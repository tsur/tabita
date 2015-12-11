
import TableChart from '../core/table';

export function Table(containerId, options) {

  const _table = new TableChart(containerId, options);

  this.render = data =>  _table.render(data);

  this.options = _table.options;
};
