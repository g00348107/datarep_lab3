import React from "react";

export class Content extends React.Component {//The export keyword allows this class to be exported to the App class

    render() {
        return (
            <div>
                <h1>Hello World!</h1> {/*Displays "Hello World" in plain text on the page.*/}
                <h2>It is {new Date().toLocaleTimeString()}.</h2> {/*Displays the current Time on the page.*/}
            </div>

        );
    }
}