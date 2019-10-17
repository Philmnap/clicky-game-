import React from "react";
import ClickImage from "./ClickImage";
import buttons from "./buttons.json";




buttons.forEach(button => {
    button.image = require("../assets/images/" + button.image);
})

function shuffleArray(array) {
    console.log(array);
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}


class Game extends React.Component {

    state = {
        score: 0,
        highScore: 0,
        message: "Click any image to begin.",
        buttons,
        unclickedIds: []
    };


    handleImageClick = (id) => {
        console.log(`clicked id ${id}`);

        if (!this.state.unclickedIds.includes(id)) {


            this.state.unclickedIds.push(id);
            this.setState({
                score: this.state.score + 1,
                message: "Keep going!"
            });
            if (this.state.score >= this.state.highScore) {

                this.setState({ highScore: this.state.score + 1 });
            }
        }
        else {

            this.setState({
                score: 0,
                message: "Whoops! You clicked that one already! Click an image to try again.",
                unclickedIds: []
            });
        }
    };

    scrambleButtons = () => {
        shuffleArray(this.state.buttons);
        return (
            this.state.buttons.map(button => (
                <div className="col text-center">
                    <ClickImage
                        key={button.id}
                        id={button.id}
                        image={button.image}
                        handleImageClick={this.handleImageClick}
                    />
                </div>
            )));
    };


    render() {
        return (
            <div>
                <div className="container-fluid scoreboard">
                    <div className="container">
                        <div className="row">
                            <div className="col-4 current-score"><p>Current Score: {this.state.score}</p></div>
                            <div className="col-4 instructions"><p>{this.state.message}</p></div>
                            <div className="col-4 high-score"><p>High Score: {this.state.highScore}</p></div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {this.scrambleButtons()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Game;