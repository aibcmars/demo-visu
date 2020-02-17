import { css, CSSResult } from 'lit-element';

export default function(containerId): CSSResult {
  return css`
    #${containerId} {
      touch-action: none;
    }
    #graphContainerSlot::slotted(#graph) {
      position: absolute;
      overflow: hidden;
      font-family: Arial;
      font-size: 8pt;
    }
    #graphContainerSlot::slotted(#graph) {
      border-style: solid;
      border-color: #f2f2f2;
      border-width: 1px;
      background: url('images/grid.gif');
    }
  `;
}
