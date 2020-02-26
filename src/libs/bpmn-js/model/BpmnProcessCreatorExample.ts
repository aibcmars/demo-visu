import {
  BpmnEdge,
  BpmnUserTask,
  BpmnLane,
  BpmnProcess,
  BpmnStartEvent,
  BpmnTerminateEndEvent
} from './BpmnModel';

export default class BpmnProcessCreatorExampleCodeOnly {
  public createProcess(): BpmnProcess {
    const process = new BpmnProcess('Process_1', 'Customer Delivery', 0, 0, 720, 150);

    const lane = new BpmnLane('Lane_1', 'Lane A', 10, 700, 120);
    process.lane = lane;

    lane.add(new BpmnStartEvent('Start_1', 'Start', 50, 60));
    lane.add(new BpmnUserTask('HumanTask_1', 'Human', 220, 40, 50, 100));
    lane.add(new BpmnTerminateEndEvent('TerminateEnd_1', 'End', 50, 600));

    const edgeStartHuman = new BpmnEdge('Edge_1', 'Edge 1', 'Start_1', 'HumanTask_1');
    const edgeHumanEnd = new BpmnEdge('Edge_2', 'Edge 2', 'HumanTask_1', 'TerminateEnd_1');
    lane.addEdge(edgeStartHuman);
    lane.addEdge(edgeHumanEnd);
    // TODO way points

    return process;
  }
}
