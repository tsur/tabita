
import TableChart from '../core/table';

export function Table(containerId, options) {

  const _table = new TableChart(containerId, options);

  this.render = (data, boot) =>  _table.render(data, boot);

  this.options = _table.options;
};
