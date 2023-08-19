fetch(
    'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple'
).then((res) => {
        return res.json();
}).then(data=>console.log(data.results[0].incorrect_answers))