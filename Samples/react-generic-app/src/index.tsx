import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Hello } from './components/HelloWorld/HelloWorld';

const webparts: NodeListOf<Element> = document.getElementsByClassName('webpart-script-example');
for (let i: number = 0; i < webparts.length; i++) {
    // Get the data property from the Element
    const description: string = webparts[i].getAttribute('data-description').toString();

    ReactDOM.render(
        <Hello description={description} />,
        webparts[i]
    );
}