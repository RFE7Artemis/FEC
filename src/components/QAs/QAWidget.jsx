import React from 'react';
import AddAnswer from './AddAnswer.jsx';
import AddQuestion from './AddQuestion.jsx';
import Helpful from './Helpful.jsx';
import QuestionsAnswers from './QuestionsAnswers.jsx';
import Report from './Report.jsx';
import SearchBar from './SearchBar.jsx';
import MoreAnswers from './MoreAnswers.jsx';
import axios from 'axios';

class QAWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showQuestion: false,
      showAnswer: false,
      questions: { results: [] },
    }

    this.showQuestionModal = this.showQuestionModal.bind(this);
    this.hideQuestionModal = this.hideQuestionModal.bind(this);
    this.showAnswerModal = this.showAnswerModal.bind(this);
    this.hideAnswerModal = this.hideAnswerModal.bind(this);

  }

  getAllQuestions() {
    axios.get("/api/questions")
      .then((res) => {
        let data = res.data
        this.setState({
          questions: data
        })
      })
      .catch((err) => {
        console.log("Axios /questions ERR", err);
      });
  }

  showQuestionModal = () => {
    this.setState({ showQuestion: true });
  };

  hideQuestionModal = () => {
    this.setState({ showQuestion: false });
  };

  showAnswerModal = () => {
    this.setState({ showAnswer: true });
  };

  hideAnswerModal = () => {
    this.setState({ showAnswer: false });
  };


  componentDidMount() {
    this.getAllQuestions()
  }

  render() {
    return (
      <div className='questions'>
        <div className='q-top-row'>
          <SearchBar />
        </div>
        <div className='q-middle'>
          <QuestionsAnswers
            question={this.state.questions} />
          <AddAnswer
            handleAnswerClose={this.hideAnswerModal}
            showAnswer={this.state.showAnswer} />
          <button type="button"
            onClick={this.showAnswerModal}>
            Add Answer
          </button>
        </div>
        <div className='q-middle'>
          <MoreAnswers />
        </div>
        <div className='q-middle'>
          <AddQuestion
            showQuestion={this.state.showQuestion}
            handleQuestionClose={this.hideQuestionModal} />
          <button type="button"
            onClick={this.showQuestionModal}>
            Add Question
          </button>
        </div>
        <div>

        </div>
      </div >
    )
  }

}

export default QAWidget;