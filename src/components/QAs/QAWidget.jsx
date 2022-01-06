import React from 'react';
import AddAnswer from './AddAnswer.jsx';
import AddQuestion from './AddQuestion.jsx';
import HelpfulQuestion from './HelpfulQuestion.jsx';
import HelpfulAnswer from './HelpfulAnswer.jsx';
import QuestionsAnswers from './QuestionsAnswers.jsx';
import Report from './Report.jsx';
import SearchBar from './SearchBar.jsx';
import MoreQuestions from './MoreQuestions.jsx';
import MoreAnswers from './MoreAnswers.jsx'
import axios from 'axios';

class QAWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showQuestion: false,
      showAnswer: false,
      questions: { results: [] },
      searchTerm: '',
      renderAmount: 2,
      answerRenderAmount: 2
    }

    this.showQuestionModal = this.showQuestionModal.bind(this);
    this.hideQuestionModal = this.hideQuestionModal.bind(this);
    this.showAnswerModal = this.showAnswerModal.bind(this);
    this.hideAnswerModal = this.hideAnswerModal.bind(this);
    this.searchBarUpdate = this.searchBarUpdate.bind(this);

  }

  getAllQuestions() {
    axios.get(`/api/questions/${this.props.id}`)
      .then((res) => {
        let data = res.data
        this.getAllAnswers(data);
      })
      .catch((err) => {
        console.log("Axios /questions ERR", err);
      });
  }

  getAllAnswers(questionData) {
    for (let i = 0; i < questionData.results.length; i++) {
      axios.get(`/api/answers/${questionData.results[i].question_id}`)
        .then((res) => {
          let answerData = res.data.results;
          questionData.results[i].answerData = answerData;
          if (i == questionData.results.length - 1) {
            this.setState({
              questions: questionData
            })
          }
        })
        .catch((err) => {
          console.log("Axios /answers ERR", err);
        });
    }
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

  searchBarUpdate = (event) => {
    event.preventDefault();
    this.setState({ searchTerm: event.target.value })
  };

  onMoreQuestionsClick = (event) => {
    event.preventDefault();
    this.setState({ renderAmount: this.state.renderAmount + 2 })
  }

  onMoreAnswersClick = (event) => {
    event.preventDefault();
    this.setState({ answerRenderAmount: this.state.answerRenderAmount + 2 })
  }

  componentDidMount() {
    this.getAllQuestions();
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.getAllQuestions();
      this.setState({
        renderAmount: 2,
        answerRenderAmount: 2
      })
    }
  }

  render() {
    return (
      <div className='questions'>
        <h2>QUESTIONS AND ANSWERS</h2>
        <div className='q-top-row'>
          <SearchBar
            search={this.state.searchTerm}
            question={this.state.questions}
            handleSearchChange={this.searchBarUpdate} />
        </div>
        <div className='q-middle'>
          <QuestionsAnswers
            question={this.state.questions}
            search={this.state.searchTerm}
            render={this.state.renderAmount}
            answerRender={this.state.answerRenderAmount}
          />
        </div>
        <div>
          <MoreQuestions rendering={this.onMoreQuestionsClick} />
          <AddQuestion
            showQuestion={this.state.showQuestion}
            handleQuestionClose={this.hideQuestionModal} />
          <button className="add-question-button" type="button"
            onClick={this.showQuestionModal}>
            ADD A QUESTION +
          </button>
        </div>
      </div >
    )
  }
}


export default QAWidget;