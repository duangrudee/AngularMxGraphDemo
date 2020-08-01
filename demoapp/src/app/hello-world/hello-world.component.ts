import { Component, OnInit } from '@angular/core';
// import { mxgraph } from 'mxgraph';

declare var require: any;

const mx = require('mxgraph')({
  mxImageBasePath: 'assets/mxgraph/images',
  mxBasePath: 'assets/mxgraph'
});

// Note - All mxGraph methods accessible using mx.xyz
// Eg. mx.mxGraph, mx.mxClient, mx.mxKeyHandler, mx.mxUtils and so on.

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {

  constructor() { }

 
  ngOnInit() {
    // Checks if the browser is supported
    if (!mx.mxClient.isBrowserSupported()) {
      // Displays an error message if the browser is not supported.
      mx.mxUtils.error('Browser is not supported!', 200, false);
    }
    else {
      // Create graph
      const container = document.getElementById('graphContainer');

      // Disables the built-in context menu
      mx.mxEvent.disableContextMenu(container);

      // Creates the graph inside the given container
      const graph = new mx.mxGraph(container);

      // Enables rubberband selection
      const rubberBand = new mx.mxRubberband(graph);

      // Gets the default parent for inserting new cells. This
      // is normally the first child of the root (ie. layer 0).
      const parent = graph.getDefaultParent();

      // Adds cells to the model in a single step
      graph.getModel().beginUpdate();
      try {
        const v1 = graph.insertVertex(parent, null, 'Hello,', 20, 20, 80, 30);
        const v2 = graph.insertVertex(parent, null, 'World!', 200, 150, 80, 30);
        const e1 = graph.insertEdge(parent, null, '', v1, v2);
      }
      finally {
        // Updates the display
        graph.getModel().endUpdate();
      }
    }

  }

}
