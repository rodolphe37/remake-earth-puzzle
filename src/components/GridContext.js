import React, { Component, createContext } from "react";
import sampleItems from './sampleItems';
import sampleItems1 from "./sampleItems1";

// Helper functions

function move(array, oldIndex, newIndex) {
  if (newIndex >= array.length) {
    newIndex = array.length - 1;
  }
  array.splice(newIndex, 0, array.splice(oldIndex, 1)[0]);
  return array;
}

function moveElement(array, index, offset) {
  const newIndex = index + offset;

  return move(array, index, newIndex);
}

// Context

const GridContext = createContext({ items: [], items2: [] });

export class GridProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      items: sampleItems ,
      items2: sampleItems1,
      moveItem: this.moveItem,
      setItems: this.setItems,
      index: 0,
      itemsList: [sampleItems, sampleItems1]
    };

  }

  render() {
    return (
      <GridContext.Provider value={this.state} >
        {this.props.children}
      </GridContext.Provider>
    );
  }

  setItems = items => this.setState({ items });
  setItems = items2 => this.setState({ items2 });

  moveItem = (sourceId, destinationId) => {
    const sourceIndex = this.state.items.findIndex(
      item => item.id === sourceId
    );
    const destinationIndex = this.state.items.findIndex(
      item => item.id === destinationId
    );

    // If source/destination is unknown, do nothing.
    if (sourceId === -1 || destinationId === -1) {
      return;
    }

    const offset = destinationIndex - sourceIndex;

    this.setState(state => ({
      items: moveElement(state.items, sourceIndex, offset)
    }));
  };
}

export default GridContext;
