const express = require('express');
const router = express.Router();
const axios = require('axios');
//Server info variable (API)
const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe`;
//Header (API Auth)
const { headers } = require('./APIHelper.js');
//SUPPORT ROUTES
//test route at /api/test
router.get('/tests', (req, res) => {
  res.send('API Router says Hello World!');
})
//ALEX's ROUTES
// get "allReviews" - pulls all review data for the current item
router.get('/reviews', (req, getRes) => {
  //Call API, Get review data
  let options = {
    method: 'GET',
    url: url + '/reviews',
    headers: headers,
    params: {
      page: 1, //review page to pull from
      count: 50, //number of reviews to pull
      sort: 'newest', //placeholder - replace with currently selected sort method
      product_id: 37314 //placeholder - replace with id of current product
    }
  };
  axios(options)
    .then((res) => {
      getRes.send(res.data)
    })
    .catch((err) => { getRes.send(err) });
})
// get "metaData" - pulls all review meta data for the current item
router.get('/revMeta', (req, getRes) => {
  //Call API, Get review data
  let options = {
    method: 'GET',
    url: url + '/reviews/meta',
    headers: headers,
    params: {
      product_id: 37314 //placeholder - replace with id of current product
    }
  };
  axios(options)
    .then((res) => {
      //console.log(res.data);
      getRes.send(res.data)
    })
    .catch((err) => { getRes.send(err) });
})
// post "review" - posts a new user created review
router.post('/reviews', (req, postRes) => {
  //Call API, Get review data
  let options = {
    method: 'POST',
    url: url + '/reviews',
    headers: headers,
    data: {
      product_id: 37314,
      rating: 3,
      summary: 'ReviewTitle',
      body: 'Review Body For The Review That We Are Testing This Review Text Must Meet A Minumum Number Of Characters To Work But I Dont Know Why I Did A Camel Case Sentence Thats Just Weird',
      recommend: true,
      name: 'ReviewerName',
      email: 'ReviewerEmail@email.com',
      photos: [],
      characteristics: { }
    }
  };
  axios(options)
    .then((res) => {
      //console.log(res.data);
      postRes.send(res.data)
    })
    .catch((err) => { postRes.send(err) });
})
// put "helpful" - posts a user toggle of the "helpful" trait review
router.put('/helpful', (req, putRes) => {
  //Call API, Get review data
  let options = {
    method: 'PUT',
    url: url + '/reviews/1074988/helpful', //replace 1074988 with current review id
    headers: headers,
    params: {
      review_id: 1074988 //placeholder - replace with id of current review
    }
  };
  axios(options)
    .then((res) => {
      //console.log(res.data);
      putRes.send(res.data)
    })
    .catch((err) => { putRes.send(err) });
})
// put "report" - posts a user toggle of a particular report option (bad language, hate speech, etc)
router.put('/report', (req, putRes) => {
  //Call API, Get review data
  let options = {
    method: 'PUT',
    url: url + '/reviews/1074988/report', //replace 1074988 with current review id
    headers: headers,
    params: {
      review_id: 1074988 //placeholder - replace with id of current review
    }
  };
  axios(options)
    .then((res) => {
      //console.log(res.data);
      putRes.send(res.data)
    })
    .catch((err) => { putRes.send(err) });
})

//MEGAN'S ROUTES

router.get('/questions', (req, getRes) => {
  //Call API, Get question data
  let options = {
    method: 'GET',
    url: url + '/qa/questions',
    headers: headers,
    params: {
      product_id: 37312,
      page: 1,
      count: 100
    }
  };
  axios(options)
    .then((res) => {
      getRes.send(res.data)
    })
    .catch((err) => { getRes.send(err) });
})

router.get('/answers', (req, getRes) => {
  //Call API, Get question data
  let options = {
    method: 'GET',
    url: url + `/qa/questions/${options.params.question_id}/answers`,
    headers: headers,
    params: {
      question_id: 2,
      page: 1,
      count: 100
    }
  };
  axios(options)
    .then((res) => {
      getRes.send(res.data)
    })
    .catch((err) => { getRes.send(err) });
})

router.post('/questionPost', (req, postRes) => {
  //Call API, Get review data
  let options = {
    method: 'POST',
    url: url + '/qa/questions',
    headers: headers,
    data: {
      body: 'body of question',
      name: 'Megan',
      email: 'user@gmail.com',
      product_id: 37314
    }
  };
  axios(options)
    .then((res) => {
      postRes.send(res.data)
    })
    .catch((err) => { postRes.send(err) });
})

router.post('/answerPost', (req, postRes) => {

  let options = {
    method: 'POST',
    url: url + '/qa/questions/300/answers',
    headers: headers,
    data: {
      question_id: 300,
      body: 'body of answer',
      name: 'Megan',
      email: 'user@gmail.com',
      photos: []
    }
  };
  axios(options)
    .then((res) => {
      postRes.send(res.data)
    })
    .catch((err) => { postRes.send(err) });
})

router.put('/questionHelpful', (req, putRes) => {
  let options = {
    method: 'PUT',
    url: url + '/qa/questions/300/helpful',
    headers: headers,
    params: {
      question_id: 300
    }
  };
  axios(options)
    .then((res) => {
      putRes.send(res.data)
    })
    .catch((err) => { putRes.send(err) });
})

router.put('/reportQuestion', (req, putRes) => {
  let options = {
    method: 'PUT',
    url: url + '/qa/questions/3000/report',
    headers: headers,
    params: {
      question_id: 3000
    }
  };
  axios(options)
    .then((res) => {
      putRes.send(res.data)
    })
    .catch((err) => { putRes.send(err) });
})

router.put('/answerHelpful', (req, putRes) => {
  let options = {
    method: 'PUT',
    url: url + '/qa/answers/300/helpful',
    headers: headers,
    params: {
      answer_id: 300
    }
  };
  axios(options)
    .then((res) => {
      putRes.send(res.data)
    })
    .catch((err) => { putRes.send(err) });
})

router.put('/reportAnswer', (req, putRes) => {
  let options = {
    method: 'PUT',
    url: url + '/qa/answers/3000/report',
    headers: headers,
    params: {
      answer_id: 3000
    }
  };
  axios(options)
    .then((res) => {
      putRes.send(res.data)
    })
    .catch((err) => { putRes.send(err) });
})

//-----------------------RYDER's ROUTES---------------------

router.get('/products', (req, getRes) => {
  //Call API, Get review data
  let options = {
    url: url + '/products',
    headers: headers,
    params: {
      page: 1, // 	Selects the page of results to return. Default 1.
      count: 5, // Specifies how many results per page to return. Default 5.
    }
  };
  axios(options)
    .then((res) => {
      //console.log(res.data);
      getRes.send(res.data)
    })
    .catch((err) => {
      res.send(err)
    });
})

router.get(`/products/product_id`, (req, getRes) => {
  //Call API, Get review data
  let id = 37313; // grab this from the request || using sample product
  let options = {
    url: url + `/products/${id}`,
    headers: headers,
    params: {
      product_id: id // Required ID of the Product requested | current placeholder
    }
  };
  axios(options)
    .then((res) => {
      //console.log(res.data);
      getRes.send(res.data)
    })
    .catch((err) => {
      res.send(err)
    });
})

router.get(`/products/product_id/styles`, (req, getRes) => {
  //Call API, Get review data
  let id = 37313; // grab this from the request || using sample product
  let options = {
    url: url + `/products/${id}/styles`,
    headers: headers,
    params: {
      product_id: id // Required ID of the Product requested | current placeholder
    }
  };
  axios(options)
    .then((res) => {
      //console.log(res.data);
      getRes.send(res.data)
    })
    .catch((err) => {
      res.send(err)
    });
})

router.get(`/cart`, (req, getRes) => {
  //Call API, Get review data
  let options = {
    url: url + `/cart`,
    headers: headers,
  };
  axios(options)
    .then((res) => {
      //console.log(res.data);
      getRes.send(res.data)
    })
    .catch((err) => {
      res.send(err)
    });
})

router.post(`/cart`, (req, getRes) => {
  //Call API, Get review data
  let sku = 37; // ID for the product being added to the cart | get from product Styles
  let options = {
    method: 'POST',
    url: url + `/cart`,
    headers: headers,
    data: {
      sku_id: sku
    }
  };
  axios(options)
    .then((res) => {
      //console.log(res.data);
      getRes.send(res.data)
    })
    .catch((err) => {
      res.send(err)
    });
})

module.exports = router;