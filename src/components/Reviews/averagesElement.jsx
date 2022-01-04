//this file houses the individual elements that form the averages table
//Title, Score, Stars, Recommendations, ScoreTable, TraitsTable
//StarsDisplay and Traits are built elsewhere
//AssembledStarsDisplay is exported for use by Ryder

import React from 'react';
import StarDisplay from './starDisplay.jsx';
import Trait from './trait.jsx';
import ScoreTable from './scoreTable.jsx';
class averagesElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avgRate: 3,
      recPercent: 50
    };
    this.makeAverage = this.makeAverage.bind(this);
  }
  makeAverage() {
    let rates = this.props.meta.ratings;
    if(rates[1]) {
      rates[1] = Number(rates[1]);
      rates[2] = Number(rates[2]);
      rates[3] = Number(rates[3]);
      rates[4] = Number(rates[4]);
      rates[5] = Number(rates[5]);
      let totalRates = rates[1] + rates[2] + rates[3] + rates[4] + rates[5];
      let totalScore = rates[1] + (2 * rates[2]) + (3 * rates[3]) + (4 * rates[4]) + (5 * rates[5]);
      let avg = (totalScore / totalRates);
      avg = Math.round(avg*2)/2;
      this.setState({avgRate: avg});
    }
    let recos = this.props.meta.recommended;
    if(recos.true) {
      recos.true = Number(recos.true);
      recos.false = Number(recos.false);
      let totalRecos = recos.true + recos.false;
      let avgReco = recos.true / totalRecos;
      avgReco = Math.round(avgReco * 100);
      this.setState({recPercent: avgReco})
    }
  }
  componentDidMount() {

  }
  componentDidUpdate(prevProps) {
    if (this.props.meta.ratings[1] !== prevProps.meta.ratings[1]) {
      this.makeAverage();
    }
  }
  render() {
    //console.log(this.props.meta)
    return (
    <div className="revAverages"> Averages
      <div className="starScore">Average Score: {this.state.avgRate}</div>
      <StarDisplay className="stars" rating={this.state.avgRate} />
      <div className="revRecos">{this.state.recPercent}% of reviews recommend this product</div>
      <ScoreTable className="scoreTable" scores={this.props.meta.ratings}/>
      {/* TODO: Traits mapped off meta data */}
      <Trait />
      <div>~~~END OF AVERAGES ELEMENT~~~</div>
    </div>
    )
  }

}
export default averagesElement;
//TODO: EXPORT STAR DISPLAY FOR RYDER